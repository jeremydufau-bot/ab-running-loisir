// âââââââââââââââââââââââââââââââââââââââââââââââââââââââ
// data.js â DonnÃ©es AB Running Loisir
// Modifiable par les coachs via admin.html
// âââââââââââââââââââââââââââââââââââââââââââââââââââââââ

const terrainLabel = {
  // Bayonne
  halage:    {icon:'ð',label:'Halage Â· Nive',cls:'tag-sky'},
  floride:   {icon:'â°ï¸',label:'CÃ´te La Floride',cls:'tag-blue'},
  voulgre:   {icon:'â°ï¸',label:'CÃ´te Voulgre',cls:'tag-blue'},
  vw:        {icon:'â°ï¸',label:'CÃ´te VW',cls:'tag-blue'},
  douves:    {icon:'ð¿',label:'Les Douves',cls:'tag-green'},
  intramuros:{icon:'ð°',label:'Intra-muros',cls:'tag-green'},
  stades:    {icon:'ð',label:'Tour stades rugby',cls:'tag-sky'},
  // Anglet
  coteanglet:{icon:'â°ï¸',label:'CÃ´te Anglet',cls:'tag-blue'},
  girouettes:{icon:'ð¿',label:'Parc Les Girouettes',cls:'tag-green'},
  chiberta:  {icon:'ð²',label:'ForÃªt Chiberta',cls:'tag-green'},
  plage:     {icon:'ð',label:'Plage + Chiberta',cls:'tag-sky'},
  // Biarritz & montagne
  escaliers: {icon:'ðª',label:'Escaliers Biarritz',cls:'tag-ocre'},
  montagne:  {icon:'ð',label:'Ursuya / Mondarrain',cls:'tag-rouge'},
}

const phaseLabels = {
  'phase-reprise':   {label:'Reprise',cls:'phase-reprise'},
  'phase-base':      {label:'Base endurance',cls:'phase-base'},
  'phase-dev':       {label:'DÃ©veloppement',cls:'phase-dev'},
  'phase-force':     {label:'Force / D+',cls:'phase-force'},
  'phase-prepa':     {label:'PrÃ©pa trail',cls:'phase-prepa'},
  'phase-precomp':   {label:'PrÃ©-compÃ©tition',cls:'phase-precomp'},
  'phase-senpereko': {label:'Objectif course',cls:'phase-event'},
  'phase-euskal':    {label:'Objectif course',cls:'phase-event'},
  'phase-recup':     {label:'RÃ©cupÃ©ration',cls:'phase-recup'},
  'phase-grp':       {label:'Bloc montagne',cls:'phase-montagne'},
  'phase-montagne':  {label:'Bloc montagne',cls:'phase-montagne'},
}

const niveauxData = {
  "3030": {
    "reps": [
      "6×",
      "10×",
      "15×"
    ],
    "recup": [
      "30s récup",
      "30s récup",
      "30s récup"
    ],
    "allure": [
      "allure 5km+",
      "allure VMA -10%",
      "allure VMA"
    ]
  },
  "30s": {
    "reps": [
      "6×",
      "10×",
      "14×"
    ],
    "recup": [
      "2min",
      "1min30",
      "1min"
    ],
    "allure": [
      "allure vive contrôlée",
      "allure Z4 soutenue",
      "allure VMA proche"
    ]
  },
  "1min": {
    "reps": [
      "6×",
      "10×",
      "14×"
    ],
    "recup": [
      "2min",
      "1min45",
      "1min30"
    ],
    "allure": [
      "effort perçu 7/10",
      "85-90% FCmax",
      "88-93% FCmax"
    ]
  },
  "1min30": {
    "reps": [
      "5×",
      "8×",
      "12×"
    ],
    "recup": [
      "3min",
      "2min",
      "1min45"
    ],
    "allure": [
      "effort soutenu contrôlé",
      "85-90% FCmax",
      "90-95% FCmax"
    ]
  },
  "2min": {
    "reps": [
      "4×",
      "6×",
      "10×"
    ],
    "recup": [
      "3min",
      "2min30",
      "2min"
    ],
    "allure": [
      "effort gérable",
      "85-90% FCmax",
      "90-93% FCmax"
    ]
  },
  "3min": {
    "reps": [
      "3×",
      "5×",
      "8×"
    ],
    "recup": [
      "4min",
      "3min",
      "2min30"
    ],
    "allure": [
      "allure seuil doux",
      "80-85% FCmax",
      "85-90% FCmax"
    ]
  },
  "5min": {
    "reps": [
      "2×",
      "4×",
      "6×"
    ],
    "recup": [
      "4min",
      "3min30",
      "3min"
    ],
    "allure": [
      "allure seuil",
      "80-85% FCmax",
      "85-88% FCmax"
    ]
  },
  "6min": {
    "reps": [
      "2×",
      "3×",
      "5×"
    ],
    "recup": [
      "4min",
      "3min30",
      "3min"
    ],
    "allure": [
      "allure seuil confort",
      "80-83% FCmax",
      "83-87% FCmax"
    ]
  },
  "8min": {
    "reps": [
      "2×",
      "3×",
      "4×"
    ],
    "recup": [
      "5min",
      "4min",
      "3min30"
    ],
    "allure": [
      "allure semi débutant",
      "allure cible course",
      "légèrement sous allure course"
    ]
  },
  "10min": {
    "reps": [
      "1×",
      "2×",
      "3×"
    ],
    "recup": [
      "5min",
      "5min",
      "4min"
    ],
    "allure": [
      "footing soutenu",
      "allure seuil",
      "allure seuil+"
    ]
  },
  "12min": {
    "reps": [
      "1×",
      "2×",
      "3×"
    ],
    "recup": [
      "—",
      "5min",
      "4min"
    ],
    "allure": [
      "pas recommandé - faire 2×5min",
      "allure seuil",
      "allure seuil+"
    ]
  },
  "15min": {
    "reps": [
      "1×",
      "2×",
      "2×"
    ],
    "recup": [
      "—",
      "5min",
      "4min"
    ],
    "allure": [
      "pas recommandé",
      "allure seuil",
      "allure seuil"
    ]
  },
  "20min": {
    "reps": [
      "1×",
      "1×",
      "2×"
    ],
    "recup": [
      "—",
      "—",
      "5min"
    ],
    "allure": [
      "footing soutenu 20min",
      "allure EF rapide",
      "allure seuil"
    ]
  },
  "cote": {
    "reps": [
      "6×",
      "10×",
      "14×"
    ],
    "recup": [
      "descente marchée",
      "descente trottinée",
      "descente rapide"
    ],
    "allure": [
      "effort 7/10",
      "effort 8/10",
      "effort 9/10"
    ]
  },
  "fartlek": {
    "reps": [
      "30min",
      "45min",
      "60min"
    ],
    "recup": [
      "libre",
      "structuré",
      "intensif"
    ],
    "allure": [
      "accélérations libres modérées",
      "Z3-Z4 dans les montées",
      "Z4-Z5 intensif"
    ]
  }
};


const typeLabel = {
  trail:'ð¿ Trail', route:'ð Route', rando:'ð¥¾ Rando',
  montagne:'ð Montagne', social:'ð Section'
};

const typeCls = {
  trail:'type-trail', route:'type-route', rando:'type-rando',
  montagne:'type-montagne', social:'type-social'
};

