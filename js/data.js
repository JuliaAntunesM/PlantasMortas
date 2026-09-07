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
    headline: "Aprenda a entender o que suas plantas precisam e cuide delas com muito mais segurança.",
    subheadline: "Um método simples e prático para transformar o cuidado com plantas em algo que você entende, em vez de apenas tentar adivinhar.",
    description: "Aprenda a entender o que suas plantas precisam e cuide delas com mais segurança, mesmo começando do zero.",
    learnTitle: "O que você vai aprender",
    modules: [
      { title: "Módulo 1 — Entenda sua planta", text: "Aprenda a identificar o que cada planta precisa de luz, água e ambiente." },
      { title: "Módulo 2 — Acerte na rega", text: "Entenda quando regar, quando esperar e como evitar os excessos mais comuns." },
      { title: "Módulo 3 — Leia os sinais da planta", text: "Descubra o que folhas, terra e aparência podem indicar sobre os cuidados necessários." },
      { title: "Módulo 4 — Monte sua rotina de cuidados", text: "Tenha um jeito simples de cuidar das suas plantas sem depender de tentativa e erro." }
    ],
    bonus: "Guia rápido de cuidados para consultar sempre que surgir uma dúvida.",
    originalPrice: "R$ 188,00",
    price: "R$ 47,00",
    specialCondition: "Acesso completo com pagamento único.",
    guarantee: "7 dias para conhecer o método com tranquilidade.",
    cta: "Quero começar a cuidar melhor das minhas plantas",
    ctaAlternatives: [
      "Quero minhas plantas vivas e bonitas",
      "Quero aprender esse método",
      "Quero começar agora"
    ]
  },

  /* ---------- PORTAS (mini-jogo de desconto) ----------
     Qualquer porta escolhida revela o desconto principal;
     as demais mostram descontos menores. */
  doors: {
    title: "Antes de continuar, uma surpresa.",
    subtitle: "Escolha uma das três portas. Atrás de uma delas pode ter uma condição especial para você.",
    winDiscount: 75,
    loseDiscounts: [10, 15, 20, 25, 30],
    winText: "Você ganhou 75% de desconto!",
    winSubtext: "O Método Casa Verde sai de R$ 188,00 por apenas R$ 47,00.",
    button: "Resgatar meu desconto"
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
    emotional_pain: {
      "presente-significado": "Você não quer apenas cuidar melhor das plantas. Você quer conseguir conservar por mais tempo aquilo que elas representam.",
      "nao-consegui-cuidar": "Cuidar de algo que você gosta não deveria ser uma fonte de frustração — e não precisa ser.",
      "casa-frustracao": "Sua casa merece ser um lugar que te acolhe — e plantas vivas fazem parte disso.",
      "nao-entendi-erro": "Entender o que aconteceu é o primeiro passo para que não aconteça de novo."
    },
    desired_transformation: {
      "conservar-presentes": "Você não quer apenas cuidar melhor das plantas. Você quer conseguir conservar por mais tempo aquilo que elas representam.",
      "casa-viva": "Para você, plantas também fazem parte da sensação de ter uma casa viva e acolhedora.",
      "confianca-comprar": "Imagine poder escolher uma planta nova sabendo que ela vai ficar bem com você.",
      "parar-achar-sem-jeito": "Talvez você nunca tenha sido ruim com plantas. Talvez só tenha faltado aprender a entendê-las."
    }
  },

  /* ---------- TELAS (fluxo narrativo configurável) ----------
     Tipos: "story" | "question" | "proof" | "offer" | "final" */
  screens: [

    /* TELA 1 — ABERTURA / DESTINO */
    {
      id: "destino",
      type: "story",
      image: "hero",
      paragraphs: [
        "Imagine olhar para a sua casa e ver suas plantas crescendo bonitas, saudáveis e fazendo parte da decoração...",
        "E, melhor ainda: conseguir conservar por muito mais tempo aquela planta ou flor que alguém especial escolheu para você."
      ],
      button: "Quero descobrir como",
      note: "É rapidinho. Responda algumas perguntas.",
      event: "quiz_started"
    },

    /* TELA 2 — CONEXÃO */
    {
      id: "conexao",
      type: "story",
      image: "connection",
      paragraphs: [
        "Eu sempre gostei da ideia de ter plantas em casa.",
        "Às vezes eu comprava uma no supermercado porque achei linda.",
        "Às vezes ganhava flores ou uma planta de alguém querido.",
        "E eu realmente queria que elas ficassem comigo por muito tempo.",
        "Mas existia um pequeno problema..."
      ],
      highlight: "Eu nunca sabia exatamente o que fazer para elas continuarem vivas.",
      button: "Isso acontece comigo"
    },

    /* TELA 3 — STORY + QUIZ 1 */
    {
      id: "situation",
      type: "question",
      paragraphs: [
        "Era sempre mais ou menos assim:",
        "Eu regava. Depois ficava na dúvida se tinha regado demais.",
        "Quando percebia que a terra estava seca, colocava mais água.",
        "Às vezes eu esquecia. Às vezes tentava compensar.",
        "E, quando a planta começava a ficar diferente... eu não sabia se precisava de água, mais luz, menos água ou simplesmente de outro lugar."
      ],
      question: "Qual dessas situações mais parece com você?",
      options: [
        { id: "esqueco-regar", text: "Eu esqueço de regar." },
        { id: "rego-demais", text: "Tenho medo de deixar sem água e acabo regando demais." },
        { id: "nao-sei-onde", text: "Nunca sei exatamente onde colocar cada planta." },
        { id: "continuam-morrendo", text: "Já tentei vários cuidados, mas minhas plantas continuam morrendo." }
      ],
      event: "question_1_answered"
    },

    /* TELA 4 — IDENTIFICAÇÃO */
    {
      id: "self_identification",
      type: "question",
      paragraphs: [
        "Se você escolheu uma dessas opções, provavelmente já passou por aquela sensação de olhar para uma planta e pensar:"
      ],
      highlight: "“O que foi que eu fiz de errado?”",
      afterHighlight: "E talvez você tenha concluído que simplesmente não leva jeito para cuidar de plantas.",
      question: "Você já pensou isso?",
      options: [
        { id: "sim-varias", text: "Sim, várias vezes." },
        { id: "com-certeza", text: "Com certeza." },
        { id: "me-sinto-perdida", text: "Nunca pensei exatamente assim, mas me sinto perdida." },
        { id: "descobrindo-erro", text: "Ainda estou tentando descobrir o que estou fazendo errado." }
      ],
      event: "question_2_answered"
    },

    /* TELA 5 — CONEXÃO EMOCIONAL */
    {
      id: "emotional_pain",
      type: "question",
      image: "pain",
      paragraphs: [
        "Mas existe uma situação que pode doer ainda mais.",
        "Quando aquela planta não foi apenas uma compra. Foi um presente. De alguém que você ama.",
        "Uma flor que seu parceiro trouxe. Uma planta que um familiar escolheu para você. Uma lembrança que acabou virando parte de um cantinho da sua casa."
      ],
      highlight: "E então a planta começa a morrer.",
      question: "Quando isso acontece, o que mais pesa para você?",
      options: [
        { id: "presente-significado", text: "Perder um presente que tinha significado." },
        { id: "nao-consegui-cuidar", text: "Sentir que não consegui cuidar de algo que gostava." },
        { id: "casa-frustracao", text: "Ficar frustrada com minha casa." },
        { id: "nao-entendi-erro", text: "Não entender o que fiz de errado." }
      ],
      event: "question_3_answered"
    },

    /* TELA 6 — APROFUNDAMENTO */
    {
      id: "aprofundamento",
      type: "story",
      image: "memory",
      paragraphs: [
        "Porque no fundo não é só sobre uma planta.",
        "É sobre aquele cantinho que você queria deixar mais bonito.",
        "É sobre a casa que você queria sentir mais viva.",
        "E, às vezes, é sobre uma lembrança que você queria conservar."
      ],
      highlight: "Você não queria simplesmente manter uma planta viva. Você queria que ela continuasse fazendo parte da sua história.",
      button: "É exatamente isso"
    },

    /* TELA 7 — QUEBRA DE CRENÇA */
    {
      id: "plant_reaction",
      type: "question",
      paragraphs: [
        "Por muito tempo, eu achei que meu problema era falta de disciplina.",
        "Que eu precisava simplesmente lembrar de regar. Então tentei criar rotina.",
        "Mas ainda assim algumas plantas iam mal."
      ],
      highlight: "Foi aí que comecei a perceber uma coisa.",
      question: "Quando uma planta começa a ficar diferente, qual costuma ser sua primeira reação?",
      options: [
        { id: "mais-agua", text: "Coloco mais água." },
        { id: "mudo-lugar", text: "Mudo ela de lugar." },
        { id: "tento-algo", text: "Tento alguma coisa imediatamente." },
        { id: "sem-saber", text: "Fico sem saber o que fazer primeiro." }
      ],
      event: "question_4_answered"
    },

    /* TELA 8 — DESCOBERTA */
    {
      id: "descoberta",
      type: "story",
      image: "discovery",
      paragraphs: [
        "Talvez o problema nunca tenha sido simplesmente “regar ou não regar”.",
        "Plantas diferentes respondem de maneiras diferentes ao ambiente em que estão.",
        "Quantidade de luz. Temperatura. Umidade. Tipo de vaso. Substrato. Frequência de rega.",
        "E principalmente os sinais que a própria planta apresenta."
      ],
      highlight: "O problema é que quase ninguém ensina a gente a interpretar esses sinais.",
      button: "Quero entender isso"
    },

    /* TELA 9 — NOVA CRENÇA */
    {
      id: "nova-crenca",
      type: "story",
      image: "newBelief",
      paragraphs: [
        "Quando você começa a observar antes de agir, o cuidado muda.",
        "Em vez de pensar: “Já está na hora de regar?”",
        "Você começa a pensar: “O que essa planta está me mostrando?”"
      ],
      highlight: "Você deixa de cuidar no automático e começa a cuidar com intenção.",
      button: "Faz sentido para mim"
    },

    /* TELA 10 — QUIZ 2 */
    {
      id: "desired_change",
      type: "question",
      question: "O que faria mais diferença para você na hora de cuidar das suas plantas?",
      options: [
        { id: "quando-agua", text: "Saber quando cada uma realmente precisa de água." },
        { id: "onde-ficar", text: "Saber onde cada planta deve ficar dentro de casa." },
        { id: "identificar-sinais", text: "Aprender a identificar sinais antes que ela fique fraca." },
        { id: "processo-simples", text: "Ter um processo simples para saber o que fazer." }
      ],
      event: "question_5_answered"
    },

    /* TELA 11 — EVOLUÇÃO */
    {
      id: "evolucao",
      type: "story",
      image: "evolution",
      paragraphs: [
        "Foi justamente observando essas pequenas coisas que comecei a errar menos.",
        "Em vez de olhar apenas para o calendário... comecei a olhar para a planta.",
        "Para a terra. Para as folhas. Para a luz. Para o ambiente. E para o que tinha mudado."
      ],
      highlight: "Eu parei de tentar adivinhar. Comecei a observar.",
      button: "Continuar"
    },

    /* TELA 12 — QUIZ 3 */
    {
      id: "care_preference",
      type: "question",
      question: "Qual dessas mudanças deixaria você mais tranquila para cuidar das suas plantas?",
      options: [
        { id: "observar-antes-regar", text: "Saber o que observar antes de regar." },
        { id: "sinais-folhas", text: "Conseguir identificar os sinais das folhas." },
        { id: "condicoes-cada-planta", text: "Saber quais condições cada planta precisa." },
        { id: "passo-a-passo", text: "Ter um passo a passo simples para decidir o que fazer." }
      ],
      event: "question_6_answered"
    },

    /* TELA 13 — MECANISMO */
    {
      id: "mecanismo",
      type: "story",
      paragraphs: [
        "Eu descobri que não precisava decorar dezenas de regras.",
        "Precisava aprender a observar algumas coisas certas.",
        "Em vez de seguir uma regra fixa para todas as plantas, comecei a entender a relação entre a planta e o ambiente.",
        "E essa mudança parece pequena. Mas muda completamente a maneira como você cuida."
      ],
      highlight: "De “quando eu devo regar?” para “o que minha planta precisa agora?”",
      button: "Quero ver como funciona"
    },

    /* TELA 14 — QUIZ 4 (mecanismo) */
    {
      id: "mechanism_preference",
      type: "question",
      question: "Qual dessas formas de cuidar faria mais sentido para você?",
      options: [
        { id: "calendario-fixo", text: "Seguir um calendário fixo de rega." },
        { id: "observar-ambiente", text: "Observar a planta e o ambiente antes de decidir." },
        { id: "terra-seca", text: "Regar sempre que a camada de cima da terra estiver seca." },
        { id: "esperar-sinal", text: "Esperar aparecer algum sinal nas folhas." }
      ],
      event: "question_7_answered"
    },

    /* TELA 15 — PROVA */
    {
      id: "prova",
      type: "proof",
      button: "Continuar"
    },

    /* TELA 16 — TRANSFERÊNCIA */
    {
      id: "desired_transformation",
      type: "question",
      paragraphs: [
        "Talvez você nunca tenha sido ruim com plantas.",
        "Talvez simplesmente ninguém tenha ensinado você a entender o que elas precisam."
      ],
      question: "Se você conseguisse entender melhor o que suas plantas precisam, o que mudaria primeiro na sua casa?",
      options: [
        { id: "conservar-presentes", text: "Eu conseguiria conservar por mais tempo os presentes que recebo." },
        { id: "casa-viva", text: "Minha casa ficaria mais viva e acolhedora." },
        { id: "confianca-comprar", text: "Eu teria mais confiança para comprar novas plantas." },
        { id: "parar-achar-sem-jeito", text: "Eu finalmente pararia de pensar que não levo jeito para plantas." }
      ],
      event: "quiz_completed"
    },

    /* TELA 17 — FECHAMENTO EMOCIONAL */
    {
      id: "fechamento",
      type: "story",
      image: "emotional",
      paragraphs: [
        "Imagine receber uma planta de alguém especial...",
        "Colocá-la em um cantinho bonito da sua casa...",
        "E, meses depois, ela ainda estar ali.",
        "Não como um objeto esquecido. Mas como parte da história daquele momento."
      ],
      highlight: "Uma casa viva também é feita das coisas que carregam significado.",
      button: "Continuar"
    },

    /* TELA 18 — TRANSIÇÃO PARA OFERTA */
    {
      id: "transicao-oferta",
      type: "story",
      paragraphs: [
        "Foi pensando exatamente nisso que esse método foi criado.",
        "Para ensinar você a olhar para suas plantas de uma maneira diferente.",
        "Sem precisar nascer com “dedo verde”.",
        "Sem depender de tentativa e erro o tempo inteiro.",
        "Sem precisar decorar uma lista infinita de regras."
      ],
      button: "Quero aprender esse método"
    },

    /* TELA 19 — PORTAS (mini-jogo de desconto) */
    {
      id: "portas",
      type: "doors"
    },

    /* TELA 20 — OFERTA */
    {
      id: "oferta",
      type: "offer",
      image: "offer",
      event: "offer_viewed"
    }
  ]
};
