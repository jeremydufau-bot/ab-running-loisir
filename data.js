// ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
// data.js ÃÂ¢ÃÂÃÂ DonnÃÂÃÂ©es AB Running Loisir
// Modifiable par les coachs via admin.html
// ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ

const terrainLabel = {
  // Bayonne
  halage:    {icon:'ÃÂ°ÃÂÃÂÃÂ',label:'Halage ÃÂÃÂ· Nive',cls:'tag-sky'},
  floride:   {icon:'ÃÂ¢ÃÂÃÂ°ÃÂ¯ÃÂ¸ÃÂ',label:'CÃÂÃÂ´te La Floride',cls:'tag-blue'},
  voulgre:   {icon:'ÃÂ¢ÃÂÃÂ°ÃÂ¯ÃÂ¸ÃÂ',label:'CÃÂÃÂ´te Voulgre',cls:'tag-blue'},
  vw:        {icon:'ÃÂ¢ÃÂÃÂ°ÃÂ¯ÃÂ¸ÃÂ',label:'CÃÂÃÂ´te VW',cls:'tag-blue'},
  douves:    {icon:'ÃÂ°ÃÂÃÂÃÂ¿',label:'Les Douves',cls:'tag-green'},
  intramuros:{icon:'ÃÂ°ÃÂÃÂÃÂ°',label:'Intra-muros',cls:'tag-green'},
  stades:    {icon:'ÃÂ°ÃÂÃÂÃÂ',label:'Tour stades rugby',cls:'tag-sky'},
  // Anglet
  coteanglet:{icon:'ÃÂ¢ÃÂÃÂ°ÃÂ¯ÃÂ¸ÃÂ',label:'CÃÂÃÂ´te Anglet',cls:'tag-blue'},
  girouettes:{icon:'ÃÂ°ÃÂÃÂÃÂ¿',label:'Parc Les Girouettes',cls:'tag-green'},
  chiberta:  {icon:'ÃÂ°ÃÂÃÂÃÂ²',label:'ForÃÂÃÂªt Chiberta',cls:'tag-green'},
  plage:     {icon:'ÃÂ°ÃÂÃÂÃÂ',label:'Plage + Chiberta',cls:'tag-sky'},
  // Biarritz & montagne
  escaliers: {icon:'ÃÂ°ÃÂÃÂªÃÂ',label:'Escaliers Biarritz',cls:'tag-ocre'},
  montagne:  {icon:'ÃÂ°ÃÂÃÂÃÂ',label:'Ursuya / Mondarrain',cls:'tag-rouge'},
  vvf:       {icon:'ÃÂ¢ÃÂÃÂ°ÃÂ¯ÃÂ¸ÃÂ',label:'CÃÂÃÂ´te VVF Anglet',cls:'tag-blue'},
}

const phaseLabels = {
  'phase-reprise':   {label:'Reprise',cls:'phase-reprise'},
  'phase-base':      {label:'Base endurance',cls:'phase-base'},
  'phase-dev':       {label:'DÃÂÃÂ©veloppement',cls:'phase-dev'},
  'phase-force':     {label:'Force / D+',cls:'phase-force'},
  'phase-prepa':     {label:'PrÃÂÃÂ©pa trail',cls:'phase-prepa'},
  'phase-precomp':   {label:'PrÃÂÃÂ©-compÃÂÃÂ©tition',cls:'phase-precomp'},
  'phase-senpereko': {label:'Objectif course',cls:'phase-event'},
  'phase-euskal':    {label:'Objectif course',cls:'phase-event'},
  'phase-recup':     {label:'RÃÂÃÂ©cupÃÂÃÂ©ration',cls:'phase-recup'},
  'phase-grp':       {label:'Bloc montagne',cls:'phase-montagne'},
  'phase-montagne':  {label:'Bloc montagne',cls:'phase-montagne'},
}