const programme = [
  {
    "sem": 1,
    "mois": "Sept",
    "phase": "Reprise",
    "phaseClass": "phase-reprise",
    "mardi": {
      "titre": "Footing + éducatifs + 6×30s vif",
      "terrain": "halage",
      "detail": "Échauffement 15min. Éducatifs de course : montées genoux, talons fesses, jambes tendues. 6 répétitions de 30s à allure vive, 1min30 récup marchée. Retour calme 10min. Séance identique pour tous niveaux — le rythme personnel diffère, pas la structure. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "8×30s · Côte La Floride",
      "terrain": "floride",
      "detail": "8 montées de 30s sur la côte La Floride ou côte VW. Descente trottinée. Objectif : réveiller les appuis, pas s'épuiser. Pas de chrono — sensations. Pour les routards : même séance, excellent cardio. | 🏋 PPG couplée — En bas de chaque côte pendant la récup : 🟢 8 squats poids corps lents (3s descente) — fessiers, genoux dans l'axe · 🔵 10 squats + 5 fentes avant chaque jambe — amplitude maximale · 🔴 10 squats sautés réception souple + 8 fentes bulgares poids corps. Durée totale PPG : ~90s par récup. La séance allonge de 10 min."
    },
    "g0": "1h footing route souple",
    "g1": "1h20 trail facile",
    "g2": "2h trail aisé",
    "decharge": false
  },
  {
    "sem": 2,
    "mois": "Sept",
    "phase": "Reprise",
    "phaseClass": "phase-reprise",
    "mardi": {
      "titre": "Footing + 8×30s vif",
      "terrain": "halage",
      "detail": "8 répétitions de 30s vif sur le halage, récup 1min15. On prend les repères, on évalue son niveau de forme. Allure : chacun gère selon ses sensations. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "10×30s · Côte La Floride",
      "terrain": "floride",
      "detail": "10 montées, focus technique : genoux hauts, bras actifs, regard devant. Descente marchée ou trottinée. Total ~1h. | 🏋 PPG couplée — En bas de chaque côte pendant la récup : 🟢 8 squats poids corps lents (3s descente) — fessiers, genoux dans l'axe · 🔵 10 squats + 5 fentes avant chaque jambe — amplitude maximale · 🔴 10 squats sautés réception souple + 8 fentes bulgares poids corps. Durée totale PPG : ~90s par récup. La séance allonge de 10 min."
    },
    "g0": "1h10 route aisée",
    "g1": "1h20 trail facile",
    "g2": "2h trail avec D+",
    "decharge": false
  },
  {
    "sem": 3,
    "mois": "Sept",
    "phase": "Reprise",
    "phaseClass": "phase-reprise",
    "mardi": {
      "titre": "6×1min vif + 4×30s finishers",
      "terrain": "halage",
      "detail": "6 répétitions de 1min à allure soutenue (Z4), récup 2min. Puis 4×30s à fond. Retour calme 10min. Les finishers testent la résistance à la fatigue. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "Fartlek · Les Douves · 45min",
      "terrain": "douves",
      "detail": "Fartlek libre dans Bayonne intra-muros : accélérations sur les lignes droites, effort dans les montées des remparts, récup dans les descentes et les portions techniques. 45min hors échauffement. | 🏋 PPG couplée — Bloc PPG 5 min en fin de séance sur le terrain : 🟢 10 squats + 10 fentes + 30s planche + 20s gainage latéral · 🔵 10 squats sautés + 8 step-down (3s) + planche latérale 30s + clamshell 10 · 🔴 10 squats sautés + 8 step-down excentriques (5s) + 8 fentes bulgares + gainage latéral dynamique. Terrain éclairé = possibilité de faire les exercices au sol sans risque."
    },
    "g0": "1h15 route",
    "g1": "1h30 trail facile",
    "g2": "2h15 trail D+",
    "decharge": false
  },
  {
    "sem": 4,
    "mois": "Sept",
    "phase": "Reprise",
    "phaseClass": "phase-reprise",
    "mardi": {
      "titre": "Footing récup + 4×30s allumage",
      "terrain": "intramuros",
      "detail": "Semaine de décharge. Footing confortable 40min, puis 4 accélérations de 30s pour entretenir la vivacité. Pas d'épuisement."
    },
    "jeudi": {
      "titre": "Footing souple 50min",
      "terrain": "intramuros",
      "detail": "Sortie en endurance fondamentale sur terrain varié. Allure conversation obligatoire. On consolide les 3 semaines de reprise."
    },
    "g0": "50min route récup",
    "g1": "1h trail récup",
    "g2": "1h40 trail",
    "decharge": true
  },
  {
    "sem": 5,
    "mois": "Oct",
    "phase": "Base endurance",
    "phaseClass": "phase-base",
    "mardi": {
      "titre": "8×1min Z4 · Halage",
      "terrain": "halage",
      "detail": "8 répétitions de 1min à 85-90% FC max. Récup 2min. Sur le halage : idéal pour une allure constante et contrôlable. Cherchez à garder la même allure sur les 8 répétitions. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "10×1min côte · Puissance",
      "terrain": "voulgre",
      "detail": "10 montées de 1min sur Mousserolles. Récup descente trottinée (~2min). Développe la puissance en montée pour les traileurs, le cardio pour les routards. | 🏋 PPG couplée — Entre chaque répétition de la Voulgre : 🟢 10 squats lents + 8 fentes avant + 5 glute bridge unilatéral · 🔵 8 step-down excentriques (4s) + 8 fentes bulgares + 10 clamshell · 🔴 10 step-down excentriques (5s) + 8 fentes bulgares + 8 squats sautés + planche latérale 30s."
    },
    "g0": "1h20 route",
    "g1": "1h30 trail",
    "g2": "2h30 trail D+",
    "decharge": false
  },
  {
    "sem": 6,
    "mois": "Oct",
    "phase": "Base endurance",
    "phaseClass": "phase-base",
    "mardi": {
      "titre": "10×1min Z4 · Halage",
      "terrain": "halage",
      "detail": "On monte à 10 répétitions. Récup 1min45. Si les dernières répétitions se dégradent : normal. L'objectif est de tenir l'allure le plus longtemps possible. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "8×1min30 · Côte VW",
      "terrain": "vw",
      "detail": "8 montées de 1min30. La durée clé des côtes VW / Voulgre / La Floride. Récup descente. Allure soutenue mais pas maximale — on peut souffler en haut. | 🏋 PPG couplée — Pendant la récup descente en bas de côte : 🟢 8 fentes avant alternées + 8 glute bridge au sol · 🔵 10 fentes bulgares + 8 step-down contrôlé (3s descente) sur bordure · 🔴 8 step-down excentriques (4s descente) + 8 fentes sautées + gainage latéral 30s. Le step-down excentrique est l'exercice clé anti-douleur genou en descente trail."
    },
    "g0": "1h30 route",
    "g1": "1h30 trail +D",
    "g2": "2h30 trail gros D+",
    "decharge": false
  },
  {
    "sem": 7,
    "mois": "Oct",
    "phase": "Base endurance",
    "phaseClass": "phase-base",
    "mardi": {
      "titre": "Fartlek 6×(2min vif / 2min récup)",
      "terrain": "halage",
      "detail": "Fartlek structuré : 2min à allure soutenue, 2min au trot. 6 cycles. Pour les routards : simulation d'allures en course. Pour les traileurs : adaptation terrain naturel. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "Circuit intra-muros : côtes + remparts",
      "terrain": "intramuros",
      "detail": "Circuit Bayonne intra-muros : montées des remparts, plat des quais, techniques des rues pavées. Fartlek naturel dicté par le terrain. 50min hors échauffement."
    },
    "g0": "1h40 route progressive",
    "g1": "1h45 trail",
    "g2": "3h trail pyrénéen",
    "decharge": false
  },
  {
    "sem": 8,
    "mois": "Oct",
    "phase": "Base endurance",
    "phaseClass": "phase-base",
    "mardi": {
      "titre": "Footing + 4×1min allumage",
      "terrain": "intramuros",
      "detail": "Décharge. Footing 35min, quelques accélérations légères. Volume réduit. Le corps absorbe les 3 semaines de travail."
    },
    "jeudi": {
      "titre": "Footing terrain souple 50min",
      "terrain": "intramuros",
      "detail": "Récupération active sur terrain varié. Allure conversation. On ne force rien."
    },
    "g0": "1h route récup",
    "g1": "1h20 récup trail",
    "g2": "2h trail léger",
    "decharge": true
  },
  {
    "sem": 9,
    "mois": "Nov",
    "phase": "Développement",
    "phaseClass": "phase-dev",
    "mardi": {
      "titre": "5×3min seuil · Halage",
      "terrain": "halage",
      "detail": "Introduction au travail seuil. 5 répétitions de 3min à 80-85% FCmax — on peut parler par mots, pas par phrases. Récup 3min. Pour les routards : allure légèrement plus rapide que l'EF. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "6×2min · Côte Voulgre",
      "terrain": "voulgre",
      "detail": "6 côtes de 2min en mode force — effort soutenu, non maximal. Après : 10min d'exercices de force debout (fentes, squats unipodaux). Ancrage dans le renforcement spécifique trail et route. | 🏋 PPG couplée — En bas de la Voulgre pendant les 3 min de récup : 🟢 10 squats lents (4s descente) + 30s planche frontale · 🔵 8 step-down excentriques (4s) + 10 squats + planche latérale 30s chaque côté · 🔴 10 step-down excentriques (5s) + 8 squats sautés + 8 fentes bulgares + gainage latéral dynamique 30s. Progression : les premières semaines faire uniquement les squats, ajouter les step-down quand l'adaptation est faite."
    },
    "g0": "1h40 route cadencée",
    "g1": "1h40 trail",
    "g2": "2h45 trail",
    "decharge": false
  },
  {
    "sem": 10,
    "mois": "Nov",
    "phase": "Développement",
    "phaseClass": "phase-dev",
    "mardi": {
      "titre": "6×3min seuil · Halage",
      "terrain": "halage",
      "detail": "6 répétitions de 3min. La fatigue s'accumule sur les dernières — c'est normal et voulu. Récup 2min30. La base de tout bon plan marathon ou trail. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "8×1min30 · Côte VW",
      "terrain": "vw",
      "detail": "8 côtes intenses. Récup descente en trottinant. Focus : maintenir la cadence de pas en fin de répétition. Montée et récup : les deux se travaillent. | 🏋 PPG couplée — Pendant la récup descente en bas de côte : 🟢 8 fentes avant alternées + 8 glute bridge au sol · 🔵 10 fentes bulgares + 8 step-down contrôlé (3s descente) sur bordure · 🔴 8 step-down excentriques (4s descente) + 8 fentes sautées + gainage latéral 30s. Le step-down excentrique est l'exercice clé anti-douleur genou en descente trail."
    },
    "g0": "1h45 route",
    "g1": "1h40 trail",
    "g2": "2h45 trail",
    "decharge": false
  },
  {
    "sem": 11,
    "mois": "Nov",
    "phase": "Développement",
    "phaseClass": "phase-dev",
    "mardi": {
      "titre": "4×5min seuil · Halage",
      "terrain": "halage",
      "detail": "Allongement des efforts : 4×5min à 80-85% FCmax. Récup 3min. Plus long = plus dur mentalement. Tenez l'allure sur toute la durée. Séance clé pour route et trail. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "Escaliers Biarritz · Introduction",
      "terrain": "escaliers",
      "detail": "Séance spéciale mensuelle : escaliers de la Côte des Basques (~200 marches). 3 blocs de 3 allers-retours. Montée : genoux hauts, bras actifs. Descente : marchée. Total 45min. Ceux qui ne viennent pas : côtes VW à Bayonne. | 🏋 PPG couplée — Au pied des escaliers entre chaque montée complète : 🟢 8 squats poids corps lents — jambes fatiguées, aller sur l'amplitude · 🔵 10 fentes avant + 8 calf raises unilatéraux sur marche du bas · 🔴 8 step-down excentriques (5s) sur la marche du bas + foulées bondissantes 15s. La descente des escaliers est déjà un travail excentrique intense — adapter le volume PPG en conséquence."
    },
    "g0": "1h50 route",
    "g1": "1h45 trail",
    "g2": "3h trail",
    "decharge": false
  },
  {
    "sem": 12,
    "mois": "Nov",
    "phase": "Développement",
    "phaseClass": "phase-dev",
    "mardi": {
      "titre": "Footing + 4×1min30 vivants",
      "terrain": "intramuros",
      "detail": "Décharge. Footing confortable, 4 accélérations de 1min30 sur portions planes. Pas d'épuisement."
    },
    "jeudi": {
      "titre": "Footing récup terrain 45min",
      "terrain": "intramuros",
      "detail": "Récupération active sur terrain varié. Allure très douce. Pas de chrono."
    },
    "g0": "1h30 route récup",
    "g1": "1h30 trail récup",
    "g2": "2h20 trail",
    "decharge": true
  },
  {
    "sem": 13,
    "mois": "Déc",
    "phase": "Force / D+",
    "phaseClass": "phase-force",
    "mardi": {
      "titre": "10×1min vif · Halage",
      "terrain": "halage",
      "detail": "Volume de fractionné augmenté. 10 répétitions de 1min à 88-92% FCmax. Récup 1min30. Court et intense : élévation de la VMA. Bénéfique pour route et trail. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "8×2min · Côte Voulgre",
      "terrain": "voulgre",
      "detail": "8 côtes de 2min en mode puissance. Bras très actifs. Descente en marchant pour récupérer pleinement. Après : 5min de foulées bondissantes. | 🏋 PPG couplée — En bas de la Voulgre pendant les 3 min de récup : 🟢 10 squats lents (4s descente) + 30s planche frontale · 🔵 8 step-down excentriques (4s) + 10 squats + planche latérale 30s chaque côté · 🔴 10 step-down excentriques (5s) + 8 squats sautés + 8 fentes bulgares + gainage latéral dynamique 30s. Progression : les premières semaines faire uniquement les squats, ajouter les step-down quand l'adaptation est faite."
    },
    "g0": "1h45 route spécifique",
    "g1": "1h45 trail D+",
    "g2": "3h trail gros D+",
    "decharge": false
  },
  {
    "sem": 14,
    "mois": "Déc",
    "phase": "Force / D+",
    "phaseClass": "phase-force",
    "mardi": {
      "titre": "6×2min seuil + 4×45s vif",
      "terrain": "halage",
      "detail": "Deux blocs : 6×2min seuil (récup 2min) puis après 5min, 4×45s à fond. Double stimulus endurance + vivacité. Séance incontournable marathon et trail. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "5×montée · Escaliers Biarritz",
      "terrain": "escaliers",
      "detail": "Séance spéciale mensuelle. 5 montées complètes des escaliers (~200 marches). Descente marchée, récup 3min. ~90s à 2min par montée. Après : 10min foulées bondissantes. Alternative Mousserolles pour ceux qui restent. | 🏋 PPG couplée — Au pied des escaliers entre chaque montée complète : 🟢 8 squats poids corps lents — jambes fatiguées, aller sur l'amplitude · 🔵 10 fentes avant + 8 calf raises unilatéraux sur marche du bas · 🔴 8 step-down excentriques (5s) sur la marche du bas + foulées bondissantes 15s. La descente des escaliers est déjà un travail excentrique intense — adapter le volume PPG en conséquence."
    },
    "g0": "1h50 route",
    "g1": "1h50 trail D+",
    "g2": "3h trail",
    "decharge": false
  },
  {
    "sem": 15,
    "mois": "Déc",
    "phase": "Force / D+",
    "phaseClass": "phase-force",
    "mardi": {
      "titre": "3×10min seuil · Halage",
      "terrain": "halage",
      "detail": "Longues répétitions au seuil : 3×10min à 80-85% FC. Récup 4min. Exigeant mentalement — tenez l'allure sur les 10 dernières minutes de chaque bloc. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "Sortie montagne mensuelle · Mondarrain",
      "terrain": "montagne",
      "detail": "Sortie montagne du mois : Mondarrain ou Ursuya. 4 à 6 montées longues de 3-5min, descente récup. Total 1h30-2h. Groupe B : séance côtes normale à Mousserolles. Retrouvailles après pour un verre ensemble. | 🏋 PPG couplée — Le terrain fait déjà 80% du travail. Ajouter entre 2 montées : 🟢 8 squats lents sur terrain plat + marche active dans la descente · 🔵 8 step-down sur rocher plat (4s) + 8 fentes en descente + gainage 30s · 🔴 10 step-down excentriques (5s) + 8 fentes bulgares sur le terrain + clamshell 10 chaque côté. Les descentes techniques sur sentier = travail excentrique intense pour les quadriceps."
    },
    "g0": "2h route longue",
    "g1": "2h trail D+",
    "g2": "3h30 trail",
    "decharge": false
  },
  {
    "sem": 16,
    "mois": "Déc",
    "phase": "Force / D+",
    "phaseClass": "phase-force",
    "mardi": {
      "titre": "Footing festif + 6×30s allumage",
      "terrain": "intramuros",
      "detail": "Semaine de Noël. On s'entraîne en mode plaisir dans Bayonne. Footing tranquille, 6 petites accélérations. L'essentiel c'est de bouger."
    },
    "jeudi": {
      "titre": "Footing + éducatifs 40min",
      "terrain": "intramuros",
      "detail": "Décharge de fin d'année. Sortie légère, technique. Pas d'intensité. Rechargez les batteries pour janvier."
    },
    "g0": "1h30 route récup",
    "g1": "1h30 trail récup",
    "g2": "2h30 léger",
    "decharge": true
  },
  {
    "sem": 17,
    "mois": "Jan",
    "phase": "Prépa trail / route",
    "phaseClass": "phase-prepa",
    "mardi": {
      "titre": "4×6min seuil · Halage",
      "terrain": "halage",
      "detail": "Reprise intensive de janvier. 4×6min au seuil (80-83% FC). Récup 3min30. Maintenez une allure constante sur chaque répétition. Très spécifique marathon et semi. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "8×2min · Côte Voulgre",
      "terrain": "voulgre",
      "detail": "8 côtes de 2min en puissance. Force spécifique trail et côtes de route. Après 4 côtes : 2min de récup complète. | 🏋 PPG couplée — En bas de la Voulgre pendant les 3 min de récup : 🟢 10 squats lents (4s descente) + 30s planche frontale · 🔵 8 step-down excentriques (4s) + 10 squats + planche latérale 30s chaque côté · 🔴 10 step-down excentriques (5s) + 8 squats sautés + 8 fentes bulgares + gainage latéral dynamique 30s. Progression : les premières semaines faire uniquement les squats, ajouter les step-down quand l'adaptation est faite."
    },
    "g0": "2h route en endurance",
    "g1": "2h trail avec D+",
    "g2": "3h30 trail gros D+",
    "decharge": false
  },
  {
    "sem": 18,
    "mois": "Jan",
    "phase": "Prépa trail / route",
    "phaseClass": "phase-prepa",
    "mardi": {
      "titre": "5×6min seuil progressif",
      "terrain": "halage",
      "detail": "5 répétitions. La 5e sera difficile — c'est intentionnel. Allure légèrement plus haute sur les premières. On construit la résistance à la fatigue. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "Parc Les Girouettes · Fartlek nature 55min",
      "terrain": "girouettes",
      "detail": "Sortie spéciale mensuelle sur Anglet : parc Les Girouettes ou boucle plage + Chiberta. Fartlek naturel 55min. Terrain varié, sortie ressourçante. Un des plus beaux circuits de la section. | 🏋 PPG couplée — Bloc PPG de 5 min à la fin du fartlek avant retour : 🟢 10 squats + 10 fentes + 30s planche frontale + 30s gainage latéral chaque · 🔵 10 squats sautés (réception souple) + 10 step-down (3s) + planche latérale dynamique 30s · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + gainage latéral + clamshell 10. Se fait debout, sur le terrain — pas besoin de s'allonger."
    },
    "g0": "2h route longue progressive",
    "g1": "2h trail",
    "g2": "3h30 trail",
    "decharge": false
  },
  {
    "sem": 19,
    "mois": "Jan",
    "phase": "Prépa trail / route",
    "phaseClass": "phase-prepa",
    "mardi": {
      "titre": "2×15min seuil · Halage",
      "terrain": "halage",
      "detail": "Deux longues plages au seuil, récup 5min entre. Très exigeant, très efficace. La séance reine pour développer l'endurance de course. Route comme trail en bénéficient autant. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "10×2min · Côte Voulgre + descente",
      "terrain": "voulgre",
      "detail": "10 côtes de 2min. Descente travaillée : petits pas rapides, genoux fléchis, regard loin. 50% montée / 50% descente technique. | 🏋 PPG couplée — En bas de la Voulgre pendant les 3 min de récup : 🟢 10 squats lents (4s descente) + 30s planche frontale · 🔵 8 step-down excentriques (4s) + 10 squats + planche latérale 30s chaque côté · 🔴 10 step-down excentriques (5s) + 8 squats sautés + 8 fentes bulgares + gainage latéral dynamique 30s. Progression : les premières semaines faire uniquement les squats, ajouter les step-down quand l'adaptation est faite."
    },
    "g0": "2h10 route",
    "g1": "2h trail",
    "g2": "3h30 trail",
    "decharge": false
  },
  {
    "sem": 20,
    "mois": "Jan",
    "phase": "Prépa trail / route",
    "phaseClass": "phase-prepa",
    "mardi": {
      "titre": "Footing 45min + 6×1min souple",
      "terrain": "halage",
      "detail": "Décharge. Footing facile avec 6 accélérations légères. Entretien de la vivacité sans fatigue. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "Footing terrain souple 50min",
      "terrain": "intramuros",
      "detail": "Récupération active sur terrain varié. Allure très douce."
    },
    "g0": "1h30 route récup",
    "g1": "1h30 récup trail",
    "g2": "2h30 léger",
    "decharge": true
  },
  {
    "sem": 21,
    "mois": "Fév",
    "phase": "Pré-compétition",
    "phaseClass": "phase-precomp",
    "mardi": {
      "titre": "3×8min allure course · Halage",
      "terrain": "halage",
      "detail": "Simulation allure course pour les routards (semi/marathon), allure cible trail pour les traileurs. 3 blocs de 8min. Récup 4min. Très spécifique selon l'objectif de chacun. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "Fartlek 10×1min · Intra-muros",
      "terrain": "intramuros",
      "detail": "10 accélérations d'1min sur terrain varié dans le vieux Bayonne. Récup 1min30 trottinée. Développe la capacité à relancer, gérer les changements de rythme."
    },
    "g0": "2h route allure marathon",
    "g1": "2h trail D+",
    "g2": "4h trail pyrénéen",
    "decharge": false
  },
  {
    "sem": 22,
    "mois": "Fév",
    "phase": "Pré-compétition",
    "phaseClass": "phase-precomp",
    "mardi": {
      "titre": "4×8min allure course",
      "terrain": "halage",
      "detail": "4 répétitions. Récup 3min30. Régularité > vitesse. Si la 4e ne tient pas : l'allure des 3 premières était trop élevée. On ajuste, on ne force pas. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "Sortie montagne mensuelle · Ursuya",
      "terrain": "montagne",
      "detail": "Sortie montagne du mois : Ursuya (678m). Montées longues de 5-8min, descente récup. Très spécifique pour les traileurs pré-compétition. Groupe B : séance côtes normales + fartlek à Bayonne. | 🏋 PPG couplée — Le terrain fait déjà 80% du travail. Ajouter entre 2 montées : 🟢 8 squats lents sur terrain plat + marche active dans la descente · 🔵 8 step-down sur rocher plat (4s) + 8 fentes en descente + gainage 30s · 🔴 10 step-down excentriques (5s) + 8 fentes bulgares sur le terrain + clamshell 10 chaque côté. Les descentes techniques sur sentier = travail excentrique intense pour les quadriceps."
    },
    "g0": "2h route semi-marathon",
    "g1": "3h trail D+",
    "g2": "4h trail",
    "decharge": false
  },
  {
    "sem": 23,
    "mois": "Fév",
    "phase": "Pré-compétition",
    "phaseClass": "phase-precomp",
    "mardi": {
      "titre": "5×6min allure + accélération finale",
      "terrain": "halage",
      "detail": "5×6min avec les 2 dernières minutes de chaque bloc légèrement plus rapides. On apprend à finir fort — capital pour les fins de marathon et de trail. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "Fartlek trail 55min · Intra-muros",
      "terrain": "intramuros",
      "detail": "Fartlek naturel avec accent sur les montées des remparts. Chaque montée est franchie fort. Récup dans les descentes et les plats. 55min sans chrono sur les efforts."
    },
    "g0": "2h route tempo",
    "g1": "2h trail",
    "g2": "4h trail",
    "decharge": false
  },
  {
    "sem": 24,
    "mois": "Fév",
    "phase": "Pré-compétition",
    "phaseClass": "phase-precomp",
    "mardi": {
      "titre": "Footing + 6×45s vivants",
      "terrain": "halage",
      "detail": "Décharge. Footing facile avec 6 accélérations courtes et vives. Entretien de la vivacité sans fatigue."
    },
    "jeudi": {
      "titre": "Footing léger + éducatifs 40min",
      "terrain": "intramuros",
      "detail": "Séance légère. Éducatifs de course, foulées bondissantes douces. Pas d'intensité. Semaine de soufflage."
    },
    "g0": "1h30 route récup",
    "g1": "1h30 trail récup",
    "g2": "2h30 léger",
    "decharge": true
  },
  {
    "sem": 25,
    "mois": "Mars",
    "phase": "Objectifs printemps",
    "phaseClass": "phase-senpereko",
    "mardi": {
      "titre": "6×1min dynamiques + éducatifs",
      "terrain": "vw",
      "detail": "Séance de maintien. 6 répétitions vives avec focus technique. Éducatifs de course. On garde les jambes éveillées avant les premières courses de printemps. | 🏋 PPG couplée — Après chaque descente, avant de repartir : 🟢 8 fentes alternées lentes + 30s équilibre unipodal · 🔵 10 fentes alternées + 8 calf raises unilatéraux sur bordure · 🔴 8 fentes bulgares (pied arrière surélevé) + 10 calf raises excentrique (3s descente). Bloc final commun : 2×30s planche frontale après la dernière côte."
    },
    "jeudi": {
      "titre": "Footing légèrement vallonné 40min",
      "terrain": "intramuros",
      "detail": "Sortie de fraîcheur. Allure conversation. Quelques petites montées pour rappeler aux jambes ce qui les attend."
    },
    "g0": "Semi ou 10km local 🏁",
    "g1": "1h30 trail léger",
    "g2": "2h30 trail",
    "event": "Courses de printemps — mars/avril",
    "decharge": false
  },
  {
    "sem": 26,
    "mois": "Mars",
    "phase": "Objectifs printemps",
    "phaseClass": "phase-senpereko",
    "mardi": {
      "titre": "Footing + 4×30s allumage",
      "terrain": "intramuros",
      "detail": "S-1 avant une course ou semaine de gestion. Footing très facile avec 4 accélérations légères. Maximum 40min."
    },
    "jeudi": {
      "titre": "Fartlek trail intra-muros 45min",
      "terrain": "intramuros",
      "detail": "Fartlek dans Bayonne. Plaisir de courir dans la ville. Allure selon les sensations."
    },
    "g0": "Course route locale 🏁 ou 2h route",
    "g1": "Trail local 🏁 ou 2h trail",
    "g2": "Trail D+ 🏁 ou 3h trail",
    "decharge": false
  },
  {
    "sem": 27,
    "mois": "Mars",
    "phase": "Objectifs printemps",
    "phaseClass": "phase-senpereko",
    "mardi": {
      "titre": "Reprise qualité 5×3min seuil",
      "terrain": "halage",
      "detail": "On reprend l'intensité après une course ou une semaine allégée. 5×3min au seuil pour relancer la machine. Évaluez les sensations. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "8×1min30 · Côte VW · Retour force",
      "terrain": "vw",
      "detail": "Retour sur les côtes. 8×1min30, récup descente. Reprise du travail spécifique. | 🏋 PPG couplée — Pendant la récup descente en bas de côte : 🟢 8 fentes avant alternées + 8 glute bridge au sol · 🔵 10 fentes bulgares + 8 step-down contrôlé (3s descente) sur bordure · 🔴 8 step-down excentriques (4s descente) + 8 fentes sautées + gainage latéral 30s. Le step-down excentrique est l'exercice clé anti-douleur genou en descente trail."
    },
    "g0": "1h45 route récup",
    "g1": "2h trail",
    "g2": "3h30 trail",
    "decharge": false
  },
  {
    "sem": 28,
    "mois": "Mars",
    "phase": "Objectifs printemps",
    "phaseClass": "phase-senpereko",
    "mardi": {
      "titre": "Footing récup 40min",
      "terrain": "intramuros",
      "detail": "Récupération. Footing très facile pour éliminer les toxines. Pas d'intensité."
    },
    "jeudi": {
      "titre": "Footing récup 45min + étirements",
      "terrain": "halage",
      "detail": "Récupération sur le halage. Plat = moins de contrainte mécanique."
    },
    "g0": "1h30 route récup",
    "g1": "1h30 trail récup",
    "g2": "2h récup trail",
    "decharge": true
  },
  {
    "sem": 29,
    "mois": "Avr",
    "phase": "Construction été",
    "phaseClass": "phase-euskal",
    "mardi": {
      "titre": "5×3min seuil + 4×1min vif",
      "terrain": "halage",
      "detail": "Séance double : seuil puis vivacité. 5×3min seuil (récup 2min30) puis 4×1min vifs après 5min de récup. Résistance à la fatigue. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "6×2min · Côte Voulgre + descente",
      "terrain": "voulgre",
      "detail": "6 côtes de 2min + descentes longues et contrôlées. Travail complet montée / descente. | 🏋 PPG couplée — En bas de la Voulgre pendant les 3 min de récup : 🟢 10 squats lents (4s descente) + 30s planche frontale · 🔵 8 step-down excentriques (4s) + 10 squats + planche latérale 30s chaque côté · 🔴 10 step-down excentriques (5s) + 8 squats sautés + 8 fentes bulgares + gainage latéral dynamique 30s. Progression : les premières semaines faire uniquement les squats, ajouter les step-down quand l'adaptation est faite."
    },
    "g0": "2h route",
    "g1": "2h trail D+",
    "g2": "3h trail",
    "decharge": false
  },
  {
    "sem": 30,
    "mois": "Avr",
    "phase": "Construction été",
    "phaseClass": "phase-euskal",
    "mardi": {
      "titre": "4×8min allure cible · Halage",
      "terrain": "halage",
      "detail": "4 blocs de 8min à l'allure cible de chacun : allure semi/marathon pour les routards, allure trail cible pour les traileurs. Important : reproduire exactement l'allure prévue, pas plus vite. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "Sortie montagne mensuelle · Mondarrain",
      "terrain": "montagne",
      "detail": "Sortie mensuelle sur le Mondarrain depuis Itxassou. Fartlek en montée, descentes récup. Total 1h45-2h. Groupe B : fartlek intra-muros 50min à Bayonne. | 🏋 PPG couplée — Le terrain fait déjà 80% du travail. Ajouter entre 2 montées : 🟢 8 squats lents sur terrain plat + marche active dans la descente · 🔵 8 step-down sur rocher plat (4s) + 8 fentes en descente + gainage 30s · 🔴 10 step-down excentriques (5s) + 8 fentes bulgares sur le terrain + clamshell 10 chaque côté. Les descentes techniques sur sentier = travail excentrique intense pour les quadriceps."
    },
    "g0": "2h15 route",
    "g1": "2h trail",
    "g2": "4h trail",
    "decharge": false
  },
  {
    "sem": 31,
    "mois": "Avr",
    "phase": "Construction été",
    "phaseClass": "phase-euskal",
    "mardi": {
      "titre": "2×20min seuil · Halage",
      "terrain": "halage",
      "detail": "Deux longues plages au seuil, récup 5min entre. La durée la plus longue du programme. Très formateur pour les efforts longs en route et trail. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "8×2min · Côte Voulgre + descente tech.",
      "terrain": "voulgre",
      "detail": "8 côtes de 2min + descentes techniques soignées. Montée et descente travaillées avec la même exigence. | 🏋 PPG couplée — En bas de la Voulgre pendant les 3 min de récup : 🟢 10 squats lents (4s descente) + 30s planche frontale · 🔵 8 step-down excentriques (4s) + 10 squats + planche latérale 30s chaque côté · 🔴 10 step-down excentriques (5s) + 8 squats sautés + 8 fentes bulgares + gainage latéral dynamique 30s. Progression : les premières semaines faire uniquement les squats, ajouter les step-down quand l'adaptation est faite."
    },
    "g0": "2h15 route longue",
    "g1": "2h trail D+",
    "g2": "4h trail",
    "decharge": false
  },
  {
    "sem": 32,
    "mois": "Avr",
    "phase": "Construction été",
    "phaseClass": "phase-euskal",
    "mardi": {
      "titre": "Footing 40min + 5×1min vifs",
      "terrain": "halage",
      "detail": "Décharge. Footing facile avec 5 accélérations courtes. On préserve les jambes. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "Sortie récup terrain 45min",
      "terrain": "intramuros",
      "detail": "Récupération active. Terrain naturel. Allure très douce."
    },
    "g0": "1h45 route léger",
    "g1": "1h45 trail léger",
    "g2": "3h léger",
    "decharge": true
  },
  {
    "sem": 33,
    "mois": "Mai",
    "phase": "Objectifs été",
    "phaseClass": "phase-euskal",
    "mardi": {
      "titre": "Footing + 6×45s vivants",
      "terrain": "halage",
      "detail": "Séance de maintien légère. Footing facile avec 6 accélérations courtes. Entretien de la vivacité."
    },
    "jeudi": {
      "titre": "Fartlek Les Girouettes ou Intra-muros 45min",
      "terrain": "girouettes",
      "detail": "Fartlek dans Bayonne ou Anglet, accent technique. Terrain varié, allure dictée par le terrain. | 🏋 PPG couplée — Bloc PPG de 5 min à la fin du fartlek avant retour : 🟢 10 squats + 10 fentes + 30s planche frontale + 30s gainage latéral chaque · 🔵 10 squats sautés (réception souple) + 10 step-down (3s) + planche latérale dynamique 30s · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + gainage latéral + clamshell 10. Se fait debout, sur le terrain — pas besoin de s'allonger."
    },
    "g0": "Course route locale 🏁 ou 1h45 route",
    "g1": "1h30 trail léger",
    "g2": "2h30 trail",
    "event": "Courses de mai — trails locaux",
    "decharge": false
  },
  {
    "sem": 34,
    "mois": "Mai",
    "phase": "Objectifs été",
    "phaseClass": "phase-euskal",
    "mardi": {
      "titre": "5×3min seuil · Halage",
      "terrain": "halage",
      "detail": "Retour au seuil. 5×3min, récup 3min. On recharge les qualités après une éventuelle course ou période intense. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "8×1min30 · Côte VW · Puissance",
      "terrain": "vw",
      "detail": "8 côtes de 1min30. Retour au travail de force spécifique. Descente récup trottinée. | 🏋 PPG couplée — Pendant la récup descente en bas de côte : 🟢 8 fentes avant alternées + 8 glute bridge au sol · 🔵 10 fentes bulgares + 8 step-down contrôlé (3s descente) sur bordure · 🔴 8 step-down excentriques (4s descente) + 8 fentes sautées + gainage latéral 30s. Le step-down excentrique est l'exercice clé anti-douleur genou en descente trail."
    },
    "g0": "2h route",
    "g1": "2h trail",
    "g2": "3h30 trail",
    "decharge": false
  },
  {
    "sem": 35,
    "mois": "Mai",
    "phase": "Objectifs été",
    "phaseClass": "phase-recup",
    "mardi": {
      "titre": "Footing récup 40min très facile",
      "terrain": "intramuros",
      "detail": "Récupération douce selon les charges accumulées. Footing très facile. Pas de performance."
    },
    "jeudi": {
      "titre": "Marche ou footing léger 45min",
      "terrain": "intramuros",
      "detail": "Récupération active au choix. Selon les jambes : marche dynamique ou footing très léger."
    },
    "g0": "1h30 route récup",
    "g1": "1h30 trail récup",
    "g2": "2h30 récup trail",
    "decharge": false
  },
  {
    "sem": 36,
    "mois": "Mai",
    "phase": "Construction",
    "phaseClass": "phase-recup",
    "mardi": {
      "titre": "Footing vallonné 50min",
      "terrain": "intramuros",
      "detail": "Retour progressif. Terrain naturel, allure douce. On réintroduit le dénivelé pour préparer l'été."
    },
    "jeudi": {
      "titre": "Technique descente · Côte Voulgre 45min",
      "terrain": "voulgre",
      "detail": "Retour sur les côtes uniquement pour la descente. Pas d'intensité en montée. Focus complet sur la technique de descente trail. | 🏋 PPG couplée — Entre chaque répétition de la Voulgre (récup active) : 🟢 10 squats lents + 8 fentes avant + 5 glute bridge unilatéral chaque côté · 🔵 8 step-down excentriques (4s) + 8 fentes bulgares + clamshell 10 chaque · 🔴 10 step-down excentriques (5s) + 8 fentes bulgares lestées + 8 squats sautés + planche latérale 30s. Bloc final unique : 2×10 calf raises unilatéraux sur bordure de trottoir."
    },
    "g0": "1h30 route",
    "g1": "1h30 trail",
    "g2": "2h30 trail",
    "decharge": false
  },
  {
    "sem": 37,
    "mois": "Juin",
    "phase": "Construction",
    "phaseClass": "phase-base",
    "mardi": {
      "titre": "8×2min seuil · Halage",
      "terrain": "halage",
      "detail": "Retour aux affaires. 8×2min au seuil, récup 2min. On repart sur une base solide pour l'été. Volume et intensité remontent progressivement. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "8×2min côte longue",
      "terrain": "voulgre",
      "detail": "8 côtes de 2min. Reprise du travail spécifique trail. Volume en hausse. | 🏋 PPG couplée — En bas de la Voulgre pendant les 3 min de récup : 🟢 10 squats lents (4s descente) + 30s planche frontale · 🔵 8 step-down excentriques (4s) + 10 squats + planche latérale 30s chaque côté · 🔴 10 step-down excentriques (5s) + 8 squats sautés + 8 fentes bulgares + gainage latéral dynamique 30s. Progression : les premières semaines faire uniquement les squats, ajouter les step-down quand l'adaptation est faite."
    },
    "g0": "2h route",
    "g1": "2h trail D+",
    "g2": "4h trail",
    "decharge": false
  },
  {
    "sem": 38,
    "mois": "Juin",
    "phase": "Construction",
    "phaseClass": "phase-base",
    "mardi": {
      "titre": "5×5min seuil · Halage",
      "terrain": "halage",
      "detail": "5×5min au seuil. On allonge les efforts. Développe la résistance à l'effort soutenu. Récup 3min. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "Boucle plage + Chiberta · 60min",
      "terrain": "plage",
      "detail": "Sortie mensuelle Anglet : boucle plage + Chiberta ou parc Les Girouettes. 60min fartlek nature. Un des circuits les plus agréables de la section, parfait pour l'été."
    },
    "g0": "2h route",
    "g1": "2h trail",
    "g2": "4h trail",
    "decharge": false
  },
  {
    "sem": 39,
    "mois": "Juin",
    "phase": "Construction",
    "phaseClass": "phase-base",
    "mardi": {
      "titre": "10×2min seuil intense · Halage",
      "terrain": "halage",
      "detail": "Volume de seuil élevé : 10×2min, récup 1min30. Beaucoup de répétitions. Accumulation de travail au seuil sans épuisement. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "Sortie montagne mensuelle · Ursuya",
      "terrain": "montagne",
      "detail": "Sortie mensuelle de juin sur l'Ursuya. Tempo trail : 2 blocs de 20min à allure soutenue. Total 1h30-2h. Groupe B : fartlek intra-muros 55min. | 🏋 PPG couplée — Le terrain fait déjà 80% du travail. Ajouter entre 2 montées : 🟢 8 squats lents sur terrain plat + marche active dans la descente · 🔵 8 step-down sur rocher plat (4s) + 8 fentes en descente + gainage 30s · 🔴 10 step-down excentriques (5s) + 8 fentes bulgares sur le terrain + clamshell 10 chaque côté. Les descentes techniques sur sentier = travail excentrique intense pour les quadriceps."
    },
    "g0": "2h route",
    "g1": "2h trail D+",
    "g2": "4h trail",
    "decharge": false
  },
  {
    "sem": 40,
    "mois": "Juin",
    "phase": "Construction",
    "phaseClass": "phase-base",
    "mardi": {
      "titre": "Footing + 5×1min30 vivants",
      "terrain": "intramuros",
      "detail": "Décharge. Footing dans le parc avec 5 accélérations. Volume réduit."
    },
    "jeudi": {
      "titre": "Footing récup 50min",
      "terrain": "halage",
      "detail": "Récupération active sur le halage. Plat, doux. On consolide le mois."
    },
    "g0": "1h45 récup route",
    "g1": "1h45 récup trail",
    "g2": "3h léger",
    "decharge": true
  },
  {
    "sem": 41,
    "mois": "Juil",
    "phase": "Bloc montagne",
    "phaseClass": "phase-montagne",
    "mardi": {
      "titre": "5×5min seuil · Halage",
      "terrain": "halage",
      "detail": "Montée en intensité. 5×5min au seuil avec récup 3min. Construction de la base solide avant le bloc estival. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "Montagne mensuelle · Mondarrain + fartlek",
      "terrain": "montagne",
      "detail": "Sortie montagne intensive. 5-6 montées longues (5-8min) sur le Mondarrain. Descentes récup. Total 2h-2h30. Groupe B : 10×2min côtes VW / La Floride. | 🏋 PPG couplée — Le terrain fait déjà 80% du travail. Ajouter entre 2 montées : 🟢 8 squats lents sur terrain plat + marche active dans la descente · 🔵 8 step-down sur rocher plat (4s) + 8 fentes en descente + gainage 30s · 🔴 10 step-down excentriques (5s) + 8 fentes bulgares sur le terrain + clamshell 10 chaque côté. Les descentes techniques sur sentier = travail excentrique intense pour les quadriceps."
    },
    "g0": "2h30 route longue",
    "g1": "2h30 trail D+",
    "g2": "5h trail ou montagne",
    "decharge": false
  },
  {
    "sem": 42,
    "mois": "Juil",
    "phase": "Bloc montagne",
    "phaseClass": "phase-montagne",
    "mardi": {
      "titre": "3×12min seuil · Halage",
      "terrain": "halage",
      "detail": "Très longues répétitions au seuil. 3×12min récup 4min. La durée la plus longue du programme. Mentalement exigeant. Capital pour le marathon et les longs trails d'été. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "Escaliers Biarritz · 10×montée explosive",
      "terrain": "escaliers",
      "detail": "Séance spéciale mensuelle : 10 montées complètes à allure maximale soutenue. Descente lente et contrôlée (excentrique). Récup 2min. Total 1h15. Alternative : côtes VW / La Floride pour ceux qui restent. | 🏋 PPG couplée — Au pied des escaliers entre chaque montée complète : 🟢 8 squats poids corps lents — jambes fatiguées, aller sur l'amplitude · 🔵 10 fentes avant + 8 calf raises unilatéraux sur marche du bas · 🔴 8 step-down excentriques (5s) sur la marche du bas + foulées bondissantes 15s. La descente des escaliers est déjà un travail excentrique intense — adapter le volume PPG en conséquence."
    },
    "g0": "2h30 route",
    "g1": "2h30 trail",
    "g2": "5h trail montagne",
    "decharge": false
  },
  {
    "sem": 43,
    "mois": "Juil",
    "phase": "Bloc montagne",
    "phaseClass": "phase-montagne",
    "mardi": {
      "titre": "Fartlek Les Douves ou Intra-muros 60min",
      "terrain": "douves",
      "detail": "60min de fartlek avec effort intense en montée des remparts et récup en descente. Simule les relances trail. | 🏋 PPG couplée — Bloc PPG 5 min en fin de séance sur le terrain : 🟢 10 squats + 10 fentes + 30s planche + 20s gainage latéral · 🔵 10 squats sautés + 8 step-down (3s) + planche latérale 30s + clamshell 10 · 🔴 10 squats sautés + 8 step-down excentriques (5s) + 8 fentes bulgares + gainage latéral dynamique. Terrain éclairé = possibilité de faire les exercices au sol sans risque."
    },
    "jeudi": {
      "titre": "Montagne mensuelle · Ursuya descentes",
      "terrain": "montagne",
      "detail": "Sortie montagne Ursuya avec focus descentes techniques. 8 montées de 2min + descentes longues à vive allure. Groupe B : fartlek intra-muros + descentes techniques côtes. | 🏋 PPG couplée — Le terrain fait déjà 80% du travail. Ajouter entre 2 montées : 🟢 8 squats lents sur terrain plat + marche active dans la descente · 🔵 8 step-down sur rocher plat (4s) + 8 fentes en descente + gainage 30s · 🔴 10 step-down excentriques (5s) + 8 fentes bulgares sur le terrain + clamshell 10 chaque côté. Les descentes techniques sur sentier = travail excentrique intense pour les quadriceps."
    },
    "g0": "2h30 route",
    "g1": "2h30 trail",
    "g2": "5h trail ou weekend montagne",
    "decharge": false
  },
  {
    "sem": 44,
    "mois": "Juil",
    "phase": "Bloc montagne",
    "phaseClass": "phase-montagne",
    "mardi": {
      "titre": "Footing + 6×1min vivants",
      "terrain": "halage",
      "detail": "Décharge. Volume très réduit. Récupération complète. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "jeudi": {
      "titre": "Footing récup 50min",
      "terrain": "intramuros",
      "detail": "Récupération active. Allure très douce."
    },
    "g0": "2h route léger",
    "g1": "2h trail léger",
    "g2": "3h30 léger récup",
    "decharge": true
  },
  {
    "sem": 45,
    "mois": "Août",
    "phase": "Objectifs été / récup",
    "phaseClass": "phase-grp",
    "mardi": {
      "titre": "Footing + 6×30s allumage",
      "terrain": "intramuros",
      "detail": "Maintien de la forme. Footing 40min avec 6 petites accélérations. On n'épuise pas, on entretient avant les objectifs d'été."
    },
    "jeudi": {
      "titre": "Footing léger 45min + 4×1min",
      "terrain": "halage",
      "detail": "Maintien sur le halage. 4 accélérations légères. Léger et efficace. | 🏋 PPG couplée — Bloc PPG 5 min après le fractionné, avant le retour calme : 🟢 10 squats + 10 fentes alternées + 30s planche frontale · 🔵 8 squats sautés réception souple + 10 fentes + gainage latéral 30s chaque côté · 🔴 10 squats sautés + 8 step-down excentriques (4s) + 8 fentes bulgares + planche dynamique 40s. Ne pas faire après le retour calme — les jambes doivent encore être chaudes pour l'adaptation musculaire."
    },
    "g0": "2h route (ou course 🏁)",
    "g1": "2h trail (ou course trail 🏁)",
    "g2": "3h trail récup",
    "event": "Objectifs été — trails / routes d'août",
    "decharge": false
  },
  {
    "sem": 46,
    "mois": "Août",
    "phase": "Récupération active",
    "phaseClass": "phase-grp",
    "mardi": {
      "titre": "Footing + 4×45s vifs",
      "terrain": "intramuros",
      "detail": "Volume réduit de 40%. Footing très facile avec 4 petites accélérations. Récupération si effort important le weekend."
    },
    "jeudi": {
      "titre": "Footing récup 35min · Halage",
      "terrain": "halage",
      "detail": "Très léger. Plat. Juste pour bouger les jambes après un weekend chargé."
    },
    "g0": "1h30 route léger",
    "g1": "2h trail léger",
    "g2": "2h30 trail",
    "decharge": false
  },
  {
    "sem": 47,
    "mois": "Août",
    "phase": "Récupération fin saison",
    "phaseClass": "phase-grp",
    "mardi": {
      "titre": "Footing + 3×1min frais",
      "terrain": "intramuros",
      "detail": "Fin de saison. Footing léger dans Bayonne avec 3 petites accélérations pour garder la vivacité."
    },
    "jeudi": {
      "titre": "Footing récup 30min + étirements",
      "terrain": "intramuros",
      "detail": "Minimal. On referme la saison en douceur. La saison prochaine commence en septembre."
    },
    "g0": "1h route plaisir",
    "g1": "1h30 trail plaisir",
    "g2": "2h trail plaisir",
    "decharge": false
  },
  {
    "sem": 48,
    "mois": "Août",
    "phase": "Bilan & renouveau",
    "phaseClass": "phase-grp",
    "mardi": {
      "titre": "Footing plaisir 40min · Bayonne",
      "terrain": "intramuros",
      "detail": "Dernier footing de la saison dans Bayonne. Profitez de la ville, courez sans montre. C'est la saison prochaine qui commence en septembre."
    },
    "jeudi": {
      "titre": "Bilan collectif · Footing + café",
      "terrain": "intramuros",
      "detail": "Séance bilan conviviale. Footing ensemble, puis café ou bière. On parle de la saison écoulée et on prépare la suivante. Tradition de la section."
    },
    "g0": "Récup libre",
    "g1": "Récup libre",
    "g2": "Récup complète",
    "decharge": false
  }
];


