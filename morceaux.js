/*
  Les morceaux de l'appli Mon Santour.
  Pour ajouter un morceau : copier un bloc { ... } et le remplir.

  Cordes :  J1…J9 = zone centrale, cordes jaunes (graves)
            B1…B9 = zone centrale, cordes blanches (médium)
            G1…G9 = zone gauche, cordes blanches (aigu)
            R     = silence
  Rangée 1 = la plus proche de toi.
  Une note = [corde, durée en croches, tenue (1 si liée à la suivante)]
*/
window.MORCEAUX = [
  {
    id: "seven-ponds",
    titre: "Seven Ponds",
    artiste: "Sina Bathaie",
    niveau: "Débutant +",
    vitesse: 0.2, // secondes par croche à la vitesse « normal »
    mesure: "6/8",
    accordage: [
      { corde: "B1", de: "Mi", vers: "Mi♭", accordeur: "D#4 / Eb4", f: 311.13,
        aide: "On détend la corde, donc aucun risque. Sa partie en zone gauche devient Mi♭ toute seule." }
    ],
    source: "Arrangement pour santour de Taranom Ezzati (notdoni.com). Ici les mesures 1 à 29, l'aperçu gratuit. La partition complète fait 9 pages et elle est payante.",
    videos: [
      ["Seven Ponds, Roqe Studio", "https://www.youtube.com/watch?v=co9WEWzhWFM"],
      ["Seven Ponds, expo Van Gogh", "https://www.youtube.com/watch?v=GZdObKmfvdw"],
      ["Seven Ponds, Toronto 2024", "https://www.youtube.com/watch?v=uvq4JVWCrpM"],
      ["Seven Ponds, Vancouver", "https://www.youtube.com/watch?v=iY1bu9wK0yw"]
    ],
    blocs: [
      { t: "Le motif", m: "mesures 1 à 15", x: 15,
        mesures: [[["J6",2],["J6",2,1],["J6",1],["J6",1]]] },
      { t: "Descente 1", m: "mesures 16-17",
        mesures: [[["R",2],["B2",1],["B1",1],["J7",2]], [["J7",3],["J6",1],["J6",2]]] },
      { t: "Le motif", m: "mesures 18-19", x: 2,
        mesures: [[["J6",2],["J6",2,1],["J6",1],["J6",1]]] },
      { t: "Descente 2", m: "mesures 20-21",
        mesures: [[["R",2],["B2",1],["B1",1],["J7",2]], [["J7",3],["B1",1],["J6",2]]] },
      { t: "Le motif", m: "mesures 22-23", x: 2,
        mesures: [[["J6",2],["J6",2,1],["J6",1],["J6",1]]] },
      { t: "Réponse", m: "mesures 24-25",
        mesures: [[["R",3],["B2",1],["B1",2]], [["B2",2],["B2",1],["B3",1],["B2",2]]] },
      { t: "Le motif", m: "mesures 26-27", x: 2,
        mesures: [[["J6",2],["J6",2,1],["J6",1],["J6",1]]] },
      { t: "Montée", m: "mesures 28-29",
        mesures: [[["R",2],["B1",1],["B2",1],["B3",2]], [["B3",2],["B3",1],["B2",1],["B2",2]]] }
    ]
  },
  {
    id: "sakura",
    titre: "Sakura",
    artiste: "Mélodie traditionnelle japonaise",
    niveau: "Débutant",
    vitesse: 0.28,
    mesure: "4/4",
    accordage: [],
    accordageNote: "Accordage normal. Si ta corde B1 est encore en Mi♭ pour Seven Ponds, aucun souci : ce morceau ne l'utilise pas.",
    source: "Mélodie du domaine public, lente et calme. Elle n'utilise que 7 cordes, toutes dans la zone centrale.",
    videos: [
      ["Sakura au santour (recherche YouTube)", "https://www.youtube.com/results?search_query=sakura+sakura+santur"]
    ],
    blocs: [
      { t: "Sakura, sakura", m: "phrase 1",
        mesures: [[["B4",2],["B4",2],["B5",4]], [["B4",2],["B4",2],["B5",4]]] },
      { t: "Yayoi no sora wa", m: "phrase 2",
        mesures: [[["B4",2],["B5",2],["B6",2],["B5",2]], [["B4",2],["B5",1],["B4",1],["B2",4]]] },
      { t: "Miwatasu kagiri", m: "phrase 3",
        mesures: [[["J8",2],["J6",2],["J8",2],["B2",2]], [["J8",2],["J8",1],["J6",1],["J5",4]]] },
      { t: "Kasumi ka kumo ka", m: "phrase 4 (comme la 2)",
        mesures: [[["B4",2],["B5",2],["B6",2],["B5",2]], [["B4",2],["B5",1],["B4",1],["B2",4]]] },
      { t: "Nioi zo izuru", m: "phrase 5 (comme la 3)",
        mesures: [[["J8",2],["J6",2],["J8",2],["B2",2]], [["J8",2],["J8",1],["J6",1],["J5",4]]] },
      { t: "Iza ya, iza ya", m: "phrase 6 (comme la 1)",
        mesures: [[["B4",2],["B4",2],["B5",4]], [["B4",2],["B4",2],["B5",4]]] },
      { t: "Mi ni yukan", m: "fin",
        mesures: [[["J8",2],["B2",2],["B5",1],["B4",1],["B2",2]], [["J8",8]]] }
    ]
  }
];
