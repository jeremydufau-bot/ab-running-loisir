// data.js — AB Running Loisir v4 (saison 2026-2027)
// Architecture compacte. Tout est dérivé des clés séance.

const infosClub = [
  {
    "id": "msg_1777663095763",
    "titre": "🎉 Bienvenue à la section Running",
    "texte": "",
    "type": "info",
    "dateFin": ""
  },
  {
    "id": "msg_1777665830842",
    "titre": "Apéritif premier mardi du mois !",
    "texte": "",
    "type": "info",
    "dateFin": "2026-05-06"
  }
];

const calculateurTextes = {
  "intro": "Cette page te permet de calculer ta charge d'entraînement hebdomadaire. Remplis simplement la durée et le ressenti (RPE) de chacune de tes séances. Les calculs se font automatiquement pour t'aider à visualiser ta charge et à progresser sans te blesser.",
  "rpe_titre": "Qu'est-ce que le RPE ?",
  "rpe_texte": "Le RPE (Rating of Perceived Exertion, ou Effort Perçu) est une note de 1 à 10 que tu donnes à ta séance, une minute après l'avoir terminée. Cette note reflète le ressenti global : facilité respiratoire, fatigue musculaire, difficulté mentale.\n\n1-2 : très facile, comme marcher\n3-4 : facile, allure de conversation\n5-6 : modéré, respiration contrôlée\n7-8 : difficile, parler devient compliqué\n9-10 : très difficile, effort maximal",
  "ua_titre": "Qu'est-ce que l'UA ?",
  "ua_texte": "L'UA (Unité Arbitraire) est une mesure de la charge réelle d'une séance. C'est un simple calcul : UA = RPE × Durée (en minutes).\n\nExemple : une séance de 45 minutes ressentie à 7/10 représente 315 UA.\n\nL'intérêt ? Une semaine avec beaucoup d'UA = charge élevée, une semaine légère = UA bas. En suivant ton total hebdomadaire, tu peux progresser par paliers sans tomber dans le surentraînement.",
  "bloc_titre": "La logique du bloc de 4 semaines",
  "bloc_texte": "Un cycle d'entraînement bien construit suit une progression sur 4 semaines :\n\nSemaine 1 — Base : charge modérée, on pose les fondations.\nSemaine 2 — Montée : +10 à 15% d'UA par rapport à S1.\nSemaine 3 — Pic : +20 à 25% d'UA par rapport à S1 (semaine la plus dure).\nSemaine 4 — Récupération : -40% d'UA pour assimiler le travail.\n\nCette alternance charge/récupération est indispensable pour progresser sans se blesser."
};

const chargeHebdoSeuils = [
  {
    "max": 280,
    "label": "Récupération",
    "couleur": "#7BA098",
    "description": "Récup, reprise, décharge"
  },
  {
    "max": 380,
    "label": "Modérée",
    "couleur": "#7BC3E5",
    "description": "Reprise progressive"
  },
  {
    "max": 480,
    "label": "Soutenue",
    "couleur": "#3A7BBF",
    "description": "Décharge ou base modérée"
  },
  {
    "max": 600,
    "label": "Difficile",
    "couleur": "#1B3A6B",
    "description": "Base ou affûtage"
  },
  {
    "max": 800,
    "label": "Très difficile",
    "couleur": "#E67E22",
    "description": "Développement"
  },
  {
    "max": 1050,
    "label": "Pic",
    "couleur": "#C0392B",
    "description": "Semaine la plus dure"
  },
  {
    "max": 9999,
    "label": "Surcharge",
    "couleur": "#7B1212",
    "description": "Au-delà — surveiller"
  }
];

// Socle hebdomadaire — jours hors club intégrés au calcul Foster
const socleConfig = {
  lundi:    { label:"Renforcement musculaire", dur:60,  rpe:4 },
  mercredi: { label:"Footing récupération",    dur:50,  rpe:3 },
  weRoute:  { label:"Sortie longue route",     dur:60,  rpe:4 },
  weTrail:  { label:"Sortie longue trail",     dur:90,  rpe:4 }
};

const terrainLabel = {
  halage:{icon:'🏞️',label:'Halage',cls:'tag-sky'},
  stades:{icon:'🏟️',label:'Stade / Piste',cls:'tag-blue'},
  intramuros:{icon:'🏘️',label:'Intra-muros',cls:'tag-blue'},
  plage:{icon:'🏖️',label:'Plage',cls:'tag-ocre'},
  chiberta:{icon:'🌲',label:'Forêt Chiberta',cls:'tag-green'},
  floride:{icon:'⛰️',label:'Côte La Floride',cls:'tag-rouge'},
  voulgre:{icon:'⛰️',label:'Côte du Voulgre',cls:'tag-rouge'},
  vw:{icon:'⛰️',label:'Côte VW',cls:'tag-rouge'},
  vvf:{icon:'⛰️',label:'Côte VVF Anglet',cls:'tag-rouge'},
  escaliers:{icon:'🪜',label:'Escaliers Biarritz',cls:'tag-rouge'},
  girouettes:{icon:'🌿',label:'Parc Girouettes',cls:'tag-green'},
  douves:{icon:'🏰',label:'Les Douves',cls:'tag-green'},
  montagne:{icon:'🏔️',label:'Montagne',cls:'tag-ocre'},
};

const phaseMap = {
  'Reprise':{l:'Reprise',c:'rep'},'Base':{l:'Base',c:'base'},'Base route':{l:'Base route',c:'base'},
  'Base trail':{l:'Base trail',c:'prepa'},'Développement':{l:'Développement',c:'dev'},
  'Bloc cross':{l:'Bloc cross',c:'force'},'Spécifique':{l:'Spécifique',c:'precomp'},
  'Spécifique trail':{l:'Spécifique trail',c:'prepa'},'Affûtage':{l:'Affûtage',c:'precomp'},
  'Compétition':{l:'Compétition',c:'event'},'Récupération':{l:'Récupération',c:'recup'},
  'Décharge':{l:'Décharge',c:'recup'},'Transition':{l:'Transition',c:'base'},
  'Trêve Noël':{l:'Trêve Noël',c:'recup'},'Coupure':{l:'Coupure',c:'recup'},
};
const typeLabel = {course:'Course',social:'Social',trail:'Trail',rando:'Rando',interne:'Interne'};
const typeCls = {course:'type-course',social:'type-social',trail:'type-trail',rando:'type-rando',interne:'type-interne'};

