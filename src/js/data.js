/**
 * Data from the catalog text filed parsed into a JSON using a python script.
 * Normally this would be stored in a database and retrieved with an AJAX
 * request.  For the sake of simplicity (and because there are only 45 books)
 * I decided to save it on the client-side.
 */
var CATALOG = [
    {
        "_id": "1272",
        "_rev": "24-ff4b6108ce5134f496f5458be8fc39b8",
        "blurb": "",
        "thumbnail_590_url": "images/1272/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Emmanuel Kizunda",
            "id": 434
        }],
        "name": "Alphabèt",
        "tags": ["VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS"],
        "languages": ["FR"],
        "countries": "AF,GT,PA,AL,GN,PG,DZ,GW,PY,AS,GY,PE,AO,HT,PH,AR,HN,RO,AM,IN,RU,AZ,ID,RW,BD,IR,WS,BY,IQ,ST,BZ,JM,SN,BJ,JO,RS,BT,KZ,SC,BO,KE,SL,BA,KI,SB,BW,SO,BR,ZA,BG,SS,BF,LK,BI,LB,KH,LS,CM,LR,SD,CV,LY,SR,CF,MK,SZ,TD,MG,SY,CN,MW,TJ,CO,MY,TZ,KM,MV,TH,CD,ML,TL,CG,MH,TG,CR,MR,TO,CI,MU,TN,CU,MX,TR,DJ,FM,TM,DM,MD,TV,DO,MN,UG,EC,ME,UA,EG,MA,UZ,SV,MZ,VU,ER,MM,VE,ET,NA,VN,FJ,NP,GA,NI,YE,GM,ZM,GE,NG,ZW,GH,PK,GD",
        "total_pages": 27
    },
    {
        "_id": "938",
        "_rev": "26-2992f3c2ea3dae121de0b4fd3ab1aecc",
        "blurb": "",
        "thumbnail_590_url": "images/938/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Monsieur Lushima",
            "id": 302
        }],
        "name": "Voyelles en français",
        "tags": ["VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 10
    },
    {
        "_id": "1152",
        "_rev": "5-37b317834bb8c66a57fe9b324efc7f9e",
        "blurb": "",
        "thumbnail_590_url": "images/1152/thumbnail.jpg",
        "editor": [{
            "id": 35,
            "name": "Kasahorow"
        }],
        "authors": [{
            "full_name": " Kasahorow",
            "id": 382
        }],
        "name": "Mon Premier Dictionnaire Lingala",
        "tags": ["DICTIONARY", "VOCABULARY", "GRADES-3-5", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS", "DICTIONARIES-REFERENCE"],
        "languages": ["FR", "LN"],
        "countries": "CD",
        "total_pages": 44
    },
    {
        "_id": "983",
        "_rev": "5-9f280398b8f03b4517ce21e03cee1b25",
        "blurb": "",
        "thumbnail_590_url": "images/983/thumbnail.jpg",
        "editor": [{
            "id": 14,
            "name": "Mustard Seed Books"
        }],
        "authors": [{
            "full_name": " Mustard Seed Books",
            "id": 231
        }],
        "name": "Grand",
        "tags": ["ANIMALS", "BIOLOGY", "VOCABULARY", "NATURE", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS", "LAB-SCIENCES"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 11
    },
    {
        "_id": "979",
        "_rev": "5-28ef2a84650deb5ae05244dd3a77e80d",
        "blurb": "",
        "thumbnail_590_url": "images/979/thumbnail.jpg",
        "editor": [{
            "id": 14,
            "name": "Mustard Seed Books"
        }],
        "authors": [{
            "full_name": " Mustard Seed Books",
            "id": 231
        }],
        "name": "Petit",
        "tags": ["ANIMALS", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 12
    },
    {
        "_id": "1007",
        "_rev": "6-bea0c1bbd25d1ebc0da0d553cb800d4f",
        "blurb": "les livres chat et chien sont amusants et faciles à lire.\r\nils permettent d’apprendre avec seulement 200 mots et de commencer à lire.",
        "thumbnail_590_url": "images/1007/thumbnail.jpg",
        "editor": [{
            "id": 17,
            "name": "Biblionef"
        }],
        "authors": [{
            "full_name": "Elke & René Leisink",
            "id": 250
        }],
        "name": "Chat et chien mots",
        "tags": ["ANIMALS", "COLORS", "DICTIONARY", "REFERENCE", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 16
    },
    {
        "_id": "1008",
        "_rev": "26-7ccb601514097b4d780b439f846abe6c",
        "blurb": "les livres chat et chien sont amusants et faciles à lire.\r\nils permettent d’apprendre avec seulement 200 mots et de commencer à lire.",
        "thumbnail_590_url": "images/1008/thumbnail.jpg",
        "editor": [{
            "id": 17,
            "name": "Biblionef"
        }],
        "authors": [{
            "full_name": "Elke & René Leisink",
            "id": 250
        }],
        "name": "Chat et chien et la balle",
        "tags": ["FICTION", "ANIMALS", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS", "LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 12
    },
    {
        "_id": "1010",
        "_rev": "15-4e14fcdea74be5c79950d7e8753bc882",
        "blurb": "les livres chat et chien sont amusants et faciles à lire.\r\nils permettent d’apprendre avec seulement 200 mots et de commencer à lire.",
        "thumbnail_590_url": "images/1010/thumbnail.jpg",
        "editor": [{
            "id": 17,
            "name": "Biblionef"
        }],
        "authors": [{
            "full_name": "Elke & René Leisink",
            "id": 250
        }],
        "name": "Chat et chien et la pluie",
        "tags": ["ANIMALS", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS", "LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 12
    },
    {
        "_id": "1011",
        "_rev": "6-eebf08f8d1f95575f4235df5bf94080f",
        "blurb": "les livres chat et chien sont amusants et faciles à lire.\r\nils permettent d’apprendre avec seulement 200 mots et de commencer à lire.",
        "thumbnail_590_url": "images/1011/thumbnail.jpg",
        "editor": [{
            "id": 17,
            "name": "Biblionef"
        }],
        "authors": [{
            "full_name": "Elke & René Leisink",
            "id": 250
        }],
        "name": "Chat et chien et le chapeau",
        "tags": ["FICTION", "ANIMALS", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS", "LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 12
    },
    {
        "_id": "672",
        "_rev": "7-543b6e60f2489145699b4b77a31fd06a",
        "blurb": "",
        "thumbnail_590_url": "images/672/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Marie Wabbes",
            "id": 197
        }],
        "name": "Ma maman",
        "tags": ["FICTION", "GRAMMAR", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 26
    },
    {
        "_id": "690",
        "_rev": "13-1ca1d6d49b9a507bd837d7edaa66d981",
        "blurb": "",
        "thumbnail_590_url": "images/690/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Marie Wabbes",
            "id": 197
        }],
        "name": "Le Jardin",
        "tags": ["FICTION", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 26
    },
    {
        "_id": "682",
        "_rev": "7-c1eef873dd0ce1e2be84be4f09c71c81",
        "blurb": "",
        "thumbnail_590_url": "images/682/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Marie Wabbes",
            "id": 197
        }],
        "name": "La banane",
        "tags": ["FICTION", "GRAMMAR", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS", "LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 26
    },
    {
        "_id": "674",
        "_rev": "7-6ee7909cda8963d5708d637960962f15",
        "blurb": "",
        "thumbnail_590_url": "images/674/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Marie Wabbes",
            "id": 197
        }],
        "name": "Il fait chaud",
        "tags": ["FICTION", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 25
    },
    {
        "_id": "743",
        "_rev": "7-3c7dfafd95d94617eb017d5b565df2f2",
        "blurb": "",
        "thumbnail_590_url": "images/743/thumbnail.jpg",
        "editor": [{
            "id": 16,
            "name": "Philipp Winterberg"
        }],
        "authors": [{
            "full_name": "Philipp Winterberg",
            "id": 234
        }],
        "name": "Je suis petite, moi ?",
        "tags": ["ANIMALS", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 30
    },
    {
        "_id": "943",
        "_rev": "24-ec0d4c0cdf1465771d64ca086afe0f3b",
        "blurb": "",
        "thumbnail_590_url": "images/943/thumbnail.jpg",
        "editor": [{
            "id": 22,
            "name": "Pratham Books"
        }],
        "authors": [{
            "full_name": " Noni",
            "id": 282
        }],
        "name": "Ursulle et Bubulle",
        "tags": ["FICTION", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 14
    },
    {
        "_id": "1012",
        "_rev": "6-be5bc7c5e0b6c8b07ce9e4b94bf66fe3",
        "blurb": "les livres chat et chien sont amusants et faciles à lire.\r\nils permettent d’apprendre avec seulement 200 mots et de commencer à lire.",
        "thumbnail_590_url": "images/1012/thumbnail.jpg",
        "editor": [{
            "id": 17,
            "name": "Biblionef"
        }],
        "authors": [{
            "full_name": "Elke & René Leisink",
            "id": 250
        }],
        "name": "Chat et chien : où est chat ?",
        "tags": ["FICTION", "ANIMALS", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS", "LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 12
    },
    {
        "_id": "1013",
        "_rev": "6-be4300c89e35107380d57e783e9e561c",
        "blurb": "les livres chat et chien sont amusants et faciles à lire.\r\nils permettent d’apprendre avec seulement 200 mots et de commencer à lire.",
        "thumbnail_590_url": "images/1013/thumbnail.jpg",
        "editor": [{
            "id": 17,
            "name": "Biblionef"
        }],
        "authors": [{
            "full_name": "Elke & René Leisink",
            "id": 250
        }],
        "name": "Chat et chien et la patate douce",
        "tags": ["FICTION", "ANIMALS", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS", "LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 12
    },
    {
        "_id": "1014",
        "_rev": "6-a1c02fc571f8356c99db971e5328fb91",
        "blurb": "les livres chat et chien sont amusants et faciles à lire.\r\nils permettent d’apprendre avec seulement 200 mots et de commencer à lire.",
        "thumbnail_590_url": "images/1014/thumbnail.jpg",
        "editor": [{
            "id": 17,
            "name": "Biblionef"
        }],
        "authors": [{
            "full_name": "Elke & René Leisink",
            "id": 250
        }],
        "name": "Chat et chien et le papillon",
        "tags": ["FICTION", "ANIMALS", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS", "LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 16
    },
    {
        "_id": "1015",
        "_rev": "6-c5b79d2ea0df8f188a9f47b38db314e3",
        "blurb": "les livres chat et chien sont amusants et faciles à lire.\r\nils permettent d’apprendre avec seulement 200 mots et de commencer à lire.",
        "thumbnail_590_url": "images/1015/thumbnail.jpg",
        "editor": [{
            "id": 17,
            "name": "Biblionef"
        }],
        "authors": [{
            "full_name": "Elke & René Leisink",
            "id": 250
        }],
        "name": "Chat et chien : chien a froid",
        "tags": ["FICTION", "ANIMALS", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS", "LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 12
    },
    {
        "_id": "980",
        "_rev": "5-9f8d8cf4bc90c8bf0a5af5f9805b786a",
        "blurb": "",
        "thumbnail_590_url": "images/980/thumbnail.jpg",
        "editor": [{
            "id": 14,
            "name": "Mustard Seed Books"
        }],
        "authors": [{
            "full_name": " Mustard Seed Books",
            "id": 231
        }],
        "name": "Les tomates",
        "tags": ["BIOLOGY", "VOCABULARY", "PLANTS", "NATURE", "GRADES-3-5", "PRE-K-GRADE-2"],
        "subjects": ["LAB-SCIENCES"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 11
    },
    {
        "_id": "737",
        "_rev": "7-857d06a194159eb3280675bfec8940f1",
        "blurb": "",
        "thumbnail_590_url": "images/737/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Marie Wabbes",
            "id": 197
        }],
        "name": "La rencontre de football",
        "tags": ["FICTION", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 26
    },
    {
        "_id": "580",
        "_rev": "7-fcf41e82b7824d9c371eeacf918dd729",
        "blurb": "Série 2",
        "thumbnail_590_url": "images/580/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Marie Wabbes",
            "id": 197
        }],
        "name": "Le zoo",
        "tags": ["SHAPES", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 26
    },
    {
        "_id": "683",
        "_rev": "7-3b5a564f80090dba62b7808dbdfd0de1",
        "blurb": "",
        "thumbnail_590_url": "images/683/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Marie Wabbes",
            "id": 197
        }],
        "name": "En panne",
        "tags": ["FICTION", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS", "LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 26
    },
    {
        "_id": "738",
        "_rev": "7-09dbaa611eb1e2c85d8153484ea42156",
        "blurb": "",
        "thumbnail_590_url": "images/738/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Marie Wabbes",
            "id": 197
        }],
        "name": "Ma nouvelle robe",
        "tags": ["FICTION", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 26
    },
    {
        "_id": "581",
        "_rev": "7-670f1f6b01e35fccd40a8058722d44f0",
        "blurb": "Série 3",
        "thumbnail_590_url": "images/581/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Marie Wabbes",
            "id": 197
        }],
        "name": "Le théâtre à l'école",
        "tags": ["FICTION", "THEATER", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 26
    },
    {
        "_id": "579",
        "_rev": "7-0e5a22d1c1d4fddbefb286c6e7fca088",
        "blurb": "Série 3",
        "thumbnail_590_url": "images/579/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Marie Wabbes",
            "id": 197
        }],
        "name": "Les travaux",
        "tags": ["FICTION", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS", "LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 26
    },
    {
        "_id": "735",
        "_rev": "7-09e8ed35caca3384ed9416e714be09da",
        "blurb": "",
        "thumbnail_590_url": "images/735/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Marie Wabbes",
            "id": 197
        }],
        "name": "Il pleut",
        "tags": ["FICTION", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 26
    },
    {
        "_id": "739",
        "_rev": "7-403f3610714446b560a308a801257a20",
        "blurb": "",
        "thumbnail_590_url": "images/739/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Marie Wabbes",
            "id": 197
        }],
        "name": "La pêche sur le fleuve Congo",
        "tags": ["FICTION", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 26
    },
    {
        "_id": "937",
        "_rev": "7-20b3a6ba15e0aca19b9b29ae3a5e0920",
        "blurb": "",
        "thumbnail_590_url": "images/937/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Idrissou Njoya",
            "id": 280
        }],
        "name": "La ruse",
        "tags": ["FICTION", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 25
    },
    {
        "_id": "936",
        "_rev": "7-b922212a70f84ad0bc4b3bbfc6abc0be",
        "blurb": "",
        "thumbnail_590_url": "images/936/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Vincent Nomo",
            "id": 279
        }],
        "name": "Le cri de la forêt",
        "tags": ["FICTION", "ANIMALS", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 25
    },
    {
        "_id": "917",
        "_rev": "7-c85134f712181f59de9d87dd2b495e33",
        "blurb": "",
        "thumbnail_590_url": "images/917/thumbnail.jpg",
        "editor": [{
            "id": 19,
            "name": "International Step by Step Association"
        }],
        "authors": [{
            "full_name": "Marie Carole Jeune",
            "id": 275
        }, {
            "full_name": "Larimer Saincilus",
            "id": 276
        }],
        "name": "Rita et le Perroquet",
        "tags": ["FICTION", "ANIMALS", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 32
    },
    {
        "_id": "914",
        "_rev": "7-a2446429e8ef80b81502ca6b5a0ae3cc",
        "blurb": "",
        "thumbnail_590_url": "images/914/thumbnail.jpg",
        "editor": [{
            "id": 19,
            "name": "International Step by Step Association"
        }],
        "authors": [{
            "full_name": "Ghyslaine Rochelin",
            "id": 272
        }, {
            "full_name": "Oliver Bertoni",
            "id": 274
        }],
        "name": "Le Cocotier",
        "tags": ["FICTION", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 32
    },
    {
        "_id": "1016",
        "_rev": "6-5cbc6b0cd3552a52dec71da54158857b",
        "blurb": "les livres chat et chien sont amusants et faciles à lire.\r\nils permettent d’apprendre avec seulement 200 mots et de commencer à lire.",
        "thumbnail_590_url": "images/1016/thumbnail.jpg",
        "editor": [{
            "id": 17,
            "name": "Biblionef"
        }],
        "authors": [{
            "full_name": "Elke & René Leisink",
            "id": 250
        }],
        "name": "Chat et chien dessinent et colorient",
        "tags": ["FICTION", "ANIMALS", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS", "LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 12
    },
    {
        "_id": "1017",
        "_rev": "6-c7a2ee293b7ba84663fe8637e24efa55",
        "blurb": "les livres chat et chien sont amusants et faciles à lire.\r\nils permettent d’apprendre avec seulement 200 mots et de commencer à lire.",
        "thumbnail_590_url": "images/1017/thumbnail.jpg",
        "editor": [{
            "id": 17,
            "name": "Biblionef"
        }],
        "authors": [{
            "full_name": "Elke & René Leisink",
            "id": 250
        }],
        "name": "Chat et chien et l'oeuf",
        "tags": ["FICTION", "ANIMALS", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS", "LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 12
    },
    {
        "_id": "1018",
        "_rev": "6-97a17ba92500bdef417ed929cb1c2f51",
        "blurb": "les livres chat et chien sont amusants et faciles à lire.\r\nils permettent d’apprendre avec seulement 200 mots et de commencer à lire.",
        "thumbnail_590_url": "images/1018/thumbnail.jpg",
        "editor": [{
            "id": 17,
            "name": "Biblionef"
        }],
        "authors": [{
            "full_name": "Elke & René Leisink",
            "id": 250
        }],
        "name": "Chat et chien : chat est jaune",
        "tags": ["FICTION", "ANIMALS", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS", "LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 16
    },
    {
        "_id": "1019",
        "_rev": "6-2c2835568b5cad384387856807d722b5",
        "blurb": "les livres chat et chien sont amusants et faciles à lire.\r\nils permettent d’apprendre avec seulement 200 mots et de commencer à lire.",
        "thumbnail_590_url": "images/1019/thumbnail.jpg",
        "editor": [{
            "id": 17,
            "name": "Biblionef"
        }],
        "authors": [{
            "full_name": "Elke & René Leisink",
            "id": 250
        }],
        "name": "Chat et chien et les vers",
        "tags": ["FICTION", "ANIMALS", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LANGUAGE-SKILLS", "LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 16
    },
    {
        "_id": "678",
        "_rev": "7-8c0a09eeacaf417ba12d95dc6618f54a",
        "blurb": "",
        "thumbnail_590_url": "images/678/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Marie Wabbes",
            "id": 197
        }],
        "name": "Des arbres pour le village",
        "tags": ["FICTION", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 26
    },
    {
        "_id": "733",
        "_rev": "7-3fbcbdd030d5f1129b815986f026d694",
        "blurb": "",
        "thumbnail_590_url": "images/733/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Marie Wabbes",
            "id": 197
        }],
        "name": "Grand-mère a des poules",
        "tags": ["FICTION", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 26
    },
    {
        "_id": "740",
        "_rev": "8-606285a414457d90aabbbde08142d27d",
        "blurb": "",
        "thumbnail_590_url": "images/740/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Marie Wabbes",
            "id": 197
        }],
        "name": "L'eau du ciel",
        "tags": ["FICTION", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 26
    },
    {
        "_id": "680",
        "_rev": "7-adee5310e15512284833b927928c327d",
        "blurb": "",
        "thumbnail_590_url": "images/680/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Marie Wabbes",
            "id": 197
        }],
        "name": "Il nous faut une école",
        "tags": ["FICTION", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 26
    },
    {
        "_id": "918",
        "_rev": "7-34e0c1bbe32fc6999c7ed644912a2b26",
        "blurb": "",
        "thumbnail_590_url": "images/918/thumbnail.jpg",
        "editor": [{
            "id": 19,
            "name": "International Step by Step Association"
        }],
        "authors": [{
            "full_name": "Caroline Hudicourt",
            "id": 264
        }, {
            "full_name": "Ismer Saincilus",
            "id": 266
        }],
        "name": "Une mangue pour grand-père",
        "tags": ["FICTION", "VOCABULARY", "PRE-K-GRADE-2"],
        "subjects": ["LITERATURE"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 32
    },
    {
        "_id": "981",
        "_rev": "5-e5132d895560e2632fcf1f17835bb183",
        "blurb": "",
        "thumbnail_590_url": "images/981/thumbnail.jpg",
        "editor": [{
            "id": 14,
            "name": "Mustard Seed Books"
        }],
        "authors": [{
            "full_name": " Mustard Seed Books",
            "id": 231
        }],
        "name": "Les papillons",
        "tags": ["ANIMALS", "BIOLOGY", "VOCABULARY", "NATURE", "GRADES-3-5", "PRE-K-GRADE-2"],
        "subjects": ["LAB-SCIENCES"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 15
    },
    {
        "_id": "982",
        "_rev": "5-9c2da694d9fd97b65f0c3ba43bd43b8a",
        "blurb": "",
        "thumbnail_590_url": "images/982/thumbnail.jpg",
        "editor": [{
            "id": 14,
            "name": "Mustard Seed Books"
        }],
        "authors": [{
            "full_name": " Mustard Seed Books",
            "id": 231
        }],
        "name": "Les éléphants",
        "tags": ["ANIMALS", "BIOLOGY", "VOCABULARY", "NATURE", "GRADES-3-5", "PRE-K-GRADE-2"],
        "subjects": ["LAB-SCIENCES"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 15
    },
    {
        "_id": "1005",
        "_rev": "5-f090daf9e2d2978f2c479593c3b7fd8c",
        "blurb": "Notre monde mis en scène: Vers la fin de l’année scolaire, la classe de Madame Patel prépare un spectacle sur le système terrestre. Les élèves ont appris beaucoup de choses sur la Terre tout au long de l’année.",
        "thumbnail_590_url": "images/1005/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Becca Hatheway",
            "id": 315
        }, {
            "full_name": "Kerry Zarlengo",
            "id": 316
        }, {
            "full_name": "Lisa Gardiner",
            "id": 318
        }],
        "name": "Tout sur la Terre",
        "tags": ["NATURE", "GRADES-6-8", "GRADES-3-5"],
        "subjects": ["LAB-SCIENCES"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 34
    },
    {
        "_id": "1000",
        "_rev": "5-cd13e87a90b8c9a30d15aab8289bee96",
        "blurb": "Sais-tu que les nuages sont nommés d’après leur forme, leur hauteur dans le ciel et le fait qu’ils produisent, ou ne produisent pas, des précipitations ?\r\nEn différents endroits, à des jours différents, quand tu observes le ciel, tu peux voir différents types de nuages. Nous allons commencer par apprendre les noms de\r\nces nuages et tu pourras les reconnaître lors de tes promenades. Dans cette brochure, nous utiliserons les mots que nous connaissons déjà, pour nous aider à apprendre les noms des différents types de nuages.",
        "thumbnail_590_url": "images/1000/thumbnail.jpg",
        "editor": [{
            "id": 1,
            "name": "Library For All"
        }],
        "authors": [{
            "full_name": "Becca Hatheway",
            "id": 315
        }, {
            "full_name": "Kerry Zarlengo",
            "id": 316
        }, {
            "full_name": "Peggy LeMone",
            "id": 317
        }, {
            "full_name": "Lisa Gardiner",
            "id": 318
        }],
        "name": "Sais-tu que les nuages ont un nom? ",
        "tags": ["NATURE", "GRADES-6-8", "GRADES-3-5"],
        "subjects": ["LAB-SCIENCES"],
        "languages": ["FR"],
        "countries": "CD,HT,RW",
        "total_pages": 34
    },
];

// Used to convert language codes to spelled-out languages to allow filtering
// by language.
var LANGUAGES = {
    "AA": "Afar",
    "AF": "Afrikaans",
    "SQ": "Albanian",
    "AM": "Amharic",
    "AR": "Arabic",
    "HY": "Armenian",
    "AS": "Assamese",
    "AY": "Aymara",
    "AZ": "Azerbaijani",
    "BA": "Bashkir",
    "EU": "Basque",
    "BN": "Bengali, Bangla",
    "DZ": "Bhutani",
    "BH": "Bihari",
    "BI": "Bislama",
    "BR": "Breton",
    "BG": "Bulgarian",
    "MY": "Burmese",
    "BE": "Byelorussian",
    "KM": "Cambodian",
    "CA": "Catalan",
    "ZH": "Chinese",
    "CO": "Corsican",
    "HR": "Croatian",
    "CS": "Czech",
    "DA": "Danish",
    "NL": "Dutch",
    "EN": "English, American",
    "EO": "Esperanto",
    "ET": "Estonian",
    "FO": "Faeroese",
    "FJ": "Fiji",
    "FI": "Finnish",
    "FR": "French",
    "FY": "Frisian",
    "GD": "Gaelic (Scots Gaelic)",
    "GL": "Galician",
    "KA": "Georgian",
    "DE": "German",
    "EL": "Greek",
    "KL": "Greenlandic",
    "GN": "Guarani",
    "GU": "Gujarati",
    "HA": "Hausa",
    "IW": "Hebrew",
    "HI": "Hindi",
    "HU": "Hungarian",
    "IS": "Icelandic",
    "IN": "Indonesian",
    "IA": "Interlingua",
    "IE": "Interlingue",
    "IK": "Inupiak",
    "GA": "Irish",
    "IT": "Italian",
    "JA": "Japanese",
    "JW": "Javanese",
    "KN": "Kannada",
    "KS": "Kashmiri",
    "KK": "Kazakh",
    "RW": "Kinyarwanda",
    "KY": "Kirghiz",
    "RN": "Kirundi",
    "KO": "Korean",
    "KU": "Kurdish",
    "LO": "Laothian",
    "LA": "Latin",
    "LV": "Latvian, Lettish",
    "LN": "Lingala",
    "LT": "Lithuanian",
    "MK": "Macedonian",
    "MG": "Malagasy",
    "MS": "Malay",
    "ML": "Malayalam",
    "MT": "Maltese",
    "MI": "Maori",
    "MR": "Marathi",
    "MO": "Moldavian",
    "MN": "Mongolian",
    "NA": "Nauru",
    "NE": "Nepali",
    "NO": "Norwegian",
    "OC": "Occitan",
    "OR": "Oriya",
    "OM": "Oromo, Afan",
    "PS": "Pashto, Pushto",
    "FA": "Persian",
    "PL": "Polish",
    "PT": "Portuguese",
    "PA": "Punjabi",
    "QU": "Quechua",
    "RM": "Rhaeto-Romance",
    "RO": "Romanian",
    "RU": "Russian",
    "SM": "Samoan",
    "SG": "Sangro",
    "SA": "Sanskrit",
    "SR": "Serbian",
    "SH": "Serbo-Croatian",
    "ST": "Sesotho",
    "TN": "Setswana",
    "SN": "Shona",
    "SD": "Sindhi",
    "SI": "Singhalese",
    "SS": "Siswati",
    "SK": "Slovak",
    "SL": "Slovenian",
    "SO": "Somali",
    "ES": "Spanish",
    "SU": "Sudanese",
    "SW": "Swahili",
    "SV": "Swedish",
    "TL": "Tagalog",
    "TG": "Tajik",
    "TA": "Tamil",
    "TT": "Tatar",
    "TE": "Tegulu",
    "TH": "Thai",
    "BO": "Tibetan",
    "TI": "Tigrinya",
    "TO": "Tonga",
    "TS": "Tsonga",
    "TR": "Turkish",
    "TK": "Turkmen",
    "TW": "Twi",
    "UK": "Ukrainian",
    "UR": "Urdu",
    "UZ": "Uzbek",
    "VI": "Vietnamese",
    "VO": "Volapuk",
    "CY": "Welsh",
    "WO": "Wolof",
    "XH": "Xhosa",
    "JI": "Yiddish",
    "YO": "Yoruba",
    "ZU": "Zulu"
};

// Used to convert country codes to spelled-out countries to allow filtering
// by country.
var COUNTRIES = {
    "AF": "Afghanistan",
    "AX": "Aland islands",
    "AL": "Albania",
    "DZ": "Algeria",
    "AQ": "American samoa",
    "AN": "Andorra",
    "AO": "Angola",
    "AV": "Anguilla",
    "AY": "Antarctica",
    "AC": "Antigua and barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AA": "Aruba",
    "AS": "Australia",
    "AU": "Austria",
    "AZ": "Azerbaijan",
    "BF": "Bahamas, the",
    "BA": "Bahrain",
    "BG": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BD": "Bermuda",
    "BT": "Bhutan",
    "BL": "St.barthelemy",
    "BK": "Bosnia and herzegovina",
    "BO": "Bolivia",
    "BW": "Botswana",
    "BV": "Bouvet island",
    "IO": "Br indian ocean terr",
    "BR": "Brazil",
    "VI": "British virgin is.",
    "BX": "Brunei",
    "BU": "Bulgaria",
    "UV": "Burkina",
    "MM": "Burma",
    "BI": "Burundi",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "CV": "Cape verde",
    "CJ": "Cayman islands",
    "CT": "Central african rep.",
    "CD": "Chad",
    "CI": "Chile",
    "CN": "China",
    "KT": "Christmas island",
    "CK": "Cocos (keeling) islands",
    "CO": "Colombia",
    "KM": "Comoros",
    "CF": "Congo",
    "CG": "Congo, democratic republic of the",
    "CW": "Cook islands",
    "CR": "Costa rica",
    "IV": "Cote d'ivoire",
    "HR": "Croatia",
    "CU": "Cuba",
    "CY": "Cyprus",
    "EZ": "Czech republic",
    "DA": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El salvador",
    "EK": "Equatorial guinea",
    "ER": "Eritrea",
    "EN": "Estonia",
    "ET": "Ethiopia",
    "FK": "Falkland (is malvinas)",
    "FO": "Faroe islands",
    "FM": "Fed states micronesia",
    "FJ": "Fiji",
    "FI": "Finland",
    "FS": "Fr so & antarctic lnds",
    "FR": "France",
    "FG": "French guiana",
    "FP": "French polynesia",
    "GB": "Gabon",
    "GA": "Gambia, the",
    "GE": "Georgia",
    "GM": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GQ": "Guam",
    "GT": "Guatemala",
    "GK": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard is&mcdonald isls",
    "HN": "Honduras",
    "HK": "Hong kong",
    "HU": "Hungary",
    "IC": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran",
    "IQ": "Iraq",
    "EI": "Ireland",
    "IS": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JA": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KS": "Korea, republic of",
    "KN": "Korea,dem peoples rep",
    "KU": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Laos",
    "LG": "Latvia",
    "LB": "Lebanon",
    "LT": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LS": "Liechtenstein",
    "LH": "Lithuania",
    "LU": "Luxembourg",
    "MC": "Macau",
    "MK": "Macedonia",
    "MA": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "IM": "Man, isle of",
    "MH": "Marshall islands",
    "MB": "Martinique",
    "MR": "Mauritania",
    "MP": "Mauritius",
    "MF": "St.martin",
    "MX": "Mexico",
    "MD": "Moldova",
    "MN": "Monaco",
    "MG": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MO": "Morocco",
    "MZ": "Mozambique",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "NT": "Netherlands antilles",
    "NC": "New caledonia",
    "NZ": "New zealand",
    "NU": "Nicaragua",
    "NG": "Niger",
    "NI": "Nigeria",
    "NE": "Niue",
    "NF": "Norfolk island",
    "CQ": "Northern mariana is",
    "NO": "Norway",
    "MU": "Oman",
    "PK": "Pakistan",
    "PS": "Paulau republic of",
    "PA": "Panama",
    "PG": "Papua new guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PC": "Pitcairn islands",
    "PL": "Poland",
    "PO": "Portugal",
    "RQ": "Puerto rico",
    "QA": "Qatar",
    "RE": "Reunion",
    "RO": "Romania",
    "RU": "Russia",
    "RW": "Rwanda",
    "SX": "S.georgia/s.sandwic is",
    "SM": "San marino",
    "TP": "Sao tome and principe",
    "SA": "Saudi arabia",
    "SG": "Senegal",
    "RS": "Serbia",
    "SE": "Seychelles",
    "SL": "Sierra leone",
    "SN": "Singapore",
    "LO": "Slovakia",
    "SI": "Slovenia",
    "BP": "Solomon islands",
    "SO": "Somalia",
    "ZA": "South africa",
    "SS": "South sudan",
    "SP": "Spain",
    "LK": "Sri lanka",
    "ST": "St lucia",
    "SH": "St. helena",
    "SC": "St. kitts and nevis",
    "SB": "St. pierre and miquelon",
    "VC": "St. vincent/grenadines",
    "SD": "Sudan",
    "SR": "Suriname",
    "WZ": "Swaziland",
    "SW": "Sweden",
    "SZ": "Switzerland",
    "SY": "Syria",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania, united rep of",
    "TH": "Thailand",
    "TT": "Timor-leste",
    "TG": "Togo",
    "TL": "Tokelau",
    "TO": "Tonga",
    "TD": "Trinidad and tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TK": "Turks and caicos isl",
    "TV": "Tuvalu",
    "UM": "U.s. minor outlying isl",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United arab emirates",
    "UK": "United kingdom",
    "US": "United states",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VT": "Vatican city",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "VQ": "Virgin islands",
    "WF": "Wallis and futuna",
    "WI": "Western sahara",
    "WS": "Western samoa",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
}