const niveauxData = {
  "3030": {
    "label": "30\"/30\" (VMA courte)",
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
    ],
    "notes": "Séance de référence VMA — récup trottinée obligatoire"
  },
  "30s": {
    "label": "Efforts 30 secondes (VMA courte)",
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
    ],
    "notes": "Séance neuromusculaire — jamais à fond dès le départ"
  },
  "45s": {
    "label": "Efforts 45 secondes",
    "reps": [
      "6×",
      "8×",
      "12×"
    ],
    "recup": [
      "2min",
      "1min45",
      "1min30"
    ],
    "allure": [
      "allure Z4",
      "allure Z4-Z5",
      "allure Z5"
    ],
    "notes": "Intermédiaire entre 30s et 1min — idéal en côte"
  },
  "1min": {
    "label": "Efforts 1 minute",
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
    ],
    "notes": "La base du fractionné court — tenir l'allure sur toutes les reps"
  },
  "1min30": {
    "label": "Efforts 1min30",
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
    ],
    "notes": "Durée idéale pour les côtes VW et Voulgre"
  },
  "2min": {
    "label": "Efforts 2 minutes",
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
    ],
    "notes": "Transition vers le seuil — rythme à maintenir sur toutes les reps"
  },
  "3min": {
    "label": "Efforts 3 minutes (seuil)",
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
    ],
    "notes": "Introduction au travail seuil — peut parler par mots"
  },
  "4min": {
    "label": "Efforts 4 minutes (seuil)",
    "reps": [
      "3×",
      "4×",
      "6×"
    ],
    "recup": [
      "4min",
      "3min30",
      "3min"
    ],
    "allure": [
      "allure seuil confort",
      "80-85% FCmax",
      "85-88% FCmax"
    ]
  },
  "5min": {
    "label": "Efforts 5 minutes (seuil)",
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
    ],
    "notes": "Séance clé marathon et trail — régularité avant tout"
  },
  "6min": {
    "label": "Efforts 6 minutes (seuil long)",
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
    "label": "Efforts 8 minutes (allure course)",
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
    ],
    "notes": "Simulation de course — reproduire exactement l'allure cible"
  },
  "10min": {
    "label": "Efforts 10 minutes (tempo)",
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
    "label": "Efforts 12 minutes",
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
      "pas recommandé — faire 2×5min",
      "allure seuil",
      "allure seuil+"
    ]
  },
  "15min": {
    "label": "Efforts 15 minutes (tempo long)",
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
    ],
    "notes": "Séance exigeante mentalement — préparer les ravitaillements"
  },
  "20min": {
    "label": "Efforts 20 minutes (seuil continu)",
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
  "fartlek": {
    "label": "Fartlek (libre ou structuré)",
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
    ],
    "notes": "Adapter au terrain — jamais de chrono sur les efforts"
  },
  "fartlek_structure": {
    "label": "Fartlek structuré (2min/2min)",
    "reps": [
      "4 cycles",
      "6 cycles",
      "8 cycles"
    ],
    "recup": [
      "2min trot",
      "1min30 trot",
      "1min trot"
    ],
    "allure": [
      "Z3-Z4",
      "Z4",
      "Z4-Z5"
    ],
    "notes": "Format : X min vif / X min trot — conserver l'allure identique sur tous les blocs"
  },
  "cote": {
    "label": "Côtes (montée générique)",
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
    ],
    "notes": "Adapter à la longueur de la côte (voir types spécifiques)"
  },
  "cote_30s": {
    "label": "Côtes courtes 30s (La Floride)",
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
      "explosif 8/10",
      "explosif 9/10",
      "max contrôlé"
    ],
    "notes": "Genoux hauts, bras actifs — qualité > quantité"
  },
  "cote_1min": {
    "label": "Côtes 1 minute (VW)",
    "reps": [
      "5×",
      "8×",
      "12×"
    ],
    "recup": [
      "descente marchée",
      "descente trottinée",
      "descente rapide"
    ],
    "allure": [
      "effort soutenu",
      "effort 8/10",
      "effort 9/10"
    ]
  },
  "cote_1min30": {
    "label": "Côtes 1min30 (VW ou Voulgre)",
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
      "soutenu contrôlé",
      "effort 8/10",
      "effort 9/10"
    ],
    "notes": "Descente travaillée : petits pas, genoux fléchis"
  },
  "cote_2min": {
    "label": "Côtes 2 minutes (Voulgre)",
    "reps": [
      "4×",
      "6×",
      "8×"
    ],
    "recup": [
      "3min",
      "2min30",
      "2min"
    ],
    "allure": [
      "puissance maîtrisée",
      "puissance",
      "puissance max"
    ],
    "notes": "Séance phare trail — focus sur la descente aussi"
  },
  "cote_long": {
    "label": "Côtes longues 3-10min (montagne)",
    "reps": [
      "3×",
      "5×",
      "6×"
    ],
    "recup": [
      "récup complète",
      "récup trottinée",
      "récup active"
    ],
    "allure": [
      "effort gérable Z3-Z4",
      "Z4",
      "Z4-Z5"
    ],
    "notes": "Réservé aux sorties montagne — adapter au dénivelé"
  },
  "descente": {
    "label": "Travail de descente technique",
    "reps": [
      "5×",
      "8×",
      "10×"
    ],
    "recup": [
      "montée récup",
      "montée récup",
      "montée récup"
    ],
    "allure": [
      "allure très douce — focus technique",
      "contrôlé",
      "rapide + technique"
    ],
    "notes": "Petits pas, regard loin, genoux fléchis — clé anti-blessure"
  },
  "escaliers": {
    "label": "Escaliers (Côte des Basques)",
    "reps": [
      "3 blocs 3 AR",
      "4 blocs 3 AR",
      "5 blocs 3 AR"
    ],
    "recup": [
      "descente marchée",
      "descente lente",
      "descente contrôlée"
    ],
    "allure": [
      "montée genoux hauts",
      "montée soutenue",
      "montée vive"
    ],
    "notes": "Descente obligatoirement lente — fort impact excentrique quadriceps"
  },
  "ppg_seance": {
    "label": "Séance PPG dédiée (renforcement)",
    "reps": [
      "2 séries",
      "3 séries",
      "4 séries"
    ],
    "recup": [
      "1min récup",
      "45s récup",
      "30s récup"
    ],
    "allure": [
      "technique — pas d'échec",
      "qualité de mouvement",
      "intensité croissante"
    ],
    "notes": "Faire avant la course ou >6h après — jamais en récup active"
  },
  "interval_court": {
    "label": "Intervalles courts (15s-20s)",
    "reps": [
      "8×",
      "12×",
      "16×"
    ],
    "recup": [
      "45s récup",
      "30s récup",
      "20s récup"
    ],
    "allure": [
      "allure VMA",
      "allure VMA+",
      "allure > VMA"
    ],
    "notes": "Format Tabata adapté — explosivité neuromusculaire"
  },
  "allure_marathon": {
    "label": "Sorties allure marathon",
    "reps": [
      "45min",
      "1h15",
      "1h30"
    ],
    "recup": [
      "—",
      "—",
      "—"
    ],
    "allure": [
      "allure marathon +15s/km",
      "allure marathon +5s/km",
      "allure marathon exacte"
    ],
    "notes": "Pratiquer l'allure cible en conditions réelles"
  },
  "allure_semi": {
    "label": "Sorties allure semi",
    "reps": [
      "30min",
      "1h",
      "1h15"
    ],
    "recup": [
      "—",
      "—",
      "—"
    ],
    "allure": [
      "allure semi +10s/km",
      "allure semi exacte",
      "allure semi -5s/km"
    ]
  },
  "sortie_longue": {
    "label": "Sortie longue endurance",
    "reps": [
      "1h",
      "1h30",
      "2h+"
    ],
    "recup": [
      "—",
      "—",
      "—"
    ],
    "allure": [
      "allure EF (conversation)",
      "allure EF",
      "allure EF à EF+"
    ],
    "notes": "Jamais > 80% FCmax — base aérobie fondamentale"
  },
  "sortie_recup": {
    "label": "Sortie récupération active",
    "reps": [
      "40min",
      "50min",
      "1h"
    ],
    "recup": [
      "—",
      "—",
      "—"
    ],
    "allure": [
      "allure très douce",
      "allure douce",
      "allure EF très basse"
    ],
    "notes": "Lendemain de séance intensive — jamais de pression"
  },
  "pyramid_1234321": {
    "label": "Pyramide 1'2'3'4'3'2'1' R=½ temps",
    "reps": [
      "1 passage complet",
      "1 passage + 1 extra 1'2'3'",
      "1 passage + 1 complet"
    ],
    "recup": [
      "R=½ temps effort",
      "R=½ temps",
      "R=½ temps strict"
    ],
    "allure": [
      "Z3 montée, Z2 descente",
      "Z4 sur les hauts, Z3 descente",
      "Z4-Z5 sur les sommets 4'"
    ],
    "notes": "Séance pyramide classique — monter en intensité sur les longs, redescendre sur les courts. R = la moitié du temps de l'effort précédent."
  },
  "pyramid_1246421": {
    "label": "Pyramide 1'2'4'6'4'2'1' R=½ temps",
    "reps": [
      "1 passage complet",
      "1 passage complet",
      "1 passage + bis 1'2'"
    ],
    "recup": [
      "R=½ temps",
      "R=½ temps",
      "R=½ temps strict"
    ],
    "allure": [
      "Z3 sur les longs",
      "Z4 sur les 4' et 6'",
      "Z4-Z5 sur les 6'"
    ],
    "notes": "Pyramide longue — le 6' est la clé. Gérer l'effort pour tenir la descente de la pyramide."
  },
  "pyramid_246642": {
    "label": "Pyramide 2'4'6'6'4'2' R=½ temps",
    "reps": [
      "1 passage complet",
      "1 passage complet",
      "1 passage + répétition 2'"
    ],
    "recup": [
      "R=½ temps",
      "R=½ temps",
      "R=½ temps strict"
    ],
    "allure": [
      "Z3 confort",
      "Z4 sur les 6'",
      "Z4-Z5"
    ],
    "notes": "Double 6' au sommet — séance longue et exigeante. Total effort ~26min sur le passage complet."
  },
  "pyramid_124641": {
    "label": "Pyramide 1'2'4'6'4'1' R=½ temps",
    "reps": [
      "1 passage",
      "1 passage",
      "1 passage + 1'2'"
    ],
    "recup": [
      "R=½ temps",
      "R=½ temps",
      "R=½ temps"
    ],
    "allure": [
      "Z3",
      "Z4 sur 4' et 6'",
      "Z4-Z5 sur les sommets"
    ],
    "notes": "Variante asymétrique — montée progressive jusqu'au 6', descente rapide vers le 1'."
  },
  "fartlek_1234441321": {
    "label": "Fartlek 1'2'3'4'4'4'3'2'1' R=½ temps",
    "reps": [
      "1 passage complet",
      "1 passage complet",
      "1 passage + extra 1'2'3'"
    ],
    "recup": [
      "R=½ temps",
      "R=½ temps",
      "R=½ temps strict"
    ],
    "allure": [
      "allure progressive Z3-Z4",
      "Z4 sur les 4', Z3 en descente",
      "Z4-Z5 sur les 4'"
    ],
    "notes": "Version longue de la pyramide — 3 blocs à 4'. Total ~29min d'effort. Gérer l'allure pour ne pas exploser au premier 4'."
  },
  "fartlek_10x1_1": {
    "label": "Fartlek 10×1'/1' (récup trottinée)",
    "reps": [
      "6×1'/1'",
      "10×1'/1'",
      "12×1'/1'"
    ],
    "recup": [
      "1min trot",
      "1min trot",
      "1min trot vif"
    ],
    "allure": [
      "allure Z4 confort",
      "allure Z4-Z4+",
      "allure Z5"
    ],
    "notes": "Fartlek structuré — récup active obligatoire (trottiner, jamais s'arrêter). Tenir la même allure sur toutes les répétitions."
  },
  "vitesse_8x100_5x200": {
    "label": "8×100m R3' + 5×200m R3'",
    "reps": [
      "6×100m + 3×200m",
      "8×100m + 5×200m",
      "8×100m + 5×200m"
    ],
    "recup": [
      "3min marche",
      "3min trottinée",
      "2min30 trottinée"
    ],
    "allure": [
      "allure confort 800m",
      "allure 800m",
      "allure 400m-800m"
    ],
    "notes": "Séance vitesse en deux blocs — les 100m développent la mécanique de course, les 200m l'endurance de vitesse."
  },
  "vitesse_6x300_4x400": {
    "label": "6×300m + 4×400m",
    "reps": [
      "4×300m + 2×400m",
      "6×300m + 4×400m",
      "6×300m + 4×400m"
    ],
    "recup": [
      "récup 3-4min",
      "récup 3min",
      "récup 2min30"
    ],
    "allure": [
      "allure 1500m-2000m",
      "allure 1500m",
      "allure 1000m-1500m"
    ],
    "notes": "Séance de référence pour développer la puissance aérobie. Tenir l'allure identique sur tous les 300m, idem sur les 400m."
  },
  "vitesse_2x6x200": {
    "label": "2×(6×200m) R=200m récup entre reps, 3-4min entre séries",
    "reps": [
      "1×(6×200m)",
      "2×(6×200m)",
      "2×(6×200m)"
    ],
    "recup": [
      "200m trottiné + 3min",
      "200m trottiné + 3min",
      "200m trottiné + 2min30"
    ],
    "allure": [
      "allure 1500m",
      "allure 1200m",
      "allure 1000m"
    ],
    "notes": "Blocs répétés — la 2e série est plus difficile que la 1re. C'est normal et voulu."
  },
  "vitesse_6x100_5x200": {
    "label": "6×100m + 5×200m",
    "reps": [
      "4×100m + 3×200m",
      "6×100m + 5×200m",
      "6×100m + 5×200m"
    ],
    "recup": [
      "3min",
      "2min30",
      "2min"
    ],
    "allure": [
      "allure 1500m confort",
      "allure 1200m",
      "allure 1000m"
    ],
    "notes": "Séance d'activation et de vitesse combinées — les 100m préparent le système neuromusculaire pour les 200m."
  },
  "vitesse_6x100_4x200_etc": {
    "label": "6×100m + 4×200m + 2×300m + 1×400m (progression)",
    "reps": [
      "Demi-volume",
      "Volume complet",
      "Volume complet"
    ],
    "recup": [
      "récup 3min",
      "récup 3min",
      "récup 2min30"
    ],
    "allure": [
      "allure progressive",
      "allure 1500m→1000m",
      "allure 800m→1000m"
    ],
    "notes": "Séance à volume et distance croissants — difficile de tenir l'allure sur le 400m final. Gérer l'énergie dès les 100m."
  },
  "vitesse_5x100_veille": {
    "label": "5×100m (séance veille de course)",
    "reps": [
      "4×100m",
      "5×100m",
      "5×100m"
    ],
    "recup": [
      "4min récup complète",
      "3min30 récup complète",
      "3min récup complète"
    ],
    "allure": [
      "allure race +5s — jambes légères",
      "allure race",
      "allure race voire légèrement au-dessus"
    ],
    "notes": "Séance d'activation pré-compétition. Jamais épuisant — le but est de réveiller les jambes, pas de s'entraîner. Rester frais."
  },
  "3x15_r5": {
    "label": "3×15' R=5'",
    "reps": [
      "2×12' R=5'",
      "3×15' R=5'",
      "3×15' R=4'"
    ],
    "recup": [
      "5min récup active",
      "5min récup active",
      "4min récup active"
    ],
    "allure": [
      "allure seuil doux Z3",
      "allure seuil Z3-Z4",
      "allure seuil+"
    ],
    "notes": "Séance seuil longue — la plus exigeante mentalement. Tenir l'allure sur le 3e bloc est l'objectif. Si impossible : revenir à 2×15'."
  },
  "8x3_r130": {
    "label": "8×3' R=1'30\"",
    "reps": [
      "5×3' R=1'30\"",
      "8×3' R=1'30\"",
      "8×3' R=1min"
    ],
    "recup": [
      "1min30 trot",
      "1min30 trot",
      "1min trot vif"
    ],
    "allure": [
      "allure seuil doux",
      "allure seuil",
      "allure seuil+"
    ],
    "notes": "Séance volume au seuil — récup courte qui impose de gérer l'allure. Si dégradation dès le 5e bloc : réduire à 6."
  },
  "10x3030_v2": {
    "label": "10×30\"/30\" (version terrain)",
    "reps": [
      "6×30\"/30\"",
      "10×30\"/30\"",
      "15×30\"/30\""
    ],
    "recup": [
      "30s trot",
      "30s trot",
      "30s trot rapide"
    ],
    "allure": [
      "allure 5km+",
      "allure VMA -10%",
      "allure VMA"
    ],
    "notes": "Variante terrain — peut se faire en côte (30s montée / 30s descente récup). Récup ACTIVE obligatoire — ne jamais s'arrêter."
  },
  "2x8x2020": {
    "label": "2×(8×20\"/20\") R=2' entre séries",
    "reps": [
      "1×(8×20\"/20\")",
      "2×(8×20\"/20\")",
      "2×(8×20\"/20\") + 4×"
    ],
    "recup": [
      "2min entre séries",
      "2min entre séries",
      "2min entre séries"
    ],
    "allure": [
      "allure VMA",
      "allure VMA+ (court = plus vite)",
      "allure > VMA"
    ],
    "notes": "Intervalles très courts en double série — le repos de 2min entre séries permet de maintenir la qualité. Format plus doux que le 30/30."
  },
  "30s_r_decrements": {
    "label": "30\" R= 4'-3'-2' (récup décroissante)",
    "reps": [
      "3×30\" R=4'-3'-2'",
      "5×30\" R=4'-3'-2'",
      "7×30\" R=4'-3'-2'-2'-2'"
    ],
    "recup": [
      "récup décroissante",
      "récup décroissante",
      "récup décroissante"
    ],
    "allure": [
      "allure VMA accessible",
      "allure VMA",
      "allure VMA+"
    ],
    "notes": "Séance spéciale — la récup diminue au fil des efforts. Les derniers 30\" se font avec moins de récup : simulation fin de course."
  },
  "cote_20s": {
    "label": "12×20\" côte (explosif court)",
    "reps": [
      "8×20\"",
      "12×20\"",
      "15×20\""
    ],
    "recup": [
      "descente marchée",
      "descente trottinée",
      "descente rapide"
    ],
    "allure": [
      "explosif 8/10 — départ arrêté",
      "explosif 9/10",
      "max contrôlé"
    ],
    "notes": "Côtes très courtes — travail neuromusculaire pur. Chaque effort doit être de qualité : si la puissance baisse, stopper la série."
  },
  "circuit_douves": {
    "label": "6×Circuit Les Douves R=1'30\"",
    "reps": [
      "4×circuit",
      "6×circuit",
      "6×circuit + 2×"
    ],
    "recup": [
      "1min30 récup marche",
      "1min30 récup trot",
      "1min récup"
    ],
    "allure": [
      "allure EF+ à Z3",
      "allure Z3-Z4 dans les côtes",
      "allure Z4 dans les efforts"
    ],
    "notes": "Circuit fartlek naturel sur Les Douves — le terrain dicte l'effort. Accélérer dans les montées et les lignes droites, récupérer dans les descentes et courbes."
  },
  "cote_vvf_pyramide": {
    "label": "Côtes VVF Anglet — Pyramide 3×20\" 3×40\" 6×1' 3×40\" 3×20\"",
    "reps": [
      "1 passage complet",
      "1 passage complet",
      "1 passage + 3×20\" bonus"
    ],
    "recup": [
      "descente marchée",
      "descente trottinée",
      "descente rapide"
    ],
    "allure": [
      "explosif 7/10 sur 20\", soutenu 7/10 sur 40\" et 1'",
      "explosif 8/10 sur 20\", soutenu 8/10 sur 40\" et 1'",
      "max sur 20\", seuil+ sur 40\" et 1'"
    ],
    "notes": "Pyramide sur la côte du VVF à Anglet. Structure : 3×20\" / 3×40\" / 6×1' / 3×40\" / 3×20\". Récup = descente trottinée/marchée. Les 20\" sont explosifs, les 1' sont soutenus. Total : 15 montées. La côte du VVF permet des efforts longs (1') et courts (20\") sur le même terrain."
  },
  "cote_45s": {
    "label": "Côtes 12×45\" (Floride / VW)",
    "reps": [
      "8×45\"",
      "12×45\"",
      "15×45\""
    ],
    "recup": [
      "descente marchée",
      "descente trottinée",
      "descente rapide"
    ],
    "allure": [
      "explosif 7/10",
      "explosif 8/10",
      "explosif 9/10"
    ],
    "notes": "Durée intermédiaire entre 30\" et 1min — idéale côtes VW et La Floride. Chaque montée doit ressembler à la précédente."
  },
  "cote_40s": {
    "label": "Côtes 10×40\" (Floride)",
    "reps": [
      "6×40\"",
      "10×40\"",
      "12×40\""
    ],
    "recup": [
      "descente marchée",
      "descente trottinée",
      "descente rapide"
    ],
    "allure": [
      "explosif 7/10",
      "explosif 8-9/10",
      "max contrôlé"
    ],
    "notes": "Côte La Floride — 40\" permet de bien sentir la côte sans partir en anaérobie. Bras très actifs."
  },
  "cote_8x1_vw": {
    "label": "Côtes 8×1' côte VW",
    "reps": [
      "5×1'",
      "8×1'",
      "10×1'"
    ],
    "recup": [
      "descente marchée",
      "descente trottinée",
      "descente rapide"
    ],
    "allure": [
      "soutenu 7/10",
      "soutenu 8/10",
      "soutenu 9/10"
    ],
    "notes": "Côte VW — 1min régulière. Maintenir la même allure sur toutes les répétitions."
  },
  "cote_10x1_girouettes": {
    "label": "10×1' R=45\" circuit Girouettes",
    "reps": [
      "6×1'",
      "10×1'",
      "12×1'"
    ],
    "recup": [
      "45s récup",
      "45s récup trottiné",
      "45s strict"
    ],
    "allure": [
      "Z3-Z4",
      "Z4",
      "Z4-Z5"
    ],
    "notes": "Circuit Parc Les Girouettes Anglet — récup courte de 45\". Terrain naturel. Plus exigeant que les côtes classiques car récup réduite."
  },
  "45_45_puis_45_30": {
    "label": "5×45\"/45\" + 5×45\"/30\" (récup décroissante)",
    "reps": [
      "3×45/45 + 3×45/30",
      "5×45/45 + 5×45/30",
      "5×45/45 + 5×45/30"
    ],
    "recup": [
      "45s puis 30s trot",
      "45s puis 30s trot",
      "récup strict"
    ],
    "allure": [
      "Z4 confort",
      "Z4",
      "Z4-Z5"
    ],
    "notes": "Double bloc avec récup décroissante — simulation fin de course. Les 45\"/30\" sont plus difficiles car moins de récup."
  },
  "8x30_30_r2_6x1_1": {
    "label": "8×30\"/30\" R=2' + 6×1'/1'",
    "reps": [
      "5×30/30 R2 + 4×1/1",
      "8×30/30 R2 + 6×1/1",
      "8×30/30 R2 + 8×1/1"
    ],
    "recup": [
      "récup entre blocs 2min",
      "2min entre blocs",
      "2min entre blocs"
    ],
    "allure": [
      "Z4",
      "Z4-Z5",
      "Z5 sur les 30\", Z4 sur les 1'"
    ],
    "notes": "Double bloc VMA — les 30/30 chauffent le système, les 1'/1' maintiennent la charge. Bloc exigeant."
  },
  "2x8x30_30_r3": {
    "label": "2×(8×30\"/30\") R=3' entre séries",
    "reps": [
      "1×(8×30/30) R3'",
      "2×(8×30/30) R3'",
      "2×(8×30/30) + extra 4×"
    ],
    "recup": [
      "3min récup entre séries",
      "3min récup",
      "3min récup"
    ],
    "allure": [
      "Z4",
      "Z4-Z5",
      "Z5"
    ],
    "notes": "Double série avec 3min de récup — la 2e série doit être aussi bonne que la 1re. Si impossible : arrêter à 1 série."
  },
  "2x6x30_30_r130": {
    "label": "2×(6×30\"/30\") R=1'30\" entre séries",
    "reps": [
      "1×(6×30/30) R1'30\"",
      "2×(6×30/30) R1'30\"",
      "2×(6×30/30) + extra"
    ],
    "recup": [
      "1min30 récup",
      "1min30 récup",
      "1min30 récup strict"
    ],
    "allure": [
      "Z4",
      "Z4-Z5",
      "Z5"
    ],
    "notes": "Version plus courte que le 2×8 — récup de 1'30\" entre séries. Adapté quand moins de temps."
  },
  "2x8x8s_r2": {
    "label": "2×(8×8\") R=2' entre séries",
    "reps": [
      "1×(8×8\") R2'",
      "2×(8×8\") R2'",
      "2×(8×8\") + 4×"
    ],
    "recup": [
      "2min récup",
      "2min récup",
      "2min récup"
    ],
    "allure": [
      "explosif max",
      "explosif max",
      "> max"
    ],
    "notes": "Très court — travail pur neuromusculaire. 8\" = explosion pure. Récup complète entre chaque. Format peu courant mais très efficace pour la vivacité."
  },
  "5x30_8x1_5x30": {
    "label": "5×30\"/30\" + 8×1'/1' + 5×30\"/30\"",
    "reps": [
      "3×30/30 + 5×1/1 + 3×30/30",
      "5×30/30 + 8×1/1 + 5×30/30",
      "5×30/30 + 10×1/1 + 5×30/30"
    ],
    "recup": [
      "récup trot",
      "récup trot",
      "récup trot"
    ],
    "allure": [
      "Z4 sur tout",
      "Z4-Z5",
      "Z5 courts, Z4 longs"
    ],
    "notes": "Triple bloc symétrique — courts / longs / courts. Les 30\" finaux sont les plus difficiles. Séance complète VMA."
  },
  "fartlek_10x2": {
    "label": "Fartlek 10×2' R~1'",
    "reps": [
      "6×2'",
      "10×2'",
      "12×2'"
    ],
    "recup": [
      "1min trot",
      "1min trot",
      "45s trot"
    ],
    "allure": [
      "Z3-Z4",
      "Z4",
      "Z4-Z5"
    ],
    "notes": "Fartlek régulier 2min — plus exigeant que le 10×1' car efforts plus longs. Récup trottinée obligatoire."
  },
  "fartlek_6x1_x2": {
    "label": "Fartlek 2×(6×1'/1')",
    "reps": [
      "1×(6×1/1)",
      "2×(6×1/1)",
      "2×(6×1/1) + 2×1'"
    ],
    "recup": [
      "récup 2min entre séries",
      "récup 2min",
      "récup 2min"
    ],
    "allure": [
      "Z4",
      "Z4-Z5",
      "Z5"
    ],
    "notes": "Double série de 6×1'/1' — le bloc de récup de 2min entre les séries permet de maintenir la qualité."
  },
  "fartlek_2x8x30": {
    "label": "Fartlek 2×(8×30\"/30\")",
    "reps": [
      "1×(8×30/30)",
      "2×(8×30/30)",
      "2×(8×30/30) + extra"
    ],
    "recup": [
      "récup 2min",
      "récup 2min",
      "récup 2min"
    ],
    "allure": [
      "Z4",
      "Z4-Z5",
      "Z5"
    ],
    "notes": "Double série fartlek 30/30 — identique au 2×(8×30/30) R3' mais avec récup légèrement plus courte."
  },
  "fartlek_321_x3": {
    "label": "Fartlek 3×(3'2'1') — pyramide inverse en série",
    "reps": [
      "2×(3'2'1')",
      "3×(3'2'1')",
      "3×(3'2'1') + 1×"
    ],
    "recup": [
      "récup 2min entre séries",
      "récup 2min",
      "récup 1min30"
    ],
    "allure": [
      "Z3-Z4",
      "Z4",
      "Z4-Z5"
    ],
    "notes": "Pyramide inverse répétée — chaque série descend (3'/2'/1'). Les 1' finaux de chaque série sont vifs. Total effort ~18min."
  },
  "fartlek_5_10_10": {
    "label": "Fartlek 5'-10'-10' R~½ temps",
    "reps": [
      "5'+8'",
      "5'+10'+10'",
      "5'+10'+10'+5'"
    ],
    "recup": [
      "récup ½ temps",
      "récup ½ temps",
      "récup ½ temps"
    ],
    "allure": [
      "Z3",
      "Z3-Z4",
      "Z4"
    ],
    "notes": "3 blocs longs progressifs — le 5' sert d'activation, les deux 10' sont le cœur de la séance. Récup = environ la moitié du bloc précédent."
  },
  "fartlek_3_6_6_3": {
    "label": "Fartlek 3'6'6'3' R~½ temps",
    "reps": [
      "1 passage",
      "1 passage + 3'",
      "1 passage + 3'+3'"
    ],
    "recup": [
      "récup ½ temps",
      "récup ½ temps",
      "récup ½ temps"
    ],
    "allure": [
      "Z3 sur tout",
      "Z3-Z4 sur les 6'",
      "Z4 sur les 6'"
    ],
    "notes": "Double sommet à 6' — montée et descente symétriques. Gérer le premier 6' pour tenir le second."
  },
  "fartlek_5_8_12_r3": {
    "label": "Fartlek progressif 5'-8'-12' R=3'",
    "reps": [
      "5'+8'",
      "5'+8'+12'",
      "5'+8'+12'+5'"
    ],
    "recup": [
      "3min récup",
      "3min récup",
      "3min récup"
    ],
    "allure": [
      "Z3",
      "Z3-Z4 sur le 12'",
      "Z4"
    ],
    "notes": "Séance de volume aérobie croissant — le 12' est le bloc clé. Récup fixe de 3min. Total effort ~25min."
  },
  "fartlek_pyramid_girouettes": {
    "label": "Pyramide 1'2'3'4'4'4'3'2'1' Girouettes",
    "reps": [
      "1 passage complet",
      "1 passage complet",
      "1 passage + extra 1'2'"
    ],
    "recup": [
      "récup ½ temps",
      "récup ½ temps",
      "récup ½ temps"
    ],
    "allure": [
      "Z3 montée, Z2 descente",
      "Z4 sur les 4'",
      "Z4-Z5 sur les 4'"
    ],
    "notes": "Pyramide longue sur le circuit des Girouettes Anglet — terrain naturel qui rend la séance plus technique. Les 3 blocs de 4' sont le sommet."
  },
  "3x7_r130": {
    "label": "3×7' R=1'30\"",
    "reps": [
      "2×7' R=1'30\"",
      "3×7' R=1'30\"",
      "3×7' R=1min"
    ],
    "recup": [
      "1min30 trot",
      "1min30 trot",
      "1min trot"
    ],
    "allure": [
      "allure seuil doux Z3",
      "allure seuil Z3-Z4",
      "allure seuil+"
    ],
    "notes": "Seuil moyen — effort entre le 5' et le 10'. Récup courte de 1'30\" qui impose de gérer l'allure dès le départ."
  },
  "3x8_r1": {
    "label": "3×8' R=1'",
    "reps": [
      "2×8' R=1'",
      "3×8' R=1'",
      "3×8' R=1' + 1×4'"
    ],
    "recup": [
      "1min trot",
      "1min trot",
      "1min trot"
    ],
    "allure": [
      "allure seuil doux",
      "allure seuil",
      "allure seuil+"
    ],
    "notes": "Seuil long avec récup très courte — le 1' de récup impose une gestion très fine. Si impossible de tenir : passer à R=2'."
  },
  "piste_10x400_r200": {
    "label": "10×400m piste R=200m trottiné",
    "reps": [
      "6×400m R200m",
      "10×400m R200m",
      "10×400m R200m"
    ],
    "recup": [
      "200m trot",
      "200m trot",
      "200m trot rapide"
    ],
    "allure": [
      "allure 1500m",
      "allure 1200m-1500m",
      "allure 1000m-1200m"
    ],
    "notes": "Séance de référence piste — 10×400m est la séance classique. Tenir la même allure sur tous les 400m. La récup trottinée de 200m est active."
  },
  "piste_10x300_r100": {
    "label": "10×300m piste R=100m trottiné",
    "reps": [
      "6×300m R100m",
      "10×300m R100m",
      "10×300m R100m"
    ],
    "recup": [
      "100m trot",
      "100m trot",
      "100m trot vif"
    ],
    "allure": [
      "allure 1500m",
      "allure 1200m",
      "allure 1000m"
    ],
    "notes": "10×300m avec récup très courte — séance de volume intense. Tenir l'allure sur les 8 derniers."
  },
  "piste_10x200_r100": {
    "label": "10×200m piste R=100m trottiné",
    "reps": [
      "6×200m R100m",
      "10×200m R100m",
      "10×200m R100m"
    ],
    "recup": [
      "100m trot",
      "100m trot",
      "100m trot vif"
    ],
    "allure": [
      "allure 1500m",
      "allure 1200m",
      "allure 800m-1000m"
    ],
    "notes": "10×200m — séance de vitesse-endurance. Récup courte qui force à gérer l'allure. Attention au départ trop rapide."
  },
  "piste_5x200_5x300_r400": {
    "label": "5×200m + 5×300m R=400m trottiné",
    "reps": [
      "3×200m + 3×300m R400m",
      "5×200m + 5×300m R400m",
      "5×200m + 5×300m R400m"
    ],
    "recup": [
      "400m trot",
      "400m trot",
      "400m trot vif"
    ],
    "allure": [
      "allure 1500m",
      "allure 1200m",
      "allure 1000m"
    ],
    "notes": "Deux blocs distances croissantes avec grande récup — les 300m se font avec des jambes déjà chargées."
  },
  "piste_progression_100_500": {
    "label": "Progression 5×100 + 4×200 + 3×300 + 2×400 + 1×500",
    "reps": [
      "Demi-volume",
      "Volume complet",
      "Volume complet"
    ],
    "recup": [
      "récup 3-4min",
      "récup 3min",
      "récup 2min30"
    ],
    "allure": [
      "progressive allure 1500m→1000m",
      "1500m→1000m→800m",
      "1200m→1000m→800m"
    ],
    "notes": "Séance pyramide croissante — volume total ~3500m. La gestion d'allure est clé : partir conservateur sur les 100m pour tenir le 500m."
  },
  "piste_5x100_4x200_3x300_2x400": {
    "label": "5×100 + 4×200 + 3×300 + 2×400",
    "reps": [
      "Demi-volume",
      "Volume complet",
      "Volume complet"
    ],
    "recup": [
      "récup 3min",
      "récup 3min",
      "récup 2min30"
    ],
    "allure": [
      "allure progressive",
      "1500m→1000m",
      "1200m→1000m"
    ],
    "notes": "Version sans le 500m final — plus abordable que la version longue. Idéale en milieu de prépa."
  },
  "5x1000_halage": {
    "label": "5×1000m Halage R~2-3'",
    "reps": [
      "3×1000m R3'",
      "5×1000m R2'30\"",
      "5×1000m R2' + 1×500m"
    ],
    "recup": [
      "3min récup active",
      "2min30 récup",
      "2min récup"
    ],
    "allure": [
      "allure semi +15s/km",
      "allure semi +5s/km",
      "allure semi exacte"
    ],
    "notes": "Séance reine pour le semi et le marathon — 5×1000m sur le Halage avec marquage km. Tenir exactement la même allure sur tous les 1000m."
  },
  "4x2000_r2": {
    "label": "4×2000m R=2'",
    "reps": [
      "2×2000m R3'",
      "4×2000m R2'",
      "4×2000m R2' + 1×1000m"
    ],
    "recup": [
      "3min récup",
      "2min récup",
      "2min récup"
    ],
    "allure": [
      "allure semi +20s/km",
      "allure semi +10s/km",
      "allure semi"
    ],
    "notes": "Séance longue seuil — chaque 2000m dure ~8-10min. Très exigeant mentalement. Réserver aux phases de prépa compétition."
  },
  "8x50s_vma": {
    "label": "8×50\" (VMA intermédiaire)",
    "reps": [
      "5×50\"",
      "8×50\"",
      "10×50\""
    ],
    "recup": [
      "2min30 récup",
      "2min récup",
      "1min45 récup"
    ],
    "allure": [
      "allure VMA -10%",
      "allure VMA",
      "allure VMA+"
    ],
    "notes": "Durée intermédiaire entre 30\" et 1min — permet un effort plus long que le 30\" tout en restant court. Idéal pour ceux qui peinent sur les 1min."
  }
};