// l=label c=cat rpe=display rn=numeric ua=charge(Foster) lieu=terrain
// halage=description halage piste=equivalence piste desc=explication
const seancesData = {
  "S001": {
    "l": "2\u00d7(8\u00d730\"/30\") R3'",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 464,
    "lieu": "halage",
    "halage": "2\u00d7(8\u00d730\"/30\") R3'",
    "piste": "2\u00d7(8\u00d7200m) R3'",
    "desc": "Travail de puissance a\u00e9robie en double s\u00e9rie. R\u00e9cup trottin\u00e9e entre reps (NE PAS s'arr\u00eater). Le 3min entre s\u00e9ries permet de maintenir la qualit\u00e9 sur la 2e s\u00e9rie. Allure VMA."
  },
  "S002": {
    "l": "2\u00d7(10\u00d730\"/30\") R3'",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 496,
    "lieu": "halage",
    "halage": "2\u00d7(10\u00d730\"/30\") R3'",
    "piste": "2\u00d7(10\u00d7200m) R3'",
    "desc": "Volume interm\u00e9diaire 30/30. Double s\u00e9rie de 10 r\u00e9p\u00e9titions avec 3min de r\u00e9cup entre blocs. Allure VMA. R\u00e9cup active obligatoire."
  },
  "S003": {
    "l": "2\u00d7(12\u00d730\"/30\") R3'",
    "c": "VMA Courte",
    "rpe": "9",
    "rn": 9,
    "ua": 594,
    "lieu": "halage",
    "halage": "2\u00d7(12\u00d730\"/30\") R3'",
    "piste": "2\u00d7(12\u00d7200m) R3'",
    "desc": "Volume \u00e9lev\u00e9 30/30 pour confirm\u00e9s. 24 r\u00e9p\u00e9titions totales. S\u00e9ance de r\u00e9f\u00e9rence VMA \u2014 tenir l'allure identique sur toutes les reps. Allure VMA proche."
  },
  "S004": {
    "l": "2\u00d7(6\u00d730\"/30\") R1'30\"",
    "c": "VMA Courte",
    "rpe": "7",
    "rn": 7,
    "ua": 367,
    "lieu": "halage",
    "halage": "2\u00d7(6\u00d730\"/30\") R1'30\"",
    "piste": "2\u00d7(6\u00d7200m) R1'30\"",
    "desc": "Version courte du 30/30 en double s\u00e9rie. R\u00e9cup de seulement 1min30 entre s\u00e9ries \u2014 plus exigeant. Id\u00e9al quand le temps est limit\u00e9. Allure Z4-VMA."
  },
  "S005": {
    "l": "10\u00d730\"/30\" (simple)",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 396,
    "lieu": "halage",
    "halage": "10\u00d730\"/30\" (simple)",
    "piste": "10\u00d7200m",
    "desc": "S\u00e9ance de r\u00e9f\u00e9rence VMA classique. R\u00e9cup trottin\u00e9e obligatoire \u2014 ne jamais s'arr\u00eater. Allure VMA -10% \u00e0 VMA. S\u00e9ance neuromusculaire."
  },
  "S006": {
    "l": "15\u00d730\"/30\" (simple)",
    "c": "VMA Courte",
    "rpe": "9",
    "rn": 9,
    "ua": 490,
    "lieu": "halage",
    "halage": "15\u00d730\"/30\" (simple)",
    "piste": "15\u00d7200m",
    "desc": "Volume max en 30/30 pour confirm\u00e9s. 15 r\u00e9p\u00e9titions continues avec r\u00e9cup trottin\u00e9e. Allure VMA. S\u00e9ance longue et exigeante."
  },
  "S007": {
    "l": "2\u00d7(8\u00d720\"/20\") R2'",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 416,
    "lieu": "halage",
    "halage": "2\u00d7(8\u00d720\"/20\") R2'",
    "piste": "2\u00d7(8\u00d7100m) R2'",
    "desc": "Intervalles tr\u00e8s courts en double s\u00e9rie. Le repos de 2min entre s\u00e9ries permet de maintenir la qualit\u00e9. Format plus doux que le 30/30 \u2014 adapt\u00e9 aux d\u00e9butants. Allure VMA+."
  },
  "S008": {
    "l": "5\u00d730\"/30\" + 8\u00d71'/1' + 5\u00d730\"/30\"",
    "c": "VMA Courte",
    "rpe": "9",
    "rn": 9,
    "ua": 562,
    "lieu": "halage",
    "halage": "5\u00d730\"/30\" + 8\u00d71'/1' + 5\u00d730\"/30\"",
    "piste": "5\u00d7200m + 8\u00d7400m + 5\u00d7200m",
    "desc": "Triple bloc sym\u00e9trique courts/longs/courts. Les 30sec finaux sont les plus difficiles. S\u00e9ance VMA compl\u00e8te qui sollicite plusieurs fili\u00e8res. Z4-Z5."
  },
  "S009": {
    "l": "8\u00d730\"/30\" R2' + 6\u00d71'/1'",
    "c": "VMA Courte",
    "rpe": "9",
    "rn": 9,
    "ua": 513,
    "lieu": "halage",
    "halage": "8\u00d730\"/30\" R2' + 6\u00d71'/1'",
    "piste": "8\u00d7200m R2' + 6\u00d7400m R1'30\"",
    "desc": "Double bloc VMA \u2014 les 30/30 chauffent le syst\u00e8me, les 1'/1' maintiennent la charge a\u00e9robie. S\u00e9ance exigeante. Z4 sur les 1', Z5 sur les 30sec."
  },
  "S010": {
    "l": "12\u00d745\"/45\"",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 458,
    "lieu": "halage",
    "halage": "12\u00d745\"/45\"",
    "piste": "12\u00d7300m",
    "desc": "Intervalles 45sec \u2014 dur\u00e9e interm\u00e9diaire entre 30sec et 1min. Travail \u00e0 allure Z4-Z5. Id\u00e9al en terrain vari\u00e9. Chaque effort doit ressembler au pr\u00e9c\u00e9dent."
  },
  "S011": {
    "l": "6\u00d71'/1'",
    "c": "VMA Courte",
    "rpe": "7",
    "rn": 7,
    "ua": 385,
    "lieu": "halage",
    "halage": "6\u00d71'/1'",
    "piste": "6\u00d7400m",
    "desc": "Fartlek 1min/1min version d\u00e9butant. R\u00e9cup trottin\u00e9e active. Allure Z4 confort. Introduction au fractionn\u00e9 court pour les coureurs en progression."
  },
  "S012": {
    "l": "10\u00d71'/1'",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 520,
    "lieu": "halage",
    "halage": "10\u00d71'/1'",
    "piste": "10\u00d7400m",
    "desc": "Fartlek structur\u00e9 10\u00d71min/1min. R\u00e9cup active obligatoire. La base du fractionn\u00e9 court \u2014 tenir l'allure sur toutes les reps. Z4-Z4+."
  },
  "S013": {
    "l": "12\u00d71'/1'",
    "c": "VMA Courte",
    "rpe": "9",
    "rn": 9,
    "ua": 621,
    "lieu": "halage",
    "halage": "12\u00d71'/1'",
    "piste": "12\u00d7400m",
    "desc": "Volume \u00e9lev\u00e9 1min/1min pour confirm\u00e9s. Tenir l'allure Z5 sur toutes les r\u00e9p\u00e9titions est l'objectif. S\u00e9ance de r\u00e9f\u00e9rence VMA longue."
  },
  "S014": {
    "l": "2\u00d7(6\u00d71'/1') R2'",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 480,
    "lieu": "halage",
    "halage": "2\u00d7(6\u00d71'/1') R2'",
    "piste": "2\u00d7(6\u00d7400m) R2'",
    "desc": "Double s\u00e9rie 6\u00d71'/1' avec 2min de r\u00e9cup. Le bloc de r\u00e9cup permet de maintenir la qualit\u00e9 sur la 2e s\u00e9rie. Z4-Z5."
  },
  "S015": {
    "l": "30\" R= 4'-3'-2' (r\u00e9cup d\u00e9croissante)",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 450,
    "lieu": "halage",
    "halage": "30\" R= 4'-3'-2' (r\u00e9cup d\u00e9croissante)",
    "piste": "5\u00d7400m r\u00e9cup d\u00e9croissante",
    "desc": "S\u00e9ance sp\u00e9ciale \u00e0 r\u00e9cup d\u00e9croissante. Les derniers 30sec se font avec moins de r\u00e9cup \u2014 simulation fin de course. VMA sur tous les efforts."
  },
  "S016": {
    "l": "5\u00d745\"/45\" + 5\u00d745\"/30\"",
    "c": "VMA Courte",
    "rpe": "9",
    "rn": 9,
    "ua": 571,
    "lieu": "halage",
    "halage": "5\u00d745\"/45\" + 5\u00d745\"/30\"",
    "piste": "5\u00d7300m + 5\u00d7200m",
    "desc": "Double bloc avec r\u00e9cup d\u00e9croissante. Les 45\"/30\" sont plus difficiles car moins de r\u00e9cup. Simulation fin de course. Z4 sur bloc 1, Z4-Z5 sur bloc 2."
  },
  "S017": {
    "l": "4\u00d72' R2'30\"",
    "c": "VMA Longue",
    "rpe": "7",
    "rn": 7,
    "ua": 392,
    "lieu": "halage",
    "halage": "4\u00d72' R2'30\"",
    "piste": "4\u00d7600m R2'30\"",
    "desc": "Transition vers le seuil \u2014 efforts de 2min \u00e0 allure Z4 soutenue. R\u00e9cup confort. Id\u00e9al pour les d\u00e9butants d\u00e9couvrant les efforts plus longs. Rythme maintenu sur toutes les reps."
  },
  "S018": {
    "l": "6\u00d72' R2'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 448,
    "lieu": "halage",
    "halage": "6\u00d72' R2'",
    "piste": "6\u00d7600m R2'",
    "desc": "Volume interm\u00e9diaire 2min avec 2min de r\u00e9cup. Allure 85-90% FCmax. Transition vers le seuil \u2014 rythme \u00e0 maintenir sur toutes les r\u00e9p\u00e9titions."
  },
  "S019": {
    "l": "10\u00d72' R2'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 600,
    "lieu": "halage",
    "halage": "10\u00d72' R2'",
    "piste": "10\u00d7600m R2'",
    "desc": "Volume \u00e9lev\u00e9 2min pour confirm\u00e9s. 90-93% FCmax. S\u00e9ance longue et exigeante. R\u00e9gulit\u00e9 de l'allure sur les 10 blocs est l'objectif principal."
  },
  "S020": {
    "l": "3\u00d73' R3'",
    "c": "VMA Longue",
    "rpe": "7",
    "rn": 7,
    "ua": 385,
    "lieu": "halage",
    "halage": "3\u00d73' R3'",
    "piste": "3\u00d7800m R3'",
    "desc": "Introduction au travail seuil \u2014 efforts 3min \u00e0 allure seuil doux. Peut parler par mots. Id\u00e9al d\u00e9butants seuil. Allure Z3-Z4. R\u00e9cup trottin\u00e9e confort."
  },
  "S021": {
    "l": "5\u00d73' R3'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 455,
    "lieu": "halage",
    "halage": "5\u00d73' R3'",
    "piste": "5\u00d7800m R3'",
    "desc": "Volume interm\u00e9diaire 3min. Allure seuil 80-85% FCmax. Introduction au travail seuil \u2014 peut parler par mots. Maintenir l'allure sur tous les blocs."
  },
  "S022": {
    "l": "8\u00d73' R2'30\"",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 480,
    "lieu": "halage",
    "halage": "8\u00d73' R2'30\"",
    "piste": "8\u00d7800m R2'30\"",
    "desc": "Volume \u00e9lev\u00e9 3min avec r\u00e9cup r\u00e9duite. Allure seuil 85-90% FCmax. S\u00e9ance volume au seuil \u2014 si d\u00e9gradation d\u00e8s le 5e bloc : r\u00e9duire \u00e0 6."
  },
  "S023": {
    "l": "4\u00d74' R3'",
    "c": "VMA Longue",
    "rpe": "7",
    "rn": 7,
    "ua": 406,
    "lieu": "halage",
    "halage": "4\u00d74' R3'",
    "piste": "4\u00d71000m R3'",
    "desc": "Efforts 4min \u00e0 allure seuil confort. Allure Z3-Z4. R\u00e9cup trottin\u00e9e confort. Bonne s\u00e9ance de progression apr\u00e8s ma\u00eetrise des 3min. 80-85% FCmax."
  },
  "S024": {
    "l": "6\u00d74' R3'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 476,
    "lieu": "halage",
    "halage": "6\u00d74' R3'",
    "piste": "6\u00d71000m R3'",
    "desc": "Volume 4min \u00e0 allure seuil 85-88% FCmax. S\u00e9ance exigeante. Tenir l'allure sur tous les blocs. R\u00e9cup trottin\u00e9e entre les blocs."
  },
  "S025": {
    "l": "Pyramide 1'2'3'4'3'2'1' R=\u00bd temps",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 504,
    "lieu": "halage",
    "halage": "Pyramide 1'2'3'4'3'2'1' R=\u00bd temps",
    "piste": "Pyramide 400-800-1200-800-400m R=\u00bd distance",
    "desc": "Pyramide classique \u2014 monter en intensit\u00e9 sur les longs, redescendre sur les courts. R = la moiti\u00e9 du temps de l'effort pr\u00e9c\u00e9dent. Z3 mont\u00e9e, Z4-Z5 au sommet."
  },
  "S026": {
    "l": "Pyramide 1'2'4'6'4'2'1' R=\u00bd temps",
    "c": "VMA Longue",
    "rpe": "9",
    "rn": 9,
    "ua": 560,
    "lieu": "halage",
    "halage": "Pyramide 1'2'4'6'4'2'1' R=\u00bd temps",
    "piste": "Pyramide 400-800-1600-800-400m R=\u00bd distance",
    "desc": "Pyramide longue \u2014 le 6' est la cl\u00e9. G\u00e9rer l'effort pour tenir la descente de la pyramide. Z3-Z4 sur les 4' et 6'. S\u00e9ance compl\u00e8te."
  },
  "S027": {
    "l": "Fartlek 3\u00d7(3'2'1') R2'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 504,
    "lieu": "halage",
    "halage": "Fartlek 3\u00d7(3'2'1') R2'",
    "piste": "3\u00d7(800+400+200m) R2'",
    "desc": "Pyramide inverse r\u00e9p\u00e9t\u00e9e \u2014 chaque s\u00e9rie descend (3'/2'/1'). Les 1' finaux de chaque s\u00e9rie sont vifs. Total effort ~18min. Z4 sur les 3', Z5 sur les 1'."
  },
  "S028": {
    "l": "Fartlek 10\u00d72' R~1'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 520,
    "lieu": "halage",
    "halage": "Fartlek 10\u00d72' R~1'",
    "piste": "10\u00d7600m R~1'",
    "desc": "Fartlek r\u00e9gulier 2min \u2014 plus exigeant que le 10\u00d71' car efforts plus longs. R\u00e9cup trottin\u00e9e obligatoire. Tenir la m\u00eame allure sur toutes les r\u00e9p\u00e9titions. Z4."
  },
  "S029": {
    "l": "2\u00d712' R5'",
    "c": "Seuil",
    "rpe": "7",
    "rn": 7,
    "ua": 434,
    "lieu": "halage",
    "halage": "2\u00d712' R5'",
    "piste": "2\u00d73000m R5'",
    "desc": "S\u00e9ance seuil pour d\u00e9butants \u2014 2 blocs de 12min avec 5min de r\u00e9cup. Allure seuil doux Z3. Introduction aux longs efforts contin\u00fcs. Parole difficile mais possible."
  },
  "S030": {
    "l": "3\u00d715' R5'",
    "c": "Seuil",
    "rpe": "8",
    "rn": 8,
    "ua": 595,
    "lieu": "halage",
    "halage": "3\u00d715' R5'",
    "piste": "3\u00d74000m R5'",
    "desc": "S\u00e9ance seuil longue. Tenir l'allure sur le 3e bloc est l'objectif. Si impossible : revenir \u00e0 2\u00d715'. Allure seuil Z3-Z4. La plus exigeante mentalement."
  },
  "S031": {
    "l": "3\u00d715' R4'",
    "c": "Seuil",
    "rpe": "9",
    "rn": 9,
    "ua": 574,
    "lieu": "halage",
    "halage": "3\u00d715' R4'",
    "piste": "3\u00d74000m R4'",
    "desc": "Version confirm\u00e9e du 3\u00d715min avec r\u00e9cup r\u00e9duite \u00e0 4min. Allure seuil+ Z4. Exigeant mentalement. Si derni\u00e8re r\u00e9p impossible : maintenir 2."
  },
  "S032": {
    "l": "5\u00d73' R1'30\"",
    "c": "Seuil",
    "rpe": "7",
    "rn": 7,
    "ua": 420,
    "lieu": "halage",
    "halage": "5\u00d73' R1'30\"",
    "piste": "5\u00d71000m R1'30\"",
    "desc": "S\u00e9ance volume au seuil avec r\u00e9cup courte de 1min30. Si d\u00e9gradation d\u00e8s le 5e bloc : r\u00e9duire \u00e0 6. Allure seuil Z3-Z4. R\u00e9cup active trottin\u00e9e."
  },
  "S033": {
    "l": "8\u00d73' R1'30\"",
    "c": "Seuil",
    "rpe": "8",
    "rn": 8,
    "ua": 504,
    "lieu": "halage",
    "halage": "8\u00d73' R1'30\"",
    "piste": "8\u00d71000m R1'30\"",
    "desc": "Volume \u00e9lev\u00e9 au seuil avec r\u00e9cup courte. R\u00e9cup courte qui impose de g\u00e9rer l'allure. Si d\u00e9gradation d\u00e8s le 5e bloc : r\u00e9duire \u00e0 6. Allure seuil Z4."
  },
  "S034": {
    "l": "20' continu",
    "c": "Seuil",
    "rpe": "7",
    "rn": 7,
    "ua": 420,
    "lieu": "halage",
    "halage": "20' continu",
    "piste": "5000m continu",
    "desc": "Seuil continu 20min. Allure EF rapide / seuil doux Z3. Introduction au tempo long. Parole tr\u00e8s difficile mais rythme constant. R\u00e9f\u00e9rence de progression."
  },
  "S035": {
    "l": "2\u00d720' R5'",
    "c": "Seuil",
    "rpe": "8",
    "rn": 8,
    "ua": 560,
    "lieu": "halage",
    "halage": "2\u00d720' R5'",
    "piste": "2\u00d75000m R5'",
    "desc": "S\u00e9ance seuil longue en 2 blocs de 20min. Allure seuil Z3-Z4. Exigeante mentalement. R\u00e9cup 5min active. Reproduire exactement l'allure du 1er bloc sur le 2e."
  },
  "S036": {
    "l": "Fartlek 5'-10'-10' R=\u00bd temps",
    "c": "Seuil",
    "rpe": "8",
    "rn": 8,
    "ua": 528,
    "lieu": "halage",
    "halage": "Fartlek 5'-10'-10' R=\u00bd temps",
    "piste": "1500-3000-3000m R=\u00bd distance",
    "desc": "3 blocs progressifs \u2014 le 5' sert d'activation, les deux 10' sont le c\u0153ur. R\u00e9cup = environ la moiti\u00e9 du bloc pr\u00e9c\u00e9dent. Z3-Z4 sur les 10'."
  },
  "S037": {
    "l": "Fartlek 3'6'6'3' R=\u00bd temps",
    "c": "Seuil",
    "rpe": "8",
    "rn": 8,
    "ua": 520,
    "lieu": "halage",
    "halage": "Fartlek 3'6'6'3' R=\u00bd temps",
    "piste": "800-2000-2000-800m R=\u00bd distance",
    "desc": "Double sommet \u00e0 6' \u2014 mont\u00e9e et descente sym\u00e9triques. G\u00e9rer le premier 6' pour tenir le second. Z3-Z4 sur les 6'. Seuil progressif."
  },
  "S038": {
    "l": "45' allure marathon",
    "c": "Allure Marathon",
    "rpe": "6",
    "rn": 6,
    "ua": 510,
    "lieu": "halage",
    "halage": "45' allure marathon",
    "piste": "3\u00d71km allure marathon R3'",
    "desc": "Sortie allure marathon d\u00e9butant. Allure marathon +15s/km. Pratiquer l'allure cible en conditions r\u00e9elles. Gel\u00e9es ou eau conseill\u00e9s si >30min. Allure confort."
  },
  "S039": {
    "l": "1h15 allure marathon",
    "c": "Allure Marathon",
    "rpe": "7",
    "rn": 7,
    "ua": 665,
    "lieu": "halage",
    "halage": "1h15 allure marathon",
    "piste": "4\u00d72km allure marathon R3'",
    "desc": "Sortie allure marathon interm\u00e9diaire. Allure marathon +5s/km. Simulation course. Nutrition recommand\u00e9e. Garder de l'\u00e9nergie pour les 15 derni\u00e8res minutes."
  },
  "S040": {
    "l": "1h30 allure marathon exacte",
    "c": "Allure Marathon",
    "rpe": "8",
    "rn": 8,
    "ua": 800,
    "lieu": "halage",
    "halage": "1h30 allure marathon exacte",
    "piste": "3\u00d73km allure marathon R4'",
    "desc": "Sortie allure marathon exacte. Allure cible marathon. S\u00e9ance cl\u00e9 de pr\u00e9paration. Nutrition et hydratation identiques \u00e0 la course. R\u00e9gulit\u00e9 au km pr\u00e8s."
  },
  "S041": {
    "l": "3\u00d78' allure marathon R3'",
    "c": "Allure Marathon",
    "rpe": "7",
    "rn": 7,
    "ua": 427,
    "lieu": "halage",
    "halage": "3\u00d78' allure marathon R3'",
    "piste": "3\u00d72000m allure marathon R3'",
    "desc": "Simulation allure course en 3 blocs de 8min. Allure cible exacte. R\u00e9cup 3min entre blocs. Reproduire exactement l'allure cible sur chaque bloc. Z4 cible."
  },
  "S042": {
    "l": "4\u00d78' allure marathon R3'",
    "c": "Allure Marathon",
    "rpe": "7",
    "rn": 7,
    "ua": 476,
    "lieu": "halage",
    "halage": "4\u00d78' allure marathon R3'",
    "piste": "4\u00d72500m allure marathon R3'",
    "desc": "Volume \u00e9lev\u00e9 allure marathon en 4 blocs de 8min. Allure cible ou l\u00e9g\u00e8rement en dessous. Simulation compl\u00e8te. Nutrition entre les blocs si n\u00e9cessaire."
  },
  "S043": {
    "l": "6\u00d730\" c\u00f4te courte",
    "c": "C\u00f4tes",
    "rpe": "7",
    "rn": 7,
    "ua": 329,
    "lieu": "halage",
    "halage": "6\u00d730\" c\u00f4te courte",
    "piste": "6\u00d730\" c\u00f4te (talus / stade)",
    "desc": "C\u00f4tes courtes explosives (type La Floride). Genoux hauts, bras actifs. Qualit\u00e9 > quantit\u00e9. D\u00e9part arr\u00eat\u00e9 autoris\u00e9. Allure explosif 7/10. D\u00e9butants."
  },
  "S044": {
    "l": "10\u00d730\" c\u00f4te courte",
    "c": "C\u00f4tes",
    "rpe": "8",
    "rn": 8,
    "ua": 448,
    "lieu": "halage",
    "halage": "10\u00d730\" c\u00f4te courte",
    "piste": "10\u00d730\" c\u00f4te (talus / stade)",
    "desc": "C\u00f4tes courtes 30sec interm\u00e9diaire. Genoux hauts, bras actifs. D\u00e9part arr\u00eat\u00e9. Allure explosif 8/10. Descente trottin\u00e9e. S\u00e9ance neuromusculaire."
  },
  "S045": {
    "l": "14\u00d730\" c\u00f4te courte",
    "c": "C\u00f4tes",
    "rpe": "9",
    "rn": 9,
    "ua": 574,
    "lieu": "halage",
    "halage": "14\u00d730\" c\u00f4te courte",
    "piste": "14\u00d730\" c\u00f4te (talus / stade)",
    "desc": "Volume max c\u00f4tes 30sec pour confirm\u00e9s. Max contr\u00f4l\u00e9. Si la puissance baisse, stopper la s\u00e9rie. Descente rapide. Travail neuromusculaire pur."
  },
  "S046": {
    "l": "5\u00d71' c\u00f4te VW",
    "c": "C\u00f4tes",
    "rpe": "7",
    "rn": 7,
    "ua": 399,
    "lieu": "halage",
    "halage": "5\u00d71' c\u00f4te VW",
    "piste": "5\u00d71' talus stade",
    "desc": "C\u00f4te VW 1min. Soutenu 7/10. Maintenir la m\u00eame allure sur toutes les r\u00e9p\u00e9titions. Descente march\u00e9e. Id\u00e9al pour travailler la puissance monter en douceur."
  },
  "S047": {
    "l": "8\u00d71' c\u00f4te VW",
    "c": "C\u00f4tes",
    "rpe": "8",
    "rn": 8,
    "ua": 496,
    "lieu": "halage",
    "halage": "8\u00d71' c\u00f4te VW",
    "piste": "8\u00d71' talus stade",
    "desc": "C\u00f4te VW 1min interm\u00e9diaire. Soutenu 8/10. Maintenir la m\u00eame allure identique sur toutes les r\u00e9p\u00e9titions. Descente trottin\u00e9e. S\u00e9ance terrain cl\u00e9."
  },
  "S048": {
    "l": "10\u00d71' c\u00f4te VW",
    "c": "C\u00f4tes",
    "rpe": "9",
    "rn": 9,
    "ua": 594,
    "lieu": "halage",
    "halage": "10\u00d71' c\u00f4te VW",
    "piste": "10\u00d71' talus stade",
    "desc": "Volume max c\u00f4tes 1min confirm\u00e9s. Soutenu 9/10. Descente rapide. Maintenir la m\u00eame allure sur les 10 mont\u00e9es. S\u00e9ance phare puissance montagne."
  },
  "S049": {
    "l": "6\u00d71'30\" c\u00f4te Voulgre",
    "c": "C\u00f4tes",
    "rpe": "8",
    "rn": 8,
    "ua": 478,
    "lieu": "halage",
    "halage": "6\u00d71'30\" c\u00f4te Voulgre",
    "piste": "6\u00d71'30\" talus stade",
    "desc": "C\u00f4te Voulgre 1min30. Soutenu contr\u00f4l\u00e9. Petits pas en descente, genoux fl\u00e9chis. Allure effort 8/10. S\u00e9ance phare trail. Focus sur la descente aussi."
  },
  "S050": {
    "l": "6\u00d72' c\u00f4te Voulgre",
    "c": "C\u00f4tes",
    "rpe": "8",
    "rn": 8,
    "ua": 492,
    "lieu": "halage",
    "halage": "6\u00d72' c\u00f4te Voulgre",
    "piste": "6\u00d72' talus stade",
    "desc": "C\u00f4te Voulgre 2min. Puissance ma\u00eetris\u00e9e. Focus sur descente technique : petits pas, genoux fl\u00e9chis, regard loin. S\u00e9ance phare trail. Allure puissance max."
  },
  "S101": {
    "l": "6\u00d730\"/30\" (simple)",
    "c": "VMA Courte",
    "rpe": "7",
    "rn": 7,
    "ua": 336,
    "lieu": "halage",
    "halage": "6\u00d730\"/30\" (simple)",
    "piste": "6\u00d7200m",
    "desc": "Fractionn\u00e9 30/30 volume l\u00e9ger. R\u00e9cup trottin\u00e9e active obligatoire \u2014 ne jamais arr\u00eater. Allure VMA. S\u00e9ance neuromusculaire. 6 r\u00e9p\u00e9titions continues."
  },
  "S102": {
    "l": "8\u00d730\"/30\" (simple)",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 384,
    "lieu": "halage",
    "halage": "8\u00d730\"/30\" (simple)",
    "piste": "8\u00d7200m",
    "desc": "Fractionn\u00e9 30/30 volume mod\u00e9r\u00e9. R\u00e9cup trottin\u00e9e active obligatoire. Allure VMA. S\u00e9ance neuromusculaire. 8 r\u00e9p\u00e9titions continues."
  },
  "S103": {
    "l": "12\u00d730\"/30\" (simple)",
    "c": "VMA Courte",
    "rpe": "9",
    "rn": 9,
    "ua": 507,
    "lieu": "halage",
    "halage": "12\u00d730\"/30\" (simple)",
    "piste": "12\u00d7200m",
    "desc": "Fractionn\u00e9 30/30 volume \u00e9lev\u00e9. R\u00e9cup trottin\u00e9e active obligatoire. Allure VMA. S\u00e9ance neuromusculaire. 12 r\u00e9p\u00e9titions continues \u2014 r\u00e9gulit\u00e9 avant tout."
  },
  "S104": {
    "l": "8\u00d745\"/45\"",
    "c": "VMA Courte",
    "rpe": "7",
    "rn": 7,
    "ua": 383,
    "lieu": "halage",
    "halage": "8\u00d745\"/45\"",
    "piste": "8\u00d7300m",
    "desc": "Intervalles 45sec \u2014 8 r\u00e9p\u00e9titions. Dur\u00e9e interm\u00e9diaire entre 30sec et 1min. R\u00e9cup trottin\u00e9e 45sec. Travail Z4-Z5. Chaque effort doit ressembler au pr\u00e9c\u00e9dent."
  },
  "S105": {
    "l": "10\u00d745\"/45\"",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 460,
    "lieu": "halage",
    "halage": "10\u00d745\"/45\"",
    "piste": "10\u00d7300m",
    "desc": "Intervalles 45sec \u2014 10 r\u00e9p\u00e9titions. Dur\u00e9e interm\u00e9diaire entre 30sec et 1min. R\u00e9cup trottin\u00e9e 45sec. Travail Z4-Z5. Chaque effort doit ressembler au pr\u00e9c\u00e9dent."
  },
  "S106": {
    "l": "15\u00d745\"/45\"",
    "c": "VMA Courte",
    "rpe": "9",
    "rn": 9,
    "ua": 607,
    "lieu": "halage",
    "halage": "15\u00d745\"/45\"",
    "piste": "15\u00d7300m",
    "desc": "Intervalles 45sec volume tr\u00e8s \u00e9lev\u00e9 \u2014 15 r\u00e9p\u00e9titions. R\u00e9cup trottin\u00e9e 45sec. Travail Z4-Z5. Pour confirm\u00e9s seulement \u2014 tenir l'allure identique sur toutes les reps."
  },
  "S107": {
    "l": "4\u00d71'/1'",
    "c": "VMA Courte",
    "rpe": "6",
    "rn": 6,
    "ua": 282,
    "lieu": "halage",
    "halage": "4\u00d71'/1'",
    "piste": "4\u00d7400m R2'",
    "desc": "Fartlek 1min/1min \u2014 4 r\u00e9p\u00e9titions. R\u00e9cup trottin\u00e9e active obligatoire. Allure Z4. Volume faible \u2014 id\u00e9al d\u00e9butants et reprise."
  },
  "S108": {
    "l": "5\u00d71'/1'",
    "c": "VMA Courte",
    "rpe": "7",
    "rn": 7,
    "ua": 315,
    "lieu": "halage",
    "halage": "5\u00d71'/1'",
    "piste": "5\u00d7400m R2'",
    "desc": "Fartlek 1min/1min \u2014 5 r\u00e9p\u00e9titions. R\u00e9cup trottin\u00e9e active obligatoire. Allure Z4. Volume faible \u2014 id\u00e9al d\u00e9butants."
  },
  "S109": {
    "l": "7\u00d71'/1'",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 378,
    "lieu": "halage",
    "halage": "7\u00d71'/1'",
    "piste": "7\u00d7400m R2'",
    "desc": "Fartlek 1min/1min \u2014 7 r\u00e9p\u00e9titions. R\u00e9cup trottin\u00e9e active obligatoire. Allure Z4+. Volume interm\u00e9diaire."
  },
  "S110": {
    "l": "8\u00d71'/1'",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 400,
    "lieu": "halage",
    "halage": "8\u00d71'/1'",
    "piste": "8\u00d7400m R2'",
    "desc": "Fartlek 1min/1min \u2014 8 r\u00e9p\u00e9titions. R\u00e9cup trottin\u00e9e active obligatoire. Allure Z4+. Volume interm\u00e9diaire."
  },
  "S111": {
    "l": "9\u00d71'/1'",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 440,
    "lieu": "halage",
    "halage": "9\u00d71'/1'",
    "piste": "9\u00d7400m R2'",
    "desc": "Fartlek 1min/1min \u2014 9 r\u00e9p\u00e9titions. R\u00e9cup trottin\u00e9e active obligatoire. Allure Z4+. Volume interm\u00e9diaire."
  },
  "S112": {
    "l": "11\u00d71'/1'",
    "c": "VMA Courte",
    "rpe": "9",
    "rn": 9,
    "ua": 528,
    "lieu": "halage",
    "halage": "11\u00d71'/1'",
    "piste": "11\u00d7400m R2'",
    "desc": "Fartlek 1min/1min \u2014 11 r\u00e9p\u00e9titions. R\u00e9cup trottin\u00e9e active obligatoire. Allure Z4-Z5. Volume \u00e9lev\u00e9 \u2014 confirm\u00e9s."
  },
  "S113": {
    "l": "5\u00d72' R2'",
    "c": "VMA Longue",
    "rpe": "7",
    "rn": 7,
    "ua": 385,
    "lieu": "halage",
    "halage": "5\u00d72' R2'",
    "piste": "5\u00d7600m R2'",
    "desc": "Efforts 2min \u2014 5 r\u00e9p\u00e9titions avec 2min de r\u00e9cup. Transition vers le seuil. Allure 85-90% FCmax. R\u00e9gulit\u00e9 sur les 5 blocs. R\u00e9cup trottin\u00e9e."
  },
  "S114": {
    "l": "7\u00d72' R2'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 476,
    "lieu": "halage",
    "halage": "7\u00d72' R2'",
    "piste": "7\u00d7600m R2'",
    "desc": "Efforts 2min \u2014 7 r\u00e9p\u00e9titions avec 2min de r\u00e9cup. Transition vers le seuil. Allure 85-90% FCmax. R\u00e9gulit\u00e9 sur les 7 blocs. R\u00e9cup trottin\u00e9e."
  },
  "S115": {
    "l": "8\u00d72' R2'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 512,
    "lieu": "halage",
    "halage": "8\u00d72' R2'",
    "piste": "8\u00d7600m R2'",
    "desc": "Efforts 2min \u2014 8 r\u00e9p\u00e9titions avec 2min de r\u00e9cup. Transition vers le seuil. Allure 85-90% FCmax. Volume \u00e9lev\u00e9 \u2014 r\u00e9gulit\u00e9 sur les 8 blocs. R\u00e9cup trottin\u00e9e."
  },
  "S116": {
    "l": "4\u00d73' R3'",
    "c": "VMA Longue",
    "rpe": "7",
    "rn": 7,
    "ua": 385,
    "lieu": "halage",
    "halage": "4\u00d73' R3'",
    "piste": "4\u00d7800m R3'",
    "desc": "Efforts 3min \u2014 4 r\u00e9p\u00e9titions avec 3min de r\u00e9cup. Allure seuil Z3-Z4. Introduction au travail seuil. Peut parler par mots."
  },
  "S117": {
    "l": "6\u00d73' R3'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 448,
    "lieu": "halage",
    "halage": "6\u00d73' R3'",
    "piste": "6\u00d7800m R3'",
    "desc": "Efforts 3min \u2014 6 r\u00e9p\u00e9titions avec 3min de r\u00e9cup. Allure seuil Z4. Volume interm\u00e9diaire \u2014 maintenir l'allure identique sur tous les blocs."
  },
  "S118": {
    "l": "7\u00d73' R3'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 476,
    "lieu": "halage",
    "halage": "7\u00d73' R3'",
    "piste": "7\u00d7800m R3'",
    "desc": "Efforts 3min \u2014 7 r\u00e9p\u00e9titions avec 3min de r\u00e9cup. Allure seuil Z4. Volume interm\u00e9diaire \u2014 maintenir l'allure identique sur tous les blocs."
  },
  "S119": {
    "l": "5\u00d74' R3'",
    "c": "VMA Longue",
    "rpe": "7",
    "rn": 7,
    "ua": 413,
    "lieu": "halage",
    "halage": "5\u00d74' R3'",
    "piste": "5\u00d71000m R3'",
    "desc": "Efforts 4min \u2014 5 r\u00e9p\u00e9titions avec 3min de r\u00e9cup. Allure seuil 80-88% FCmax. Volume mod\u00e9r\u00e9. R\u00e9cup trottin\u00e9e entre les blocs."
  },
  "S120": {
    "l": "7\u00d74' R3'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 490,
    "lieu": "halage",
    "halage": "7\u00d74' R3'",
    "piste": "7\u00d71000m R3'",
    "desc": "Efforts 4min \u2014 7 r\u00e9p\u00e9titions avec 3min de r\u00e9cup. Allure seuil 80-88% FCmax. Volume \u00e9lev\u00e9 \u2014 r\u00e9gulit\u00e9 avant tout. R\u00e9cup trottin\u00e9e entre les blocs."
  },
  "S121": {
    "l": "8\u00d74' R3'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 518,
    "lieu": "halage",
    "halage": "8\u00d74' R3'",
    "piste": "8\u00d71000m R3'",
    "desc": "Efforts 4min \u2014 8 r\u00e9p\u00e9titions avec 3min de r\u00e9cup. Allure seuil 80-88% FCmax. Volume \u00e9lev\u00e9 \u2014 r\u00e9gulit\u00e9 avant tout. R\u00e9cup trottin\u00e9e entre les blocs."
  },
  "S122": {
    "l": "3\u00d75' R3'",
    "c": "VMA Longue",
    "rpe": "7",
    "rn": 7,
    "ua": 378,
    "lieu": "halage",
    "halage": "3\u00d75' R3'",
    "piste": "3\u00d71500m R4'",
    "desc": "Efforts 5min \u2014 3 r\u00e9p\u00e9titions avec 3min de r\u00e9cup. S\u00e9ance cl\u00e9 marathon et trail. Allure seuil 80-88% FCmax. R\u00e9gulit\u00e9 avant tout. Volume faible."
  },
  "S123": {
    "l": "4\u00d75' R3'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 448,
    "lieu": "halage",
    "halage": "4\u00d75' R3'",
    "piste": "4\u00d71500m R4'",
    "desc": "Efforts 5min \u2014 4 r\u00e9p\u00e9titions avec 3min de r\u00e9cup. S\u00e9ance cl\u00e9 marathon et trail. Allure seuil 80-88% FCmax. R\u00e9gulit\u00e9 avant tout. Volume interm\u00e9diaire."
  },
  "S124": {
    "l": "5\u00d75' R3'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 490,
    "lieu": "halage",
    "halage": "5\u00d75' R3'",
    "piste": "5\u00d71500m R4'",
    "desc": "Efforts 5min \u2014 5 r\u00e9p\u00e9titions avec 3min de r\u00e9cup. S\u00e9ance cl\u00e9 marathon et trail. Allure seuil 80-88% FCmax. Volume interm\u00e9diaire."
  },
  "S125": {
    "l": "6\u00d75' R3'",
    "c": "VMA Longue",
    "rpe": "9",
    "rn": 9,
    "ua": 594,
    "lieu": "halage",
    "halage": "6\u00d75' R3'",
    "piste": "6\u00d71500m R4'",
    "desc": "Efforts 5min \u2014 6 r\u00e9p\u00e9titions avec 3min de r\u00e9cup. S\u00e9ance marathon et trail exigeante. Allure seuil 80-88% FCmax. Volume \u00e9lev\u00e9 \u2014 s\u00e9ance exigeante."
  },
  "S126": {
    "l": "4\u00d71'30\" R2'30\"",
    "c": "VMA Longue",
    "rpe": "7",
    "rn": 7,
    "ua": 375,
    "lieu": "halage",
    "halage": "4\u00d71'30\" R2'30\"",
    "piste": "4\u00d7500m R2'30\"",
    "desc": "Efforts 1min30 \u2014 4 r\u00e9p\u00e9titions avec 2min30 de r\u00e9cup. Dur\u00e9e id\u00e9ale c\u00f4tes VW et Voulgre. Allure 85-90% FCmax. Volume faible \u2014 d\u00e9butants."
  },
  "S127": {
    "l": "5\u00d71'30\" R2'30\"",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 420,
    "lieu": "halage",
    "halage": "5\u00d71'30\" R2'30\"",
    "piste": "5\u00d7500m R2'30\"",
    "desc": "Efforts 1min30 \u2014 5 r\u00e9p\u00e9titions avec 2min30 de r\u00e9cup. Dur\u00e9e id\u00e9ale c\u00f4tes VW et Voulgre. Allure 85-90% FCmax. Volume interm\u00e9diaire."
  },
  "S128": {
    "l": "6\u00d71'30\" R2'30\"",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 453,
    "lieu": "halage",
    "halage": "6\u00d71'30\" R2'30\"",
    "piste": "6\u00d7500m R2'30\"",
    "desc": "Efforts 1min30 \u2014 6 r\u00e9p\u00e9titions avec 2min30 de r\u00e9cup. Allure 85-90% FCmax. Volume interm\u00e9diaire."
  },
  "S129": {
    "l": "7\u00d71'30\" R2'30\"",
    "c": "VMA Longue",
    "rpe": "9",
    "rn": 9,
    "ua": 486,
    "lieu": "halage",
    "halage": "7\u00d71'30\" R2'30\"",
    "piste": "7\u00d7500m R2'30\"",
    "desc": "Efforts 1min30 \u2014 7 r\u00e9p\u00e9titions avec 2min30 de r\u00e9cup. Allure 85-90% FCmax. Volume \u00e9lev\u00e9 \u2014 confirm\u00e9s."
  },
  "S130": {
    "l": "8\u00d71'30\" R2'30\"",
    "c": "VMA Longue",
    "rpe": "9",
    "rn": 9,
    "ua": 513,
    "lieu": "halage",
    "halage": "8\u00d71'30\" R2'30\"",
    "piste": "8\u00d7500m R2'30\"",
    "desc": "Efforts 1min30 \u2014 8 r\u00e9p\u00e9titions avec 2min30 de r\u00e9cup. Allure 85-90% FCmax. Volume \u00e9lev\u00e9 \u2014 confirm\u00e9s."
  },
  "S131": {
    "l": "4\u00d73' R1'30\"",
    "c": "Seuil",
    "rpe": "7",
    "rn": 7,
    "ua": 385,
    "lieu": "halage",
    "halage": "4\u00d73' R1'30\"",
    "piste": "4\u00d71000m R1'30\"",
    "desc": "Seuil fractionn\u00e9 court \u2014 4 blocs de 3min avec 1min30 de r\u00e9cup. R\u00e9cup courte impose de g\u00e9rer l'allure. Allure seuil Z3-Z4. Volume l\u00e9ger."
  },
  "S132": {
    "l": "6\u00d73' R1'30\"",
    "c": "Seuil",
    "rpe": "8",
    "rn": 8,
    "ua": 448,
    "lieu": "halage",
    "halage": "6\u00d73' R1'30\"",
    "piste": "6\u00d71000m R1'30\"",
    "desc": "Seuil fractionn\u00e9 court \u2014 6 blocs de 3min avec 1min30 de r\u00e9cup. R\u00e9cup courte impose de g\u00e9rer l'allure. Allure seuil Z3-Z4. Volume interm\u00e9diaire."
  },
  "S133": {
    "l": "7\u00d73' R1'30\"",
    "c": "Seuil",
    "rpe": "8",
    "rn": 8,
    "ua": 476,
    "lieu": "halage",
    "halage": "7\u00d73' R1'30\"",
    "piste": "7\u00d71000m R1'30\"",
    "desc": "Seuil fractionn\u00e9 court \u2014 7 blocs de 3min avec 1min30 de r\u00e9cup. R\u00e9cup courte impose de g\u00e9rer l'allure. Allure seuil Z4. Volume \u00e9lev\u00e9."
  },
  "S134": {
    "l": "2\u00d710' R3'",
    "c": "Seuil",
    "rpe": "7",
    "rn": 7,
    "ua": 434,
    "lieu": "halage",
    "halage": "2\u00d710' R3'",
    "piste": "2\u00d72500m R3'",
    "desc": "Seuil long \u2014 2 blocs de 10min avec 3min de r\u00e9cup active. Allure seuil Z3-Z4. Introduction au tempo long \u2014 footing soutenu."
  },
  "S135": {
    "l": "3\u00d710' R4'",
    "c": "Seuil",
    "rpe": "8",
    "rn": 8,
    "ua": 540,
    "lieu": "halage",
    "halage": "3\u00d710' R4'",
    "piste": "3\u00d72500m R4'",
    "desc": "Seuil long \u2014 3 blocs de 10min avec 4min de r\u00e9cup active. Allure seuil Z3-Z4. S\u00e9ance seuil structur\u00e9e. Tenir l'allure sur le 3e bloc est l'objectif."
  },
  "S136": {
    "l": "4\u00d710' R4'",
    "c": "Seuil",
    "rpe": "9",
    "rn": 9,
    "ua": 648,
    "lieu": "halage",
    "halage": "4\u00d710' R4'",
    "piste": "4\u00d72500m R4'",
    "desc": "Seuil long exigeant \u2014 4 blocs de 10min avec 4min de r\u00e9cup active. Allure seuil Z4. S\u00e9ance seuil exigeante \u2014 r\u00e9gulit\u00e9 sur les 4 blocs."
  },
  "S137": {
    "l": "8\u00d745\" c\u00f4te",
    "c": "C\u00f4tes",
    "rpe": "7",
    "rn": 7,
    "ua": 376,
    "lieu": "halage",
    "halage": "8\u00d745\" c\u00f4te",
    "piste": "8\u00d745\" talus stade",
    "desc": "C\u00f4tes 45sec \u2014 8 r\u00e9p\u00e9titions. Id\u00e9ale c\u00f4tes VW et La Floride. Explosif 7/10. Chaque mont\u00e9e doit ressembler \u00e0 la pr\u00e9c\u00e9dente. Bras tr\u00e8s actifs."
  },
  "S138": {
    "l": "10\u00d745\" c\u00f4te",
    "c": "C\u00f4tes",
    "rpe": "8",
    "rn": 8,
    "ua": 448,
    "lieu": "halage",
    "halage": "10\u00d745\" c\u00f4te",
    "piste": "10\u00d745\" talus stade",
    "desc": "C\u00f4tes 45sec \u2014 10 r\u00e9p\u00e9titions. Id\u00e9ale c\u00f4tes VW et La Floride. Explosif 8/10. Chaque mont\u00e9e doit ressembler \u00e0 la pr\u00e9c\u00e9dente. Bras tr\u00e8s actifs."
  },
  "S139": {
    "l": "12\u00d745\" c\u00f4te",
    "c": "C\u00f4tes",
    "rpe": "8",
    "rn": 8,
    "ua": 512,
    "lieu": "halage",
    "halage": "12\u00d745\" c\u00f4te",
    "piste": "12\u00d745\" talus stade",
    "desc": "C\u00f4tes 45sec \u2014 12 r\u00e9p\u00e9titions. Volume \u00e9lev\u00e9. Explosif 8/10. Chaque mont\u00e9e doit ressembler \u00e0 la pr\u00e9c\u00e9dente. Bras tr\u00e8s actifs."
  },
  "S140": {
    "l": "15\u00d745\" c\u00f4te",
    "c": "C\u00f4tes",
    "rpe": "9",
    "rn": 9,
    "ua": 633,
    "lieu": "halage",
    "halage": "15\u00d745\" c\u00f4te",
    "piste": "15\u00d745\" talus stade",
    "desc": "C\u00f4tes 45sec volume tr\u00e8s \u00e9lev\u00e9 \u2014 15 r\u00e9p\u00e9titions. Pour confirm\u00e9s seulement. Explosif 9/10. Si la puissance baisse, stopper. Bras tr\u00e8s actifs."
  },
  "S141": {
    "l": "4\u00d72' c\u00f4te Voulgre",
    "c": "C\u00f4tes",
    "rpe": "7",
    "rn": 7,
    "ua": 364,
    "lieu": "halage",
    "halage": "4\u00d72' c\u00f4te Voulgre",
    "piste": "4\u00d72' talus stade",
    "desc": "C\u00f4te Voulgre 2min \u2014 4 r\u00e9p\u00e9titions. Puissance ma\u00eetris\u00e9e. Focus descente technique : petits pas, genoux fl\u00e9chis. Volume faible \u2014 d\u00e9butants."
  },
  "S142": {
    "l": "8\u00d72' c\u00f4te Voulgre",
    "c": "C\u00f4tes",
    "rpe": "9",
    "rn": 9,
    "ua": 693,
    "lieu": "halage",
    "halage": "8\u00d72' c\u00f4te Voulgre",
    "piste": "8\u00d72' talus stade",
    "desc": "C\u00f4te Voulgre 2min \u2014 8 r\u00e9p\u00e9titions. Puissance max. Focus descente technique : petits pas, genoux fl\u00e9chis. Volume \u00e9lev\u00e9 \u2014 confirm\u00e9s. S\u00e9ance phare trail."
  },
  "S143": {
    "l": "4\u00d71'30\" c\u00f4te Voulgre",
    "c": "C\u00f4tes",
    "rpe": "7",
    "rn": 7,
    "ua": 357,
    "lieu": "halage",
    "halage": "4\u00d71'30\" c\u00f4te Voulgre",
    "piste": "4\u00d71'30\" talus stade",
    "desc": "C\u00f4te Voulgre 1min30 \u2014 4 r\u00e9p\u00e9titions. Soutenu contr\u00f4l\u00e9. Petits pas en descente, genoux fl\u00e9chis. Allure effort 7/10. Volume faible. S\u00e9ance phare trail."
  },
  "S144": {
    "l": "8\u00d71'30\" c\u00f4te Voulgre",
    "c": "C\u00f4tes",
    "rpe": "8",
    "rn": 8,
    "ua": 512,
    "lieu": "halage",
    "halage": "8\u00d71'30\" c\u00f4te Voulgre",
    "piste": "8\u00d71'30\" talus stade",
    "desc": "C\u00f4te Voulgre 1min30 \u2014 8 r\u00e9p\u00e9titions. Soutenu contr\u00f4l\u00e9. Petits pas en descente, genoux fl\u00e9chis. Allure effort 8/10. Volume interm\u00e9diaire. S\u00e9ance phare trail."
  },
  "S145": {
    "l": "10\u00d71'30\" c\u00f4te Voulgre",
    "c": "C\u00f4tes",
    "rpe": "9",
    "rn": 9,
    "ua": 630,
    "lieu": "halage",
    "halage": "10\u00d71'30\" c\u00f4te Voulgre",
    "piste": "10\u00d71'30\" talus stade",
    "desc": "C\u00f4te Voulgre 1min30 \u2014 10 r\u00e9p\u00e9titions. Soutenu. Petits pas en descente, genoux fl\u00e9chis. Allure effort 9/10. Volume \u00e9lev\u00e9 \u2014 confirm\u00e9s. S\u00e9ance phare trail."
  },
  "P11": {
    "l": "30\"-45\"-1'-1'30\"-1'-45\"-30\"",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 464,
    "lieu": "halage",
    "halage": "30\"-45\"-1'-1'30\"-1'-45\"-30\"",
    "piste": "100-200-300-400-300-200-100m",
    "desc": "Pyramide dur\u00e9e route \u2014 30s/45s/1min/1min30/1min/45s/30s avec 2min de r\u00e9cup. \u00c9quivalent route de la pyramide 100-200-300-400m piste. Allure VMA. S\u00e9ance compl\u00e8te et vari\u00e9e. R\u00e9cup passive entre efforts. R\u00e9gulit\u00e9 sur les dur\u00e9es identiques (30s aller = 30s retour)."
  },
  "P12": {
    "l": "45\"-1'-1'30\"-1'-45\"",
    "c": "VMA Courte",
    "rpe": "7",
    "rn": 7,
    "ua": 371,
    "lieu": "halage",
    "halage": "45\"-1'-1'30\"-1'-45\"",
    "piste": "200-300-400-300-200m",
    "desc": "Pyramide dur\u00e9e courte route \u2014 45s/1min/1min30/1min/45s avec 2min de r\u00e9cup. Version all\u00e9g\u00e9e, id\u00e9ale pour d\u00e9buter les pyramides. Allure VMA. \u00c9quivalent route de la pyramide 200-300-400m piste."
  },
  "P13": {
    "l": "45\"-1'30\"-2'30\"-3'-2'30\"-1'30\"-45\"",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 564,
    "lieu": "halage",
    "halage": "45\"-1'30\"-2'30\"-3'-2'30\"-1'30\"-45\"",
    "piste": "200-400-600-800-600-400-200m",
    "desc": "Grande pyramide dur\u00e9e route \u2014 45s/1min30/2min30/3min/2min30/1min30/45s avec 3min de r\u00e9cup. \u00c9quivalent de la pyramide 200-400-600-800m piste. S\u00e9ance exigeante couvrant VMA courte et longue. Allure Z4. Le 3min central est le pic d'effort."
  },
  "P14": {
    "l": "1'30\"-2'-3'-2'-1'30\"",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 496,
    "lieu": "halage",
    "halage": "1'30\"-2'-3'-2'-1'30\"",
    "piste": "400-600-800-600-400m",
    "desc": "Pyramide dur\u00e9e longue route \u2014 1min30/2min/3min/2min/1min30 avec 3min de r\u00e9cup. \u00c9quivalent route de la pyramide 400-600-800m piste. Allure seuil Z3-Z4 sur les longues, VMA sur les courtes. Le 3min central est le pic."
  },
  "P15": {
    "l": "5x30\"-4x45\"-3x1'-2x1'30\"-1x2'",
    "c": "VMA Courte",
    "rpe": "9",
    "rn": 9,
    "ua": 671,
    "lieu": "halage",
    "halage": "5x30\"-4x45\"-3x1'-2x1'30\"-1x2'",
    "piste": "5x100-4x200-3x300-2x400-1x500m",
    "desc": "Pyramide ascendante dur\u00e9e route \u2014 5\u00d730s/4\u00d745s/3\u00d71min/2\u00d71min30/1\u00d72min avec 1min30 de r\u00e9cup. \u00c9quivalent route de P05 piste. La charge augmente avec la dur\u00e9e. Allure VMA. S\u00e9ance avanc\u00e9e \u2014 r\u00e9server aux confirm\u00e9s."
  },
  "M01": {
    "l": "2x(10x30\" D+)",
    "c": "Puissance Mont\u00e9e",
    "rpe": "8",
    "rn": 8,
    "ua": 496,
    "lieu": "montagne",
    "halage": "\u2014",
    "piste": "\u2014",
    "desc": "Explosivit\u00e9 en c\u00f4te raide \u2014 2 s\u00e9ries de 10 r\u00e9p\u00e9titions de 30sec. R\u00e9cup active entre reps (30sec trottin\u00e9e), 3min de descente entre s\u00e9ries. Foul\u00e9e haute, genoux lev\u00e9s, bras actifs. Terrain : pente > 10%. S\u00e9ance neuromusculaire sp\u00e9cifique trail."
  },
  "M02": {
    "l": "4x6' Seuil Montagne",
    "c": "Puissance Mont\u00e9e",
    "rpe": "7",
    "rn": 7,
    "ua": 511,
    "lieu": "montagne",
    "halage": "\u2014",
    "piste": "\u2014",
    "desc": "Seuil montagne \u2014 4 r\u00e9p\u00e9titions de 6min en mont\u00e9e soutenue. R\u00e9cup : descente trottin\u00e9e 3min. Allure haute mais contr\u00f4l\u00e9e, 75-85% FCmax. Maintenir la foul\u00e9e courue le plus longtemps possible. Pente id\u00e9ale 8-15%."
  },
  "M03": {
    "l": "Pyramide D+ 1'-2'-3'-2'-1'",
    "c": "Puissance Mont\u00e9e",
    "rpe": "8",
    "rn": 8,
    "ua": 488,
    "lieu": "montagne",
    "halage": "\u2014",
    "piste": "\u2014",
    "desc": "Pyramide ascendante-descendante en mont\u00e9e : 1min / 2min / 3min / 2min / 1min. R\u00e9cup descente trottin\u00e9e ~3min entre chaque. Intensit\u00e9 croissante puis d\u00e9croissante. S\u00e9ance polyvalente pour travailler toutes les fili\u00e8res en mont\u00e9e."
  },
  "M04": {
    "l": "3x10' Power Hiking",
    "c": "Puissance Mont\u00e9e",
    "rpe": "6",
    "rn": 6,
    "ua": 468,
    "lieu": "montagne",
    "halage": "\u2014",
    "piste": "\u2014",
    "desc": "Marche rapide avec b\u00e2tons \u2014 3 blocs de 10min sur pente > 15%. R\u00e9cup 4min descente march\u00e9e. Technique : b\u00e2tons synchronis\u00e9s, pas courts, pression maximale. Sp\u00e9cifique ultra et courses \u00e0 fort D+. Efficacit\u00e9 \u00e9nerg\u00e9tique."
  },
  "M05": {
    "l": "1x30' KV Simulation",
    "c": "Puissance Mont\u00e9e",
    "rpe": "9",
    "rn": 9,
    "ua": 675,
    "lieu": "montagne",
    "halage": "\u2014",
    "piste": "\u2014",
    "desc": "Simulation Kilom\u00e8tre Vertical \u2014 mont\u00e9e continue 30 \u00e0 40min sans arr\u00eat \u00e0 intensit\u00e9 max soutenue. Test d'endurance de force. Allure sur le fil, RPE 9/10. Pente id\u00e9ale > 20%. Terminer debout. S\u00e9ance signature pr\u00e9parations KV et Sky Race."
  },
  "D01": {
    "l": "6x2' Descente Technique",
    "c": "Technique Descente",
    "rpe": "7",
    "rn": 7,
    "ua": 469,
    "lieu": "montagne",
    "halage": "\u2014",
    "piste": "\u2014",
    "desc": "Descente technique rapide \u2014 6 r\u00e9p\u00e9titions de 2min. R\u00e9cup : remont\u00e9e trottin\u00e9e 3min. Focus pose de pied (avant-pied), lecture de trajectoire, centre de gravit\u00e9 bas. Progressif : commencer \u00e0 70%, finir \u00e0 90%. Pr\u00e9paration \u00e0 la casse de fibre."
  },
  "D02": {
    "l": "5x(3' D+ / 2' D-)",
    "c": "Technique Descente",
    "rpe": "8",
    "rn": 8,
    "ua": 584,
    "lieu": "montagne",
    "halage": "\u2014",
    "piste": "\u2014",
    "desc": "L'Ascenseur \u2014 5 r\u00e9p\u00e9titions : 3min mont\u00e9e + 2min descente avec 2min de r\u00e9cup. Cardio haut en mont\u00e9e, appuis pr\u00e9cis en descente. Travail de la transition mont\u00e9e/descente sp\u00e9cifique course de montagne."
  },
  "D03": {
    "l": "3x5' Descente Engag\u00e9e",
    "c": "Technique Descente",
    "rpe": "8",
    "rn": 8,
    "ua": 600,
    "lieu": "montagne",
    "halage": "\u2014",
    "piste": "\u2014",
    "desc": "Excentrique pur \u2014 3 descentes engag\u00e9es de 5min, r\u00e9cup 10min rando/marche. Intensit\u00e9 max pour induire la casse de fibre musculaire. \u00c0 placer 3-4 semaines avant objectif descente. \u00c0 proscrire \u00e0 J-14."
  },
  "X01": {
    "l": "6x(2' D+ + 1' Plat)",
    "c": "Sp\u00e9cificit\u00e9 Trail",
    "rpe": "8",
    "rn": 8,
    "ua": 544,
    "lieu": "montagne",
    "halage": "\u2014",
    "piste": "\u2014",
    "desc": "Relance Cr\u00eate \u2014 6 r\u00e9p\u00e9titions : 2min mont\u00e9e \u00e0 bloc + 1min plat imm\u00e9diatement apr\u00e8s. R\u00e9cup 2min descente. Apprendre \u00e0 relancer sur le plat d\u00e8s la fin d'une c\u00f4te. Sp\u00e9cifique profils vallonn\u00e9s et cr\u00eates."
  },
  "X02": {
    "l": "3x15' Terrain Vallonn\u00e9",
    "c": "Sp\u00e9cificit\u00e9 Trail",
    "rpe": "7",
    "rn": 7,
    "ua": 665,
    "lieu": "montagne",
    "halage": "\u2014",
    "piste": "\u2014",
    "desc": "Bloc seuil mixte \u2014 3 blocs de 15min sur terrain naturel vallonn\u00e9. R\u00e9cup 5min. Tenir l'allure malgr\u00e9 les changements de pente. Allure seuil Z3-Z4. Ne pas s'arr\u00eater dans les mont\u00e9es. Id\u00e9al sur parcours type course A objectif."
  },
  "X03": {
    "l": "45' Fartlek Montagne",
    "c": "Sp\u00e9cificit\u00e9 Trail",
    "rpe": "7",
    "rn": 7,
    "ua": 595,
    "lieu": "montagne",
    "halage": "\u2014",
    "piste": "\u2014",
    "desc": "Fartlek montagne libre \u2014 45min sur terrain naturel, effort au feeling selon le relief. Monter les bosses \u00e0 bloc, r\u00e9cup\u00e9rer dans les descentes et sur le plat. RPE moyen 7/10. D\u00e9veloppe la lecture du terrain et la gestion de l'intensit\u00e9 au feeling."
  },
  "X04": {
    "l": "3x(4' D- / 4' D+)",
    "c": "Sp\u00e9cificit\u00e9 Trail",
    "rpe": "8",
    "rn": 8,
    "ua": 560,
    "lieu": "montagne",
    "halage": "\u2014",
    "piste": "\u2014",
    "desc": "Le Sablier \u2014 3 r\u00e9p\u00e9titions : 4min descente rapide puis 4min mont\u00e9e directe sans r\u00e9cup interne. R\u00e9cup 3min entre s\u00e9ries. Montrer se fait en \u00e9tat de fatigue neuromusculaire. Tr\u00e8s sp\u00e9cifique fin de course de montagne."
  },
  "L01": {
    "l": "Rando-Course 2h30-4h Zone 2",
    "c": "Volume Endurance",
    "rpe": "5",
    "rn": 5,
    "ua": 1100,
    "lieu": "montagne",
    "halage": "\u2014",
    "piste": "\u2014",
    "desc": "Sortie longue endurance fondamentale \u2014 2h30 \u00e0 4h en Zone 2 sur terrain montagneux. Mix course/marche selon la pente. Gestion nutrition/hydratation toutes les 45min. RPE 5/10, peut parler en phrase. Socle de toute pr\u00e9paration trail long. Volume > intensit\u00e9."
  },
  "L02": {
    "l": "Boucle 25km / 1200D+",
    "c": "Volume Endurance",
    "rpe": "6",
    "rn": 6,
    "ua": 1320,
    "lieu": "montagne",
    "halage": "\u2014",
    "piste": "\u2014",
    "desc": "Sortie plaisir club \u2014 boucle 25km avec 1200m de D+. Pas de chrono, gestion libre. Coh\u00e9sion de groupe, d\u00e9couverte de parcours. RPE 6/10, sortie r\u00e9cup\u00e9ration active post-semaine charg\u00e9e. Id\u00e9ale en groupe, allure du plus lent."
  },
  "L03": {
    "l": "Week-end Choc S+D",
    "c": "Volume Endurance",
    "rpe": "8",
    "rn": 8,
    "ua": 2240,
    "lieu": "montagne",
    "halage": "\u2014",
    "piste": "\u2014",
    "desc": "Week-end choc \u2014 Samedi 2h + Dimanche 4h. Accumulation de fatigue en 48h. RPE 8 sur le Dimanche (jambes charg\u00e9es du Samedi). Sp\u00e9cifique ultra et pr\u00e9pa long. Pr\u00e9voir nutrition renforc\u00e9e. Ne pas r\u00e9p\u00e9ter > 1x/mois. UA calcul\u00e9e sur la journ\u00e9e Dimanche (la plus lourde)."
  },
  "sortie_recup": {
    "l": "Sortie \u00e9cup active",
    "c": "R\u00e9cup\u00e9ration",
    "rpe": "2-3",
    "rn": 3,
    "ua": 150,
    "lieu": "halage",
    "halage": "50min tr\u00e8s douce Halage",
    "piste": "\u2014",
    "desc": "Allure conversationnelle. Jamais de pression. Sortie sociale et de r\u00e9cup\u00e9ration active."
  },
  "sortie_longue": {
    "l": "Sortie longue endurance",
    "c": "Volume Endurance",
    "rpe": "3-4",
    "rn": 4,
    "ua": 360,
    "lieu": "chiberta",
    "halage": "1h30 EF route / Chiberta / Douves",
    "piste": "\u2014",
    "desc": "Jamais > 80% FCmax. La conversation doit rester possible. Volume et r\u00e9gularit\u00e9 allure."
  },
  "fartlek": {
    "l": "Fartlek libre 45min",
    "c": "Mixte",
    "rpe": "5-7",
    "rn": 6,
    "ua": 270,
    "lieu": "halage",
    "halage": "45min libre Halage au feeling",
    "piste": "\u2014",
    "desc": "Effort au feeling selon les sensations. RPE moyen 6/10."
  },
  "allure_marathon": {
    "l": "Sortie allure marathon",
    "c": "Allure Marathon",
    "rpe": "6-7",
    "rn": 7,
    "ua": 525,
    "lieu": "halage",
    "halage": "1h15 allure marathon cible",
    "piste": "\u2014",
    "desc": "Allure marathon cible +5s/km. Simulation course. Gels recommand\u00e9s si >30min."
  },
  "allure_semi": {
    "l": "Sortie allure semi",
    "c": "Allure Sp\u00e9cifique",
    "rpe": "7",
    "rn": 7,
    "ua": 420,
    "lieu": "halage",
    "halage": "1h allure semi-marathon cible",
    "piste": "\u2014",
    "desc": "Allure semi-marathon cible. Efforts soutenus en conditions de course."
  },
  "30s": {
    "l": "10\u00d730\"/30\"",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 396,
    "lieu": "halage",
    "halage": "10\u00d730\"/30\" Halage",
    "piste": "10\u00d7200m piste",
    "desc": "R\u00e9cup trottin\u00e9e OBLIGATOIRE. Allure VMA. S\u00e9ance neuromusculaire de r\u00e9f\u00e9rence."
  },
  "1min": {
    "l": "10\u00d71'/1'",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 520,
    "lieu": "halage",
    "halage": "10\u00d71'/1' Halage",
    "piste": "10\u00d7400m piste",
    "desc": "Fartlek structur\u00e9 10\u00d71min/1min. R\u00e9cup active. La base du fractionn\u00e9 court."
  },
  "3030": {
    "l": "2\u00d7(8\u00d730\"/30\") R3'",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 464,
    "lieu": "halage",
    "halage": "2\u00d7(8\u00d730\"/30\") R3' Halage",
    "piste": "2\u00d7(8\u00d7200m) R3'",
    "desc": "Double s\u00e9rie 30/30. R\u00e9cup trottin\u00e9e entre reps. 3min entre s\u00e9ries."
  },
  "2x8x30_30_r3": {
    "l": "2\u00d7(8\u00d730\"/30\") R3'",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 464,
    "lieu": "halage",
    "halage": "2\u00d7(8\u00d730\"/30\") R3' Halage",
    "piste": "2\u00d7(8\u00d7200m) R3'",
    "desc": "Travail de puissance a\u00e9robie en double s\u00e9rie. R\u00e9cup trottin\u00e9e entre reps."
  },
  "fartlek_10x1_1": {
    "l": "10\u00d71'/1'",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 520,
    "lieu": "halage",
    "halage": "10\u00d71'/1' Halage",
    "piste": "10\u00d7400m piste",
    "desc": "Fartlek structur\u00e9 10 r\u00e9p\u00e9titions. R\u00e9cup active obligatoire."
  },
  "5min": {
    "l": "4\u00d75' R3'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 448,
    "lieu": "halage",
    "halage": "4\u00d75' R3' Halage",
    "piste": "4\u00d71500m R4' piste",
    "desc": "Efforts 5min \u00e0 allure seuil 80-88% FCmax. S\u00e9ance cl\u00e9 marathon et trail."
  },
  "6min": {
    "l": "4\u00d76' R3'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 480,
    "lieu": "halage",
    "halage": "4\u00d76' R3' Halage",
    "piste": "4\u00d72000m R3' piste",
    "desc": "Efforts 6min. Allure seuil 80-88% FCmax. R\u00e9guli\u00e9t\u00e9 avant tout."
  },
  "8min": {
    "l": "3\u00d78' R3'",
    "c": "Seuil",
    "rpe": "8",
    "rn": 8,
    "ua": 504,
    "lieu": "halage",
    "halage": "3\u00d78' R3' Halage",
    "piste": "3\u00d72500m R4' piste",
    "desc": "Seuil long 3 blocs de 8min. Allure seuil Z3-Z4. Tenir sur le 3e bloc."
  },
  "10min": {
    "l": "3\u00d710' R4'",
    "c": "Seuil",
    "rpe": "8",
    "rn": 8,
    "ua": 540,
    "lieu": "halage",
    "halage": "3\u00d710' R4' Halage",
    "piste": "3\u00d72500m R4' piste",
    "desc": "Seuil long 3 blocs de 10min. Allure seuil Z3-Z4."
  },
  "1min30": {
    "l": "5\u00d71'30\" R2'30\"",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 420,
    "lieu": "halage",
    "halage": "5\u00d71'30\" R2'30\" Halage",
    "piste": "5\u00d7500m R2'30\" piste",
    "desc": "Efforts 1min30. Dur\u00e9e id\u00e9ale c\u00f4tes VW et Voulgre."
  },
  "fartlek_321_x3": {
    "l": "3\u00d7(3'2'1') R2'",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 504,
    "lieu": "halage",
    "halage": "3\u00d7(3'2'1') R2' Halage",
    "piste": "3\u00d7(800+400+200m) R2'",
    "desc": "Pyramide inverse r\u00e9p\u00e9t\u00e9e. Les 1min finaux de chaque s\u00e9rie sont vifs."
  },
  "fartlek_5_8_12_r3": {
    "l": "Fartlek 5'-10'-10'",
    "c": "Seuil",
    "rpe": "8",
    "rn": 8,
    "ua": 528,
    "lieu": "halage",
    "halage": "5'+10'+10' Halage",
    "piste": "1500-3000-3000m piste",
    "desc": "3 blocs progressifs. Le 5min sert activation, les deux 10min sont le coeur."
  },
  "fartlek_structure": {
    "l": "Fartlek structur\u00e9 10\u00d72'",
    "c": "VMA Longue",
    "rpe": "7-8",
    "rn": 7,
    "ua": 520,
    "lieu": "halage",
    "halage": "10\u00d72' R~1' Halage",
    "piste": "10\u00d7600m R~1' piste",
    "desc": "Fartlek r\u00e9gulier 2min. R\u00e9cup trottin\u00e9e obligatoire. M\u00eame allure sur toutes les r\u00e9p\u00e9titions."
  },
  "3x15_r5": {
    "l": "3\u00d715' R5'",
    "c": "Seuil",
    "rpe": "8",
    "rn": 8,
    "ua": 595,
    "lieu": "halage",
    "halage": "3\u00d715' R5' Halage",
    "piste": "3\u00d74000m R5' piste",
    "desc": "S\u00e9ance seuil longue. Tenir allure sur le 3e bloc. Allure seuil Z3-Z4."
  },
  "8x3_r130": {
    "l": "8\u00d73' R1'30\"",
    "c": "Seuil",
    "rpe": "8",
    "rn": 8,
    "ua": 504,
    "lieu": "halage",
    "halage": "8\u00d73' R1'30\" Halage",
    "piste": "8\u00d71000m R1'30\" piste",
    "desc": "Volume \u00e9lev\u00e9 au seuil avec r\u00e9cup courte. G\u00e9rer allure. Si d\u00e9gradation d\u00e8s le 5e : r\u00e9duire \u00e0 6."
  },
  "3x7_r130": {
    "l": "7\u00d73' R1'30\"",
    "c": "Seuil",
    "rpe": "8",
    "rn": 8,
    "ua": 476,
    "lieu": "halage",
    "halage": "7\u00d73' R1'30\" Halage",
    "piste": "7\u00d71000m R1'30\" piste",
    "desc": "Seuil fractionn\u00e9 7 blocs de 3min avec r\u00e9cup courte. Allure seuil Z4."
  },
  "4x2000_r2": {
    "l": "4\u00d710' R4'",
    "c": "Seuil",
    "rpe": "8",
    "rn": 8,
    "ua": 648,
    "lieu": "halage",
    "halage": "4\u00d710' R4' Halage",
    "piste": "4\u00d72500m R4' piste",
    "desc": "Seuil long en 4 blocs de 10min. Allure seuil Z4. S\u00e9ance exigeante."
  },
  "5x1000_halage": {
    "l": "5\u00d71000m Halage",
    "c": "Seuil",
    "rpe": "7-8",
    "rn": 7,
    "ua": 455,
    "lieu": "halage",
    "halage": "5\u00d71000m R3' Halage",
    "piste": "5\u00d71000m R1'30\" piste",
    "desc": "5 kilom\u00e8tres au seuil. R\u00e9guli\u00e9t\u00e9 au km. Allure seuil Z3-Z4."
  },
  "cote_30s": {
    "l": "10\u00d730\" c\u00f4te",
    "c": "C\u00f4tes",
    "rpe": "8",
    "rn": 8,
    "ua": 448,
    "lieu": "floride",
    "halage": "10\u00d730\" c\u00f4te La Floride",
    "piste": "10\u00d730\" talus stade",
    "desc": "Genoux hauts, bras actifs. Explosif 8/10. Descente trottin\u00e9e. S\u00e9ance neuromusculaire."
  },
  "cote_45s": {
    "l": "10\u00d745\" c\u00f4te",
    "c": "C\u00f4tes",
    "rpe": "8",
    "rn": 8,
    "ua": 448,
    "lieu": "vw",
    "halage": "10\u00d745\" c\u00f4te VW",
    "piste": "10\u00d745\" talus stade",
    "desc": "C\u00f4tes 45sec \u2014 10 r\u00e9p\u00e9titions. Explosif 8/10. Chaque mont\u00e9e doit ressembler \u00e0 la pr\u00e9c\u00e9dente."
  },
  "cote_1min": {
    "l": "8\u00d71' c\u00f4te",
    "c": "C\u00f4tes",
    "rpe": "8",
    "rn": 8,
    "ua": 496,
    "lieu": "vw",
    "halage": "8\u00d71' c\u00f4te VW",
    "piste": "8\u00d71' talus stade",
    "desc": "C\u00f4te VW 1min. Soutenu 8/10. Maintenir la m\u00eame allure sur toutes les r\u00e9p\u00e9titions."
  },
  "cote_1min30": {
    "l": "6\u00d71'30\" c\u00f4te Voulgre",
    "c": "C\u00f4tes",
    "rpe": "8",
    "rn": 8,
    "ua": 478,
    "lieu": "voulgre",
    "halage": "6\u00d71'30\" c\u00f4te Voulgre",
    "piste": "6\u00d71'30\" talus stade",
    "desc": "C\u00f4te Voulgre 1min30. Soutenu contr\u00f4l\u00e9. Petits pas en descente, genoux fl\u00e9chis."
  },
  "cote_2min": {
    "l": "6\u00d72' c\u00f4te Voulgre",
    "c": "C\u00f4tes",
    "rpe": "8",
    "rn": 8,
    "ua": 492,
    "lieu": "voulgre",
    "halage": "6\u00d72' c\u00f4te Voulgre",
    "piste": "6\u00d72' talus stade",
    "desc": "C\u00f4te Voulgre 2min. Focus descente technique : petits pas, genoux fl\u00e9chis."
  },
  "cote_long": {
    "l": "8\u00d72' c\u00f4te Voulgre",
    "c": "C\u00f4tes",
    "rpe": "9",
    "rn": 9,
    "ua": 693,
    "lieu": "voulgre",
    "halage": "8\u00d72' c\u00f4te Voulgre",
    "piste": "8\u00d72' talus stade",
    "desc": "C\u00f4te Voulgre 2min volume \u00e9lev\u00e9. Puissance max. S\u00e9ance phare trail."
  },
  "escaliers": {
    "l": "Escaliers Biarritz",
    "c": "Puissance Mont\u00e9e",
    "rpe": "8",
    "rn": 8,
    "ua": 480,
    "lieu": "escaliers",
    "halage": "Escaliers Biarritz \u2014 mont\u00e9es enchai\u00een\u00e9es",
    "piste": "\u2014",
    "desc": "Escaliers Biarritz. Mont\u00e9es enchai\u00een\u00e9es explosives. Genoux hauts, bras actifs."
  },
  "piste_10x300_r100": {
    "l": "10\u00d7300m piste",
    "c": "VMA Longue",
    "rpe": "8",
    "rn": 8,
    "ua": 520,
    "lieu": "stades",
    "halage": "\u2014",
    "piste": "10\u00d7300m R2' piste",
    "desc": "300m piste avec 2min de r\u00e9cup. Allure Z4-Z5. Volume interm\u00e9diaire. R\u00e9guli\u00e9t\u00e9."
  },
  "piste_10x400_r200": {
    "l": "10\u00d7400m piste",
    "c": "VMA Courte",
    "rpe": "8",
    "rn": 8,
    "ua": 560,
    "lieu": "stades",
    "halage": "\u2014",
    "piste": "10\u00d7400m R2' piste",
    "desc": "10\u00d7400m piste. Allure VMA -10%. Tenir allure identique sur tous les 400m."
  },
  "vitesse_5x100_veille": {
    "l": "5\u00d7100m vitesse (veille)",
    "c": "Activation",
    "rpe": "7",
    "rn": 7,
    "ua": 200,
    "lieu": "stades",
    "halage": "5\u00d7100m Halage",
    "piste": "5\u00d7100m piste",
    "desc": "S\u00e9ance activation avant comp\u00e9tition. Stimule le syst\u00e8me neuromusculaire sans fatigue."
  },
  "fartlek_pyramid_girouettes": {
    "l": "Fartlek pyramide Girouettes",
    "c": "Mixte",
    "rpe": "6-7",
    "rn": 6,
    "ua": 480,
    "lieu": "girouettes",
    "halage": "Pyramide Girouettes au feeling",
    "piste": "\u2014",
    "desc": "Fartlek en pyramide dans le Parc Girouettes. Relief naturel, acc\u00e9l\u00e9rations dans les mont\u00e9es."
  },
  "circuit_douves": {
    "l": "Circuit Les Douves",
    "c": "Sp\u00e9cificit\u00e9 Trail",
    "rpe": "7",
    "rn": 7,
    "ua": 490,
    "lieu": "douves",
    "halage": "\u2014",
    "piste": "\u2014",
    "desc": "Circuit trail Les Douves. Terrain naturel, relief vari\u00e9, alternance c\u00f4tes et plat."
  },
};

