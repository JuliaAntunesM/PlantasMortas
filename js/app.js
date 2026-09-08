/* ============================================================
   STORY QUIZ — lógica de navegação e renderização.
   Conteúdo em js/data.js. Eventos em js/analytics.js.
   ============================================================ */

(function () {
  "use strict";

  var stage = document.getElementById("screen-stage");
  var progressWrap = document.getElementById("progress-wrap");
  var progressLabel = document.getElementById("progress-label");
  var progressFill = document.getElementById("progress-fill");
  var progressAria = document.getElementById("progress-bar-aria");

  var screens = QUIZ_CONTENT.screens;
  var current = 0;

  /* Respostas da sessão (também persistidas em sessionStorage) */
  var answers = {};
  try {
    answers = JSON.parse(sessionStorage.getItem("quizAnswers") || "{}");
  } catch (e) { answers = {}; }

  var totalQuestions = screens.filter(function (s) { return s.type === "question"; }).length;

  function saveAnswers() {
    try { sessionStorage.setItem("quizAnswers", JSON.stringify(answers)); } catch (e) {}
  }

  /* ---------- Helpers de renderização ---------- */

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function renderImage(imageKey) {
    var src = imageKey && QUIZ_CONTENT.images[imageKey];
    var slot = el("div", "image-slot");
    if (src) {
      var img = document.createElement("img");
      img.src = src;
      img.alt = "";
      img.loading = "lazy";
      slot.appendChild(img);
    } else {
      slot.textContent = "[espaço para imagem: " + (imageKey || "foto") + "]";
    }
    return slot;
  }

  function renderParagraphs(screen, container) {
    (screen.paragraphs || []).forEach(function (p, i) {
      container.appendChild(el("p", i === 0 ? "lead" : null, p));
    });
  }

  function renderHighlight(screen, container) {
    if (screen.highlight) container.appendChild(el("div", "highlight", screen.highlight));
    if (screen.afterHighlight) container.appendChild(el("p", null, screen.afterHighlight));
  }

  function renderPrimaryButton(label, onClick) {
    var btn = el("button", "btn-primary", label);
    btn.type = "button";
    btn.addEventListener("click", onClick);
    return btn;
  }

  /* ---------- Tipos de tela ---------- */

  function renderSteps(steps, container) {
    var wrap = el("div", "steps");
    steps.forEach(function (s, i) {
      if (i > 0) wrap.appendChild(el("div", "steps-arrow", "↓"));
      wrap.appendChild(el("div", "steps-item", s));
    });
    container.appendChild(wrap);
  }

  function renderStory(screen, container) {
    if (screen.image) container.appendChild(renderImage(screen.image));
    if (screen.title) container.appendChild(el("h2", "story-title", screen.title));
    if (screen.steps) renderSteps(screen.steps, container);
    renderParagraphs(screen, container);
    renderHighlight(screen, container);
    container.appendChild(renderPrimaryButton(screen.button || "Continuar", function () {
      if (screen.event) track(screen.event); // ex.: quiz_started
      next();
    }));
    if (screen.note) container.appendChild(el("p", "btn-note", screen.note));
  }

  function renderQuestion(screen, container) {
    if (screen.image) container.appendChild(renderImage(screen.image));
    renderParagraphs(screen, container);
    renderHighlight(screen, container);
    container.appendChild(el("h2", "question-title", screen.question));

    var list = el("div", "options");
    screen.options.forEach(function (opt) {
      var btn = el("button", "option", opt.text);
      btn.type = "button";
      btn.addEventListener("click", function () {
        if (btn.classList.contains("selected")) return;
        btn.classList.add("selected");
        answers[screen.id] = opt.id;
        saveAnswers();
        if (screen.event) track(screen.event, { question: screen.id, answer: opt.id });
        setTimeout(next, 260); // microfeedback antes de avançar
      });
      list.appendChild(btn);
    });
    container.appendChild(list);
  }

  function renderTestimonialCard(t) {
    var card = el("div", "testimonial-card");

    // cabeçalho: foto + nome/idade/contexto
    var head = el("div", "t-head");
    var photo = el("div", "photo-slot");
    if (t.photo) {
      var img = document.createElement("img");
      img.src = t.photo;
      img.alt = t.name;
      photo.appendChild(img);
    } else {
      photo.textContent = "[foto]";
    }
    head.appendChild(photo);
    var who = el("div", "t-who");
    who.appendChild(el("div", "t-name", t.name + (t.age ? ", " + t.age + " anos" : "")));
    if (t.context) who.appendChild(el("div", "t-context", t.context));
    head.appendChild(who);
    card.appendChild(head);

    // título emocional + depoimento
    card.appendChild(el("blockquote", "t-title", "“" + t.title + "”"));
    (t.text || "").split(/\n\n+/).forEach(function (para) {
      card.appendChild(el("p", "t-text", para));
    });
    if (t.closing) card.appendChild(el("p", "t-closing", t.closing));

    if (t.resultPhoto) {
      var result = el("div", "t-result");
      var rimg = document.createElement("img");
      rimg.src = t.resultPhoto;
      rimg.alt = "Resultado de " + t.name;
      rimg.loading = "lazy";
      result.appendChild(rimg);
      card.appendChild(result);
    }
    return card;
  }

  function renderProof(screen, container) {
    var proof = QUIZ_CONTENT.proof;
    container.appendChild(el("h2", "proof-title", proof.title));
    container.appendChild(el("p", "proof-subtitle", proof.subtitle));

    proof.testimonials.forEach(function (t) {
      container.appendChild(renderTestimonialCard(t));
    });

    if (proof.footer) container.appendChild(el("p", "proof-footer", proof.footer));
    if (proof.disclaimer) container.appendChild(el("p", "proof-disclaimer", proof.disclaimer));
    container.appendChild(renderPrimaryButton(screen.button || "Continuar", next));
  }

  function personalNote() {
    var map = QUIZ_CONTENT.personalization || {};
    var notes = [];
    Object.keys(map).forEach(function (key) {
      var chosen = answers[key];
      if (chosen && map[key][chosen]) notes.push(map[key][chosen]);
    });
    return notes[0] || null; // personalização sutil: no máximo uma frase
  }

  function renderOffer(screen, container) {
    var offer = QUIZ_CONTENT.offer;
    if (screen.image) container.appendChild(renderImage(screen.image));

    container.appendChild(el("h2", "offer-head", offer.headline));
    container.appendChild(el("p", "offer-sub", offer.subheadline));

    var note = personalNote();
    if (note) container.appendChild(el("div", "offer-personal", note));

    // mecanismo: Observar → Entender → Agir
    if (offer.mechanismSteps) {
      var mech = el("div", "mechanism");
      offer.mechanismSteps.forEach(function (s, i) {
        if (i > 0) mech.appendChild(el("div", "steps-arrow", "↓"));
        var step = el("div", "mechanism-step");
        step.appendChild(el("div", "mechanism-step-title", s.title));
        step.appendChild(el("div", "mechanism-step-text", s.text));
        mech.appendChild(step);
      });
      container.appendChild(mech);
    }

    container.appendChild(el("div", "offer-product", offer.productName));
    container.appendChild(el("p", null, offer.description));

    container.appendChild(el("div", "offer-section-title", offer.learnTitle));
    if (offer.modulesIntro) container.appendChild(el("p", "offer-modules-intro", offer.modulesIntro));
    offer.modules.forEach(function (m) {
      var card = el("div", "module-card");
      card.appendChild(el("div", "m-title", m.title));
      card.appendChild(el("div", "m-text", m.text));
      container.appendChild(card);
    });

    // provas reais: reforçam que outras pessoas conseguiram
    var proof = QUIZ_CONTENT.proof;
    if (proof && proof.testimonials && proof.testimonials.length) {
      container.appendChild(el("div", "offer-section-title", "Quem aprendeu a observar os sinais"));
      proof.testimonials.forEach(function (t) {
        container.appendChild(renderTestimonialCard(t));
      });
      if (proof.footer) container.appendChild(el("p", "proof-footer", proof.footer));
    }

    if (offer.accessLine) container.appendChild(el("div", "offer-access", offer.accessLine));

    [["Bônus", offer.bonus],
     ["Condição especial", offer.specialCondition],
     ["Garantia", offer.guarantee]
    ].forEach(function (row) {
      var box = el("div", "offer-box");
      var strong = document.createElement("strong");
      strong.textContent = row[0] + ": ";
      box.appendChild(strong);
      box.appendChild(document.createTextNode(row[1]));
      container.appendChild(box);
    });

    // investimento: preço original riscado + preço com desconto
    var priceBox = el("div", "offer-box offer-price");
    var priceLabel = document.createElement("strong");
    priceLabel.textContent = "Investimento: ";
    priceBox.appendChild(priceLabel);
    if (offer.originalPrice) {
      priceBox.appendChild(el("span", "price-old", offer.originalPrice));
      priceBox.appendChild(document.createTextNode(" por apenas "));
    }
    priceBox.appendChild(el("span", "price-new", offer.price));
    container.appendChild(priceBox);

    container.appendChild(renderPrimaryButton(offer.cta, function () {
      track("cta_clicked");
      track("purchase_started");
      window.location.href = "https://lastlink.com/p/C4B5CCC45/checkout-payment/";
    }));
  }

  /* ---------- Progresso ---------- */

  function updateProgress() {
    var answered = 0;
    for (var i = 0; i <= current && i < screens.length; i++) {
      if (screens[i].type === "question") answered++;
    }
    var inQuiz = current > 0 && current < screens.length - 1;
    progressWrap.hidden = !inQuiz;
    if (!inQuiz) return;
    var pct = Math.min(100, Math.round((answered / totalQuestions) * 100));
    progressLabel.textContent = answered + " de " + totalQuestions;
    progressFill.style.width = pct + "%";
    progressAria.setAttribute("aria-valuenow", String(pct));
  }

  /* ---------- Navegação ---------- */

  function render() {
    var screen = screens[current];
    stage.innerHTML = "";
    var container = el("section", "screen");
    container.dataset.screenId = screen.id;

    if (screen.type === "story" || screen.type === "result") renderStory(screen, container);
    else if (screen.type === "question") renderQuestion(screen, container);
    else if (screen.type === "proof") renderProof(screen, container);
    else if (screen.type === "offer") renderOffer(screen, container);

    stage.appendChild(container);
    updateProgress();
    window.scrollTo(0, 0);

    // eventos de visualização de tela (ex.: offer_viewed)
    if (screen.event && screen.type !== "question" && screen.type !== "story") {
      track(screen.event);
    }
  }

  function next() {
    if (current >= screens.length - 1) return;
    var old = stage.querySelector(".screen");
    if (old) {
      old.classList.add("leaving");
      setTimeout(function () { current++; render(); }, 240);
    } else {
      current++;
      render();
    }
  }

  render();
})();
