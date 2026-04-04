// data.js \u2014 Donn\u00E9es AB Running Loisir
// \u00C0 modifier via admin.html

const terrainLabel = {
  // Bayonne
  halage:    {icon:'\uD83C\uDF0A',label:'Halage \u00B7 Nive',cls:'tag-sky'},
  floride:   {icon:'\u26F0\uFE0F',label:'C\u00F4te La Floride',cls:'tag-blue'},
  voulgre:   {icon:'\u26F0\uFE0F',label:'C\u00F4te Voulgre',cls:'tag-blue'},
  vw:        {icon:'\u26F0\uFE0F',label:'C\u00F4te VW',cls:'tag-blue'},
  douves:    {icon:'\uD83C\uDF3F',label:'Les Douves',cls:'tag-green'},
  intramuros:{icon:'\uD83C\uDFF0',label:'Intra-muros',cls:'tag-green'},
  stades:    {icon:'\uD83C\uDFDF',label:'Tour stades rugby',cls:'tag-sky'},
  // Anglet
  coteanglet:{icon:'\u26F0\uFE0F',label:'C\u00F4te Anglet',cls:'tag-blue'},
  girouettes:{icon:'\uD83C\uDF3F',label:'Parc Les Girouettes',cls:'tag-green'},
  chiberta:  {icon:'\uD83C\uDF32',label:'For\u00EAt Chiberta',cls:'tag-green'},
  plage:     {icon:'\uD83C\uDFD6',label:'Plage + Chiberta',cls:'tag-sky'},
  // Biarritz & montagne
  escaliers: {icon:'\uD83E\uDE9C',label:'Escaliers Biarritz',cls:'tag-ocre'},
  montagne:  {icon:'\uD83C\uDFD4',label:'Ursuya / Mondarrain',cls:'tag-rouge'},
};



const phaseLabels = {
  'phase-reprise':   {label:'Reprise',cls:'phase-reprise'},
  'phase-base':      {label:'Base endurance',cls:'phase-base'},
  'phase-dev':       {label:'D\u00E9veloppement',cls:'phase-dev'},
  'phase-force':     {label:'Force / D+',cls:'phase-force'},
  'phase-prepa':     {label:'Pr\u00E9pa trail',cls:'phase-prepa'},
  'phase-precomp':   {label:'Pr\u00E9-comp\u00E9tition',cls:'phase-precomp'},
  'phase-senpereko': {label:'Objectif course',cls:'phase-event'},
  'phase-euskal':    {label:'Objectif course',cls:'phase-event'},
  'phase-recup':     {label:'R\u00E9cup\u00E9ration',cls:'phase-recup'},
  'phase-grp':       {label:'Bloc montagne',cls:'phase-montagne'},
  'phase-montagne':  {label:'Bloc montagne',cls:'phase-montagne'},
};



const typeLabel = {
  trail:'\uD83C\uDF3F Trail', route:'\uD83C\uDFC3 Route', rando:'\uD83E\uDD7E Rando',
  montagne:'\uD83C\uDFD4 Montagne', social:'\uD83C\uDF89 Section'
};

const typeCls = {
  trail:'type-trail', route:'type-route', rando:'type-rando',
  montagne:'type-montagne', social:'type-social'
};

const niveauxData = null;


const programme = null;




const calFixed = null;




