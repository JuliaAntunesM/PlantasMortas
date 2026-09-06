# Story Quiz — Cuidados com Plantas

Landing page narrativa interativa (Story Quiz) em português do Brasil, mobile-first, sem dependências de build. Abra `index.html` ou sirva a pasta com qualquer servidor estático.

## Estrutura

```
index.html        — shell da aplicação
css/styles.css    — paleta, tipografia, animações, responsivo
js/data.js        — TODO o conteúdo: telas, perguntas, mecanismo, provas, oferta
js/analytics.js   — camada de eventos (stubs prontos para GA4/Pixel)
js/app.js         — renderização, navegação, respostas, progresso
```

## Como editar

- **Copy / perguntas / ordem das telas:** edite `QUIZ_CONTENT.screens` em `js/data.js`. Tipos: `story`, `question`, `proof`, `offer`.
- **Mecanismo:** hoje é a hipótese "Observar antes de agir". Substitua em `mechanism` e nas telas `mecanismo`/`mechanism_preference` quando o método real for definido.
- **Provas:** preencha `proof.testimonials` com foto, nome, situação, descoberta, resultado e depoimento **reais**. Nada foi inventado — tudo está como placeholder.
- **Oferta:** preencha `offer` (nome, módulos, bônus, preço, garantia, CTA). O botão final dispara `cta_clicked` + `purchase_started`; aponte para o checkout real em `app.js` (marcado com `TODO`).
- **Imagens:** coloque os arquivos em `img/` e aponte os caminhos em `images` no `data.js`. Enquanto `null`, aparece um placeholder identificado.
- **Personalização:** `personalization` mapeia respostas para uma frase sutil exibida na tela de oferta.
- **Analytics:** eventos já disparados — `quiz_started`, `question_1..7_answered`, `quiz_completed`, `offer_viewed`, `cta_clicked`, `purchase_started`. Integre em `track()` em `js/analytics.js`.

## Respostas

As respostas ficam em `sessionStorage` (`quizAnswers`) e em `window.__quizEvents` para depuração.

## Rodando localmente

```powershell
# opção 1: abrir direto
start index.html

# opção 2: servidor estático (Python)
python -m http.server 8080
```