// s=sem p=phase m=mardi j=jeudi wr=we_route wt=we_trail ua d=décharge n=notes
const programme = [
  {
    "s": 1,
    "p": "Reprise",
    "m": "sortie_recup",
    "j": "fartlek",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 450,
    "d": 1,
    "n": "Accueil nouveaux licenciés. Pas d'intensité."
  },
  {
    "s": 2,
    "p": "Base",
    "m": "30s",
    "j": "sortie_recup",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 650,
    "d": 0,
    "n": "Réintroduction VMA très progressive."
  },
  {
    "s": 3,
    "p": "Base",
    "m": "cote_30s",
    "j": "5min",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 780,
    "d": 0,
    "n": "Intro côtes Floride. PPG obligatoire."
  },
  {
    "s": 4,
    "p": "Décharge",
    "m": "sortie_recup",
    "j": "fartlek",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 470,
    "d": 1,
    "n": "Assimilation. Intensité coupée."
  },
  {
    "s": 5,
    "p": "Développement",
    "m": "1min",
    "j": "5min",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 830,
    "d": 0,
    "n": "Bloc spécifique marathon. VMA + seuil."
  },
  {
    "s": 6,
    "p": "Développement",
    "m": "cote_45s",
    "j": "6min",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 860,
    "d": 0,
    "n": "Côtes Floride/VW + seuil long."
  },
  {
    "s": 7,
    "p": "Développement",
    "m": "3030",
    "j": "8min",
    "wr": "allure_marathon",
    "wt": "sortie_longue",
    "ua": 920,
    "d": 0,
    "n": "VMA + allure spécifique marathon."
  },
  {
    "s": 8,
    "p": "Décharge",
    "m": "fartlek",
    "j": "sortie_recup",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 480,
    "d": 1,
    "n": "Décharge mi-bloc."
  },
  {
    "s": 9,
    "p": "Spécifique",
    "m": "5x1000_halage",
    "j": "cote_1min30",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 950,
    "d": 0,
    "n": "Séance reine 5×1000m."
  },
  {
    "s": 10,
    "p": "Spécifique",
    "m": "8x3_r130",
    "j": "10min",
    "wr": "allure_marathon",
    "wt": "sortie_longue",
    "ua": 980,
    "d": 0,
    "n": "Volume seuil max. Test allure marathon."
  },
  {
    "s": 11,
    "p": "Affûtage",
    "m": "3x15_r5",
    "j": "fartlek_structure",
    "wr": "allure_marathon",
    "wt": "sortie_longue",
    "ua": 870,
    "d": 0,
    "n": "Début affûtage."
  },
  {
    "s": 12,
    "p": "Affûtage",
    "m": "5x1000_halage",
    "j": "fartlek",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 640,
    "d": 0,
    "n": "Volume divisé par 2."
  },
  {
    "s": 13,
    "p": "Compétition",
    "m": "vitesse_5x100_veille",
    "j": "—",
    "wr": "—",
    "wt": "—",
    "ua": 420,
    "d": 1,
    "n": "Activation mardi."
  },
  {
    "s": 14,
    "p": "Récupération",
    "m": "—",
    "j": "sortie_recup",
    "wr": "sortie_recup",
    "wt": "sortie_recup",
    "ua": 320,
    "d": 1,
    "n": "Post-marathon. Aucune intensité."
  },
  {
    "s": 15,
    "p": "Reprise",
    "m": "sortie_recup",
    "j": "fartlek",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 500,
    "d": 1,
    "n": "Reprise progressive."
  },
  {
    "s": 16,
    "p": "Base",
    "m": "30s",
    "j": "5min",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 720,
    "d": 0,
    "n": "Prépa cross."
  },
  {
    "s": 17,
    "p": "Trêve Noël",
    "m": "—",
    "j": "—",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 300,
    "d": 1,
    "n": "🎄 Pas d'entraînement club."
  },
  {
    "s": 18,
    "p": "Trêve Noël",
    "m": "—",
    "j": "—",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 300,
    "d": 1,
    "n": "🎄 Reprise douce fin de semaine."
  },
  {
    "s": 19,
    "p": "Bloc cross",
    "m": "cote_30s",
    "j": "3030",
    "wr": "sortie_longue",
    "wt": "circuit_douves",
    "ua": 870,
    "d": 0,
    "n": "Post-Noël. Trail : Douves."
  },
  {
    "s": 20,
    "p": "Bloc cross",
    "m": "1min",
    "j": "cote_45s",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 900,
    "d": 0,
    "n": "VMA + côtes. Cross régionaux."
  },
  {
    "s": 21,
    "p": "Bloc cross",
    "m": "fartlek_10x1_1",
    "j": "cote_1min",
    "wr": "sortie_longue",
    "wt": "circuit_douves",
    "ua": 920,
    "d": 0,
    "n": "Fartlek + côtes VW."
  },
  {
    "s": 22,
    "p": "Décharge",
    "m": "sortie_recup",
    "j": "fartlek",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 490,
    "d": 1,
    "n": "Assimilation bloc cross."
  },
  {
    "s": 23,
    "p": "Bloc cross",
    "m": "2x8x30_30_r3",
    "j": "cote_45s",
    "wr": "sortie_longue",
    "wt": "fartlek_pyramid_girouettes",
    "ua": 940,
    "d": 0,
    "n": "Double VMA + côtes."
  },
  {
    "s": 24,
    "p": "Bloc cross",
    "m": "piste_10x400_r200",
    "j": "3x7_r130",
    "wr": "sortie_longue",
    "wt": "circuit_douves",
    "ua": 970,
    "d": 0,
    "n": "Piste 10×400 + seuil."
  },
  {
    "s": 25,
    "p": "Bloc cross",
    "m": "fartlek_321_x3",
    "j": "cote_1min30",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 920,
    "d": 0,
    "n": "Pyramide inverse + côtes."
  },
  {
    "s": 26,
    "p": "Affûtage",
    "m": "piste_10x300_r100",
    "j": "fartlek_structure",
    "wr": "sortie_longue",
    "wt": "circuit_douves",
    "ua": 730,
    "d": 0,
    "n": "Volume ↓."
  },
  {
    "s": 27,
    "p": "Compétition",
    "m": "vitesse_5x100_veille",
    "j": "sortie_recup",
    "wr": "—",
    "wt": "—",
    "ua": 430,
    "d": 1,
    "n": "Activation mardi."
  },
  {
    "s": 28,
    "p": "Compétition",
    "m": "sortie_recup",
    "j": "vitesse_5x100_veille",
    "wr": "—",
    "wt": "—",
    "ua": 440,
    "d": 1,
    "n": "Récup post-cross."
  },
  {
    "s": 29,
    "p": "Récupération",
    "m": "sortie_recup",
    "j": "fartlek",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 500,
    "d": 1,
    "n": "Pas d'intensité."
  },
  {
    "s": 30,
    "p": "Base route",
    "m": "1min30",
    "j": "5min",
    "wr": "allure_semi",
    "wt": "sortie_longue",
    "ua": 830,
    "d": 0,
    "n": "Pivot vers route."
  },
  {
    "s": 31,
    "p": "Spécifique",
    "m": "5x1000_halage",
    "j": "cote_1min",
    "wr": "allure_semi",
    "wt": "sortie_longue",
    "ua": 950,
    "d": 0,
    "n": "5×1000m. Côtes pour la force."
  },
  {
    "s": 32,
    "p": "Spécifique",
    "m": "4x2000_r2",
    "j": "fartlek_5_8_12_r3",
    "wr": "allure_marathon",
    "wt": "sortie_longue",
    "ua": 1000,
    "d": 0,
    "n": "Pic charge — 4×2000m."
  },
  {
    "s": 33,
    "p": "Compétition",
    "m": "8x3_r130",
    "j": "vitesse_5x100_veille",
    "wr": "—",
    "wt": "—",
    "ua": 580,
    "d": 0,
    "n": "Affûtage avant Semi."
  },
  {
    "s": 34,
    "p": "Transition",
    "m": "fartlek_structure",
    "j": "5x1000_halage",
    "wr": "allure_marathon",
    "wt": "sortie_longue",
    "ua": 760,
    "d": 0,
    "n": "Dernière allure marathon."
  },
  {
    "s": 35,
    "p": "Compétition",
    "m": "fartlek",
    "j": "vitesse_5x100_veille",
    "wr": "—",
    "wt": "—",
    "ua": 490,
    "d": 1,
    "n": "Affûtage pur."
  },
  {
    "s": 36,
    "p": "Compétition",
    "m": "sortie_recup",
    "j": "vitesse_5x100_veille",
    "wr": "—",
    "wt": "—",
    "ua": 420,
    "d": 1,
    "n": "Récup + activation."
  },
  {
    "s": 37,
    "p": "Récupération",
    "m": "—",
    "j": "sortie_recup",
    "wr": "sortie_recup",
    "wt": "sortie_recup",
    "ua": 330,
    "d": 1,
    "n": "Récup totale."
  },
  {
    "s": 38,
    "p": "Base trail",
    "m": "cote_45s",
    "j": "fartlek",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 720,
    "d": 0,
    "n": "Reprise trail."
  },
  {
    "s": 39,
    "p": "Développement",
    "m": "cote_1min30",
    "j": "5min",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 870,
    "d": 0,
    "n": "Côtes VW/Voulgre."
  },
  {
    "s": 40,
    "p": "Spécifique trail",
    "m": "cote_2min",
    "j": "fartlek_pyramid_girouettes",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 940,
    "d": 0,
    "n": "Côtes Voulgre + Girouettes."
  },
  {
    "s": 41,
    "p": "Décharge",
    "m": "fartlek",
    "j": "sortie_recup",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 490,
    "d": 1,
    "n": "Décharge mi-bloc."
  },
  {
    "s": 42,
    "p": "Spécifique trail",
    "m": "cote_long",
    "j": "circuit_douves",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 960,
    "d": 0,
    "n": "Montagne + Douves."
  },
  {
    "s": 43,
    "p": "Spécifique trail",
    "m": "escaliers",
    "j": "fartlek_pyramid_girouettes",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 900,
    "d": 0,
    "n": "Escaliers + Girouettes."
  },
  {
    "s": 44,
    "p": "Compétition",
    "m": "fartlek",
    "j": "vitesse_5x100_veille",
    "wr": "—",
    "wt": "—",
    "ua": 510,
    "d": 1,
    "n": "Forme optimale."
  },
  {
    "s": 45,
    "p": "Décharge",
    "m": "sortie_recup",
    "j": "fartlek",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 490,
    "d": 1,
    "n": "Fin de saison."
  },
  {
    "s": 46,
    "p": "Reprise",
    "m": "cote_45s",
    "j": "fartlek_structure",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 720,
    "d": 0,
    "n": "Maintien de forme."
  },
  {
    "s": 47,
    "p": "Décharge",
    "m": "fartlek",
    "j": "sortie_recup",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 470,
    "d": 1,
    "n": "Avant Fêtes."
  },
  {
    "s": 48,
    "p": "Coupure",
    "m": "—",
    "j": "—",
    "wr": "—",
    "wt": "—",
    "ua": 200,
    "d": 1,
    "n": "🎉 Fêtes de Bayonne."
  },
  {
    "s": 49,
    "p": "Reprise",
    "m": "—",
    "j": "sortie_recup",
    "wr": "sortie_recup",
    "wt": "sortie_recup",
    "ua": 300,
    "d": 1,
    "n": "Post-fêtes."
  },
  {
    "s": 50,
    "p": "Base",
    "m": "sortie_recup",
    "j": "fartlek",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 500,
    "d": 1,
    "n": "Reprise progressive."
  },
  {
    "s": 51,
    "p": "Base",
    "m": "30s",
    "j": "5min",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 650,
    "d": 0,
    "n": "Réintroduction VMA + seuil."
  },
  {
    "s": 52,
    "p": "Base",
    "m": "cote_30s",
    "j": "fartlek_10x1_1",
    "wr": "sortie_longue",
    "wt": "sortie_longue",
    "ua": 780,
    "d": 0,
    "n": "Fin de saison → nouvelle S1."
  }
];