const circuits = {
  fondamental: {
    corpo: [
      { bloc:'\uD83D\uDD25 Activation (8 min)', exos:[
        {id:'squat_pc', dose:'2\u00D715 \u00B7 allure lente'},
        {id:'clamshell', dose:'2\u00D715 chaque c\u00F4t\u00E9'},
        {id:'cheville_proprio', dose:'2\u00D730 sec chaque'},
        {id:'planche', dose:'2\u00D730 sec'},
      ]},
      { bloc:'\uD83E\uDDB5 Force jambes (15 min)', exos:[
        {id:'step_up', dose:'3\u00D710 chaque \u00B7 3s descente'},
        {id:'step_down', dose:'3\u00D78 chaque \u00B7 4s descente'},
        {id:'fentes', dose:'3\u00D710 chaque'},
        {id:'glute_bridge', dose:'3\u00D712 chaque'},
      ]},
      { bloc:'\uD83E\uDDF1 Gainage (10 min)', exos:[
        {id:'dead_bug', dose:'3\u00D78 altern\u00E9s lents'},
        {id:'bird_dog', dose:'3\u00D78 altern\u00E9s \u00B7 pause 2s'},
        {id:'planche_lat', dose:'3\u00D730 sec chaque'},
      ]},
      { bloc:'\uD83D\uDC5F Mollets / cheville (7 min)', exos:[
        {id:'calf_raises', dose:'3\u00D715 \u00B7 complet'},
        {id:'tibialis', dose:'3\u00D720'},
      ]},
      { bloc:'\uD83C\uDF3F \u00C9tirements (5 min)', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'ischios', dose:'60 sec chaque'},
        {id:'mollets_etirement', dose:'60 sec \u00D7 2 variantes'},
      ]}
    ],
    elastiques: [
      { bloc:'\uD83D\uDD25 Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3\u00D710 pas chaque sens'},
        {id:'clamshell', dose:'3\u00D712 \u00B7 \u00E9lastique l\u00E9ger'},
        {id:'cheville_proprio', dose:'2\u00D730 sec chaque'},
      ]},
      { bloc:'\uD83E\uDDB5 Force jambes (15 min)', exos:[
        {id:'step_up', dose:'3\u00D710 chaque \u00B7 poids cheville'},
        {id:'step_down', dose:'3\u00D710 chaque \u00B7 4s \u00B7 poids cheville'},
        {id:'rdl_unipodal', dose:'3\u00D710 \u00B7 KB l\u00E9ger ou halt\u00E8re'},
        {id:'glute_bridge', dose:'3\u00D712 \u00B7 \u00E9lastique sur cuisses'},
      ]},
      { bloc:'\uD83E\uDDF1 Gainage (12 min)', exos:[
        {id:'dead_bug', dose:'3\u00D710 \u00B7 \u00E9lastique sur pied'},
        {id:'pallof_press', dose:'3\u00D710 chaque c\u00F4t\u00E9'},
        {id:'planche_lat', dose:'3\u00D735 sec chaque'},
        {id:'bird_dog', dose:'3\u00D710 \u00B7 poids cheville'},
      ]},
      { bloc:'\uD83D\uDC5F Mollets (7 min)', exos:[
        {id:'calf_raises', dose:'3\u00D715 \u00B7 marche \u00B7 poids cheville'},
        {id:'tibialis', dose:'3\u00D715 \u00B7 \u00E9lastique'},
        {id:'abducteurs_debout', dose:'3\u00D715 chaque \u00B7 \u00E9lastique'},
      ]},
      { bloc:'\uD83C\uDF3F \u00C9tirements (5 min)', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'mollets_etirement', dose:'60 sec \u00D7 2 variantes'},
      ]}
    ],
    salle: [
      { bloc:'\uD83D\uDD25 Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3\u00D710 pas \u00B7 \u00E9lastique fort'},
        {id:'abducteurs_debout', dose:'3\u00D715 chaque \u00B7 machine'},
        {id:'cheville_proprio', dose:'2\u00D730 sec chaque'},
      ]},
      { bloc:'\uD83E\uDDB5 Force jambes (20 min)', exos:[
        {id:'squat_pc', dose:'4\u00D712 \u00B7 goblet squat KB'},
        {id:'fentes', dose:'4\u00D710 chaque \u00B7 halt\u00E8res'},
        {id:'step_up', dose:'3\u00D710 chaque \u00B7 KB ou halt\u00E8res'},
        {id:'rdl_unipodal', dose:'3\u00D710 \u00B7 KB moyen'},
        {id:'leg_press', dose:'3\u00D712 unilat\u00E9ral'},
      ]},
      { bloc:'\uD83E\uDDF1 Gainage (12 min)', exos:[
        {id:'pallof_press', dose:'3\u00D710 chaque c\u00F4t\u00E9 \u00B7 c\u00E2ble'},
        {id:'dead_bug', dose:'3\u00D710 \u00B7 KB tenu'},
        {id:'planche_lat', dose:'3\u00D735 sec chaque'},
      ]},
      { bloc:'\uD83D\uDC5F Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'4\u00D715 \u00B7 KB lourd \u00B7 marche'},
        {id:'tibialis', dose:'3\u00D715 \u00B7 machine ou disque'},
        {id:'glute_bridge', dose:'4\u00D712 \u00B7 hip thrust barre l\u00E9g\u00E8re'},
      ]},
      { bloc:'\uD83C\uDF3F \u00C9tirements (5 min)', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'bandelette', dose:'60 sec chaque \u00B7 foam roller'},
      ]}
    ]
  },
  force: {
    corpo: [
      { bloc:'\uD83D\uDD25 Activation (8 min)', exos:[
        {id:'clamshell', dose:'2\u00D715 \u00B7 lent'},
        {id:'monster_walk', dose:'2\u00D710 pas chaque sens'},
        {id:'squat_pc', dose:'2\u00D710 \u00B7 3s descente excentrique'},
      ]},
      { bloc:'\uD83E\uDDB5 Force maximale (20 min)', exos:[
        {id:'squat_unipodal', dose:'4\u00D78 chaque \u00B7 4s descente'},
        {id:'step_down', dose:'4\u00D710 chaque \u00B7 5s excentrique'},
        {id:'fentes', dose:'4\u00D78 chaque \u00B7 3s excentrique'},
        {id:'rdl_unipodal', dose:'3\u00D710 chaque \u00B7 lent'},
      ]},
      { bloc:'\uD83E\uDDF1 Gainage lourd (12 min)', exos:[
        {id:'planche', dose:'4\u00D750 sec'},
        {id:'planche_lat', dose:'3\u00D740 sec + 10 dips'},
        {id:'pallof_press', dose:'Sans \u00E9quip : planche rotative'},
      ]},
      { bloc:'\uD83D\uDC5F Mollets intensif (8 min)', exos:[
        {id:'calf_raises', dose:'4\u00D720 \u00B7 amplitude max'},
        {id:'tibialis', dose:'3\u00D720'},
      ]},
      { bloc:'\uD83C\uDF3F \u00C9tirements (5 min)', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'ischios', dose:'90 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
      ]}
    ],
    elastiques: [
      { bloc:'\uD83D\uDD25 Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3\u00D712 \u00B7 \u00E9lastique fort aux chevilles'},
        {id:'clamshell', dose:'3\u00D712 \u00B7 \u00E9lastique fort'},
        {id:'abducteurs_debout', dose:'3\u00D712 chaque \u00B7 \u00E9lastique'},
      ]},
      { bloc:'\uD83E\uDDB5 Force (20 min)', exos:[
        {id:'squat_unipodal', dose:'4\u00D78 \u00B7 4s excentrique \u00B7 poids cheville'},
        {id:'step_down', dose:'4\u00D710 \u00B7 5s \u00B7 poids cheville'},
        {id:'rdl_unipodal', dose:'4\u00D710 \u00B7 KB moyen'},
        {id:'fentes', dose:'4\u00D78 chaque \u00B7 poids cheville'},
      ]},
      { bloc:'\uD83E\uDDF1 Gainage (12 min)', exos:[
        {id:'pallof_press', dose:'4\u00D710 chaque \u00B7 \u00E9lastique fort'},
        {id:'dead_bug', dose:'3\u00D712 \u00B7 poids cheville'},
        {id:'planche_lat', dose:'3\u00D745 sec + dips'},
      ]},
      { bloc:'\uD83D\uDC5F Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'4\u00D715 \u00B7 poids cheville \u00B7 marche'},
        {id:'tibialis', dose:'3\u00D720 \u00B7 \u00E9lastique'},
        {id:'glute_bridge', dose:'3\u00D712 \u00B7 \u00E9lastique sur cuisses \u00B7 poids sur bassin'},
      ]},
      { bloc:'\uD83C\uDF3F \u00C9tirements', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'ischios', dose:'\u00E9lastique \u00B7 90 sec chaque'},
        {id:'bandelette', dose:'60 sec chaque'},
      ]}
    ],
    salle: [
      { bloc:'\uD83D\uDD25 Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3\u00D712 \u00B7 \u00E9lastique fort'},
        {id:'hip_thrust', dose:'2\u00D715 \u00B7 barre l\u00E9g\u00E8re \u00B7 activation'},
      ]},
      { bloc:'\uD83E\uDDB5 Force maximale (25 min)', exos:[
        {id:'squat_pc', dose:'5\u00D75 \u00B7 back squat charg\u00E9 \u00B7 3s excentrique'},
        {id:'fentes', dose:'4\u00D78 chaque \u00B7 barre ou KB lourds'},
        {id:'step_down', dose:'4\u00D710 \u00B7 5s \u00B7 KB lourd'},
        {id:'rdl_unipodal', dose:'4\u00D78 \u00B7 barre ou KB lourd'},
        {id:'leg_press', dose:'4\u00D710 \u00B7 charg\u00E9 \u00B7 unilat\u00E9ral'},
      ]},
      { bloc:'\uD83C\uDF51 Fessiers (10 min)', exos:[
        {id:'hip_thrust', dose:'4\u00D710 \u00B7 barre charg\u00E9e'},
        {id:'abducteurs_debout', dose:'3\u00D715 \u00B7 machine'},
      ]},
      { bloc:'\uD83D\uDC5F Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'5\u00D715 \u00B7 machine charg\u00E9e'},
        {id:'tibialis', dose:'3\u00D715 \u00B7 machine'},
      ]},
      { bloc:'\uD83C\uDF3F \u00C9tirements', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'ischios', dose:'90 sec chaque'},
        {id:'bandelette', dose:'foam roller \u00B7 90 sec chaque'},
      ]}
    ]
  },
  specifique: {
    corpo: [
      { bloc:'\uD83D\uDD25 Activation (8 min)', exos:[
        {id:'squat_jump', dose:'2\u00D76 \u00B7 l\u00E9ger \u00B7 allumage'},
        {id:'clamshell', dose:'2\u00D712 \u00B7 lent'},
        {id:'cheville_proprio', dose:'2\u00D730 sec'},
      ]},
      { bloc:'\u26A1 Pliom\u00E9trie trail (15 min)', exos:[
        {id:'squat_jump', dose:'4\u00D78 \u00B7 puissants'},
        {id:'bounding', dose:'4\u00D710 aller-retour'},
        {id:'drop_jump', dose:'3\u00D78 \u00B7 box 20cm'},
      ]},
      { bloc:'\uD83E\uDDB5 Force unilat\u00E9rale (12 min)', exos:[
        {id:'squat_unipodal', dose:'3\u00D78 chaque \u00B7 lent'},
        {id:'step_down', dose:'3\u00D710 \u00B7 5s excentrique'},
        {id:'rdl_unipodal', dose:'3\u00D710 chaque'},
      ]},
      { bloc:'\uD83D\uDC5F Mollets & cheville (8 min)', exos:[
        {id:'calf_raises', dose:'3\u00D720 \u00B7 amplitude max'},
        {id:'cheville_proprio', dose:'3\u00D730 sec \u00B7 yeux ferm\u00E9s'},
      ]},
      { bloc:'\uD83C\uDF3F \u00C9tirements (7 min)', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'mollets_etirement', dose:'60 sec \u00D7 2 variantes'},
      ]}
    ],
    elastiques: [
      { bloc:'\uD83D\uDD25 Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3\u00D710 pas \u00B7 \u00E9lastique'},
        {id:'bounding', dose:'2\u00D78 \u00B7 activation'},
      ]},
      { bloc:'\u26A1 Pliom\u00E9trie (15 min)', exos:[
        {id:'squat_jump', dose:'4\u00D78'},
        {id:'bounding', dose:'4\u00D710 AR \u00B7 poids cheville'},
        {id:'drop_jump', dose:'3\u00D78'},
      ]},
      { bloc:'\uD83E\uDDB5 Force (12 min)', exos:[
        {id:'squat_unipodal', dose:'3\u00D78 \u00B7 poids cheville'},
        {id:'step_down', dose:'3\u00D710 \u00B7 poids cheville \u00B7 5s'},
        {id:'rdl_unipodal', dose:'3\u00D710 \u00B7 KB'},
      ]},
      { bloc:'\uD83E\uDDF1 Gainage anti-rotation (8 min)', exos:[
        {id:'pallof_press', dose:'4\u00D710 chaque \u00B7 \u00E9lastique'},
        {id:'planche_lat', dose:'3\u00D740 sec + dips'},
      ]},
      { bloc:'\uD83C\uDF3F \u00C9tirements', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'ischios', dose:'\u00E9lastique \u00B7 60 sec chaque'},
        {id:'bandelette', dose:'60 sec chaque'},
      ]}
    ],
    salle: [
      { bloc:'\uD83D\uDD25 Activation (8 min)', exos:[
        {id:'monster_walk', dose:'3\u00D712 \u00B7 fort'},
        {id:'hip_thrust', dose:'2\u00D715 \u00B7 activation l\u00E9g\u00E8re'},
      ]},
      { bloc:'\u26A1 Pliom\u00E9trie (15 min)', exos:[
        {id:'box_jump', dose:'4\u00D76 \u00B7 box 40cm'},
        {id:'squat_jump', dose:'3\u00D78 \u00B7 gilet lest\u00E9 l\u00E9ger'},
        {id:'drop_jump', dose:'3\u00D76 \u00B7 box 30cm'},
        {id:'bounding', dose:'3\u00D710 AR'},
      ]},
      { bloc:'\uD83E\uDDB5 Force sp\u00E9cifique (15 min)', exos:[
        {id:'squat_unipodal', dose:'3\u00D78 \u00B7 KB \u00B7 4s excentrique'},
        {id:'rdl_unipodal', dose:'3\u00D710 \u00B7 KB lourd'},
        {id:'hip_thrust', dose:'3\u00D710 \u00B7 barre charg\u00E9e'},
      ]},
      { bloc:'\uD83D\uDC5F Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'4\u00D715 \u00B7 machine charg\u00E9e'},
        {id:'tibialis', dose:'3\u00D715 \u00B7 machine'},
      ]},
      { bloc:'\uD83C\uDF3F \u00C9tirements', exos:[
        {id:'psoas', dose:'60 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'bandelette', dose:'foam roller \u00B7 90 sec'},
      ]}
    ]
  },
  competition: {
    corpo: [
      { bloc:'\u26A1 Activation + vivacit\u00E9 (10 min)', exos:[
        {id:'squat_jump', dose:'2\u00D76 \u00B7 l\u00E9ger'},
        {id:'bounding', dose:'2\u00D78 aller-retour'},
        {id:'clamshell', dose:'2\u00D712 chaque'},
        {id:'cheville_proprio', dose:'2\u00D730 sec'},
      ]},
      { bloc:'\uD83E\uDDB5 Entretien force (12 min)', exos:[
        {id:'step_down', dose:'3\u00D78 \u00B7 4s excentrique'},
        {id:'glute_bridge', dose:'3\u00D710 chaque'},
        {id:'rdl_unipodal', dose:'3\u00D78 \u00B7 l\u00E9ger'},
      ]},
      { bloc:'\uD83D\uDC5F Mollets & pr\u00E9vention (8 min)', exos:[
        {id:'calf_raises', dose:'3\u00D715'},
        {id:'tibialis', dose:'3\u00D720'},
        {id:'cheville_proprio', dose:'2\u00D730 sec yeux ferm\u00E9s'},
      ]},
      { bloc:'\uD83C\uDF3F \u00C9tirements (10 min)', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'ischios', dose:'90 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'mollets_etirement', dose:'60 sec \u00D7 2'},
      ]}
    ],
    elastiques: [
      { bloc:'\u26A1 Activation (10 min)', exos:[
        {id:'monster_walk', dose:'2\u00D710 \u00B7 \u00E9lastique l\u00E9ger'},
        {id:'squat_jump', dose:'2\u00D76'},
        {id:'bounding', dose:'2\u00D78 AR'},
      ]},
      { bloc:'\uD83E\uDDB5 Entretien (12 min)', exos:[
        {id:'step_down', dose:'3\u00D78 \u00B7 poids cheville \u00B7 4s'},
        {id:'rdl_unipodal', dose:'3\u00D78 \u00B7 KB l\u00E9ger'},
        {id:'clamshell', dose:'3\u00D712 \u00B7 \u00E9lastique'},
      ]},
      { bloc:'\uD83D\uDC5F Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'3\u00D715 \u00B7 poids cheville'},
        {id:'cheville_proprio', dose:'3\u00D730 sec'},
      ]},
      { bloc:'\uD83C\uDF3F \u00C9tirements', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'piriforme', dose:'60 sec chaque'},
        {id:'bandelette', dose:'foam roller \u00B7 60 sec'},
      ]}
    ],
    salle: [
      { bloc:'\u26A1 Activation + pliom\u00E9trie l\u00E9g\u00E8re (10 min)', exos:[
        {id:'box_jump', dose:'2\u00D75 \u00B7 box basse'},
        {id:'monster_walk', dose:'2\u00D710 \u00B7 fort'},
        {id:'bounding', dose:'2\u00D78 AR'},
      ]},
      { bloc:'\uD83E\uDDB5 Entretien force (15 min)', exos:[
        {id:'squat_unipodal', dose:'3\u00D76 \u00B7 KB \u00B7 mod\u00E9r\u00E9'},
        {id:'rdl_unipodal', dose:'3\u00D78 \u00B7 KB moyen'},
        {id:'hip_thrust', dose:'3\u00D710 \u00B7 mod\u00E9r\u00E9'},
      ]},
      { bloc:'\uD83D\uDC5F Mollets (8 min)', exos:[
        {id:'calf_raises', dose:'3\u00D715 \u00B7 machine charg\u00E9e'},
        {id:'tibialis', dose:'3\u00D715'},
      ]},
      { bloc:'\uD83C\uDF3F \u00C9tirements', exos:[
        {id:'psoas', dose:'90 sec chaque'},
        {id:'ischios', dose:'90 sec chaque'},
        {id:'bandelette', dose:'foam roller \u00B7 90 sec'},
      ]}
    ]
  }
};


