/* ============================================================
   CONTEÚDO DO STORY QUIZ — separado da apresentação.
   Edite textos, perguntas, mecanismo, provas e oferta aqui
   sem tocar na lógica do app.
   ============================================================ */

const QUIZ_CONTENT = {

  /* ---------- MECANISMO (hipótese provisória) ----------
     Substitua pelo mecanismo real do produto quando definido. */
  mechanism: {
    name: "Observar antes de agir",
    shift: 'De "quando eu devo regar?" para "o que minha planta precisa agora?"'
  },

  /* ---------- OFERTA ---------- */
  offer: {
    productName: "Método Casa Verde",
    headline: "Conheça o Método Casa Verde",
    subheadline: "Aprenda a observar, entender e cuidar melhor das suas plantas sem depender de regras complicadas.",
    description: "Aprenda a entender o que suas plantas precisam e cuide delas com mais segurança, mesmo começando do zero.",
    mechanismSteps: [
      { title: "Observar", text: "Entender os sinais da planta." },
      { title: "Entender", text: "Descobrir o que pode estar acontecendo." },
      { title: "Agir", text: "Saber qual cuidado faz sentido." }
    ],
    learnTitle: "O que você vai aprender",
    modulesIntro: "Dentro do Método Casa Verde, você vai aprender passo a passo como aplicar isso no dia a dia.",
    modules: [
      { title: "Módulo 1 — Entenda sua planta", text: "Aprenda a identificar o que cada planta precisa de luz, água e ambiente." },
      { title: "Módulo 2 — Acerte na rega", text: "Entenda quando regar, quando esperar e como evitar os excessos mais comuns." },
      { title: "Módulo 3 — Leia os sinais da planta", text: "Descubra o que folhas, terra e aparência podem indicar sobre os cuidados necessários." },
      { title: "Módulo 4 — Monte sua rotina de cuidados", text: "Tenha um jeito simples de cuidar das suas plantas sem depender de tentativa e erro." }
    ],
    bonus: "Guia rápido de cuidados para consultar sempre que surgir uma dúvida.",
    accessLine: "Seu acesso ao Método Casa Verde está liberado.",
    originalPrice: "R$ 99,96",
    price: "R$ 24,99",
    specialCondition: "Acesso completo com pagamento único.",
    guarantee: "7 dias para conhecer o método com tranquilidade.",
    cta: "Quero começar a cuidar melhor das minhas plantas",
    ctaAlternatives: [
      "Quero minhas plantas vivas e bonitas",
      "Quero aprender esse método",
      "Quero começar agora"
    ]
  },

  /* ---------- PROVAS ----------
     Depoimentos reais das alunas. Ao editar, preservar a
     experiência real — corrigir gramática sem inventar detalhes. */
  proof: {
    title: "Você não precisa ser a pessoa que nasceu sabendo cuidar de plantas.",
    subtitle: "Às vezes, tudo começa quando você aprende a observar o que a planta está tentando mostrar.",
    footer: "Cada planta continua tendo suas próprias necessidades. A diferença é que você passa a ter critérios melhores para entender o que está acontecendo.",
    disclaimer: null,
    testimonials: [
      {
        name: "Marina",
        age: 34,
        photo: "Alunas/1.webp",
        resultPhoto: "Resultado/1.webp",
        title: "Finalmente consegui cuidar da planta que ganhei de quem eu amo.",
        context: "Ganhou uma planta do parceiro em uma data especial.",
        text: "Eu sempre perdia minhas plantas porque nunca sabia se estava regando demais ou de menos. O pior era quando era uma planta que eu tinha ganhado de alguém especial. Depois que comecei a entender melhor os sinais da planta e observar antes de cuidar, fiquei muito mais segura. Hoje consigo aproveitar muito mais essas plantas dentro da minha casa.",
        closing: null,
        before: "Regava sem saber exatamente quando e quanto.",
        after: "Passou a observar os sinais da planta antes de agir."
      },
      {
        name: "Camila",
        age: 29,
        photo: "Alunas/2.webp",
        resultPhoto: "Resultado/2.webp",
        title: "Minha casa ficou muito mais aconchegante.",
        context: "Queria deixar o apartamento mais acolhedor.",
        text: "Eu comprava plantas lindas para deixar meu apartamento mais bonito, mas depois de algumas semanas elas começavam a ficar diferentes e eu não sabia o que fazer. Eu achava que simplesmente não tinha jeito com plantas. Aprender a observar o ambiente e entender melhor o que cada planta precisava mudou isso. Hoje tenho muito mais confiança para cuidar delas.",
        closing: null,
        before: "Comprava plantas bonitas, mas não conseguia mantê-las bem.",
        after: "Aprendeu a observar ambiente e sinais da planta."
      },
      {
        name: "Renata",
        age: 32,
        photo: "Alunas/3.webp",
        resultPhoto: "Resultado/3.webp",
        title: "Descobri que eu não precisava ter 'dedo verde'.",
        context: "Já havia perdido várias plantas e flores.",
        text: "Já tinha perdido tantas plantas que eu realmente achava que não levava jeito para cuidar delas. Quando uma folha ficava amarela ou a planta começava a murchar, eu ficava sem saber o que fazer. O que mudou foi aprender a observar os sinais antes de agir. Hoje ainda estou aprendendo, mas não fico mais completamente perdida.",
        closing: null,
        before: "Acreditava que não tinha 'dedo verde'.",
        after: "Entendeu que pode aprender a observar e interpretar sinais."
      }
    ]
  },

  /* ---------- IMAGENS (placeholders — substituir por imagens reais) ---------- */
  /* Imagens na ordem numérica da pasta, aplicadas na ordem das telas */
  images: {
    hero: "Imagens/primeira.webp", // tela 1 — destino
    connection: "Imagens/2.webp",  // tela 2 — conexão
    pain: "Imagens/3.webp",        // tela 5 — dor emocional
    memory: "Imagens/4.webp",      // tela 6 — aprofundamento
    discovery: "Imagens/5.webp",   // tela 8 — descoberta
    evolution: "Imagens/6.webp",   // tela 11 — evolução
    emotional: "Imagens/7.webp",   // tela 17 — fechamento emocional
    newBelief: "Imagens/9.webp",   // tela 9 — nova crença
    offer: "Imagens/8.webp"        // tela 19 — oferta (provisória; trocar pela imagem do produto)
  },

  /* ---------- PERSONALIZAÇÃO DA TELA FINAL ----------
     Mapeia respostas para frases sutis na tela de oferta. */
  personalization: {
    dor: {
      "fiz-algo-errado": "Cuidar de algo que você gosta não deveria ser uma fonte de culpa — e não precisa ser.",
      "planta-especial": "Você não quer apenas cuidar melhor das plantas. Você quer conseguir conservar por mais tempo aquilo que elas representam.",
      "nao-sabe-fazer": "Saber o que fazer em cada situação muda completamente a experiência de cuidar.",
      "medo-perder-outras": "Entender os sinais é o que tira o medo de que aconteça de novo."
    },
    desejo: {
      "plantas-bonitas": "Plantas bonitas e saudáveis podem fazer parte da sua casa — de forma simples.",
      "parar-de-perder": "Parar de perder plantas começa quando você entende o que elas estão mostrando.",
      "mais-seguranca": "Segurança para cuidar vem de saber interpretar, não de decorar regras.",
      "saber-o-que-fazer": "Saber o que fazer em cada situação é exatamente o que o método ensina."
    }
  },

  /* ---------- TELAS (fluxo narrativo configurável) ----------
     Tipos: "story" | "question" | "result" | "offer"
     Estrutura: 7 etapas principais da história da Ana. */
  screens: [

    /* ETAPA 1 — DESTINO + CURIOSIDADE */
    {
      id: "destino",
      type: "story",
      image: "hero",
      title: "E se você finalmente soubesse exatamente o que suas plantas precisam?",
      paragraphs: [
        "Ana também achava que não levava jeito para plantas.",
        "Até descobrir que o problema não era falta de cuidado."
      ],
      button: "Quero descobrir",
      note: "É rapidinho. Responda algumas perguntas.",
      event: "quiz_started"
    },

    /* ETAPA 2 — CONEXÃO + AUTORRECONHECIMENTO */
    {
      id: "conexao",
      type: "question",
      image: "connection",
      paragraphs: [
        "Ana amava ter plantas em casa.",
        "Mas quase sempre acontecia a mesma coisa…"
      ],
      highlight: "Depois de algumas semanas, alguma planta começava a ficar feia, murchar ou amarelar.",
      question: "Isso já aconteceu com você?",
      options: [
        { id: "varias-vezes", text: "Sim, várias vezes." },
        { id: "as-vezes", text: "Às vezes." },
        { id: "poucas-vezes", text: "Poucas vezes." },
        { id: "quase-nunca", text: "Quase nunca." }
      ],
      event: "question_1_answered"
    },

    /* ETAPA 3 — QUEBRA DA CRENÇA */
    {
      id: "crenca",
      type: "question",
      paragraphs: [
        "Durante muito tempo, Ana achou que simplesmente não tinha jeito para plantas."
      ],
      question: "Você já pensou algo parecido?",
      options: [
        { id: "nao-levo-jeito", text: "Eu não levo jeito." },
        { id: "nunca-sei", text: "Eu nunca sei o que fazer." },
        { id: "medo-errar", text: "Tenho medo de cuidar errado." },
        { id: "as-vezes-penso", text: "Às vezes penso isso." }
      ],
      event: "question_2_answered"
    },
    {
      id: "crenca-continuacao",
      type: "story",
      paragraphs: [
        "Foi exatamente assim que Ana pensava.",
        "Até descobrir que o problema podia ser outro."
      ],
      button: "Continuar"
    },

    /* ETAPA 4 — DOR EMOCIONAL + DESEJO */
    {
      id: "dor",
      type: "question",
      image: "pain",
      paragraphs: [
        "Um dia, Ana percebeu que estava perdendo uma planta que havia ganhado de alguém muito especial."
      ],
      question: "O que mais incomoda você quando uma planta começa a morrer?",
      options: [
        { id: "fiz-algo-errado", text: "Sentir que fiz algo errado." },
        { id: "planta-especial", text: "Perder uma planta especial." },
        { id: "nao-sabe-fazer", text: "Não saber o que fazer." },
        { id: "medo-perder-outras", text: "Ter medo de perder outras também." }
      ],
      event: "question_3_answered"
    },
    {
      id: "dor-continuacao",
      type: "story",
      image: "memory",
      paragraphs: [
        "Foi aí que Ana decidiu parar de tentar adivinhar."
      ],
      button: "Continuar"
    },

    /* ETAPA 5 — DESCOBERTA */
    {
      id: "descoberta",
      type: "question",
      image: "discovery",
      paragraphs: [
        "Ana descobriu algo simples: as plantas dão sinais.",
        "Folhas, solo, aparência e ambiente podem mostrar quando alguma coisa não está certa."
      ],
      question: "Você costuma observar esses sinais?",
      options: [
        { id: "quase-nunca", text: "Quase nunca." },
        { id: "quando-da-errado", text: "Só quando algo dá errado." },
        { id: "as-vezes", text: "Às vezes." },
        { id: "sem-interpretar", text: "Sim, mas não sei interpretar." }
      ],
      event: "question_4_answered"
    },
    {
      id: "descoberta-continuacao",
      type: "story",
      paragraphs: [
        "Esse era exatamente o problema de Ana.",
        "Talvez você não tenha falta de jeito para plantas. Talvez apenas esteja tentando cuidar delas sem saber interpretar os sinais."
      ],
      button: "Faz sentido para mim"
    },

    /* ETAPA 6 — MECANISMO + EVOLUÇÃO */
    {
      id: "mecanismo",
      type: "story",
      image: "evolution",
      steps: ["Observar", "Entender", "Agir"],
      paragraphs: [
        "Em vez de seguir regras genéricas, Ana começou a observar, entender e só então agir.",
        "No começo ela ainda errava. Mas começou a errar cada vez menos."
      ],
      highlight: "Ela não precisava ter “dedo verde”. Precisava aprender a entender os sinais.",
      button: "Continuar"
    },
    {
      id: "desejo",
      type: "question",
      question: "Qual dessas mudanças faria mais diferença para você?",
      options: [
        { id: "plantas-bonitas", text: "Ter mais plantas bonitas." },
        { id: "parar-de-perder", text: "Parar de perder plantas." },
        { id: "mais-seguranca", text: "Ter mais segurança para cuidar." },
        { id: "saber-o-que-fazer", text: "Finalmente saber o que fazer." }
      ],
      event: "quiz_completed"
    },

    /* ETAPA 7 — RESULTADO + TRANSFERÊNCIA */
    {
      id: "resultado",
      type: "result",
      image: "emotional",
      title: "Pelas suas respostas, seu maior desafio não parece ser falta de cuidado.",
      paragraphs: [
        "O que mais pode fazer diferença para você é aprender a identificar os sinais das suas plantas e saber o que fazer em cada situação.",
        "Foi exatamente isso que Ana aprendeu.",
        "E é isso que você vai aprender no Método Casa Verde."
      ],
      button: "Quero conhecer o método"
    },

    /* OFERTA */
    {
      id: "oferta",
      type: "offer",
      image: "offer",
      event: "offer_viewed"
    }
  ]
};