const calFixed = [
  {
    "id": "f1",
    "date": "2026-09-07",
    "type": "social",
    "titre": "Reprise collective + BBQ",
    "desc": "Reprise de saison au stade La Floride. Footing d'accueil + BBQ de rentrée. Anciens et nouveaux membres bienvenus."
  },
  {
    "id": "f2",
    "date": "2026-09-21",
    "type": "trail",
    "titre": "Sortie trail La Floride → Anglet",
    "desc": "Sortie groupe trail mixte. Départ La Floride → Mousserolles → Les Girouettes → retour. ~2h. Tous niveaux."
  },
  {
    "id": "f3",
    "date": "2026-10-05",
    "type": "route",
    "titre": "Sortie longue route — Bayonne → Biarritz",
    "desc": "Sortie longue dimanche matin. Bayonne → Anglet → Biarritz par la côte → retour. ~2h. Allure EF."
  },
  {
    "id": "f4",
    "date": "2026-10-12",
    "type": "montagne",
    "titre": "🏔 Sortie montagne — Ursuya",
    "desc": "Groupe A : Ursuya depuis Sare (678m). Groupe B : côtes VW + fartlek Bayonne. Retrouvailles au café."
  },
  {
    "id": "f5",
    "date": "2026-10-26",
    "type": "rando",
    "titre": "Rando Rhune — familles bienvenues",
    "desc": "Rando conviviale sur la Rhune. Ouvert aux familles. Pique-nique au sommet. 3h30 aller-retour."
  },
  {
    "id": "f6",
    "date": "2026-11-02",
    "type": "trail",
    "titre": "Trail nocturne intra-muros Bayonne",
    "desc": "Sortie nocturne dans Bayonne illuminée. Lampes frontales obligatoires. Remparts → quais → citadelle. 1h30."
  },
  {
    "id": "f7",
    "date": "2026-11-09",
    "type": "montagne",
    "titre": "🏔 Sortie montagne — Mondarrain",
    "desc": "Mondarrain depuis Itxassou (749m). Groupe A : montées techniques. Groupe B : footing Bayonne."
  },
  {
    "id": "f8",
    "date": "2026-12-07",
    "type": "montagne",
    "titre": "🏔 Sortie montagne hivernale — Ursuya",
    "desc": "Ursuya en hiver. Équipement adapté requis. Brouillard basque et vues dégagées si chance."
  },
  {
    "id": "f9",
    "date": "2026-12-21",
    "type": "social",
    "titre": "Footing de Noël + repas section",
    "desc": "Footing festif dans Bayonne illuminée. Puis repas de section. Une tradition."
  },
  {
    "id": "f10",
    "date": "2027-01-11",
    "type": "montagne",
    "titre": "🏔 Sortie montagne — Jaizkibel côté espagnol",
    "desc": "Monte Jaizkibel depuis Fontarrabie. Vue sur le Txingudi. ~3h. Covoiturage depuis La Floride (~35 min)."
  },
  {
    "id": "f11",
    "date": "2027-01-25",
    "type": "route",
    "titre": "Sortie longue allure semi",
    "desc": "Sortie pour ceux qui préparent un semi-marathon de printemps. 1h45 allure progressive."
  },
  {
    "id": "f12",
    "date": "2027-02-08",
    "type": "montagne",
    "titre": "🏔 Sortie montagne — Artzamendi",
    "desc": "Artzamendi depuis Itxassou. Circuit trail varié. ~2h30. Montée régulière, descente technique."
  },
  {
    "id": "f13",
    "date": "2027-02-22",
    "type": "rando",
    "titre": "Trek 2 jours — Voie de la Bidassoa",
    "desc": "Weekend rando : vendredi soir → dimanche. Itinéraire sur la Bidassoa. Hébergement gîte."
  },
  {
    "id": "f14",
    "date": "2027-03-22",
    "type": "montagne",
    "titre": "🏔 Sortie montagne — Mondarrain lever de soleil",
    "desc": "Montée au Mondarrain pour le solstice de printemps. Départ 7h. Café thermos obligatoire."
  },
  {
    "id": "f15",
    "date": "2027-04-19",
    "type": "montagne",
    "titre": "🏔 Sortie Pyrénées — La Rhune",
    "desc": "La Rhune depuis Col de Saint-Ignace. ~3h aller-retour. Vue Atlantique et Pyrénées. Tous niveaux trail."
  },
  {
    "id": "f16",
    "date": "2027-06-06",
    "type": "social",
    "titre": "Course d'orientation intra-muros",
    "desc": "Organisation interne : course d'orientation dans le vieux Bayonne. Équipes mixtes, ouvert aux familles."
  },
  {
    "id": "f17",
    "date": "2027-06-21",
    "type": "montagne",
    "titre": "🏔 Mondarrain au coucher de soleil",
    "desc": "Montée pour le solstice d'été. Départ 18h, coucher de soleil au sommet. Pique-nique partagé."
  },
  {
    "id": "f18",
    "date": "2027-07-05",
    "type": "montagne",
    "titre": "🏔 Sortie Pyrénées — Pic d'Orhy",
    "desc": "Sortie niveau confirmé : Pic d'Orhy (2017m) depuis Larrau. ~5h AR. Covoiturage Bayonne."
  },
  {
    "id": "f19",
    "date": "2027-07-19",
    "type": "rando",
    "titre": "Trek 2 jours — Haute Soule",
    "desc": "Bivouac 2 jours. Larrau → Iraty. Nuit en cabane. Inscription via boîte à idées."
  }
];


