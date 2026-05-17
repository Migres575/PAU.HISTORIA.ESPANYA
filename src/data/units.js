export const units = [
  {
    id: "unitat-1",
    number: 1,
    title: "Guerra i revolució liberal",
    period: "1788-1833",
    status: "available",
    keyQuestion:
      "Com va entrar en crisi l’Antic Règim i com es va obrir pas el liberalisme a Espanya?",
    summary:
      "Entre 1788 i 1833, Espanya visqué una crisi política, social i econòmica que va trencar l’estabilitat de l’Antic Règim i obrí el camí de la revolució liberal.",
    sections: [
      {
        id: "carles-iv",
        title: "El regnat de Carles IV",
        period: "1788-1808",
        keyIdea:
          "El regnat de Carles IV va estar marcat per l’impacte de la Revolució Francesa, la crisi de la monarquia borbònica i la dependència creixent respecte de Napoleó.",
        explanation: ["El regnat de Carles IV començà el 1788, poc abans de l’esclat de la Revolució Francesa de 1789. La monarquia espanyola i les elits de l’Antic Règim van veure amb temor l’expansió de les idees revolucionàries.","Davant d’aquest context, es paralitzaren reformes il·lustrades i Manuel Godoy acumulà un gran poder polític. Després de la derrota contra França revolucionària, Espanya canvià d’aliança i s’uní a França contra Gran Bretanya.","L’aliança comportà conseqüències negatives: Trafalgar (1805), crisi comercial americana, deute públic i malestar intern. El Tractat de Fontainebleau (1807) permeté l’entrada de tropes franceses, i el motí d’Aranjuez (1808) precipità la caiguda de Godoy i l’abdicació de Carles IV.","A Baiona, Napoleó obligà Carles IV i Ferran VII a abdicar i imposà Josep I Bonaparte. Aquesta maniobra dinàstica desencadenà el rebuig popular i inicià la Guerra del Francés."],
        keyConcepts: ["Revolució Francesa", "Antic Règim", "absolutisme", "reformes il·lustrades", "Manuel Godoy", "Tractat de Fontainebleau", "motí d’Aranjuez", "abdicacions de Baiona", "Josep I Bonaparte"],
        people: ["Carles IV", "Maria Lluïsa de Parma", "Manuel Godoy", "Ferran VII", "Napoleó Bonaparte", "Josep I Bonaparte"],
        causes: ["Por a l’expansió de les idees revolucionàries franceses", "Debilitat política de Carles IV", "Impopularitat creixent de Godoy", "Crisi econòmica i financera", "Dependència de França i de Napoleó", "Entrada de tropes franceses"],
        consequences: ["Crisi de la monarquia borbònica", "Abdicació de Carles IV i Ferran VII", "Proclamació de Josep I com a rei", "Inici de la Guerra del Francés", "Obertura del conflicte entre absolutisme i liberalisme"],
        activities: [{ type: "true-false", question: "El Tractat de Fontainebleau (1807) permeté l’entrada de tropes franceses a Espanya.", answer: true }],
        pauQuestion: "Explica les causes de la crisi de la monarquia de Carles IV i la seua relació amb la invasió napoleònica.",
        quiz: [
          { q: "Quin esdeveniment precipità l’abdicació de Carles IV?", options: ["La batalla de Bailén", "El motí d’Aranjuez", "La Constitució de 1812"], correct: 1 },
          { q: "Quin tractat permeté l’entrada de tropes franceses?", options: ["Utrecht", "Versalles", "Fontainebleau"], correct: 2 }
        ]
      },
      {
        id: "guerra-cadis",
        title: "La Guerra del Francés i les Corts de Cadis",
        period: "1808-1814",
        keyIdea: "La invasió napoleònica provocà una guerra d’independència i una revolució política que culminà en la Constitució de 1812.",
        explanation: ["El 2 de maig de 1808 esclatà la revolta de Madrid i començà la Guerra del Francés. Les juntes locals i provincials assumiren poder en nom de Ferran VII.","La societat es dividí entre afrancesats i patriotes. Dins dels patriotes, absolutistes i liberals discrepaven sobre el futur polític.","La guerra passà per resistència inicial, ocupació napoleònica i fase final amb guerrilles i ajuda britànica de Wellington.","En paral·lel, les Corts de Cadis proclamaren la sobirania nacional i aprovaren la Constitució de 1812: divisió de poders, monarquia constitucional, drets i igualtat jurídica, amb límits com la confessionalitat catòlica."],
        keyConcepts: ["Guerra del Francés", "juntes", "guerrilla", "afrancesats", "Corts de Cadis", "Constitució de 1812", "sobirania nacional"],
        people: ["Josep I Bonaparte", "Ferran VII", "Napoleó", "Wellington", "diputats de Cadis"],
        causes: ["Ocupació francesa", "Abdicacions de Baiona", "Rebuig popular a Josep I", "Defensa de la independència", "Impuls liberal"],
        consequences: ["Gran desgast humà i econòmic", "Aparició d’una cultura política liberal", "Constitució de 1812", "Debilitament de l’Antic Règim"],
        activities: [{ type: "multiple-choice", question: "Quin principi polític fonamental defensa la Constitució de 1812?", options: ["Sobirania nacional", "Poder absolut del rei", "Sufragi universal femení"], answer: 0 }],
        pauQuestion: "Analitza la importància de la Guerra del Francés i de les Corts de Cadis en la crisi de l’Antic Règim.",
        quiz: [{ q: "En quin any es promulgà la Constitució de Cadis?", options: ["1808", "1812", "1814"], correct: 1 }]
      },
      { id: "sexenni-absolutista", title: "Ferran VII i el Sexenni Absolutista", period: "1814-1820", keyIdea: "El retorn de Ferran VII restaurà l’absolutisme i perseguí el liberalisme.", explanation: ["El 1814 Ferran VII tornà i anul·là la Constitució de 1812, influït pels absolutistes i el Manifest dels Perses.","Durant el Sexenni Absolutista es restauraren institucions i privilegis de l’Antic Règim i es reprimiren liberals.","La crisi econòmica, la destrucció de la guerra i la pèrdua d’ingressos americans agreujaren el descontentament.","Els pronunciaments liberals culminaren amb Riego (1820), que forçà el rei a jurar la Constitució."], keyConcepts:["Ferran VII","Manifest dels Perses","restauració absolutista","repressió liberal","pronunciament"], people:["Ferran VII","Rafael del Riego"], causes:["Retorn del rei","Suport absolutista","Rebuig constitucional"], consequences:["Repressió","Exili liberal","Triomf de Riego"], activities:[{type:"true-false",question:"Ferran VII mantingué vigent la Constitució de 1812 en 1814.",answer:false}], pauQuestion:"Explica per què Ferran VII va restaurar l’absolutisme el 1814 i quines conseqüències tingué.", quiz:[{q:"Quin document justificà la restauració absolutista?",options:["Manifest dels Perses","Constitució de Bayona","Decret de Nova Planta"],correct:0}] },
      { id: "trienni", title: "El Trienni Liberal", period: "1820-1823", keyIdea: "El Trienni intentà aplicar el programa liberal de Cadis, però fracassà.", explanation:["Amb el pronunciament de Riego (1820) es restaurà el règim constitucional.","S’impulsaren reformes: supressió de senyorius, desamortització, Milícia Nacional i reorganització administrativa.","Hi hagué oposició de noblesa, Església, sectors populars i divisió entre moderats i exaltats.","La intervenció francesa dels Cent Mil Fills de Sant Lluís (1823), avalada per la Santa Aliança, acabà amb el Trienni."], keyConcepts:["Trienni Liberal","Milícia Nacional","moderats","exaltats","Santa Aliança"], people:["Riego","Ferran VII","duc d’Angulema"], causes:["Triomf de Riego","Malestar liberal"], consequences:["Reformes liberals","Divisió interna","Retorn de l’absolutisme"], activities:[{type:"multiple-choice",question:"Quina potència intervingué militarment el 1823?",options:["França", "Prússia", "Rússia"],answer:0}], pauQuestion:"Explica les reformes del Trienni Liberal i les causes del seu fracàs.", quiz:[{q:"Com s’anomenà l’exèrcit francès de 1823?",options:["Cent Mil Fills de Sant Lluís","Gran Armée","Guàrdia Reial"],correct:0}] },
      { id: "independencia-america", title: "La independència de les colònies americanes", period: "1808-1824", keyIdea: "La crisi de la monarquia i el protagonisme crioll afavoriren la independència americana.", explanation:["Els criolls reclamaven poder polític i llibertat comercial davant la discriminació peninsular.","La crisi de 1808 i les idees atlàntiques acceleraren processos independentistes.","San Martín i Bolívar lideraren campanyes decisives al sud i al nord.","Després d’Ayacucho (1824), l’imperi continental espanyol quasi desaparegué."], keyConcepts:["criolls","independència","Bolívar","San Martín","Ayacucho","cabdillisme"], people:["Simón Bolívar","José de San Martín","Hidalgo","Morelos"], causes:["Discriminació criolla","Crisi de 1808","Influència il·lustrada"], consequences:["Pèrdua imperial","Fragmentació política","Cabdillismes"], activities:[{type:"match",question:"Relaciona líder i espai: Bolívar / nord andí, San Martín / sud andí",pairs:["Bolívar → nord andí","San Martín → sud andí"]}], pauQuestion:"Analitza les causes i les conseqüències de la independència de les colònies americanes.", quiz:[{q:"Quina batalla (1824) consolidà la fi de l’imperi continental?",options:["Austerlitz","Ayacucho","Lepant"],correct:1}] },
      { id: "decada-ominosa", title: "La Dècada Ominosa i la crisi successòria", period: "1823-1833", keyIdea: "La darrera etapa de Ferran VII combinà repressió i crisi successòria, origen del carlisme.", explanation:["Després de 1823 tornà l’absolutisme i la repressió del liberalisme.","La fallida de la Hisenda i la pèrdua americana obligaren a reformes econòmiques limitades.","La Pragmàtica Sanció permeté que Isabel heretara el tron, contra els partidaris de Carles Maria Isidre.","A la mort de Ferran VII (1833), esclatà la Primera Guerra Carlina."], keyConcepts:["Dècada Ominosa","Pragmàtica Sanció","carlisme","Isabel II"], people:["Ferran VII","Isabel II","Maria Cristina","Carles Maria Isidre","Mariana Pineda","Torrijos"], causes:["Fi del Trienni","Crisi fiscal","Problema successori"], consequences:["Divisió carlins-liberals","Primera Guerra Carlina","Impuls definitiu de l’Estat liberal"], activities:[{type:"fill",question:"Completa: La _______ Sanció permeté que Isabel II heretara el tron.",answer:"Pragmàtica"}], pauQuestion:"Explica la crisi final del regnat de Ferran VII i l’origen del conflicte carlí.", quiz:[{q:"Quan mor Ferran VII?",options:["1830","1833","1836"],correct:1}] }
    ],
    pauPreparation: {
      timeline: ["1788: inici del regnat de Carles IV","1789: Revolució Francesa","1796: aliança d’Espanya amb França","1805: derrota de Trafalgar","1807: Tractat de Fontainebleau","1808: motí d’Aranjuez, abdicacions de Baiona i inici de la Guerra del Francés","1812: Constitució de Cadis","1814: retorn de Ferran VII i restauració absolutista","1820: pronunciament de Riego","1820-1823: Trienni Liberal","1823: intervenció dels Cent Mil Fills de Sant Lluís","1823-1833: Dècada Ominosa","1824: derrota espanyola a Ayacucho","1830: naixement d’Isabel II i qüestió successòria","1833: mort de Ferran VII i inici de la Primera Guerra Carlina"],
      causeConsequence: ["Revolució Francesa → por monàrquica → paralització de reformes.","Crisi de Carles IV → dependència de Napoleó → invasió francesa.","Abdicacions de Baiona → rebuig popular → Guerra del Francés.","Guerra i buit de poder → Corts de Cadis → Constitució de 1812.","Retorn de Ferran VII → anul·lació constitucional → restauració absolutista.","Repressió liberal → pronunciaments → Trienni Liberal.","Reformes liberals → oposició absolutista → intervenció de la Santa Aliança.","Pèrdua d’Amèrica → crisi econòmica de l’Estat.","Problema successori → divisió carlina-liberal → guerra carlina."],
      glossary: ["Antic Règim", "Absolutisme", "Liberalisme", "Sobirania nacional", "Constitució", "Corts", "Pronunciamiento", "Guerrilla", "Afrancesats", "Desamortització", "Milícia Nacional", "Santa Aliança", "Criolls", "Cabdillisme", "Carlisme"],
      possibleQuestions: ["Explica la crisi de l’Antic Règim durant Carles IV.","Analitza les causes i conseqüències de la Guerra del Francés.","Explica la importància de les Corts de Cadis i la Constitució de 1812.","Compara absolutisme i liberalisme amb Ferran VII.","Explica reformes i fracàs del Trienni Liberal.","Analitza les causes de la independència de l’Amèrica hispana.","Explica la Dècada Ominosa i l’origen del carlisme.","Valora la importància del període 1788-1833."],
      answerTemplate: "1) Introducció amb context cronològic i tesi. 2) Desenvolupament ordenat amb causes, fets i conseqüències. 3) Conclusió valorant la crisi de l’Antic Règim i l’inici del liberalisme.",
      finalWritingTask: "Redacta una resposta de 25-30 línies: ‘Per què el període 1788-1833 pot considerar-se una etapa de crisi de l’Antic Règim i d’inici de la revolució liberal a Espanya?’"
    }
  },
  ...[
    [2, "Entre moderats i progressistes", "1833-1874"],
    [3, "La transició cap al capitalisme: desenvolupament agrari i industrial", ""],
    [4, "De la societat agrària a la industrial: els nous moviments socials", ""],
    [5, "La dinastia restaurada: alternança i caciquisme", "1875-1902"],
    [6, "Les resistències a la democratització política i social", "1902-1931"],
    [7, "La modernització de la societat espanyola", "1900-1930"],
    [8, "El projecte reformista de la Segona República", "1931-1936"],
    [9, "Un colp a la democràcia: la Guerra Civil", "1936-1939"],
    [10, "El franquisme: una llarga postguerra", "1939-1959"],
    [11, "Desenvolupament i crisi del franquisme", "1960-1975"],
    [12, "Conquesta i consolidació de la democràcia", ""]
  ].map(([number, title, period]) => ({
    id: `unitat-${number}`,
    number,
    title,
    period,
    status: number % 2 === 0 ? "coming-soon" : "in-preparation"
  }))
];
