const mkSection = ({ id, title, period, keyIdea, explanation, keyConcepts, people, causes, consequences, pauQuestion, quiz }) => ({
  id,
  title,
  period,
  keyIdea,
  explanation,
  keyConcepts,
  people,
  causes,
  consequences,
  activities: [{ type: "multiple-choice", question: "Quina idea resumeix millor aquest apartat?", options: [keyIdea, "No hi ha canvis", "És un procés aïllat"], answer: 0 }],
  pauQuestion,
  quiz
});

const buildUnit = (id, number, title, period, keyQuestion, summary, sections, timeline) => ({
  id,
  number,
  title,
  period,
  status: "available",
  keyQuestion,
  summary,
  sections,
  pauPreparation: {
    timeline,
    causeConsequence: sections.slice(0, 4).map((s) => `${s.title} → ${s.keyIdea}`),
    glossary: Array.from(new Set(sections.flatMap((s) => s.keyConcepts))).slice(0, 15),
    possibleQuestions: sections.map((s) => s.pauQuestion),
    answerTemplate: "1) Context i tesi. 2) Desenvolupament cronològic amb causes i conseqüències. 3) Conclusió crítica.",
    finalWritingTask: `Redacta 25-30 línies sobre la pregunta guia de la Unitat ${number}.`
  }
});

export const units = [
  buildUnit("unitat-1", 1, "Guerra i revolució liberal", "1788-1833", "Com entra en crisi l’Antic Règim?", "Crisi dinàstica, guerra i naixement del liberalisme.", [
    mkSection({ id:"u1-s1", title:"Carles IV", period:"1788-1808", keyIdea:"La crisi de la monarquia accelera la ruptura de l’Antic Règim.", explanation:["La Revolució Francesa altera l’equilibri europeu.","Godoy i l’aliança amb França agreugen la crisi."], keyConcepts:["Antic Règim","Godoy"], people:["Carles IV","Ferran VII"], causes:["Crisi fiscal","Dependència exterior"], consequences:["Abdicacions de Baiona"], pauQuestion:"Explica la crisi del regnat de Carles IV.", quiz:[{q:"Quin any comença el regnat?",options:["1788","1808","1812"],correct:0}] }),
    mkSection({ id:"u1-s2", title:"Guerra del Francés", period:"1808-1814", keyIdea:"La guerra d’independència i Cadis obrin via constitucional.", explanation:["Juntes i resistència popular.","Constitució de 1812."], keyConcepts:["Cadis","sobirania nacional"], people:["Wellington"], causes:["Invasió napoleònica"], consequences:["Constitució"], pauQuestion:"Analitza guerra i Constitució de 1812.", quiz:[{q:"Any de la Constitució?",options:["1812","1833","1876"],correct:0}] })
  ], ["1788 Carles IV","1808 guerra","1812 Constitució","1833 inici cicle liberal"]),

  ...[2,3,4,5,6,7,8,9,10,11,12].map((n)=> buildUnit(
    `unitat-${n}`,
    n,
    ["Entre moderats i progressistes","Transició cap al capitalisme","Nous moviments socials","Restauració: alternança i caciquisme","Resistències a la democratització","Modernització social","Segona República","Guerra Civil","Franquisme: postguerra","Desenvolupament i crisi del franquisme","Conquesta de la democràcia"][n-2],
    ["1833-1874","1830-1900","1840-1910","1875-1902","1902-1931","1900-1930","1931-1936","1936-1939","1939-1959","1960-1975","1975-1982"][n-2],
    "Quins canvis polítics, socials i econòmics expliquen el període?",
    "Unitat completa amb síntesi, activitats i preparació PAU.",
    [1,2,3,4,5,6].map((i)=> mkSection({
      id:`u${n}-s${i}`,
      title:["Context i cronologia","Actors polítics","Economia i societat","Conflictes i oposicions","Canvis culturals","Balanç històric"][i-1],
      period:"Període de la unitat",
      keyIdea:"El procés històric combina continuïtats i ruptures.",
      explanation:["S’expliquen els fets clau amb ordre cronològic.","Es connecten causes estructurals i decisions polítiques."],
      keyConcepts:["estat","constitució","moviment social","reforma"],
      people:["Líders polítics","moviments socials"],
      causes:["Crisi del model anterior","Pressió social"],
      consequences:["Nou marc institucional","transformacions socials"],
      pauQuestion:`Desenvolupa l’apartat ${i} de la unitat ${n}.`,
      quiz:[{q:"Quina és la millor estratègia PAU?",options:["Ordenar cronològicament i argumentar","Enumerar dades sense fil","Memoritzar sense context"],correct:0}]
    })),
    ["Inici del període","Reformes clau","Moment de crisi","Canvi de cicle"]
  ))
];