const circuits = {
  fondamental: {
    corpo: [
      { bloc:'ð¥ Activation (8 min)', exos:[
        {id:'squat_pc', dose:'2Ã15 Â· allure lente'},
        {id:'clamshell', dose:'2Ã15 chaque cÃ´tÃ©'},
        {id:'cheville_proprio', dose:'2Ã30 sec chaque'},
        {id:'planche', dose:'2Ã30 sec'},
      ]},
      { bloc:'ð¦µ Force jambes (15 min)', exos:[
        {id:'step_up', dose:'3Ã10 chaque Â· 3s descente'},
        {id:'step_down', dose:'3Ã8 chaque Â· 4s descente'},
        {id:'fentes', dose:'3Ã10 chaque'},
        {id:'glute_bridge', dose:'3Ã12 chaque'},
      ]},
      { bloc:'ð§± Gainage (10 min)', exos:[
        {id:'dead_bug', dose:'3Ã8 alternÃ©s lents'},
        {id:'bird_dog', dose:'3Ã8 alternÃ©s Â· pause 2s'},
        {id:'planche_lat', dose:'3Ã30 sec chaque'},
      ]},
      { bloc:'ð Mollets / cheville (7 min)', exos:[
        {id:'calf_raises', dose:'3Ã15 Â· complet'},
        {id:'tibialis', dose:'3Ã20'},
      ]},
      { bloc:'ð¿ Ãtirements (5 min)', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'ischios', dose:'60 sec chaque'},
        {id:'mollets_etirement', dose:'60 sec Ã 2 variantes'},
      ]}
    ],
    elastiques: [
      { bloc:'ð¥ Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3Ã10 pas chaque sens'},
        {id:'clamshell', dose:'3Ã12 Â· Ã©lastique lÃ©ger'},
        {id:'cheville_proprio', dose:'2Ã30 sec chaque'},
      ]},
      { bloc:'ð¦µ Force jambes (15 min)', exos:[
        {id:'step_up', dose:'3Ã10 chaque Â· poids cheville'},
        {id:'step_down', dose:'3Ã10 chaque Â· 4s Â· poids cheville'},
        {id:'rdl_unipodal', dose:'3Ã10 Â· KB lÃ©ger ou haltÃ¨re'},
        {id:'glute_bridge', dose:'3Ã12 Â· Ã©lastique sur cuisses'},
      ]},
      { bloc:'ð§± Gainage (12 min)', exos:[
        {id:'dead_bug', dose:'3Ã10 Â· Ã©lastique sur pied'},
        {id:'pallof_press', dose:'3Ã10 chaque cÃ´tÃ©'},
        {id:'planche_lat', dose:'3Ã35 sec chaque'},
        {id:'bird_dog', dose:'3Ã10 Â· poids cheville'},
      ]},
      { bloc:'ð Mollets (7 min)', exos:[
        {id:'calf_raises', dose:'3Ã15 Â· marche Â· poids cheville'},
        {id:'tibialis', dose:'3Ã15 Â· Ã©lastique'},
        {id:'abducteurs_debout', dose:'3Ã15 chaque Â· Ã©lastique'},
      ]},
      { bloc:'ð¿ Ãtirements (5 min)', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'mollets_etirement', dose:'60 sec Ã 2 variantes'},
      ]}
    ],
    salle: [
      { bloc:'ð¥ Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3Ã10 pas Â· Ã©lastique fort'},
        {id:'abducteurs_debout', dose:'3Ã15 chaque Â· machine'},
        {id:'cheville_proprio', dose:'2Ã30 sec chaque'},
      ]},
      { bloc:'ð¦µ Force jambes (20 min)', exos:[
        {id:'squat_pc', dose:'4Ã12 Â· goblet squat KB'},
        {id:'fentes', dose:'4Ã10 chaque Â· haltÃ¨res'},
        {id:'step_up', dose:'3Ã10 chaque Â· KB ou haltÃ¨res'},
        {id:'rdl_unipodal', dose:'3Ã10 Â· KB moyen'},
        {id:'leg_press', dose:'3Ã12 unilatÃ©ral'},
      ]},
      { bloc:'ð§± Gainage (12 min)', exos:[
        {id:'pallof_press', dose:'3Ã10 chaque cÃ´tÃ© Â· cÃ¢ble'},
        {id:'dead_bug', dose:'3Ã10 Â· KB tenu'},
        {id:'planche_lat', dose:'3Ã35 sec chaque'},
      ]},
      { bloc:'ð Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'4Ã15 Â· KB lourd Â· marche'},
        {id:'tibialis', dose:'3Ã15 Â· machine ou disque'},
        {id:'glute_bridge', dose:'4Ã12 Â· hip thrust barre lÃ©gÃ¨re'},
      ]},
      { bloc:'ð¿ Ãtirements (5 min)', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'bandelette', dose:'60 sec chaque Â· foam roller'},
      ]}
    ]
  },
  force: {
    corpo: [
      { bloc:'ð¥ Activation (8 min)', exos:[
        {id:'clamshell', dose:'2Ã15 Â· lent'},
        {id:'monster_walk', dose:'2Ã10 pas chaque sens'},
        {id:'squat_pc', dose:'2Ã10 Â· 3s descente excentrique'},
      ]},
      { bloc:'ð¦µ Force maximale (20 min)', exos:[
        {id:'squat_unipodal', dose:'4Ã8 chaque Â· 4s descente'},
        {id:'step_down', dose:'4Ã10 chaque Â· 5s excentrique'},
        {id:'fentes', dose:'4Ã8 chaque Â· 3s excentrique'},
        {id:'rdl_unipodal', dose:'3Ã10 chaque Â· lent'},
      ]},
      { bloc:'ð§± Gainage lourd (12 min)', exos:[
        {id:'planche', dose:'4Ã50 sec'},
        {id:'planche_lat', dose:'3Ã40 sec + 10 dips'},
        {id:'pallof_press', dose:'Sans Ã©quip : planche rotative'},
      ]},
      { bloc:'ð Mollets intensif (8 min)', exos:[
        {id:'calf_raises', dose:'4Ã20 Â· amplitude max'},
        {id:'tibialis', dose:'3Ã20'},
      ]},
      { bloc:'ð¿ Ãtirements (5 min)', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'ischios', dose:'90 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
      ]}
    ],
    elastiques: [
      { bloc:'ð¥ Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3Ã12 Â· Ã©lastique fort aux chevilles'},
        {id:'clamshell', dose:'3Ã12 Â· Ã©lastique fort'},
        {id:'abducteurs_debout', dose:'3Ã12 chaque Â· Ã©lastique'},
      ]},
      { bloc:'ð¦µ Force (20 min)', exos:[
        {id:'squat_unipodal', dose:'4Ã8 Â· 4s excentrique Â· poids cheville'},
        {id:'step_down', dose:'4Ã10 Â· 5s Â· poids cheville'},
        {id:'rdl_unipodal', dose:'4Ã10 Â· KB moyen'},
        {id:'fentes', dose:'4Ã8 chaque Â· poids cheville'},
      ]},
      { bloc:'ð§± Gainage (12 min)', exos:[
        {id:'pallof_press', dose:'4Ã10 chaque Â· Ã©lastique fort'},
        {id:'dead_bug', dose:'3Ã12 Â· poids cheville'},
        {id:'planche_lat', dose:'3Ã45 sec + dips'},
      ]},
      { bloc:'ð Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'4Ã15 Â· poids cheville Â· marche'},
        {id:'tibialis', dose:'3Ã20 Â· Ã©lastique'},
        {id:'glute_bridge', dose:'3Ã12 Â· Ã©lastique sur cuisses Â· poids sur bassin'},
      ]},
      { bloc:'ð¿ Ãtirements', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'ischios', dose:'Ã©lastique Â· 90 sec chaque'},
        {id:'bandelette', dose:'60 sec chaque'},
      ]}
    ],
    salle: [
      { bloc:'ð¥ Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3Ã12 Â· Ã©lastique fort'},
        {id:'hip_thrust', dose:'2Ã15 Â· barre lÃ©gÃ¨re Â· activation'},
      ]},
      { bloc:'ð¦µ Force maximale (25 min)', exos:[
        {id:'squat_pc', dose:'5Ã5 Â· back squat chargÃ© Â· 3s excentrique'},
        {id:'fentes', dose:'4Ã8 chaque Â· barre ou KB lourds'},
        {id:'step_down', dose:'4Ã10 Â· 5s Â· KB lourd'},
        {id:'rdl_unipodal', dose:'4Ã8 Â· barre ou KB lourd'},
        {id:'leg_press', dose:'4Ã10 Â· chargÃ© Â· unilatÃ©ral'},
      ]},
      { bloc:'ð Fessiers (10 min)', exos:[
        {id:'hip_thrust', dose:'4Ã10 Â· barre chargÃ©e'},
        {id:'abducteurs_debout', dose:'3Ã15 Â· machine'},
      ]},
      { bloc:'ð Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'5Ã15 Â· machine chargÃ©e'},
        {id:'tibialis', dose:'3Ã15 Â· machine'},
      ]},
      { bloc:'ð¿ Ãtirements', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'ischios', dose:'90 sec chaque'},
        {id:'bandelette', dose:'foam roller Â· 90 sec chaque'},
      ]}
    ]
  },
  specifique: {
    corpo: [
      { bloc:'ð¥ Activation (8 min)', exos:[
        {id:'squat_jump', dose:'2Ã6 Â· lÃ©ger Â· allumage'},
        {id:'clamshell', dose:'2Ã12 Â· lent'},
        {id:'cheville_proprio', dose:'2Ã30 sec'},
      ]},
      { bloc:'â¡ PliomÃ©trie trail (15 min)', exos:[
        {id:'squat_jump', dose:'4Ã8 Â· puissants'},
        {id:'bounding', dose:'4Ã10 aller-retour'},
        {id:'drop_jump', dose:'3Ã8 Â· box 20cm'},
      ]},
      { bloc:'ð¦µ Force unilatÃ©rale (12 min)', exos:[
        {id:'squat_unipodal', dose:'3Ã8 chaque Â· lent'},
        {id:'step_down', dose:'3Ã10 Â· 5s excentrique'},
        {id:'rdl_unipodal', dose:'3Ã10 chaque'},
      ]},
      { bloc:'ð Mollets & cheville (8 min)', exos:[
        {id:'calf_raises', dose:'3Ã20 Â· amplitude max'},
        {id:'cheville_proprio', dose:'3Ã30 sec Â· yeux fermÃ©s'},
      ]},
      { bloc:'ð¿ Ãtirements (7 min)', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'mollets_etirement', dose:'60 sec Ã 2 variantes'},
      ]}
    ],
    elastiques: [
      { bloc:'ð¥ Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3Ã10 pas Â· Ã©lastique'},
        {id:'bounding', dose:'2Ã8 Â· activation'},
      ]},
      { bloc:'â¡ PliomÃ©trie (15 min)', exos:[
        {id:'squat_jump', dose:'4Ã8'},
        {id:'bounding', dose:'4Ã10 AR Â· poids cheville'},
        {id:'drop_jump', dose:'3Ã8'},
      ]},
      { bloc:'ð¦µ Force (12 min)', exos:[
        {id:'squat_unipodal', dose:'3Ã8 Â· poids cheville'},
        {id:'step_down', dose:'3Ã10 Â· poids cheville Â· 5s'},
        {id:'rdl_unipodal', dose:'3Ã10 Â· KB'},
      ]},
      { bloc:'ð§± Gainage anti-rotation (8 min)', exos:[
        {id:'pallof_press', dose:'4Ã10 chaque Â· Ã©lastique'},
        {id:'planche_lat', dose:'3Ã40 sec + dips'},
      ]},
      { bloc:'ð¿ Ãtirements', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'ischios', dose:'Ã©lastique Â· 60 sec chaque'},
        {id:'bandelette', dose:'60 sec chaque'},
      ]}
    ],
    salle: [
      { bloc:'ð¥ Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3Ã12 Â· fort'},
        {id:'hip_thrust', dose:'2Ã15 Â· activation lÃ©gÃ¨re'},
      ]},
      { bloc:'â¡ PliomÃ©trie (15 min)', exos:[
        {id:'box_jump', dose:'4Ã6 Â· box 40cm'},
        {id:'squat_jump', dose:'3Ã8 Â· gilet lestÃ© lÃ©ger'},
        {id:'drop_jump', dose:'3Ã6 Â· box 30cm'},
        {id:'bounding', dose:'3Ã10 AR'},
      ]},
      { bloc:'ð¦µ Force spÃ©cifique (15 min)', exos:[
        {id:'squat_unipodal', dose:'3Ã8 Â· KB Â· 4s excentrique'},
        {id:'rdl_unipodal', dose:'3Ã10 Â· KB lourd'},
        {id:'hip_thrust', dose:'3Ã10 Â· barre chargÃ©e'},
      ]},
      { bloc:'ð Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'4Ã15 Â· machine chargÃ©e'},
        {id:'tibialis', dose:'3Ã15 Â· machine'},
      ]},
      { bloc:'ð¿ Ãtirements', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'bandelette', dose:'foam roller Â· 90 sec'},
      ]}
    ]
  },
  competition: {
    corpo: [
      { bloc:'â¡ Activation + vivacitÃ© (10 min)', exos:[
        {id:'squat_jump', dose:'2Ã6 Â· lÃ©ger'},
        {id:'bounding', dose:'2Ã8 aller-retour'},
        {id:'clamshell', dose:'2Ã12 chaque'},
        {id:'cheville_proprio', dose:'2Ã30 sec'},
      ]},
      { bloc:'ð¦µ Entretien force (12 min)', exos:[
        {id:'step_down', dose:'3Ã8 Â· 4s excentrique'},
        {id:'glute_bridge', dose:'3Ã10 chaque'},
        {id:'rdl_unipodal', dose:'3Ã8 Â· lÃ©ger'},
      ]},
      { bloc:'ð Mollets & prÃ©vention (8 min)', exos:[
        {id:'calf_raises', dose:'3Ã15'},
        {id:'tibialis', dose:'3Ã20'},
        {id:'cheville_proprio', dose:'2Ã30 sec yeux fermÃ©s'},
      ]},
      { bloc:'ð¿ Ãtirements (10 min)', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'ischios', dose:'90 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'mollets_etirement', dose:'60 sec Ã 2'},
      ]}
    ],
    elastiques: [
      { bloc:'â¡ Activation (10 min)', exos:[
        {id:'monster_walk', dose:'2Ã10 Â· Ã©lastique lÃ©ger'},
        {id:'squat_jump', dose:'2Ã6'},
        {id:'bounding', dose:'2Ã8 AR'},
      ]},
      { bloc:'ð¦µ Entretien (12 min)', exos:[
        {id:'step_down', dose:'3Ã8 Â· poids cheville Â· 4s'},
        {id:'rdl_unipodal', dose:'3Ã8 Â· KB lÃ©ger'},
        {id:'clamshell', dose:'3Ã12 Â· Ã©lastique'},
      ]},
      { bloc:'ð Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'3Ã15 Â· poids cheville'},
        {id:'cheville_proprio', dose:'3Ã30 sec'},
      ]},
      { bloc:'ð¿ Ãtirements', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'bandelette', dose:'foam roller Â· 60 sec'},
      ]}
    ],
    salle: [
      { bloc:'â¡ Activation + pliomÃ©trie lÃ©gÃ¨re (10 min)', exos:[
        {id:'box_jump', dose:'2Ã5 Â· box basse'},
        {id:'monster_walk', dose:'2Ã10 Â· fort'},
        {id:'bounding', dose:'2Ã8 AR'},
      ]},
      { bloc:'ð¦µ Entretien force (15 min)', exos:[
        {id:'squat_unipodal', dose:'3Ã6 Â· KB Â· modÃ©rÃ©'},
        {id:'rdl_unipodal', dose:'3Ã8 Â· KB moyen'},
        {id:'hip_thrust', dose:'3Ã10 Â· modÃ©rÃ©'},
      ]},
      { bloc:'ð Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'3Ã15 Â· machine chargÃ©e'},
        {id:'tibialis', dose:'3Ã15'},
      ]},
      { bloc:'ð¿ Ãtirements', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'ischios', dose:'90 sec chaque'},
        {id:'bandelette', dose:'foam roller Â· 90 sec'},
      ]}
    ]
  }
}
