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

  /* ---------- OFERTA (placeholders — preencher depois) ---------- */
  offer: {
    productName: "[NOME DO PRODUTO]",
    headline: "Aprenda a entender o que suas plantas precisam e cuide delas com muito mais segurança.",
    subheadline: "Um método simples e prático para transformar o cuidado com plantas em algo que você entende, em vez de apenas tentar adivinhar.",
    description: "[DESCRIÇÃO DO PRODUTO]",
    learnTitle: "O que você vai aprender",
    modules: [
      { title: "[MÓDULO 1]", text: "[Descrição do módulo 1]" },
      { title: "[MÓDULO 2]", text: "[Descrição do módulo 2]" },
      { title: "[MÓDULO 3]", text: "[Descrição do módulo 3]" },
      { title: "[MÓDULO 4]", text: "[Descrição do módulo 4]" }
    ],
    bonus: "[BÔNUS]",
    price: "[PREÇO]",
    specialCondition: "[CONDIÇÃO ESPECIAL]",
    guarantee: "[GARANTIA]",
    cta: "Quero começar a cuidar melhor das minhas plantas",
    ctaAlternatives: [
      "Quero minhas plantas vivas e bonitas",
      "Quero aprender esse método",
      "Quero começar agora"
    ]
  },

  /* ---------- PROVAS (placeholders — inserir provas reais) ---------- */
  proof: {
    title: "Mas será que isso funciona para quem sempre achou que era ruim com plantas?",
    subtitle: "É aqui que entram histórias reais.",
    disclaimer: "Espaços reservados para depoimentos reais. Nenhum depoimento foi inventado.",
    testimonials: [
      {
        photo: null, // inserir caminho da foto real
        quote: "[INSERIR DEPOIMENTO REAL]",
        name: "[INSERIR NOME REAL]",
        before: "[Situação inicial]",
        discovery: "[Descoberta]",
        result: "[Resultado]"
      },
      {
        photo: null,
        quote: "[INSERIR DEPOIMENTO REAL]",
        name: "[INSERIR NOME REAL]",
        before: "[Situação inicial]",
        discovery: "[Descoberta]",
        result: "[Resultado]"
      },
      {
        photo: null,
        quote: "[INSERIR DEPOIMENTO REAL]",
        name: "[INSERIR NOME REAL]",
        before: "[Situação inicial]",
        discovery: "[Descoberta]",
        result: "[Resultado]"
      }
    ]
  },

  /* ---------- IMAGENS (placeholders — substituir por imagens reais) ---------- */
  images: {
    hero: null,        // casa bonita com plantas
    connection: null,  // planta recebida ou comprada
    pain: null,        // planta com aparência debilitada
    discovery: null,   // mãos observando folhas/terra
    evolution: null,   // planta saudável
    emotional: null,   // canto aconchegante da casa
    offer: null        // produto/material do método
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

    /* TELA 19 — OFERTA */
    {
      id: "oferta",
      type: "offer",
      image: "offer",
      event: "offer_viewed"
    }
  ]
};
