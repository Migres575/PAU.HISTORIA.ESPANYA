export const statusLabel = {
  available: "Disponible",
  "coming-soon": "Pròximament",
  "in-preparation": "En preparació"
};

export function CreditsFooter() {
  return `<footer class="credits"><p><strong>Autor:</strong> Miquel Gregori</p><p><strong>Centre:</strong> IES Gregori Maians</p></footer>`;
}

export function UnitCard(unit) {
  const action = unit.status === "available"
    ? `<button data-open-unit="${unit.id}" class="btn-primary">Entrar a la unitat</button>`
    : `<span class="badge">${statusLabel[unit.status]}</span>`;

  return `<article class="unit-card">
    <h3>Unitat ${unit.number}. ${unit.title}</h3>
    <p class="muted">${unit.period || "Període per concretar"}</p>
    <p><strong>Estat:</strong> ${statusLabel[unit.status]}</p>
    ${action}
  </article>`;
}

export function HomePage(units) {
  return `<main class="container">
    <header class="hero">
      <h1>Història d’Espanya - 2n de Batxillerat</h1>
      <p class="subtitle">Unitats interactives per preparar la PAU</p>
      <p>Una eina d’estudi per repassar els processos clau de la Història d’Espanya contemporània i preparar preguntes de desenvolupament de la PAU.</p>
    </header>
    <section class="grid">${units.map(UnitCard).join("")}</section>
    ${CreditsFooter()}
  </main>`;
}

function list(title, items) {
  return `<section><h4>${title}</h4><ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul></section>`;
}

export function SectionContent(section) {
  return `<article>
    <h3>${section.title}</h3>
    <p class="muted">Marc cronològic: ${section.period}</p>
    <p><strong>Idea clau:</strong> ${section.keyIdea}</p>
    ${section.explanation.map((p) => `<p>${p}</p>`).join("")}
    ${list("Conceptes clau", section.keyConcepts)}
    ${list("Personatges principals", section.people)}
    ${list("Causes", section.causes)}
    ${list("Conseqüències", section.consequences)}
    <section><h4>Activitat breu</h4><p>${section.activities[0].question}</p><button class="btn-secondary" data-check-activity="${section.id}">Comprovar resposta</button><p data-feedback="${section.id}"></p></section>
    <section><h4>Pregunta tipus PAU</h4><p>${section.pauQuestion}</p></section>
    <section><h4>Mini qüestionari</h4>${section.quiz.map((q, i)=>`<div class="quiz-item"><p>${q.q}</p>${q.options.map((op, idx)=>`<button class="quiz-option" data-quiz="${section.id}" data-q="${i}" data-i="${idx}">${op}</button>`).join("")}<p data-quiz-feedback="${section.id}-${i}"></p></div>`).join("")}</section>
  </article>`;
}

export function PauPreparation(p) {
  return `<article><h3>Prepara la PAU</h3>${list("Eix cronològic essencial", p.timeline)}${list("Esquema causa-conseqüència", p.causeConsequence)}${list("Glossari bàsic", p.glossary)}${list("Preguntes PAU possibles", p.possibleQuestions)}<section><h4>Plantilla de resposta PAU</h4><p>${p.answerTemplate}</p></section><section><h4>Activitat final de redacció</h4><p>${p.finalWritingTask}</p></section></article>`;
}

export function UnitPage(unit, sectionIndex = 0, showPAU = false) {
  const section = unit.sections[sectionIndex];
  return `<main class="container">
    <button class="btn-link" data-go-home="1">← Tornar a inici</button>
    <header class="unit-header">
      <h2>Unitat ${unit.number}. ${unit.title} (${unit.period})</h2>
      <p><strong>Pregunta guia:</strong> ${unit.keyQuestion}</p>
      <p>${unit.summary}</p>
    </header>
    <nav class="tabs">${unit.sections.map((s,i)=>`<button data-section="${i}" class="${i===sectionIndex&&!showPAU?"active":""}">${i+1}. ${s.title}</button>`).join("")}<button data-open-pau="1" class="${showPAU?"active":""}">7. Prepara la PAU</button></nav>
    ${showPAU ? PauPreparation(unit.pauPreparation) : SectionContent(section)}
    <div class="pager"><button data-prev="1">← Apartat anterior</button><button data-next="1">Apartat següent →</button></div>
    ${CreditsFooter()}
  </main>`;
}
