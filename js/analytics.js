/* ============================================================
   ANALYTICS — camada de eventos preparada para integração.
   Hoje apenas registra no console e em window.__quizEvents.
   Para integrar (GA4, Meta Pixel, etc.), edite apenas track().
   ============================================================ */

window.__quizEvents = [];

function track(eventName, payload = {}) {
  const entry = { event: eventName, payload, ts: new Date().toISOString() };
  window.__quizEvents.push(entry);
  if (window.console) console.debug("[quiz-event]", entry);

  // Exemplos de integração futura:
  // if (window.gtag) gtag("event", eventName, payload);
  // if (window.fbq) fbq("trackCustom", eventName, payload);
}