const objectifs = [
  {
    "s": 46,
    "nom": "Course des Fêtes de Bayonnes",
    "date": "2026-07-15",
    "type": "route"
  },
  {
    "s": 13,
    "nom": "Marathon La Rochelle",
    "date": "2026-11-29",
    "type": "route"
  },
  {
    "s": 27,
    "nom": "France de Cross",
    "date": "2027-03-07",
    "type": "cross"
  },
  {
    "s": 28,
    "nom": "Senpereko Trail",
    "date": "2027-03-14",
    "type": "trail"
  },
  {
    "s": 33,
    "nom": "Semi-Marathon Saint-Sébastien",
    "date": "2027-04-18",
    "type": "route"
  },
  {
    "s": 35,
    "nom": "Marathon Biarritz",
    "date": "2027-05-02",
    "type": "route"
  },
  {
    "s": 36,
    "nom": "Euskal Raid Ascension",
    "date": "2027-05-08",
    "type": "trail"
  },
  {
    "s": 44,
    "nom": "Saison Trails Pays Basque",
    "date": "2027-06-28",
    "type": "trail"
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
// ── DESCRIPTIONS DES PHASES ──
const phaseMusculaireDesc = {
  fondamental: {
    titre: "Phase fondamentale — Sept à Nov",
    desc: "Objectif : apprendre les mouvements, construire une base solide.",
    duree: "45 min",
    freq: "2×/sem"
  },
  force: {
    titre: "Phase force — Déc à Fév",
    desc: "Objectif : développer la force maximale des membres inférieurs.",
    duree: "55–60 min",
    freq: "2×/sem"
  },
  specifique: {
    titre: "Phase spécifique — Mars à Mai",
    desc: "Objectif : transférer la force en puissance trail.",
    duree: "50 min",
    freq: "1–2×/sem"
  },
  competition: {
    titre: "Phase compétition — Juin à Août",
    desc: "Objectif : entretien des acquis sans créer de fatigue.",
    duree: "30–40 min",
    freq: "1×/sem"
  }
};

// ── CIRCUITS D'EXERCICES ──
const circuits = {
  fondamental: {
    corpo: [
      {
        bloc: "Exemple de bloc d'activation",
        exos: [
          { id: "glute_bridge", dose: "3×15" },
          { id: "planche", dose: "3×40 sec" }
        ]
      }
    ],
    elastiques: [],
    salle: []
  },
  force: { corpo: [], elastiques: [], salle: [] },
  specifique: { corpo: [], elastiques: [], salle: [] },
  competition: {
    corpo: [
      {
        bloc: "Entretien léger",
        exos: [
          { id: "squat_pc", dose: "3×10" }
        ]
      }
    ],
    elastiques: [],
    salle: []
  }
};

const exos = {
  // ─── JAMBES ───
  squat_pc: {
    nom:'Squat poids du corps', cat:'jambes', emoji:'🦵',
    muscles:'Quadriceps, fessiers, ischio-jambiers',
    equips:['corpo'],
    description:'Pieds à largeur d\'épaules, orteils légèrement ouverts. Descente en poussant les genoux dans l\'axe des orteils, dos droit, regard devant. Descendre jusqu\'à ce que les cuisses soient parallèles au sol. Remonter en poussant dans le sol.',
    erreurs:'Genoux qui rentrent vers l\'intérieur. Talons qui décollent. Dos qui s\'arrondit.',
    progressions:['Corps : 3×15 lent', 'Corps : 3×12 avec pause 2s en bas', 'Corps : 4×10 lent excentrique (4s descente)', 'KB : goblet squat 3×10 avec kettlebell', 'Barre : back squat 4×8'],
  },
  squat_unipodal: {
    nom:'Squat unipodal (pistol)', cat:'jambes', emoji:'🦵',
    muscles:'Quadriceps, fessiers, stabilisateurs genou',
    equips:['corpo','elastiques','salle'],
    description:'Debout sur une jambe, l\'autre tendue devant. Descendre en contrôle en fléchissant la jambe d\'appui. Dos droit, genou dans l\'axe. Remonter en poussant dans le sol. Commencer avec aide d\'un mur ou TRX.',
    erreurs:'Genou qui s\'effondre vers l\'intérieur. Trop grande inclinaison du tronc. Descente trop rapide.',
    progressions:['Squat assisté avec chaise', 'Box squat unipodal (s\'asseoir sur banc)', 'Pistol partiel', 'Pistol complet poids corps', 'Pistol avec KB ou gilet lesté'],
  },
  fentes: {
    nom:'Fentes avant', cat:'jambes', emoji:'🦵',
    muscles:'Quadriceps, fessiers, ischio-jambiers',
    equips:['corpo','elastiques','salle'],
    description:'Grand pas en avant, genou arrière qui s\'approche du sol sans le toucher. Genou avant dans l\'axe du pied. Remonter en poussant avec la jambe avant. Variante : fentes marchées, fentes bulgares (pied arrière surélevé).',
    erreurs:'Genou avant qui dépasse largement les orteils. Tronc qui s\'incline trop en avant. Manque d\'amplitude.',
    progressions:['Corps : 3×10 chaque', 'Fentes bulgares poids corps', 'Fentes avec haltères ou KB', 'Fentes bulgares avec KB ou barre', 'Fentes marchées avec barre'],
  },
  step_up: {
    nom:'Step-up sur marche', cat:'jambes', emoji:'🦵',
    muscles:'Quadriceps, fessiers, stabilité genou',
    equips:['corpo','elastiques','salle'],
    description:'Poser un pied sur une marche ou un banc (40-50 cm). Monter en poussant uniquement avec cette jambe. La jambe d\'appui au sol ne pousse pas. Contrôler la descente. Excellent pour la proprioception et la force unilatérale.',
    erreurs:'La jambe au sol aide à la montée. Genou qui s\'effondre en descente. Hauteur de marche trop importante au début.',
    progressions:['Marche basse 20cm', 'Marche 40cm', 'Avec haltères ou KB', 'Avec gilet lesté', 'Avec barre'],
  },
  step_down: {
    nom:'Step-down excentrique', cat:'jambes', emoji:'🦵',
    muscles:'Quadriceps (excentrique), genou, contrôle descente',
    equips:['corpo','elastiques','salle'],
    description:'Debout sur une marche sur une jambe. Descendre l\'autre jambe vers le sol EN CONTRÔLE sur 4 secondes. Genoux dans l\'axe. Ne pas poser le pied — remonter dès qu\'il effleure le sol. C\'est LA séance préparation descente trail.',
    erreurs:'Descente trop rapide. Genou qui s\'effondre. Tronc qui bascule excessivement.',
    progressions:['Marche basse 15cm · 3s descente', 'Marche 30cm · 4s descente', 'Marche 40cm · 5s descente', 'Poids cheville · 4s descente', 'KB tenu devant · 4s'],
  },
  rdl_unipodal: {
    nom:'RDL unipodal (soulevé de terre jambe tendue)', cat:'jambes', emoji:'🦵',
    muscles:'Ischio-jambiers, chaîne postérieure, équilibre',
    equips:['corpo','elastiques','salle'],
    description:'Debout sur une jambe. Pencher le tronc en avant en levant la jambe libre en arrière, dos parfaitement droit (colonne neutre). Descendre jusqu\'à sentir l\'étirement des ischios. Remonter lentement. Idéal pour la chaîne postérieure et la proprioception.',
    erreurs:'Dos qui s\'arrondit. Rotation du bassin. Amplitude insuffisante.',
    progressions:['Poids corps · toucher cheville', 'Avec haltère ou KB léger', 'KB moyen chaque main', 'KB lourd unilatéral', 'Barre 2 mains'],
  },
  leg_press: {
    nom:'Leg press', cat:'jambes', emoji:'🦵',
    muscles:'Quadriceps, fessiers, ischio-jambiers',
    equips:['salle'],
    description:'Machine leg press. Pieds à largeur d\'épaules sur la plateforme. Descente contrôlée jusqu\'à 90°, remontée puissante sans verrouiller les genoux. Variante unilatérale très efficace pour les traileurs.',
    erreurs:'Genoux qui s\'effondrent. Dos qui décolle du siège. Amplitude insuffisante.',
    progressions:['Bilatéral · 4×12', 'Bilatéral lourd · 4×8', 'Unilatéral · 3×10', 'Unilatéral lourd · 4×8'],
  },

  // ─── FESSIERS / HANCHES ───
  glute_bridge: {
    nom:'Glute bridge unilatéral', cat:'fessiers', emoji:'🍑',
    muscles:'Fessiers, chaîne postérieure, stabilité bassin',
    equips:['corpo','elastiques','salle'],
    description:'Allongé sur le dos, un pied à plat sur le sol, l\'autre jambe tendue. Pousser le bassin vers le haut en serrant les fessiers. Tenir 1 seconde en haut. Descendre sans poser le bassin. La jambe tendue reste dans l\'axe.',
    erreurs:'Bassin qui penche d\'un côté. Lombaires qui s\'arquent excessivement. Fessier pas contracté en haut.',
    progressions:['Corps : 3×15', 'Corps : pied sur banc', 'Poids sur bassin', 'Hip thrust avec barre et banc', 'Hip thrust lourd'],
  },
  clamshell: {
    nom:'Clamshell (palourde)', cat:'fessiers', emoji:'🍑',
    muscles:'Abducteurs, moyen fessier, stabilité hanche',
    equips:['corpo','elastiques'],
    description:'Allongé sur le côté, hanches et genoux fléchis à 45°. Ouvrir le genou du dessus comme une palourde en gardant les pieds joints. Tenir 1s en haut, descendre en contrôle. Muscle clé pour la stabilité en course et la prévention des douleurs de genou.',
    erreurs:'Bassin qui bascule en arrière. Amplitude trop faible. Mouvement trop rapide.',
    progressions:['Corps : 3×15', 'Élastique léger aux genoux : 3×12', 'Élastique moyen : 3×12', 'Élastique fort : 3×10'],
  },
  abducteurs_debout: {
    nom:'Abduction debout', cat:'fessiers', emoji:'🍑',
    muscles:'Abducteurs, moyen fessier',
    equips:['elastiques','salle'],
    description:'Debout, élastique autour des chevilles ou machine. Lever la jambe sur le côté en gardant le tronc droit. Contrôle du mouvement dans les deux sens. Fondamental pour la stabilité latérale en descente trail.',
    erreurs:'Tronc qui bascule en compensation. Jambe d\'appui qui se fléchit. Amplitude trop faible.',
    progressions:['Élastique cheville · 3×15', 'Élastique moyen · 3×12', 'Machine abducteurs', 'Machine avec charge'],
  },
  monster_walk: {
    nom:'Monster walk (marche latérale)', cat:'fessiers', emoji:'🍑',
    muscles:'Abducteurs, moyen fessier, stabilité dynamique',
    equips:['elastiques'],
    description:'Élastique autour des chevilles ou juste au-dessus des genoux. Semi-squat maintenu tout au long du mouvement. Pas latéraux en gardant la tension dans l\'élastique. 10 pas d\'un côté, 10 de l\'autre. Excellent pour l\'activation avant séance.',
    erreurs:'Élastique qui se relâche. Dos qui se redresse. Amplitude de pas trop faible.',
    progressions:['Élastique léger au-dessus genoux', 'Élastique moyen aux chevilles', 'Combinaison : élastique genoux + chevilles', 'Avec poids cheville'],
  },
  hip_thrust: {
    nom:'Hip thrust avec barre', cat:'fessiers', emoji:'🍑',
    muscles:'Grand fessier, chaîne postérieure',
    equips:['salle'],
    description:'Épaules appuyées sur un banc, barre posée sur le bassin (avec pad). Pieds à plat, largeur d\'épaules. Poussée vers le haut jusqu\'à alignement épaules-hanches-genoux. Serrer les fessiers en haut. Un des meilleurs exercices fessiers qui existe.',
    erreurs:'Lombaires qui s\'arquent. Genoux qui s\'effondrent. Ne pas tenir la contraction en haut.',
    progressions:['Poids corps sur banc', 'Barre vide : 4×12', 'Chargé modéré : 4×10', 'Lourd : 4×8', 'Max : 5×5'],
  },

  // ─── GAINAGE ───
  planche: {
    nom:'Planche frontale', cat:'gainage', emoji:'🧱',
    muscles:'Transverse abdominal, ceinture scapulaire, stabilisation globale',
    equips:['corpo','elastiques','salle'],
    description:'Avant-bras au sol, corps en ligne droite des talons aux épaules. Serrer les abdos, les fessiers. Ne pas laisser les hanches s\'affaisser ni monter. Respiration lente et contrôlée. La qualité prime sur la durée.',
    erreurs:'Hanches qui s\'affaissent. Fessiers trop hauts. Apnée. Regard trop relevé (cervicales).',
    progressions:['20 sec', '40 sec', '60 sec', 'Planche avec déplacement de bras', 'Planche sur bosu ou instabilité'],
  },
  planche_lat: {
    nom:'Planche latérale', cat:'gainage', emoji:'🧱',
    muscles:'Obliques, quadratus lumborum, stabilité latérale',
    equips:['corpo','elastiques','salle'],
    description:'Sur l\'avant-bras et le côté du pied, corps en ligne droite. Hanches levées, pas d\'affaissement. Regard droit devant. Variante évoluée : soulever la hanche en mouvement (dips latéraux).',
    erreurs:'Hanches qui tombent. Rotation du bassin vers l\'avant. Corps non aligné.',
    progressions:['Genoux au sol · 25 sec', 'Pieds · 35 sec', 'Pieds · 50 sec', 'Avec dips latéraux · 10 reps', 'Avec poids cheville sur le côté'],
  },
  dead_bug: {
    nom:'Dead bug', cat:'gainage', emoji:'🧱',
    muscles:'Transverse abdominal, coordination neuro-musculaire',
    equips:['corpo','elastiques','salle'],
    description:'Allongé sur le dos, bras tendus au plafond, hanches et genoux à 90°. Allonger simultanément le bras gauche et la jambe droite sans que le bas du dos se décolle. Revenir. Alterner. Garder les lombaires collées au sol en permanence.',
    erreurs:'Bas du dos qui se soulève. Mouvement trop rapide. Apnée.',
    progressions:['Jambe seule · 3×10', 'Bras + jambe · 3×8', 'Avec KB tenu par la jambe opposée', 'Élastique en résistance'],
  },
  bird_dog: {
    nom:'Bird dog', cat:'gainage', emoji:'🧱',
    muscles:'Érecteurs du rachis, fessiers, stabilité lombaire',
    equips:['corpo','elastiques','salle'],
    description:'À quatre pattes, dos plat (colonne neutre). Allonger simultanément le bras droit et la jambe gauche en maintenant la stabilité du bassin. Tenir 2s. Revenir sans poser, alterner. Le bassin ne doit PAS bouger.',
    erreurs:'Bassin qui bascule d\'un côté. Dos qui s\'arrondit ou se creuse. Montée de la jambe trop haute.',
    progressions:['3×8 alternés lents', '3×10 avec pause 2s', 'Avec poids cheville', 'Avec haltère dans la main'],
  },
  pallof_press: {
    nom:'Pallof press', cat:'gainage', emoji:'🧱',
    muscles:'Anti-rotation du tronc, obliques, gainage global',
    equips:['elastiques','salle'],
    description:'Élastique ou câble fixé sur le côté à hauteur de poitrine. Debout de profil, tenir l\'élastique à 2 mains devant le sternum. Pousser les bras en avant (résistance à la rotation), maintenir 2s, revenir. L\'enjeu est de NE PAS tourner.',
    erreurs:'Rotation du tronc pendant l\'extension. Corps qui penche vers la source de résistance. Mouvement trop rapide.',
    progressions:['Élastique léger · 3×10', 'Élastique moyen · 3×10', 'Câble · 3×10', 'Câble avec rotation ajoutée'],
  },
  gainage_dynamique: {
    nom:'Gainage dynamique (mountain climbers)', cat:'gainage', emoji:'🧱',
    muscles:'Abdos, fléchisseurs de hanche, cardio-musculaire',
    equips:['corpo'],
    description:'Position de pompe. Ramener alternativement les genoux vers la poitrine. Version lente : proprioception et gainage pur. Version rapide : cardio. Pour les traileurs : version lente contrôlée, pas sprint.',
    erreurs:'Hanches qui montent. Dos qui s\'arrondit. Perte d\'alignement.',
    progressions:['Lent : 3×20 sec', 'Modéré : 3×30 sec', 'Avec glissière sous les pieds', 'Avec bosu'],
  },

  // ─── MOLLETS / CHEVILLES ───
  calf_raises: {
    nom:'Calf raises unilatéraux', cat:'mollets', emoji:'👟',
    muscles:'Soléaire, gastrocnémien, tendon d\'Achille',
    equips:['corpo','elastiques','salle'],
    description:'Sur le bord d\'une marche sur une jambe. Descendre le talon le plus bas possible (étirement), puis monter sur la pointe de pied le plus haut possible. Mouvement lent et complet. Essentiel pour prévenir les tendinites achilléennes et les blessures de pied.',
    erreurs:'Mouvement trop rapide. Amplitude incomplète. Ne pas utiliser de marche (amplitude réduite).',
    progressions:['Sol plat · 3×20', 'Marche poids corps · 3×15', 'Marche avec poids cheville', 'Marche avec KB · 3×12', 'Machine debout chargée · 4×12'],
  },
  tibialis: {
    nom:'Renforcement tibial (tibia raises)', cat:'mollets', emoji:'👟',
    muscles:'Tibial antérieur, prévention périostite',
    equips:['corpo','elastiques','salle'],
    description:'Dos au mur, pieds à 30cm du mur. Soulever les avant-pieds le plus haut possible en gardant les talons au sol. Mouvement complet. Souvent négligé, crucial pour prévenir les périostites et les douleurs de shin splints.',
    erreurs:'Amplitude insuffisante. Mouvement trop rapide. Oublier cet exercice.',
    progressions:['3×20 poids corps', 'Élastique sur le dessus du pied · 3×15', 'Machine assis', 'Avec disque sur le pied'],
  },
  cheville_proprio: {
    nom:'Proprioception cheville', cat:'mollets', emoji:'👟',
    muscles:'Stabilisateurs cheville, propriocepteurs',
    equips:['corpo','elastiques'],
    description:'Debout sur une jambe. Fermer les yeux. Tenir 30 secondes. Variante : dessin de l\'alphabet avec la cheville de la jambe libre. Sur surface instable (coussin, bosu) si disponible. La prévention d\'entorse numéro un.',
    erreurs:'Yeux ouverts au début (progression trop rapide). Ne pas faire cet exercice.',
    progressions:['Yeux ouverts · 20s', 'Yeux fermés · 30s', 'Sur coussin yeux ouverts', 'Sur coussin yeux fermés', 'Sur bosu yeux fermés'],
  },

  // ─── PLIOMÉTRIE ───
  squat_jump: {
    nom:'Squat jump', cat:'pliometrie', emoji:'⚡',
    muscles:'Quadriceps, fessiers, développement puissance',
    equips:['corpo','salle'],
    description:'Squat normal, puis explosion vers le haut en sautant le plus haut possible. Réception souple et silencieuse, absorber le choc en fléchissant les genoux. Immédiatement enchaîner le suivant. Simule les appuis en montée.',
    erreurs:'Réception rigide (genoux tendus). Pas d\'amplitude en descente. Bruit à la réception.',
    progressions:['3×8 bas', '4×10 puissant', 'Avec gilet lesté léger', 'Depth jump depuis box'],
  },
  box_jump: {
    nom:'Box jump', cat:'pliometrie', emoji:'⚡',
    muscles:'Explosivité globale membres inférieurs',
    equips:['salle'],
    description:'Debout devant une box (30-60cm). Flexion rapide puis saut explosif sur la box. Réception souple à deux pieds, genoux fléchis. Redescendre en marchant, pas en sautant (protection genou). Variante unilatérale : single-leg box jump.',
    erreurs:'Box trop haute au départ. Redescente en saut. Réception rigide.',
    progressions:['Box 30cm · 3×8', 'Box 40cm · 3×8', 'Box 50cm · 4×6', 'Unilatéral · 3×6'],
  },
  bounding: {
    nom:'Bounding latéral', cat:'pliometrie', emoji:'⚡',
    muscles:'Abducteurs, stabilité d\'atterrissage, puissance latérale',
    equips:['corpo'],
    description:'Saut latéral sur une jambe. Pousser sur la jambe gauche pour sauter vers la droite. Réception sur la jambe droite en absorbant. Tenir 1 seconde stable. Puis repartir. Simule les changements de direction et les traversées de pente.',
    erreurs:'Réception instable. Genou qui s\'effondre à la réception. Amplitude trop faible.',
    progressions:['Amplitude courte · 3×8', 'Amplitude plus grande · 3×10', 'Avec maintien 2s réception', 'En série rapide'],
  },
  drop_jump: {
    nom:'Drop jump (atterrissage depuis hauteur)', cat:'pliometrie', emoji:'⚡',
    muscles:'Réponse élastique, quadriceps excentriques, préparation descente',
    equips:['salle'],
    description:'Se laisser tomber d\'une box (pas sauter, juste lâcher). Atterrissage souple et silencieux, absorber sur 4-5cm de flexion de cheville/genou/hanche. Variante évoluée : enchaîner avec un saut vertical immédiatement après l\'atterrissage (depth jump).',
    erreurs:'Box trop haute. Rigidité à l\'atterrissage. Flexion excessive.',
    progressions:['Box 20cm · 3×8', 'Box 30cm · 3×8', 'Depth jump · 3×6'],
  },

  // ─── ÉTIREMENTS ───
  psoas: {
    nom:'Psoas / fléchisseurs de hanche', cat:'etirements', emoji:'🌿',
    muscles:'Psoas, illiaque, rectus femoris',
    equips:['corpo'],
    description:'En fente basse, genou arrière au sol. Pousser le bassin en avant et légèrement vers le bas. Bras levés ou mains sur le genou avant. Tenir 60 secondes minimum. Un des muscles les plus raccourcis chez les coureurs.',
    erreurs:'Durée trop courte. Dos qui s\'arrondit. Bassin qui ne descend pas.',
    progressions:['60 sec · chaque côté', '90 sec · avec bras levés', 'Sur élévation (pied arrière surélevé)'],
  },
  ischios: {
    nom:'Ischio-jambiers allongé', cat:'etirements', emoji:'🌿',
    muscles:'Ischio-jambiers, nerf sciatique',
    equips:['corpo','elastiques'],
    description:'Allongé sur le dos. Ramener une jambe vers soi en tenant derrière la cuisse (pas le pied). Jambe au sol restant à plat. Tenir 60-90 secondes. Très lent. Respiration profonde pour relâcher la tension.',
    erreurs:'Tenir derrière le mollet ou le pied (trop de tension). Jambe d\'appui qui se lève. Durée trop courte.',
    progressions:['Tenu derrière cuisse', 'Avec élastique au pied', 'Jambe sur mur (legs up the wall)'],
  },
  piriforme: {
    nom:'Piriforme (figure 4)', cat:'etirements', emoji:'🌿',
    muscles:'Piriforme, pelvis, prévention syndrome piriformis',
    equips:['corpo'],
    description:'Allongé. Croiser la cheville droite sur le genou gauche. Tirer la jambe gauche vers la poitrine. Tenir 60 secondes. Le piriforme est souvent à l\'origine des douleurs fessières et sciatiques chez les coureurs.',
    erreurs:'Ne pas maintenir la flexion de hanche. Durée insuffisante. Sauter cet exercice.',
    progressions:['Allongé · 60s', 'Assis au sol', 'Assis sur chaise (facilement faisable au bureau)'],
  },
  mollets_etirement: {
    nom:'Étirement mollets et Achille', cat:'etirements', emoji:'🌿',
    muscles:'Gastrocnémien, soléaire, tendon d\'Achille',
    equips:['corpo'],
    description:'Au mur, jambe arrière tendue (gastrocnémien) ou légèrement fléchie (soléaire + Achille). Les deux variantes sont nécessaires. Tenir 60 secondes chacune. Après chaque séance trail/course.',
    erreurs:'Ne faire qu\'une des deux variantes. Talon qui décolle. Durée trop courte.',
    progressions:['Jambe tendue · 60s', 'Jambe fléchie · 60s', 'Sur marche avec talon qui descend (excentrique + étirement)'],
  },
  bandelette: {
    nom:'Bandelette ilio-tibiale (rouleau)', cat:'etirements', emoji:'🌿',
    muscles:'TFL, bandelette ilio-tibiale, prévention syndrome de l\'essuie-glace',
    equips:['corpo'],
    description:'Allongé sur le côté avec un foam roller sous la cuisse (entre le genou et la hanche latérale). Rouler doucement sur les zones tendues. Pas sur les os. 60-90 secondes par jambe. Douloureux si tendu — c\'est normal et bénéfique.',
    erreurs:'Rouler trop vite. Passer sur le genou directement. Arrêter trop tôt.',
    progressions:['Foam roller · 60s', 'Lacrosse ball sur zones précises', 'Avec plus de poids du corps'],
  },
};

// ── ROUTINES MATIN ──

const joursReveil = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
const joursEmoji = ['🌅','⚡','🌿','🔥','💧','🏔','☀️'];
const joursFocus = ['Mobilité hanche & colonne','Activation & vivacité','Récupération active','Force & stabilité','Cheville & pied','Full body trail','Douceur & étirements'];

const routinesReveil = {
  corpo: [
    // LUNDI — Mobilité hanche & colonne
    [
      { nom:'Cat-cow (chat-vache)', dose:'10 cycles lents', desc:'À quatre pattes. Inspirez en creusant le dos (vache), expirez en arrondissant la colonne et rentrant le menton (chat). Mouvement fluide, vertèbre par vertèbre. Idéal pour déverrouiller la colonne au réveil.' },
      { nom:'Rotation thoracique en position enfant', dose:'8 × chaque côté', desc:'Genoux au sol, bras tendus devant, front au sol. Glisser un bras sous le corps en rotation en suivant la main du regard. Maintenir 2 secondes. La thoracique est souvent bloquée chez les coureurs.' },
      { nom:'World\'s greatest stretch', dose:'5 × chaque côté', desc:'Fente basse, pied avant à plat. Main intérieure au sol. Rotation du bras supérieur vers le plafond, suivre du regard. Puis redresser, talon arrière au sol. L\'exercice de mobilité le plus complet qui existe.' },
      { nom:'Cercles de hanche debout', dose:'10 × chaque sens', desc:'Debout, mains sur les hanches. Grands cercles lents avec le bassin. Maximiser l\'amplitude. Déverrouille progressivement les hanches et les fléchisseurs.' },
      { nom:'Fentes latérales alternées', dose:'10 × chaque côté', desc:'Grand pas latéral, genou fléchi, jambe opposée tendue. Garder le dos droit. Alterner. Étirement de l\'intérieur de la cuisse (adducteurs) souvent négligé.' },
      { nom:'Glute bridge lent × 2', dose:'2×10 · 2s en haut', desc:'Allongé sur le dos, pieds à plat. Monter le bassin lentement, serrer les fessiers 2 secondes, descendre en contrôle. Activer la chaîne postérieure en douceur.' },
    ],
    // MARDI — Activation & vivacité
    [
      { nom:'Jumping jacks légers', dose:'30 secondes', desc:'Sauts légers avec ouverture bras/jambes. Allure modérée. Objectif : faire monter le cœur doucement et réveiller la coordination. Pas d\'intensité.' },
      { nom:'Montées de genoux sur place', dose:'20 secondes × 3', desc:'Alterner les jambes en levant les genoux à hauteur de hanche. Bras qui balancent naturellement. Pause 10s entre chaque. Réveille les fléchisseurs de hanche.' },
      { nom:'Squat sauté bas (demi-squat)', dose:'3×6', desc:'Petit saut depuis demi-squat, réception souple et silencieuse. Amplitude réduite (pas un squat jump plein). Juste pour allumer les réflexes neuromusculaires.' },
      { nom:'Foulées bondissantes sur place', dose:'15 secondes × 2', desc:'Sur place, simuler une foulée de course en exagérant la montée de genou et la poussée de cheville. Bras actifs. Réveille le pattern de course.' },
      { nom:'Talons-fesses', dose:'20 secondes × 2', desc:'Trottiner sur place en ramenant les talons aux fessiers. Focus sur la rapidité de la jambe arrière. Prépare les ischio-jambiers à la contraction rapide.' },
      { nom:'Pompes lentes (ou genoux)', dose:'2×8', desc:'Pompes complètes (ou genoux au sol). Descente en 3 secondes, remontée explosive. Réveil du haut du corps, des triceps, des pectoraux et du gainage.' },
    ],
    // MERCREDI — Récupération active
    [
      { nom:'Rotation de la nuque', dose:'5 × chaque sens', desc:'Lents cercles de la tête. Demi-cercles seulement (pas en arrière complètement). Relâche les tensions cervicales de la nuit et des séances précédentes.' },
      { nom:'Figure 4 au sol (piriforme)', dose:'60 sec × chaque côté', desc:'Allongé sur le dos. Croiser la cheville sur le genou opposé. Tirer la cuisse vers la poitrine. Respirer profondément dans l\'étirement. Muscle clé pour prévenir les douleurs fessières et la sciatique.' },
      { nom:'Torsion lombaire au sol', dose:'45 sec × chaque côté', desc:'Allongé sur le dos, genoux fléchis. Faire tomber les genoux d\'un côté, bras en croix. Épaules qui restent au sol. Déverrouille la jonction lombo-sacrée souvent comprimée après l\'effort.' },
      { nom:'Psoas en fente basse', dose:'60 sec × chaque côté', desc:'Genou arrière au sol, bassin poussé en avant et vers le bas. Bras levés amplifient l\'étirement. Prend du temps à déverrouiller — ne pas raccourcir la durée.' },
      { nom:'Chien tête en bas (downward dog)', dose:'45 secondes × 2', desc:'Position V inversé. Talons qui poussent vers le sol (sans forcer). Tête relâchée. Alterne en fléchissant un genou puis l\'autre. Étire simultanément mollets, ischios, épaules et dos.' },
      { nom:'Papillon assis (adducteurs)', dose:'60 secondes', desc:'Assis, plantes des pieds jointes, genoux vers le sol. Incliner légèrement le tronc en avant. Pression douce des coudes sur les cuisses. Adducteurs souvent négligés en trail.' },
    ],
    // JEUDI — Force & stabilité
    [
      { nom:'Planche frontale progressive', dose:'3 × 30–45 sec', desc:'Avant-bras au sol, corps aligné. Serrer abdos et fessiers. Si facile, soulever alternativement un bras 5 secondes. Récup 20s entre séries.' },
      { nom:'Squat isométrique (chaise)', dose:'3 × 30 sec', desc:'Dos au mur, cuisses parallèles au sol. Tenir sans bouger. Intensité modifiable en changeant l\'angle des genoux. Brûle les quadriceps progressivement.' },
      { nom:'Glute bridge pulsé', dose:'3×15 pulsations rapides', desc:'En position glute bridge haute, faire de petits pulsations vers le haut. Les fessiers restent contractés en permanence. Plus dynamique qu\'un bridge normal, réveille mieux les fibres rapides.' },
      { nom:'Dead bug', dose:'2×10 alternés lents', desc:'Allongé, bras plafond, hanches et genoux à 90°. Étendre bras+jambe opposés en gardant le bas du dos collé au sol. Respiration lente. Le meilleur exercice de gainage fonctionnel.' },
      { nom:'Superman', dose:'2×12 · 2s tenu', desc:'Allongé sur le ventre, bras devant. Soulever simultanément bras et jambes du sol. Tenir 2 secondes. Travaille les extenseurs du dos et les fessiers, souvent sous-sollicités.' },
      { nom:'Step-down poids corps × cheville', dose:'2×8 chaque · lent', desc:'Sur une marche, descente contrôlée sur une jambe en 4 secondes. Protection des genoux en descente. Peut être fait sur une simple marche d\'escalier.' },
    ],
    // VENDREDI — Cheville & pied
    [
      { nom:'Alphabet avec la cheville', dose:'1 × chaque pied', desc:'Assis, tracer les lettres A à Z dans l\'air avec la cheville. Mouvements lents et précis dans toutes les directions. Excellent pour la mobilité et la proprioception de la cheville.' },
      { nom:'Relevés de billes avec les orteils', dose:'2×20 chaque pied', desc:'Assis pieds à plat. Soulever les orteils sans bouger le talon, puis les baisser. Ou ramasser des billes/froissé de papier avec les orteils. Active les muscles intrinsèques du pied.' },
      { nom:'Calf raises bilatéraux', dose:'2×20 · amplitude max', desc:'Debout sur le bord d\'une marche (ou sol). Descendre les talons le plus bas possible, monter le plus haut possible. Mouvement complet et lent. Prévention tendinite achilléenne.' },
      { nom:'Tibial raises (relevé de pied)', dose:'3×20', desc:'Dos au mur, pieds à 30cm. Soulever les avant-pieds le plus haut possible en gardant les talons. Souvent négligé, fondamental contre les périostites (shin splints).' },
      { nom:'Proprioception yeux fermés', dose:'2×30 sec chaque pied', desc:'Debout sur une jambe. Fermer les yeux. Maintenir l\'équilibre 30 secondes. Si trop facile : micro-mouvements de la cheville libre. Protection contre les entorses.' },
      { nom:'Massage plantaire au rouleau', dose:'60 sec chaque pied', desc:'Balle de tennis ou bouteille sous le pied. Rouler lentement de l\'avant vers l\'arrière en appuyant avec le poids du corps. Relâche les fascias plantaires et prévient la fasciite.' },
    ],
    // SAMEDI — Full body trail
    [
      { nom:'Squat sauté puissant', dose:'3×8', desc:'Squat complet, explosion vers le haut, réception souple. Vraie intention dans le saut. La séance la plus dynamique de la semaine — parfaite avant une sortie longue.' },
      { nom:'Fentes marchées', dose:'2×10 chaque jambe', desc:'Fentes en avançant, genou arrière proche du sol. Bras qui balancent en opposition. Amplitude maximale. Simule la foulée de montée en trail.' },
      { nom:'Pompes explosives', dose:'3×8', desc:'Pompes avec poussée explosive — les mains décollent légèrement du sol. Si trop difficile : pompes normales rapides. Réveil du haut du corps et du gainage.' },
      { nom:'Mountain climbers rapides', dose:'3×20 sec', desc:'Position de pompe. Alterner les genoux vers la poitrine rapidement. Cardio et gainage simultanément. Simule les appuis trail rapides.' },
      { nom:'Glute bridge + extension jambe', dose:'2×10 chaque', desc:'En glute bridge, étendre une jambe tendue dans l\'alignement du corps. Tenir 2s. La hanche doit rester haute. Travaille la chaîne postérieure unilatéralement.' },
      { nom:'Gainage latéral + rotation', dose:'2×8 chaque côté', desc:'En planche latérale, passer le bras libre sous le corps en rotation. Amplitude maximale. Gainage + mobilité thoracique combinés.' },
    ],
    // DIMANCHE — Douceur & étirements
    [
      { nom:'Étirement du matin (étoile)', dose:'2 minutes', desc:'Allongé sur le dos, bras et jambes en étoile. Respiration profonde. Juste prendre conscience du corps. Aucun effort musculaire. Permettre aux articulations de se déposer.' },
      { nom:'Genoux à la poitrine', dose:'45 sec × chaque côté', desc:'Allongé sur le dos, ramener un genou vers la poitrine avec les deux mains. Petits cercles du genou. Relâche les lombaires et les hanches après la semaine.' },
      { nom:'Torsion en position couchée', dose:'60 sec × chaque côté', desc:'Genoux fléchis qui tombent d\'un côté, bras en croix. Épaules au sol. Respiration. Déverrouillage de toute la colonne de façon passive.' },
      { nom:'Chien tête en bas tenu', dose:'90 secondes', desc:'V inversé, talons vers le sol. Pas de mouvement. Juste tenir et respirer dans l\'étirement. Progressive : si les talons ne touchent pas, fléchir légèrement les genoux.' },
      { nom:'Psoas passif long', dose:'90 sec × chaque côté', desc:'La version la plus longue du psoas : genou arrière au sol, bassin très bas. Fermer les yeux, respirer dans l\'étirement. Le psoas met 90 secondes à vraiment relâcher.' },
      { nom:'Enfant (child\'s pose)', dose:'2 minutes', desc:'Genoux écartés, bras tendus devant, front au sol. Respiration abdominale profonde. Décompression du bas du dos. La meilleure position finale de toute routine.' },
    ],
  ],
  elastiques: [
    // LUNDI — Mobilité hanche + activation hanches élastique
    [
      { nom:'Cat-cow avec résistance', dose:'10 cycles lents', desc:'À quatre pattes, élastique autour des cuisses. Cat-cow normal mais l\'élastique crée une légère résistance à l\'abduction — active le moyen fessier pendant le mouvement de mobilité.' },
      { nom:'World\'s greatest stretch', dose:'5 × chaque côté', desc:'Fente basse, pied avant à plat. Rotation du bras supérieur vers le plafond. L\'exercice de mobilité le plus complet : hip flexor, thoracique, adducteurs en un seul mouvement.' },
      { nom:'Monster walk activation', dose:'2×10 pas chaque sens', desc:'Élastique au-dessus des genoux, semi-squat maintenu. Pas latéraux. Active le moyen fessier avant toute autre chose. Fondamental pour stabiliser les genoux en descente.' },
      { nom:'Clamshell élastique', dose:'2×15 chaque côté', desc:'Allongé sur le côté, élastique aux genoux. Ouvrir et fermer. Résistance de l\'élastique intensifie le travail du moyen fessier, muscle souvent faible chez les coureurs.' },
      { nom:'Fentes latérales', dose:'10 × chaque côté', desc:'Grand pas latéral, genou fléchi, jambe opposée tendue. Avec élastique aux chevilles si disponible. Adducteurs + fessiers en même temps.' },
      { nom:'Glute bridge + élastique', dose:'2×12', desc:'Allongé, élastique au-dessus des genoux. Bridge normal mais pousser les genoux vers l\'extérieur contre l\'élastique pendant tout le mouvement. Double stimulus fessiers.' },
    ],
    // MARDI — Activation & vivacité
    [
      { nom:'Jumping jacks avec élastique aux chevilles', dose:'20 secondes × 2', desc:'Élastique léger aux chevilles. Les sauts sont plus petits mais la résistance active davantage les abducteurs. Récup 15s entre.' },
      { nom:'Montées de genoux résistées', dose:'20 sec × 3', desc:'Élastique autour des chevilles. Montées de genoux en tirant contre la résistance. Renforce les fléchisseurs de hanche — muscles de montée en trail.' },
      { nom:'Squat jump', dose:'3×6', desc:'Sans élastique pour la pliométrie. Petit saut depuis demi-squat, réception souple. Réveil des fibres rapides.' },
      { nom:'Kick-back debout résisté', dose:'2×15 chaque jambe', desc:'Élastique aux chevilles, debout. Étendre la jambe vers l\'arrière contre résistance. Contracté fessiers. Renforce la chaîne postérieure debout, très spécifique montée trail.' },
      { nom:'Abduction debout élastique', dose:'2×15 chaque côté', desc:'Élastique aux chevilles, lever la jambe sur le côté. Contrôle total. Moyen fessier = stabilité du bassin en course = prévention douleurs genou.' },
      { nom:'Pompes normales', dose:'2×10', desc:'Sans élastique. Descente 3s, remontée normale. Réveil du haut du corps.' },
    ],
    // MERCREDI — Récupération active
    [
      { nom:'Figure 4 au sol', dose:'60 sec × chaque côté', desc:'Sans élastique. Piriforme, position allongée. Respirer dans l\'étirement. Récupération passive.' },
      { nom:'Torsion lombaire', dose:'45 sec × chaque côté', desc:'Allongé, genoux tombent d\'un côté. Épaules au sol. Déverrouillage doux.' },
      { nom:'Psoas en fente basse', dose:'60 sec × chaque côté', desc:'Genou arrière au sol. 60 secondes minimum. Le psoas est le muscle qui raccourcit le plus avec la course et la position assise.' },
      { nom:'Mobilité cheville avec élastique', dose:'2 min × chaque cheville', desc:'Élastique autour du bas de jambe fixé bas (porte, pied de meuble). Fente avant pour créer une traction sur la cheville et ouvrir la mobilité antérieure. Très efficace après une longue sortie.' },
      { nom:'Étirement ischio élastique', dose:'60 sec × chaque côté', desc:'Allongé, élastique sous le pied. Tirer la jambe vers le haut tendue. Bien plus efficace que l\'étirement debout car détendu.' },
      { nom:'Chien tête en bas', dose:'60 secondes × 2', desc:'V inversé. Talons vers le sol. Respiration dans l\'étirement. Récup des mollets et ischios.' },
    ],
    // JEUDI — Force & stabilité
    [
      { nom:'Planche frontale', dose:'3 × 40 sec', desc:'Avant-bras au sol, corps aligné. Avec élastique aux chevilles pour intensifier : soulever alternativement une jambe 5 secondes.' },
      { nom:'Squat isométrique avec abduction', dose:'3 × 30 sec', desc:'Chaise au mur, élastique au-dessus des genoux. Pousser les genoux vers l\'extérieur contre l\'élastique pendant tout le maintien. Quadriceps + moyen fessier simultanément.' },
      { nom:'Bird dog avec poids cheville', dose:'2×10 alternés', desc:'À quatre pattes, poids cheville sur la jambe libre. Bird dog standard mais avec résistance sur la jambe. Travail des extenseurs de hanche plus prononcé.' },
      { nom:'Glute bridge unilatéral + élastique', dose:'2×12 chaque', desc:'Un seul pied au sol. Élastique sur les cuisses, pousser vers l\'extérieur. Chaîne postérieure unilatérale + abducteurs = combo parfait trail.' },
      { nom:'Superman avec poids cheville', dose:'2×10 · 2s tenu', desc:'Allongé ventre, poids cheville. Soulever bras et jambes simultanément. Les poids rendent le travail des extenseurs de hanche nettement plus exigeant.' },
      { nom:'Pallof hold (anti-rotation élastique)', dose:'2×20 sec chaque côté', desc:'Élastique fixé sur le côté. Tenir les bras tendus devant sans se laisser tourner. L\'un des meilleurs exercices de gainage fonctionnel trail.' },
    ],
    // VENDREDI — Cheville & pied
    [
      { nom:'Tibial raises avec élastique', dose:'3×20', desc:'Élastique autour du dessus du pied, fixé au sol. Relever le pied contre résistance. Tibial antérieur = prévention périostite numéro un.' },
      { nom:'Alphabet cheville', dose:'1 × chaque pied', desc:'Tracer A à Z dans l\'air avec la cheville. Mobilité complète sans résistance.' },
      { nom:'Calf raises avec résistance élastique', dose:'3×15 chaque', desc:'Élastique autour du pied fixé au sol. Sur la pointe du pied, l\'élastique résiste à la remontée. Amplitude max. Travail du tendon d\'Achille plus intense.' },
      { nom:'Abduction de cheville résistée', dose:'2×20 chaque sens', desc:'Élastique aux chevilles. Mouvements d\'inversion/éversion de la cheville contre résistance. Renforce tous les ligaments latéraux. Prévention entorse.' },
      { nom:'Proprioception yeux fermés', dose:'2×30 sec chaque', desc:'Sur une jambe, yeux fermés. 30 secondes. La meilleure prévention d\'entorse qui existe.' },
      { nom:'Étirement mollets avec élastique', dose:'60 sec × 2 variantes × chaque', desc:'Élastique sous le pied, jambe tendue. Tirer l\'avant du pied vers soi. Variante 1 : jambe tendue (gastro). Variante 2 : genou légèrement fléchi (soléaire + Achille).' },
    ],
    // SAMEDI — Full body trail
    [
      { nom:'Squat sauté puissant', dose:'3×8', desc:'Pas d\'élastique pour la pliométrie. Squat complet, saut explosif, réception souple et silencieuse.' },
      { nom:'Fentes marchées avec élastique', dose:'2×10 chaque jambe', desc:'Élastique autour des cuisses ou chevilles. Fentes marchées normales mais l\'élastique active les abducteurs à chaque pas. Amplitude maximale.' },
      { nom:'Monster walk + squat', dose:'2 × aller-retour 10m', desc:'Monster walk en avançant, puis squat toutes les 3 foulées. Séquence dynamique qui réchauffe tout le bas du corps.' },
      { nom:'Kick-back + abduction combo', dose:'2×10 chaque jambe', desc:'Élastique aux chevilles. Extension de hanche vers l\'arrière, puis abduction latérale. Un seul mouvement par jambe. Très complet pour les fessiers.' },
      { nom:'Pompes explosives', dose:'3×8', desc:'Poussée explosive, mains qui décollent. Si trop difficile : pompes normales rapides. Réveil du haut du corps.' },
      { nom:'Gainage latéral + rotation + poids cheville', dose:'2×8 chaque', desc:'Planche latérale, poids cheville sur la jambe libre. Rotation du bras libre sous le corps. Gainage + mobilité thoracique + résistance = combo avancé.' },
    ],
    // DIMANCHE — Douceur & étirements
    [
      { nom:'Étirement du matin (étoile)', dose:'2 minutes', desc:'Allongé en étoile. Respiration profonde. Aucun effort. Conscience du corps.' },
      { nom:'Genoux à la poitrine', dose:'45 sec × chaque', desc:'Allongé, un genou vers la poitrine. Petits cercles. Lombaires et hanches.' },
      { nom:'Étirement ischio élastique long', dose:'90 sec × chaque côté', desc:'Allongé, élastique sous le pied. Jambe tendue vers le plafond. 90 secondes réelles — les ischios prennent du temps à relâcher en profondeur.' },
      { nom:'Mobilité cheville élastique', dose:'90 sec × chaque côté', desc:'Élastique à la cheville pour traction. Fente avant pour ouvrir la mobilité antérieure. Excellent après une semaine chargée.' },
      { nom:'Psoas passif long', dose:'90 sec × chaque côté', desc:'Genou arrière au sol, bassin très bas. Yeux fermés, respirer. 90 secondes minimum.' },
      { nom:'Enfant (child\'s pose)', dose:'2 minutes', desc:'Genoux écartés, bras tendus, front au sol. Respiration abdominale. Décompression finale.' },
    ],
  ]
};
