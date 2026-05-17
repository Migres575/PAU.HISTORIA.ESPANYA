import { units } from "./data/units.js";
import { HomePage, UnitPage } from "./components/ui.js";

const app = document.getElementById("app");
const state = { unitId: null, sectionIndex: 0, showPAU: false };

function currentUnit() {
  return units.find((u) => u.id === state.unitId);
}

function render() {
  if (!state.unitId) app.innerHTML = HomePage(units);
  else app.innerHTML = UnitPage(currentUnit(), state.sectionIndex, state.showPAU);
}

function checkActivity(section) {
  const act = section.activities[0];
  if (act.type === "true-false") return act.answer ? "Correcte: és vertader." : "Correcte: és fals.";
  if (act.type === "multiple-choice") return `Resposta correcta: ${act.options[act.answer]}.`;
  if (act.type === "fill") return `Pista: la paraula clau és “${act.answer}”.`;
  return `Relació orientativa: ${act.pairs.join("; ")}`;
}

document.addEventListener("click", (e) => {
  const openUnit = e.target.dataset.openUnit;
  if (openUnit) { state.unitId = openUnit; state.sectionIndex = 0; state.showPAU = false; render(); return; }
  if (e.target.dataset.goHome) { state.unitId = null; render(); return; }
  if (e.target.dataset.section) { state.sectionIndex = Number(e.target.dataset.section); state.showPAU = false; render(); return; }
  if (e.target.dataset.openPau) { state.showPAU = true; render(); return; }
  if (e.target.dataset.prev) { state.sectionIndex = Math.max(0, state.sectionIndex - 1); state.showPAU = false; render(); return; }
  if (e.target.dataset.next) { state.sectionIndex = Math.min(currentUnit().sections.length - 1, state.sectionIndex + 1); state.showPAU = false; render(); return; }
  if (e.target.dataset.checkActivity) {
    const section = currentUnit().sections.find((s) => s.id === e.target.dataset.checkActivity);
    document.querySelector(`[data-feedback="${section.id}"]`).textContent = checkActivity(section);
  }
  if (e.target.dataset.quiz) {
    const section = currentUnit().sections.find((s) => s.id === e.target.dataset.quiz);
    const q = section.quiz[Number(e.target.dataset.q)];
    const idx = Number(e.target.dataset.i);
    document.querySelector(`[data-quiz-feedback="${section.id}-${e.target.dataset.q}"]`).textContent =
      idx === q.correct ? "Resposta correcta." : `No exacta. Correcta: ${q.options[q.correct]}.`;
  }
});

render();