const typeLabel = {
  trail:'ÃÂ°ÃÂÃÂÃÂ¿ Trail', route:'ÃÂ°ÃÂÃÂÃÂ Route', rando:'ÃÂ°ÃÂÃÂ¥ÃÂ¾ Rando',
  montagne:'ÃÂ°ÃÂÃÂÃÂ Montagne', social:'ÃÂ°ÃÂÃÂÃÂ Section'
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
      "titre": "test 2×20min seuil · Halage",
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
      "titre": "test Footing 40min + 5×1min vifs",
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
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¥ Activation (8 min)', exos:[
        {id:'squat_pc', dose:'2ÃÂÃÂ15 ÃÂÃÂ· allure lente'},
        {id:'clamshell', dose:'2ÃÂÃÂ15 chaque cÃÂÃÂ´tÃÂÃÂ©'},
        {id:'cheville_proprio', dose:'2ÃÂÃÂ30 sec chaque'},
        {id:'planche', dose:'2ÃÂÃÂ30 sec'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ¦ÃÂµ Force jambes (15 min)', exos:[
        {id:'step_up', dose:'3ÃÂÃÂ10 chaque ÃÂÃÂ· 3s descente'},
        {id:'step_down', dose:'3ÃÂÃÂ8 chaque ÃÂÃÂ· 4s descente'},
        {id:'fentes', dose:'3ÃÂÃÂ10 chaque'},
        {id:'glute_bridge', dose:'3ÃÂÃÂ12 chaque'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ§ÃÂ± Gainage (10 min)', exos:[
        {id:'dead_bug', dose:'3ÃÂÃÂ8 alternÃÂÃÂ©s lents'},
        {id:'bird_dog', dose:'3ÃÂÃÂ8 alternÃÂÃÂ©s ÃÂÃÂ· pause 2s'},
        {id:'planche_lat', dose:'3ÃÂÃÂ30 sec chaque'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ Mollets / cheville (7 min)', exos:[
        {id:'calf_raises', dose:'3ÃÂÃÂ15 ÃÂÃÂ· complet'},
        {id:'tibialis', dose:'3ÃÂÃÂ20'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¿ ÃÂÃÂtirements (5 min)', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'ischios', dose:'60 sec chaque'},
        {id:'mollets_etirement', dose:'60 sec ÃÂÃÂ 2 variantes'},
      ]}
    ],
    elastiques: [
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¥ Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3ÃÂÃÂ10 pas chaque sens'},
        {id:'clamshell', dose:'3ÃÂÃÂ12 ÃÂÃÂ· ÃÂÃÂ©lastique lÃÂÃÂ©ger'},
        {id:'cheville_proprio', dose:'2ÃÂÃÂ30 sec chaque'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ¦ÃÂµ Force jambes (15 min)', exos:[
        {id:'step_up', dose:'3ÃÂÃÂ10 chaque ÃÂÃÂ· poids cheville'},
        {id:'step_down', dose:'3ÃÂÃÂ10 chaque ÃÂÃÂ· 4s ÃÂÃÂ· poids cheville'},
        {id:'rdl_unipodal', dose:'3ÃÂÃÂ10 ÃÂÃÂ· KB lÃÂÃÂ©ger ou haltÃÂÃÂ¨re'},
        {id:'glute_bridge', dose:'3ÃÂÃÂ12 ÃÂÃÂ· ÃÂÃÂ©lastique sur cuisses'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ§ÃÂ± Gainage (12 min)', exos:[
        {id:'dead_bug', dose:'3ÃÂÃÂ10 ÃÂÃÂ· ÃÂÃÂ©lastique sur pied'},
        {id:'pallof_press', dose:'3ÃÂÃÂ10 chaque cÃÂÃÂ´tÃÂÃÂ©'},
        {id:'planche_lat', dose:'3ÃÂÃÂ35 sec chaque'},
        {id:'bird_dog', dose:'3ÃÂÃÂ10 ÃÂÃÂ· poids cheville'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ Mollets (7 min)', exos:[
        {id:'calf_raises', dose:'3ÃÂÃÂ15 ÃÂÃÂ· marche ÃÂÃÂ· poids cheville'},
        {id:'tibialis', dose:'3ÃÂÃÂ15 ÃÂÃÂ· ÃÂÃÂ©lastique'},
        {id:'abducteurs_debout', dose:'3ÃÂÃÂ15 chaque ÃÂÃÂ· ÃÂÃÂ©lastique'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¿ ÃÂÃÂtirements (5 min)', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'mollets_etirement', dose:'60 sec ÃÂÃÂ 2 variantes'},
      ]}
    ],
    salle: [
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¥ Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3ÃÂÃÂ10 pas ÃÂÃÂ· ÃÂÃÂ©lastique fort'},
        {id:'abducteurs_debout', dose:'3ÃÂÃÂ15 chaque ÃÂÃÂ· machine'},
        {id:'cheville_proprio', dose:'2ÃÂÃÂ30 sec chaque'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ¦ÃÂµ Force jambes (20 min)', exos:[
        {id:'squat_pc', dose:'4ÃÂÃÂ12 ÃÂÃÂ· goblet squat KB'},
        {id:'fentes', dose:'4ÃÂÃÂ10 chaque ÃÂÃÂ· haltÃÂÃÂ¨res'},
        {id:'step_up', dose:'3ÃÂÃÂ10 chaque ÃÂÃÂ· KB ou haltÃÂÃÂ¨res'},
        {id:'rdl_unipodal', dose:'3ÃÂÃÂ10 ÃÂÃÂ· KB moyen'},
        {id:'leg_press', dose:'3ÃÂÃÂ12 unilatÃÂÃÂ©ral'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ§ÃÂ± Gainage (12 min)', exos:[
        {id:'pallof_press', dose:'3ÃÂÃÂ10 chaque cÃÂÃÂ´tÃÂÃÂ© ÃÂÃÂ· cÃÂÃÂ¢ble'},
        {id:'dead_bug', dose:'3ÃÂÃÂ10 ÃÂÃÂ· KB tenu'},
        {id:'planche_lat', dose:'3ÃÂÃÂ35 sec chaque'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'4ÃÂÃÂ15 ÃÂÃÂ· KB lourd ÃÂÃÂ· marche'},
        {id:'tibialis', dose:'3ÃÂÃÂ15 ÃÂÃÂ· machine ou disque'},
        {id:'glute_bridge', dose:'4ÃÂÃÂ12 ÃÂÃÂ· hip thrust barre lÃÂÃÂ©gÃÂÃÂ¨re'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¿ ÃÂÃÂtirements (5 min)', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'bandelette', dose:'60 sec chaque ÃÂÃÂ· foam roller'},
      ]}
    ]
  },
  force: {
    corpo: [
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¥ Activation (8 min)', exos:[
        {id:'clamshell', dose:'2ÃÂÃÂ15 ÃÂÃÂ· lent'},
        {id:'monster_walk', dose:'2ÃÂÃÂ10 pas chaque sens'},
        {id:'squat_pc', dose:'2ÃÂÃÂ10 ÃÂÃÂ· 3s descente excentrique'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ¦ÃÂµ Force maximale (20 min)', exos:[
        {id:'squat_unipodal', dose:'4ÃÂÃÂ8 chaque ÃÂÃÂ· 4s descente'},
        {id:'step_down', dose:'4ÃÂÃÂ10 chaque ÃÂÃÂ· 5s excentrique'},
        {id:'fentes', dose:'4ÃÂÃÂ8 chaque ÃÂÃÂ· 3s excentrique'},
        {id:'rdl_unipodal', dose:'3ÃÂÃÂ10 chaque ÃÂÃÂ· lent'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ§ÃÂ± Gainage lourd (12 min)', exos:[
        {id:'planche', dose:'4ÃÂÃÂ50 sec'},
        {id:'planche_lat', dose:'3ÃÂÃÂ40 sec + 10 dips'},
        {id:'pallof_press', dose:'Sans ÃÂÃÂ©quip : planche rotative'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ Mollets intensif (8 min)', exos:[
        {id:'calf_raises', dose:'4ÃÂÃÂ20 ÃÂÃÂ· amplitude max'},
        {id:'tibialis', dose:'3ÃÂÃÂ20'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¿ ÃÂÃÂtirements (5 min)', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'ischios', dose:'90 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
      ]}
    ],
    elastiques: [
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¥ Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3ÃÂÃÂ12 ÃÂÃÂ· ÃÂÃÂ©lastique fort aux chevilles'},
        {id:'clamshell', dose:'3ÃÂÃÂ12 ÃÂÃÂ· ÃÂÃÂ©lastique fort'},
        {id:'abducteurs_debout', dose:'3ÃÂÃÂ12 chaque ÃÂÃÂ· ÃÂÃÂ©lastique'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ¦ÃÂµ Force (20 min)', exos:[
        {id:'squat_unipodal', dose:'4ÃÂÃÂ8 ÃÂÃÂ· 4s excentrique ÃÂÃÂ· poids cheville'},
        {id:'step_down', dose:'4ÃÂÃÂ10 ÃÂÃÂ· 5s ÃÂÃÂ· poids cheville'},
        {id:'rdl_unipodal', dose:'4ÃÂÃÂ10 ÃÂÃÂ· KB moyen'},
        {id:'fentes', dose:'4ÃÂÃÂ8 chaque ÃÂÃÂ· poids cheville'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ§ÃÂ± Gainage (12 min)', exos:[
        {id:'pallof_press', dose:'4ÃÂÃÂ10 chaque ÃÂÃÂ· ÃÂÃÂ©lastique fort'},
        {id:'dead_bug', dose:'3ÃÂÃÂ12 ÃÂÃÂ· poids cheville'},
        {id:'planche_lat', dose:'3ÃÂÃÂ45 sec + dips'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'4ÃÂÃÂ15 ÃÂÃÂ· poids cheville ÃÂÃÂ· marche'},
        {id:'tibialis', dose:'3ÃÂÃÂ20 ÃÂÃÂ· ÃÂÃÂ©lastique'},
        {id:'glute_bridge', dose:'3ÃÂÃÂ12 ÃÂÃÂ· ÃÂÃÂ©lastique sur cuisses ÃÂÃÂ· poids sur bassin'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¿ ÃÂÃÂtirements', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'ischios', dose:'ÃÂÃÂ©lastique ÃÂÃÂ· 90 sec chaque'},
        {id:'bandelette', dose:'60 sec chaque'},
      ]}
    ],
    salle: [
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¥ Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3ÃÂÃÂ12 ÃÂÃÂ· ÃÂÃÂ©lastique fort'},
        {id:'hip_thrust', dose:'2ÃÂÃÂ15 ÃÂÃÂ· barre lÃÂÃÂ©gÃÂÃÂ¨re ÃÂÃÂ· activation'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ¦ÃÂµ Force maximale (25 min)', exos:[
        {id:'squat_pc', dose:'5ÃÂÃÂ5 ÃÂÃÂ· back squat chargÃÂÃÂ© ÃÂÃÂ· 3s excentrique'},
        {id:'fentes', dose:'4ÃÂÃÂ8 chaque ÃÂÃÂ· barre ou KB lourds'},
        {id:'step_down', dose:'4ÃÂÃÂ10 ÃÂÃÂ· 5s ÃÂÃÂ· KB lourd'},
        {id:'rdl_unipodal', dose:'4ÃÂÃÂ8 ÃÂÃÂ· barre ou KB lourd'},
        {id:'leg_press', dose:'4ÃÂÃÂ10 ÃÂÃÂ· chargÃÂÃÂ© ÃÂÃÂ· unilatÃÂÃÂ©ral'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ Fessiers (10 min)', exos:[
        {id:'hip_thrust', dose:'4ÃÂÃÂ10 ÃÂÃÂ· barre chargÃÂÃÂ©e'},
        {id:'abducteurs_debout', dose:'3ÃÂÃÂ15 ÃÂÃÂ· machine'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'5ÃÂÃÂ15 ÃÂÃÂ· machine chargÃÂÃÂ©e'},
        {id:'tibialis', dose:'3ÃÂÃÂ15 ÃÂÃÂ· machine'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¿ ÃÂÃÂtirements', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'ischios', dose:'90 sec chaque'},
        {id:'bandelette', dose:'foam roller ÃÂÃÂ· 90 sec chaque'},
      ]}
    ]
  },
  specifique: {
    corpo: [
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¥ Activation (8 min)', exos:[
        {id:'squat_jump', dose:'2ÃÂÃÂ6 ÃÂÃÂ· lÃÂÃÂ©ger ÃÂÃÂ· allumage'},
        {id:'clamshell', dose:'2ÃÂÃÂ12 ÃÂÃÂ· lent'},
        {id:'cheville_proprio', dose:'2ÃÂÃÂ30 sec'},
      ]},
      { bloc:'ÃÂ¢ÃÂÃÂ¡ PliomÃÂÃÂ©trie trail (15 min)', exos:[
        {id:'squat_jump', dose:'4ÃÂÃÂ8 ÃÂÃÂ· puissants'},
        {id:'bounding', dose:'4ÃÂÃÂ10 aller-retour'},
        {id:'drop_jump', dose:'3ÃÂÃÂ8 ÃÂÃÂ· box 20cm'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ¦ÃÂµ Force unilatÃÂÃÂ©rale (12 min)', exos:[
        {id:'squat_unipodal', dose:'3ÃÂÃÂ8 chaque ÃÂÃÂ· lent'},
        {id:'step_down', dose:'3ÃÂÃÂ10 ÃÂÃÂ· 5s excentrique'},
        {id:'rdl_unipodal', dose:'3ÃÂÃÂ10 chaque'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ Mollets & cheville (8 min)', exos:[
        {id:'calf_raises', dose:'3ÃÂÃÂ20 ÃÂÃÂ· amplitude max'},
        {id:'cheville_proprio', dose:'3ÃÂÃÂ30 sec ÃÂÃÂ· yeux fermÃÂÃÂ©s'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¿ ÃÂÃÂtirements (7 min)', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'mollets_etirement', dose:'60 sec ÃÂÃÂ 2 variantes'},
      ]}
    ],
    elastiques: [
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¥ Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3ÃÂÃÂ10 pas ÃÂÃÂ· ÃÂÃÂ©lastique'},
        {id:'bounding', dose:'2ÃÂÃÂ8 ÃÂÃÂ· activation'},
      ]},
      { bloc:'ÃÂ¢ÃÂÃÂ¡ PliomÃÂÃÂ©trie (15 min)', exos:[
        {id:'squat_jump', dose:'4ÃÂÃÂ8'},
        {id:'bounding', dose:'4ÃÂÃÂ10 AR ÃÂÃÂ· poids cheville'},
        {id:'drop_jump', dose:'3ÃÂÃÂ8'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ¦ÃÂµ Force (12 min)', exos:[
        {id:'squat_unipodal', dose:'3ÃÂÃÂ8 ÃÂÃÂ· poids cheville'},
        {id:'step_down', dose:'3ÃÂÃÂ10 ÃÂÃÂ· poids cheville ÃÂÃÂ· 5s'},
        {id:'rdl_unipodal', dose:'3ÃÂÃÂ10 ÃÂÃÂ· KB'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ§ÃÂ± Gainage anti-rotation (8 min)', exos:[
        {id:'pallof_press', dose:'4ÃÂÃÂ10 chaque ÃÂÃÂ· ÃÂÃÂ©lastique'},
        {id:'planche_lat', dose:'3ÃÂÃÂ40 sec + dips'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¿ ÃÂÃÂtirements', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'ischios', dose:'ÃÂÃÂ©lastique ÃÂÃÂ· 60 sec chaque'},
        {id:'bandelette', dose:'60 sec chaque'},
      ]}
    ],
    salle: [
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¥ Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3ÃÂÃÂ12 ÃÂÃÂ· fort'},
        {id:'hip_thrust', dose:'2ÃÂÃÂ15 ÃÂÃÂ· activation lÃÂÃÂ©gÃÂÃÂ¨re'},
      ]},
      { bloc:'ÃÂ¢ÃÂÃÂ¡ PliomÃÂÃÂ©trie (15 min)', exos:[
        {id:'box_jump', dose:'4ÃÂÃÂ6 ÃÂÃÂ· box 40cm'},
        {id:'squat_jump', dose:'3ÃÂÃÂ8 ÃÂÃÂ· gilet lestÃÂÃÂ© lÃÂÃÂ©ger'},
        {id:'drop_jump', dose:'3ÃÂÃÂ6 ÃÂÃÂ· box 30cm'},
        {id:'bounding', dose:'3ÃÂÃÂ10 AR'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ¦ÃÂµ Force spÃÂÃÂ©cifique (15 min)', exos:[
        {id:'squat_unipodal', dose:'3ÃÂÃÂ8 ÃÂÃÂ· KB ÃÂÃÂ· 4s excentrique'},
        {id:'rdl_unipodal', dose:'3ÃÂÃÂ10 ÃÂÃÂ· KB lourd'},
        {id:'hip_thrust', dose:'3ÃÂÃÂ10 ÃÂÃÂ· barre chargÃÂÃÂ©e'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'4ÃÂÃÂ15 ÃÂÃÂ· machine chargÃÂÃÂ©e'},
        {id:'tibialis', dose:'3ÃÂÃÂ15 ÃÂÃÂ· machine'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¿ ÃÂÃÂtirements', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'bandelette', dose:'foam roller ÃÂÃÂ· 90 sec'},
      ]}
    ]
  },
  competition: {
    corpo: [
      { bloc:'ÃÂ¢ÃÂÃÂ¡ Activation + vivacitÃÂÃÂ© (10 min)', exos:[
        {id:'squat_jump', dose:'2ÃÂÃÂ6 ÃÂÃÂ· lÃÂÃÂ©ger'},
        {id:'bounding', dose:'2ÃÂÃÂ8 aller-retour'},
        {id:'clamshell', dose:'2ÃÂÃÂ12 chaque'},
        {id:'cheville_proprio', dose:'2ÃÂÃÂ30 sec'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ¦ÃÂµ Entretien force (12 min)', exos:[
        {id:'step_down', dose:'3ÃÂÃÂ8 ÃÂÃÂ· 4s excentrique'},
        {id:'glute_bridge', dose:'3ÃÂÃÂ10 chaque'},
        {id:'rdl_unipodal', dose:'3ÃÂÃÂ8 ÃÂÃÂ· lÃÂÃÂ©ger'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ Mollets & prÃÂÃÂ©vention (8 min)', exos:[
        {id:'calf_raises', dose:'3ÃÂÃÂ15'},
        {id:'tibialis', dose:'3ÃÂÃÂ20'},
        {id:'cheville_proprio', dose:'2ÃÂÃÂ30 sec yeux fermÃÂÃÂ©s'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¿ ÃÂÃÂtirements (10 min)', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'ischios', dose:'90 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'mollets_etirement', dose:'60 sec ÃÂÃÂ 2'},
      ]}
    ],
    elastiques: [
      { bloc:'ÃÂ¢ÃÂÃÂ¡ Activation (10 min)', exos:[
        {id:'monster_walk', dose:'2ÃÂÃÂ10 ÃÂÃÂ· ÃÂÃÂ©lastique lÃÂÃÂ©ger'},
        {id:'squat_jump', dose:'2ÃÂÃÂ6'},
        {id:'bounding', dose:'2ÃÂÃÂ8 AR'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ¦ÃÂµ Entretien (12 min)', exos:[
        {id:'step_down', dose:'3ÃÂÃÂ8 ÃÂÃÂ· poids cheville ÃÂÃÂ· 4s'},
        {id:'rdl_unipodal', dose:'3ÃÂÃÂ8 ÃÂÃÂ· KB lÃÂÃÂ©ger'},
        {id:'clamshell', dose:'3ÃÂÃÂ12 ÃÂÃÂ· ÃÂÃÂ©lastique'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'3ÃÂÃÂ15 ÃÂÃÂ· poids cheville'},
        {id:'cheville_proprio', dose:'3ÃÂÃÂ30 sec'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¿ ÃÂÃÂtirements', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'bandelette', dose:'foam roller ÃÂÃÂ· 60 sec'},
      ]}
    ],
    salle: [
      { bloc:'ÃÂ¢ÃÂÃÂ¡ Activation + pliomÃÂÃÂ©trie lÃÂÃÂ©gÃÂÃÂ¨re (10 min)', exos:[
        {id:'box_jump', dose:'2ÃÂÃÂ5 ÃÂÃÂ· box basse'},
        {id:'monster_walk', dose:'2ÃÂÃÂ10 ÃÂÃÂ· fort'},
        {id:'bounding', dose:'2ÃÂÃÂ8 AR'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂ¦ÃÂµ Entretien force (15 min)', exos:[
        {id:'squat_unipodal', dose:'3ÃÂÃÂ6 ÃÂÃÂ· KB ÃÂÃÂ· modÃÂÃÂ©rÃÂÃÂ©'},
        {id:'rdl_unipodal', dose:'3ÃÂÃÂ8 ÃÂÃÂ· KB moyen'},
        {id:'hip_thrust', dose:'3ÃÂÃÂ10 ÃÂÃÂ· modÃÂÃÂ©rÃÂÃÂ©'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'3ÃÂÃÂ15 ÃÂÃÂ· machine chargÃÂÃÂ©e'},
        {id:'tibialis', dose:'3ÃÂÃÂ15'},
      ]},
      { bloc:'ÃÂ°ÃÂÃÂÃÂ¿ ÃÂÃÂtirements', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'ischios', dose:'90 sec chaque'},
        {id:'bandelette', dose:'foam roller ÃÂÃÂ· 90 sec'},
      ]}
    ]
  }
}
