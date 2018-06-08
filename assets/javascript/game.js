var champions = [
    aatrox = {
        name: "Aatrox",
        attack: 70,
        magic: 0,
        armor: 33,
        magicResist: 32,
        health: 580,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 2,
        healthGrowth: 85,
        pic: "<img src=\"assets/images/Aatrox.png\" alt=\"Aatrox\">",
        audio: new Audio("assets/audio/Aatrox_Select.ogx")
    },
    ahri = {
        name: "Ahri",
        attack: 0,
        magic: 75,
        armor: 20,
        magicResist: 30,
        health: 526,
        magicGrowth: 5,
        attackGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 1,
        healthGrowth: 92,
        pic: "<img src=\"assets/images/Ahri.png\" alt=\"Ahri\">",
        audio: new Audio("assets/audio/" + this.name + "_Select.ogx")
    },
     akali = {
        name: "Akali",
        attack: 0,
        magic: 70,
        armor: 29,
        magicResist: 28,
        health: 545,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 3,
        magicResistGrowth: 2,
        healthGrowth: 87,
        pic: "<img src=\"assets/images/Akali.png\" alt=\"Akali\">",
        audio: new Audio("assets/audio/" + this.name + "_Select.ogx")
    },
    alistar = {
        name: "Alistar",
        attack: 0,
        magic: 60,
        armor: 40,
        magicResist: 39,
        health: 610,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 5,
        magicResistGrowth: 4,
        healthGrowth: 100,
        pic: "<img src=\"assets/images/Alistar.png\" alt=\"Alistar\">"
    },
    amumu = {
        name: "Amumu",
        attack: 0,
        magic: 65,
        armor: 38,
        magicResist: 35,
        health: 605,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 4,
        magicResistGrowth: 3,
        healthGrowth: 96,
        pic: "<img src=\"assets/images/Amumu.png\" alt=\"Amumu\">"
    },
    anivia = {
        name: "Anivia",
        attack: 0,
        magic: 75,
        armor: 23,
        magicResist: 27,
        health: 540,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Anivia.png\" alt=\"Anivia\">"
    },
    annie = {
        name: "Annie",
        attack: 0,
        magic: 73,
        armor: 22,
        magicResist: 25,
        health: 535,
        attackGrowth: 0,
        magicGrowth: 6,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 94,
        pic: "<img src=\"assets/images/Annie.png\" alt=\"Annie\">"
    },
    ashe = {
        name: "Ashe",
        attack: 80,
        magic: 0,
        armor: 22,
        magicResist: 21,
        health: 540,
        attackGrowth: 6,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 87,
        pic: "<img src=\"assets/images/Ashe.png\" alt=\"Ashe\">"
    },
    aurelionSol = {
        name: "Aurelion Sol",
        attack: 0,
        magic: 71,
        armor: 28,
        magicResist: 28,
        health: 565,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 94,
        pic: "<img src=\"assets/images/AurelionSol.png\" alt=\"Aurelion Sol\">"
    },
    azir = {
        name: "Azir",
        attack: 0,
        magic: 75,
        armor: 29,
        magicResist: 23,
        health: 534,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 4,
        magicResistGrowth: 2,
        healthGrowth: 87,
        pic: "<img src=\"assets/images/Azir.png\" alt=\"Azir\">"
    },
    bard = {
        name: "Bard",
        attack: 0,
        magic: 68,
        armor: 35,
        magicResist: 36,
        health: 566,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 96,
        pic: "<img src=\"assets/images/Bard.png\" alt=\"Bard\">"
    },
    blitzcrank = {
        name: "Blitzcrank",
        attack: 0,
        magic: 67,
        armor: 37,
        magicResist: 38,
        health: 577,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 92,
        pic: "<img src=\"assets/images/Blitzcrank.png\" alt=\"Blitzcrank\">"
    },
    brand = {
        name: "Brand",
        attack: 0,
        magic: 77,
        armor: 21,
        magicResist: 22,
        health: 519,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Brand.png\" alt=\"Brand\">"
    },
    braum = {
        name: "Braum",
        attack: 0,
        magic: 63,
        armor: 39,
        magicResist: 38,
        health: 607,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 99,
        pic: "<img src=\"assets/images/Braum.png\" alt=\"Braum\">"
    },
    caitlyn = {
        name: "Caitlyn",
        attack: 82,
        magic: 0,
        armor: 19,
        magicResist: 19,
        health: 523,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 89,
        pic: "<img src=\"assets/images/Caitlyn.png\" alt=\"Caitlyn\">"
    },
    camille = {
        name: "Camille",
        attack: 75,
        magic: 0,
        armor: 27,
        magicResist: 25,
        health: 555,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Camille.png\" alt=\"Camille\">"
    },
    cassiopeia = {
        name: "Cassiopeia",
        attack: 0,
        magic: 73,
        armor: 25,
        magicResist: 24,
        health: 563,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 90,
        pic: "<img src=\"assets/images/Cassiopeia.png\" alt=\"Cassiopeia\">"
    },
    chogath = {
        name: "Cho'Gath",
        attack: 0,
        magic: 67,
        armor: 40,
        magicResist: 35,
        health: 597,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 94,
        pic: "<img src=\"assets/images/ChoGath.png\" alt=\"ChoGath\">"
    },
    corki = {
        name: "Corki",
        attack: 76,
        magic: 0,
        armor: 33,
        magicResist: 32,
        health: 524,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 89,
        pic: "<img src=\"assets/images/Corki.png\" alt=\"Corki\">"
    },
    darius = {
        name: "Darius",
        attack: 73,
        magic: 0,
        armor: 35,
        magicResist: 33,
        health: 571,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 3,
        healthGrowth: 93,
        pic: "<img src=\"assets/images/Darius.png\" alt=\"Darius\">"
    },
    diana = {
        name: "Diana",
        attack: 0,
        magic: 72,
        armor: 29,
        magicResist: 27,
        health: 537,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 87,
        pic: "<img src=\"assets/images/Diana.png\" alt=\"Diana\">"
    },
    drMundo = {
        name: "Dr. Mundo",
        attack: 67,
        magic: 0,
        armor: 37,
        magicResist: 38,
        health: 594,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 5,
        healthGrowth: 98,
        pic: "<img src=\"assets/images/DrMundo.png\" alt=\"DrMundo\">"
    },
    draven = {
        name: "Draven",
        attack: 79,
        magic: 0,
        armor: 23,
        magicResist: 19,
        health: 530,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Draven.png\" alt=\"Draven\">"
    },
    ekko = {
        name: "Ekko",
        attack: 0,
        magic: 71,
        armor: 32,
        magicResist: 30,
        health: 544,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 90,
        pic: "<img src=\"assets/images/Ekko.png\" alt=\"Ekko\">"
    },
    elise = {
        name: "Elise",
        attack: 0,
        magic: 78,
        armor: 21,
        magicResist: 20,
        health: 523,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 86,
        pic: "<img src=\"assets/images/Elise.png\" alt=\"Elise\">"
    },
    evelynn = {
        name: "Evelynn",
        attack: 0,
        magic: 77,
        armor: 23,
        magicResist: 19,
        health: 530,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Evelynn.png\" alt=\"Evelynn\">"
    },
    ezreal = {
        name: "Ezreal",
        attack: 76,
        magic: 0,
        armor: 24,
        magicResist: 21,
        health: 549,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 86,
        pic: "<img src=\"assets/images/Ezreal.png\" alt=\"Ezreal\">"
    },
    fiddlesticks = {
        name: "Fiddlesticks",
        attack: 0,
        magic: 75,
        armor: 22,
        magicResist: 22,
        health: 541,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 3,
        magicResistGrowth: 2,
        healthGrowth: 93,
        pic: "<img src=\"assets/images/Fiddlesticks.png\" alt=\"Fiddlesticks\">"
    },
    fiora = {
        name: "Fiora",
        attack: 72,
        magic: 0,
        armor: 31,
        magicResist: 27,
        health: 570,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 3,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Fiora.png\" alt=\"Fiora\">"
    },
    fizz = {
        name: "Fizz",
        attack: 0,
        magic: 73,
        armor: 26,
        magicResist: 24,
        health: 552,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 86,
        pic: "<img src=\"assets/images/Fizz.png\" alt=\"Fizz\">"
    },
    galio = {
        name: "Galio",
        attack: 0,
        magic: 68,
        armor: 38,
        magicResist: 36,
        health: 574,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 93,
        pic: "<img src=\"assets/images/Galio.png\" alt=\"Galio\">"
    },
    gangplank = {
        name: "Gangplank",
        attack: 74,
        magic: 0,
        armor: 29,
        magicResist: 25,
        health: 549,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Gangplank.png\" alt=\"Gangplank\">"
    },
    garen = {
        name: "Garen",
        attack: 69,
        magic: 0,
        armor: 36,
        magicResist: 34,
        health: 582,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 5,
        magicResistGrowth: 4,
        healthGrowth: 92,
        pic: "<img src=\"assets/images/Garen.png\" alt=\"Garen\">"
    },
    gnar = {
        name: "Gnar",
        attack: 74,
        magic: 0,
        armor: 31,
        magicResist: 27,
        health: 539,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 85,
        pic: "<img src=\"assets/images/Gnar.png\" alt=\"Gnar\">"
    },
    gragas = {
        name: "Gragas",
        attack: 0,
        magic: 70,
        armor: 35,
        magicResist: 35,
        health: 577,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 90,
        pic: "<img src=\"assets/images/Gragas.png\" alt=\"Gragas\">"
    },
    graves = {
        name: "Graves",
        attack: 74,
        magic: 0,
        armor: 31,
        magicResist: 30,
        health: 549,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 86,
        pic: "<img src=\"assets/images/Graves.png\" alt=\"Graves\">"
    },
    hecarim = {
        name: "Hecarim",
        attack: 73,
        magic: 0,
        armor: 33,
        magicResist: 31,
        health: 561,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Hecarim.png\" alt=\"Hecarim\">"
    },
    heimerdinger = {
        name: "Herimerdinger",
        attack: 0,
        magic: 75,
        armor: 19,
        magicResist: 19,
        health: 540,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 89,
        pic: "<img src=\"assets/images/Heimerdinger.png\" alt=\"Heimerdinger\">"
    },
    illaoi = {
        name: "Illaoi",
        attack: 72,
        magic: 0,
        armor: 35,
        magicResist: 30,
        health: 567,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 90,
        pic: "<img src=\"assets/images/Illaoi.png\" alt=\"Illaoi\">"
    },
    irelia = {
        name: "Irelia",
        attack: 76,
        magic: 0,
        armor: 33,
        magicResist: 28,
        health: 549,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Irelia.png\" alt=\"Irelia\">"
    },
    ivern = {
        name: "Ivern",
        attack: 0,
        magic: 67,
        armor: 38,
        magicResist: 37,
        health: 588,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 5,
        magicResistGrowth: 5,
        healthGrowth: 95,
        pic: "<img src=\"assets/images/Ivern.png\" alt=\"Ivern\">"
    },
    janna = {
        name: "Janna",
        attack: 0,
        magic: 74,
        armor: 21,
        magicResist: 23,
        health: 530,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 86,
        pic: "<img src=\"assets/images/Janna.png\" alt=\"Janna\">"
    },
    jarvanIV = {
        name: "Jarvan IV",
        attack: 74,
        magic: 0,
        armor: 34,
        magicResist: 28,
        health: 560,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/JarvanIV.png\" alt=\"JarvanIV\">"
    },
    jax = {
        name: "Jax",
        attack: 77,
        magic: 0,
        armor: 31,
        magicResist: 25,
        health: 549,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 85,
        pic: "<img src=\"assets/images/Jax.png\" alt=\"Jax\">"
    },
    jayce = {
        name: "Jayce",
        attack: 77,
        magic: 0,
        armor: 29,
        magicResist: 26,
        health: 544,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Jayce.png\" alt=\"Jayce\">"
    },
    jhin = {
        name: "Jhin",
        attack: 78,
        magic: 0,
        armor: 23,
        magicResist: 19,
        health: 530,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 90,
        pic: "<img src=\"assets/images/Jhin.png\" alt=\"Jhin\">"
    },
    jinx = {
        name: "Jinx",
        attack: 77,
        magic: 0,
        armor: 22,
        magicResist: 18,
        health: 541,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 3,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Jinx.png\" alt=\"Jinx\">"
    },
    kaisa = {
        name: "Kai'Sa",
        attack: 75,
        magic: 0,
        armor: 24,
        magicResist: 20,
        health: 544,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 93,
        pic: "<img src=\"assets/images/Kaisa.png\" alt=\"Kaisa\">"
    },
    kalista = {
        name: "Kalista",
        attack: 74,
        magic: 0,
        armor: 25,
        magicResist: 23,
        health: 547,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 89,
        pic: "<img src=\"assets/images/Kalista.png\" alt=\"Kalista\">"
    },
    karma = {
        name: "Karma",
        attack: 0,
        magic: 70,
        armor: 28,
        magicResist: 28,
        health: 540,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 90,
        pic: "<img src=\"assets/images/Karma.png\" alt=\"Karma\">"
    },
    karthus = {
        name: "Karthus",
        attack: 0,
        magic: 76,
        armor: 23,
        magicResist: 19,
        health: 539,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 87,
        pic: "<img src=\"assets/images/Karthus.png\" alt=\"Karthus\">"
    },
    kassadin = {
        name: "Kassadin",
        attack: 0,
        magic: 72,
        armor: 29,
        magicResist: 29,
        health: 540,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 90,
        pic: "<img src=\"assets/images/Kassadin.png\" alt=\"Kassadin\">"
    },
    katarina = {
        name: "Katarina",
        attack: 0,
        magic: 73,
        armor: 27,
        magicResist: 27,
        health: 537,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 86,
        pic: "<img src=\"assets/images/Katarina.png\" alt=\"Katarina\">"
    },
    kayle = {
        name: "Kayle",
        attack: 0,
        magic: 71,
        armor: 30,
        magicResist: 31,
        health: 541,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 89,
        pic: "<img src=\"assets/images/Kayle.png\" alt=\"Kayle\">"
    },
    kayn = {
        name: "Kayn",
        attack: 76,
        magic: 0,
        armor: 33,
        magicResist: 27,
        health: 551,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Kayn.png\" alt=\"Kayn\">"
    },
    kennen = {
        name: "Kennen",
        attack: 0,
        magic: 76,
        armor: 32,
        magicResist: 29,
        health: 539,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 83,
        pic: "<img src=\"assets/images/Kennen.png\" alt=\"Kennen\">"
    },
    khazix = {
        name: "Kha'Zix",
        attack: 75,
        magic: 0,
        armor: 30,
        magicResist: 26,
        health: 547,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 93,
        pic: "<img src=\"assets/images/Khazix.png\" alt=\"Khazix\">"
    },
    kindred = {
        name: "Kindred",
        attack: 76,
        magic: 0,
        armor: 26,
        magicResist: 23,
        health: 534,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Kindred.png\" alt=\"Kindred\">"
    },
    kled = {
        name: "Kled",
        attack: 71,
        magic: 0,
        armor: 33,
        magicResist: 29,
        health: 558,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 3,
        healthGrowth: 84,
        pic: "<img src=\"assets/images/Kled.png\" alt=\"Kled\">"
    },
    kogmaw = {
        name: "Kog'Maw",
        attack: 76,
        magic: 0,
        armor: 22,
        magicResist: 19,
        health: 539,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Kogmaw.png\" alt=\"Kogmaw\">"
    },
    leblanc = {
        name: "LeBlanc",
        attack: 0,
        magic: 72,
        armor: 24,
        magicResist: 25,
        health: 550,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 93,
        pic: "<img src=\"assets/images/LeBlanc.png\" alt=\"LeBlanc\">"
    },
    leeSin = {
        name: "Lee Sin",
        attack: 71,
        magic: 0,
        armor: 35,
        magicResist: 30,
        health: 558,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 3,
        healthGrowth: 84,
        pic: "<img src=\"assets/images/LeeSin.png\" alt=\"LeeSin\">"
    },
    leona = {
        name: "Leona",
        attack: 0,
        magic: 69,
        armor: 37,
        magicResist: 35,
        health: 587,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 5,
        magicResistGrowth: 4,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Leona.png\" alt=\"Leona\">"
    },
    lissandra = {
        name: "Lissandra",
        attack: 0,
        magic: 73,
        armor: 29,
        magicResist: 33,
        health: 544,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 2,
        magicResistGrowth: 3,
        healthGrowth: 95,
        pic: "<img src=\"assets/images/Lissandra.png\" alt=\"Lissandra\">"
    },
    lucian = {
        name: "Lucian",
        attack: 78,
        magic: 0,
        armor: 27,
        magicResist: 23,
        health: 542,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 90,
        pic: "<img src=\"assets/images/Lucian.png\" alt=\"Lucian\">"
    },
    lulu = {
        name: "Lulu",
        attack: 0,
        magic: 70,
        armor: 30,
        magicResist: 31,
        health: 549,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 93,
        pic: "<img src=\"assets/images/Lulu.png\" alt=\"Lulu\">"
    },
    lux = {
        name: "Lux",
        attack: 0,
        magic: 74,
        armor: 29,
        magicResist: 24,
        health: 539,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 89,
        pic: "<img src=\"assets/images/Lux.png\" alt=\"Lux\">"
    },
    malphite = {
        name: "Malphite",
        attack: 0,
        magic: 67,
        armor: 39,
        magicResist: 31,
        health: 563,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 5,
        magicResistGrowth: 2,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Malphite.png\" alt=\"Malphite\">"
    },
    malzahar = {
        name: "Malzahar",
        attack: 0,
        magic: 74,
        armor: 29,
        magicResist: 30,
        health: 535,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 93,
        pic: "<img src=\"assets/images/Malzahar.png\" alt=\"Malzahar\">"
    },
    maokai = {
        name: "Maokai",
        attack: 0,
        magic: 69,
        armor: 36,
        magicResist: 35,
        health: 557,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Maokai.png\" alt=\"Maokai\">"
    },
    masterYi = {
        name: "Master Yi",
        attack: 76,
        magic: 0,
        armor: 29,
        magicResist: 27,
        health: 537,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 86,
        pic: "<img src=\"assets/images/MasterYi.png\" alt=\"MasterYi\">"
    },
    missFortune = {
        name: "Miss Fortune",
        attack: 77,
        magic: 0,
        armor: 21,
        magicResist: 22,
        health: 538,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 1,
        healthGrowth: 94,
        pic: "<img src=\"assets/images/MissFortune.png\" alt=\"MissFortune\">"
    },
    mordekaiser = {
        name: "Mordekaiser",
        attack: 0,
        magic: 70,
        armor: 33,
        magicResist: 33,
        health: 549,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 86,
        pic: "<img src=\"assets/images/Mordekaiser.png\" alt=\"Mordekaiser\">"
    },
    morgana = {
        name: "Morgana",
        attack: 0,
        magic: 71,
        armor: 22,
        magicResist: 25,
        health: 548,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 2,
        magicResistGrowth: 3,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Morgana.png\" alt=\"Morgana\">"
    },
    nami = {
        name: "Nami",
        attack: 0,
        magic: 71,
        armor: 21,
        magicResist: 24,
        health: 551,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 2,
        magicResistGrowth: 3,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Nami.png\" alt=\"Nami\">"
    },
    nasus = {
        name: "Nasus",
        attack: 72,
        magic: 0,
        armor: 35,
        magicResist: 28,
        health: 560,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 3,
        healthGrowth: 90,
        pic: "<img src=\"assets/images/Nasus.png\" alt=\"Nasus\">"
    },
    nautilus = {
        name: "Nautilus",
        attack: 0,
        magic: 68,
        armor: 36,
        magicResist: 31,
        health: 577,
        attackGrowth: 0,
        magicGrowth: 2,
        armorGrowth: 5,
        magicResistGrowth: 4,
        healthGrowth: 94,
        pic: "<img src=\"assets/images/Nautilus.png\" alt=\"Nautilus\">"
    },
    nidalee = {
        name: "Nidalee",
        attack: 0,
        magic: 74,
        armor: 22,
        magicResist: 24,
        health: 539,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 2,
        magicResistGrowth: 3,
        healthGrowth: 94,
        pic: "<img src=\"assets/images/Nidalee.png\" alt=\"Nidalee\">"
    },
    nocturne = {
        name: "Nocturne",
        attack: 74,
        magic: 0,
        armor: 32,
        magicResist: 29,
        health: 544,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 86,
        pic: "<img src=\"assets/images/Nocturne.png\" alt=\"Nocturne\">"
    },
    nunu = {
        name: "Nunu",
        attack: 0,
        magic: 69,
        armor: 36,
        magicResist: 36,
        health: 562,
        attackGrowth: 0,
        magicGrowth: 2,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Nunu.png\" alt=\"Nunu\">"
    },
    olaf = {
        name: "Olaf",
        attack: 74,
        magic: 0,
        armor: 34,
        magicResist: 29,
        health: 539,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 93,
        pic: "<img src=\"assets/images/Olaf.png\" alt=\"Olaf\">"
    },
    orianna = {
        name: "Orianna",
        attack: 0,
        magic: 76,
        armor: 23,
        magicResist: 19,
        health: 533,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 2,
        magicResistGrowth: 3,
        healthGrowth: 86,
        pic: "<img src=\"assets/images/Orianna.png\" alt=\"Orianna\">"
    },
    ornn = {
        name: "Ornn",
        attack: 0,
        magic: 68,
        armor: 37,
        magicResist: 32,
        health: 569,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 94,
        pic: "<img src=\"assets/images/Ornn.png\" alt=\"Ornn\">"
    },
    pantheon = {
        name: "Pantheon",
        attack: 74,
        magic: 0,
        armor: 35,
        magicResist: 24,
        health: 538,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 1,
        healthGrowth: 89,
        pic: "<img src=\"assets/images/Pantheon.png\" alt=\"Pantheon\">"
    },
    poppy = {
        name: "Poppy",
        attack: 68,
        magic: 0,
        armor: 37,
        magicResist: 24,
        health: 574,
        attackGrowth: 2,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 3,
        healthGrowth: 87,
        pic: "<img src=\"assets/images/Poppy.png\" alt=\"Poppy\">"
    },
    pyke = {
        name: "Pyke",
        attack: 75,
        magic: 0,
        armor: 28,
        magicResist: 25,
        health: 537,
        attackGrowth: 6,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 2,
        healthGrowth: 94,
        pic: "<img src=\"assets/images/Pyke.png\" alt=\"Pyke\">"
    },
    quinn = {
        name: "Quinn",
        attack: 76,
        magic: 0,
        armor: 25,
        magicResist: 19,
        health: 535,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 1,
        healthGrowth: 95,
        pic: "<img src=\"assets/images/Quinn.png\" alt=\"Quinn\">"
    },
    rakan = {
        name: "Rakan",
        attack: 0,
        magic: 68,
        armor: 33,
        magicResist: 37,
        health: 538,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 4,
        magicResistGrowth: 5,
        healthGrowth: 86,
        pic: "<img src=\"assets/images/Rakan.png\" alt=\"Rakan\">"
    },
    rammus = {
        name: "Rammus",
        attack: 0,
        magic: 67,
        armor: 40,
        magicResist: 29,
        health: 545,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 6,
        magicResistGrowth: 2,
        healthGrowth: 89,
        pic: "<img src=\"assets/images/Rammus.png\" alt=\"Rammus\">"
    },
    reksai = {
        name: "Rek'Sai",
        attack: 73,
        magic: 0,
        armor: 34,
        magicResist: 29,
        health: 539,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 3,
        healthGrowth: 89,
        pic: "<img src=\"assets/images/RekSai.png\" alt=\"RekSai\">"
    },
    renekton = {
        name: "Renekton",
        attack: 74,
        magic: 0,
        armor: 36,
        magicResist: 30,
        health: 549,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 2,
        healthGrowth: 93,
        pic: "<img src=\"assets/images/Renekton.png\" alt=\"Renekton\">"
    },
    rengar = {
        name: "Rengar",
        attack: 75,
        magic: 0,
        armor: 33,
        magicResist: 29,
        health: 545,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 2,
        healthGrowth: 86,
        pic: "<img src=\"assets/images/Rengar.png\" alt=\"Rengar\">"
    },
    riven = {
        name: "Riven",
        attack: 73,
        magic: 0,
        armor: 33,
        magicResist: 33,
        health: 544,
        attackGrowth: 6,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 2,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Riven.png\" alt=\"Riven\">"
    },
    rumble = {
        name: "Rumble",
        attack: 0,
        magic: 71,
        armor: 32,
        magicResist: 29,
        health: 543,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 94,
        pic: "<img src=\"assets/images/Rumble.png\" alt=\"Rumble\">"
    },
    ryze = {
        name: "Ryze",
        attack: 0,
        magic: 74,
        armor: 27,
        magicResist: 29,
        health: 539,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 89,
        pic: "<img src=\"assets/images/Ryze.png\" alt=\"Ryze\">"
    },
    sejuani = {
        name: "Sejuani",
        attack: 0,
        magic: 68,
        armor: 38,
        magicResist: 36,
        health: 572,
        attackGrowth: 0,
        magicGrowth: 2,
        armorGrowth: 4,
        magicResistGrowth: 3,
        healthGrowth: 94,
        pic: "<img src=\"assets/images/Sejuani.png\" alt=\"Sejuani\">"
    },
    shaco = {
        name: "Shaco",
        attack: 76,
        magic: 0,
        armor: 23,
        magicResist: 19,
        health: 534,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Shaco.png\" alt=\"Shaco\">"
    },
    shen = {
        name: "Shen",
        attack: 69,
        magic: 0,
        armor: 38,
        magicResist: 35,
        health: 567,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 5,
        magicResistGrowth: 4,
        healthGrowth: 90,
        pic: "<img src=\"assets/images/Shen.png\" alt=\"Shen\">"
    },
    shyvana = {
        name: "Shyvana",
        attack: 73,
        magic: 0,
        armor: 33,
        magicResist: 27,
        health: 553,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Shyvana.png\" alt=\"Shyvana\">"
    },
    singed = {
        name: "Singed",
        attack: 0,
        magic: 70,
        armor: 35,
        magicResist: 27,
        health: 559,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 4,
        magicResistGrowth: 2,
        healthGrowth: 92,
        pic: "<img src=\"assets/images/Singed.png\" alt=\"Singed\">"
    },
    sion = {
        name: "Sion",
        attack: 0,
        magic: 69,
        armor: 35,
        magicResist: 37,
        health: 559,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 3,
        magicResistGrowth: 4,
        healthGrowth: 94,
        pic: "<img src=\"assets/images/Sion.png\" alt=\"Sion\">"
    },
    sivir = {
        name: "Sivir",
        attack: 78,
        magic: 0,
        armor: 22,
        magicResist: 20,
        health: 534,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 92,
        pic: "<img src=\"assets/images/Sivir.png\" alt=\"Sivir\">"
    },
    skarner = {
        name: "Skarner",
        attack: 74,
        magic: 0,
        armor: 34,
        magicResist: 30,
        health: 552,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 2,
        healthGrowth: 93,
        pic: "<img src=\"assets/images/Skarner.png\" alt=\"Skarner\">"
    },
    sona = {
        name: "Sona",
        attack: 0,
        magic: 70,
        armor: 26,
        magicResist: 23,
        health: 539,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 3,
        magicResistGrowth: 2,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Sona.png\" alt=\"Sona\">"
    },
    soraka = {
        name: "Soraka",
        attack: 0,
        magic: 70,
        armor: 23,
        magicResist: 27,
        health: 554,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 2,
        magicResistGrowth: 3,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Soraka.png\" alt=\"Soraka\">"
    },
    swain = {
        name: "Swain",
        attack: 0,
        magic: 73,
        armor: 35,
        magicResist: 34,
        health: 555,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Swain.png\" alt=\"Swain\">"
    },
    syndra = {
        name: "Syndra",
        attack: 0,
        magic: 75,
        armor: 28,
        magicResist: 34,
        health: 539,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 2,
        magicResistGrowth: 3,
        healthGrowth: 92,
        pic: "<img src=\"assets/images/Syndra.png\" alt=\"Syndra\">"
    },
    tahmKench = {
        name: "Tahm Kench",
        attack: 0,
        magic: 69,
        armor: 36,
        magicResist: 33,
        health: 563,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 5,
        magicResistGrowth: 4,
        healthGrowth: 94,
        pic: "<img src=\"assets/images/TahmKench.png\" alt=\"TahmKench\">"
    },
    taliyah = {
        name: "Taliyah",
        attack: 0,
        magic: 76,
        armor: 22,
        magicResist: 19,
        health: 534,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Taliyah.png\" alt=\"Taliyah\">"
    },
    talon = {
        name: "Talon",
        attack: 76,
        magic: 0,
        armor: 24,
        magicResist: 20,
        health: 536,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 2,
        healthGrowth: 84,
        pic: "<img src=\"assets/images/Talon.png\" alt=\"Talon\">"
    },
    taric = {
        name: "Taric",
        attack: 0,
        magic: 68,
        armor: 38,
        magicResist: 34,
        health: 569,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 4,
        magicResistGrowth: 3,
        healthGrowth: 92,
        pic: "<img src=\"assets/images/Taric.png\" alt=\"Taric\">"
    },
    thresh = {
        name: "Thresh",
        attack: 68,
        magic: 0,
        armor: 39,
        magicResist: 27,
        health: 560,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 5,
        magicResistGrowth: 3,
        healthGrowth: 92,
        pic: "<img src=\"assets/images/Thresh.png\" alt=\"Thresh\">"
    },
    tristana = {
        name: "Tristana",
        attack: 77,
        magic: 0,
        armor: 23,
        magicResist: 22,
        health: 534,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 2,
        healthGrowth: 86,
        pic: "<img src=\"assets/images/Tristana.png\" alt=\"Tristana\">"
    },
    trundle = {
        name: "Trundle",
        attack: 72,
        magic: 0,
        armor: 35,
        magicResist: 32,
        health: 556,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 90,
        pic: "<img src=\"assets/images/Trundle.png\" alt=\"Trundle\">"
    },
    tryndamere = {
        name: "Tryndamere",
        attack: 75,
        magic: 0,
        armor: 31,
        magicResist: 27,
        health: 544,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 85,
        pic: "<img src=\"assets/images/Tryndamere.png\" alt=\"Tryndamere\">"
    },
    twistedFate = {
        name: "Twisted Fate",
        attack: 0,
        magic: 75,
        armor: 30,
        magicResist: 31,
        health: 533,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 92,
        pic: "<img src=\"assets/images/TwistedFate.png\" alt=\"TwistedFate\">"
    },
    twitch = {
        name: "Twitch",
        attack: 76,
        magic: 0,
        armor: 25,
        magicResist: 23,
        health: 537,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Twitch.png\" alt=\"Twitch\">"
    },
    udyr = {
        name: "Udyr",
        attack: 74,
        magic: 0,
        armor: 34,
        magicResist: 32,
        health: 559,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 3,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Udyr.png\" alt=\"Udyr\">"
    },
    urgot = {
        name: "Urgot",
        attack: 73,
        magic: 0,
        armor: 33,
        magicResist: 28,
        health: 560,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 85,
        pic: "<img src=\"assets/images/Urgot.png\" alt=\"Urgot\">"
    },
    varus = {
        name: "Varus",
        attack: 76,
        magic: 0,
        armor: 24,
        magicResist: 19,
        health: 534,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 2,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Varus.png\" alt=\"Varus\">"
    },
    vayne = {
        name: "Vayne",
        attack: 75,
        magic: 0,
        armor: 23,
        magicResist: 21,
        health: 541,
        attackGrowth: 6,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 2,
        healthGrowth: 87,
        pic: "<img src=\"assets/images/Vayne.png\" alt=\"Vayne\">"
    },
    veigar = {
        name: "Veigar",
        attack: 0,
        magic: 75,
        armor: 22,
        magicResist: 20,
        health: 533,
        attackGrowth: 0,
        magicGrowth: 6,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 92,
        pic: "<img src=\"assets/images/Veigar.png\" alt=\"Veigar\">"
    },
    velkoz = {
        name: "Vel'Koz",
        attack: 0,
        magic: 74,
        armor: 25,
        magicResist: 22,
        health: 547,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 85,
        pic: "<img src=\"assets/images/Velkoz.png\" alt=\"Velkoz\">"
    },
    vi = {
        name: "Vi",
        attack: 72,
        magic: 0,
        armor: 33,
        magicResist: 28,
        health: 544,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 3,
        healthGrowth: 86,
        pic: "<img src=\"assets/images/Vi.png\" alt=\"Vi\">"
    },
    viktor = {
        name: "Viktor",
        attack: 0,
        magic: 73,
        armor: 23,
        magicResist: 19,
        health: 539,
        attackGrowth: 0,
        magicGrowth: 4,
        armorGrowth: 3,
        magicResistGrowth: 2,
        healthGrowth: 90,
        pic: "<img src=\"assets/images/Viktor.png\" alt=\"Viktor\">"
    },
    vladimir = {
        name: "Vladimir",
        attack: 0,
        magic: 76,
        armor: 23,
        magicResist: 19,
        health: 550,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Vladimir.png\" alt=\"Vladimir\">"
    },
    volibear = {
        name: "Volibear",
        attack: 70,
        magic: 0,
        armor: 35,
        magicResist: 32,
        health: 545,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 3,
        healthGrowth: 94,
        pic: "<img src=\"assets/images/Volibear.png\" alt=\"Volibear\">"
    },
    warwick = {
        name: "Warwick",
        attack: 69,
        magic: 0,
        armor: 36,
        magicResist: 31,
        health: 570,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 2,
        healthGrowth: 92,
        pic: "<img src=\"assets/images/Warwick.png\" alt=\"Warwick\">"
    },
    wukong = {
        name: "Wukong",
        attack: 73,
        magic: 0,
        armor: 31,
        magicResist: 28,
        health: 548,
        attackGrowth: 3,
        magicGrowth: 0,
        armorGrowth: 4,
        magicResistGrowth: 3,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/MonkeyKing.png\" alt=\"Wukong\">"
    },
    xayah = {
        name: "Xayah",
        attack: 78,
        magic: 0,
        armor: 22,
        magicResist: 18,
        health: 533,
        attackGrowth: 6,
        magicGrowth: 0,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Xayah.png\" alt=\"Xayah\">"
    },
    xerath = {
        name: "Xerath",
        attack: 0,
        magic: 76,
        armor: 22,
        magicResist: 18,
        health: 540,
        attackGrowth: 0,
        magicGrowth: 6,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 91,
        pic: "<img src=\"assets/images/Xerath.png\" alt=\"Xerath\">"
    },
    xinZhao = {
        name: "Xin Zhao",
        attack: 75,
        magic: 0,
        armor: 31,
        magicResist: 28,
        health: 547,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/XinZhao.png\" alt=\"XinZhao\">"
    },
    yasuo = {
        name: "Yasuo",
        attack: 76,
        magic: 0,
        armor: 28,
        magicResist: 21,
        health: 538,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 2,
        healthGrowth: 87,
        pic: "<img src=\"assets/images/Yasuo.png\" alt=\"Yasuo\">"
    },
    yorick = {
        name: "Yorick",
        attack: 73,
        magic: 0,
        armor: 34,
        magicResist: 28,
        health: 543,
        attackGrowth: 4,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 2,
        healthGrowth: 93,
        pic: "<img src=\"assets/images/Yorick.png\" alt=\"Yorick\">"
    },
    zac = {
        name: "Zac",
        attack: 0,
        magic: 68,
        armor: 36,
        magicResist: 36,
        health: 559,
        attackGrowth: 0,
        magicGrowth: 3,
        armorGrowth: 4,
        magicResistGrowth: 4,
        healthGrowth: 92,
        pic: "<img src=\"assets/images/Zac.png\" alt=\"Zac\">"
    },
    zed = {
        name: "Zed",
        attack: 76,
        magic: 0,
        armor: 26,
        magicResist: 20,
        health: 542,
        attackGrowth: 5,
        magicGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 2,
        healthGrowth: 88,
        pic: "<img src=\"assets/images/Zed.png\" alt=\"Zed\">"
    },
    ziggs = {
        name: "Ziggs",
        attack: 0,
        magic: 74,
        armor: 25,
        magicResist: 23,
        health: 541,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 93,
        pic: "<img src=\"assets/images/Ziggs.png\" alt=\"Ziggs\">"
    },
    zilean = {
        name: "Zilean",
        attack: 0,
        magic: 73,
        armor: 26,
        magicResist: 23,
        health: 537,
        attackGrowth: 0,
        magicGrowth: 6,
        armorGrowth: 3,
        magicResistGrowth: 3,
        healthGrowth: 89,
        pic: "<img src=\"assets/images/Zilean.png\" alt=\"Zilean\">"
    },
    zoe = {
        name: "Zoe",
        attack: 0,
        magic: 77,
        armor: 22,
        magicResist: 18,
        health: 531,
        attackGrowth: 0,
        magicGrowth: 6,
        armorGrowth: 2,
        magicResistGrowth: 2,
        healthGrowth: 90,
        pic: "<img src=\"assets/images/Zoe.png\" alt=\"Zoe\">"
    },
    zyra = {
        name: "Zyra",
        attack: 0,
        magic: 73,
        armor: 23,
        magicResist: 26,
        health: 546,
        attackGrowth: 0,
        magicGrowth: 5,
        armorGrowth: 2,
        magicResistGrowth: 3,
        healthGrowth: 87,
        pic: "<img src=\"assets/images/Zyra.png\" alt=\"Zyra\">"
    }
]

var items = [
    healthPotion = {
        name: "Health Potion",
        cost: 50,
        healthRestore: 150,
        pic: "<img src=\"assets/images/HealthPotion.png\" alt=\"HealthPotion\">"
    },
    longSword = {
        name: "Long Sword",
        cost: 350,
        attackDamage: 15,
        pic: "<img src=\"assets/images/LongSword.png\" alt=\"LongSword\">"
    },
    aplifyingTome = {
        name: "Amplifying Tome",
        cost: 400,
        magicDamage: 20,
        pic: "<img src=\"assets/images/AmplifyingTome.png\" alt=\"AmplifyingTome\">"

    },
    rubyCrystal = {
        name: "Ruby Crystal",
        cost: 400,
        healthAdded: 150,
        pic: "<img src=\"assets/images/RubyCrystal.png\" alt=\"RubyCrystal\">"
    },
    clothArmor = {
        name: "Cloth Armor",
        cost: 300,
        armorAdded: 15,
        pic: "<img src=\"assets/images/ClothArmor.png\" alt=\"ClothArmor\">"
    },
    magicMantle = {
        name: "Magic Mantle",
        cost: 400,
        magicResist: 25,
        pic: "<img src=\"assets/images/magicMantle.png\" alt=\"MagicMantle\">"
    },
    bfSword = {
        name: "B.F. Sword",
        cost: 750,
        attackDamage: 45,
        pic: "<img src=\"assets/images/BFSword.png\" alt=\"BFSword\">"
    },
    lostChapter = {
        name: "Lost Chapter",
        cost: 750,
        magicDamage: 50,
        pic: "<img src=\"assets/images/LostChapter.png\" alt=\"LostChapter\">"

    },
    giantBelt = {
        name: "Giant's Belt",
        cost: 700,
        healthAdded: 300,
        pic: "<img src=\"assets/images/GiantsBelt.png\" alt=\"GiantsBelt\">"
    },
    chainVest = {
        name: "Chain Vest",
        cost: 600,
        armorAdded: 40,
        pic: "<img src=\"assets/images/ChainVest.png\" alt=\"ChainVest\">"
    },
    negatronCloak = {
        name: "Negatron Cloak",
        cost: 750,
        magicResist: 60,
        pic: "<img src=\"assets/images/NegatronCloak.png\" alt=\"NegatronCloak\">"

    }
]

var userIndex = 1000;
var enemyChampionIndex = 1000;
var userChampion = "";
var championsRemaining = champions.length;
var itemsPurchased = [];
var userAttack = 0;
var userMagic = 0;
var userArmor = 0;
var userMagicResist = 0;
var userTotalHealth = 0;
var userCurrentHealth = 0;
var userAttackGrowth = 0;
var userMagicGrowth = 0;
var userArmorGrowth = 0;
var userMagicResistGrowth = 0;
var experience = 0;
var gold = 0;
var level = 1;
var enemyChampion = "";
var enemyLevel = 0;
var enemyAttack = 0;
var enemyMagic = 0;
var enemyArmor = 0;
var enemyMagicResist = 0;
var enemyTotalHealth = 0;
var enemyCurrentHealth = 0;
var userItems = [];
var itemAttribute = 0;
var victory = new Audio("assets/audio/Victory.mp3");
var kill = new Audio("assets/audio/Kill.mp3");
var defeat = new Audio("assets/audio/Defeat.mp3");

function userHealth() {
    if (userCurrentHealth / userTotalHealth > .9) {
        $("#userBar").width("90%");
        $("#userBar").addClass("bg-success").removeClass("bg-warning bg-danger");
    } else if (userCurrentHealth / userTotalHealth > .8) {
        $("#userBar").width("80%");
        $("#userBar").addClass("bg-success").removeClass("bg-warning bg-danger");
    } else if (userCurrentHealth / userTotalHealth > .7) {
        $("#userBar").width("70%");
        $("#userBar").addClass("bg-success").removeClass("bg-warning bg-danger");
    } else if (userCurrentHealth / userTotalHealth > .6) {
        $("#userBar").width("60%");
        $("#userBar").addClass("bg-warning").removeClass("bg-success bg-danger");
    } else if (userCurrentHealth / userTotalHealth > .5) {
        $("#userBar").width("50%");
        $("userBar").addClass("bg-warning").removeClass("bg-success bg-danger");
    } else if (userCurrentHealth / userTotalHealth > .4) {
        $("#userBar").width("40%");
        $("#userBar").addClass("bg-warning").removeClass("bg-success bg-danger");
    } else if (userCurrentHealth / userTotalHealth > .3) {
        $("#userBar").width("30%");
        $("#userBar").addClass("bg-danger").removeClass("bg-warning bg-success");
    } else if (userCurrentHealth / userTotalHealth > .2) {
        $("#userBar").width("20%");
        $("#userBar").addClass("bg-success").removeClass("bg-warning bg-success");
    } else if (userCurrentHealth / userTotalHealth > .1) {
        $("#userBar").width("10%");
        $("#userBar").addClass("bg-success").removeClass("bg-warning bg-success");
    } else if (userCurrentHealth < 1) {
        $("#userBar").width("0%");
    }   
}

function enemyHealth() {
    if (enemyCurrentHealth === enemyTotalHealth) {
        $("#enemyBar").width("100%");
        $("#enemyBar").addClass("bg-success").removeClass("bg-warning bg-danger");
    } else if (enemyCurrentHealth / enemyTotalHealth > .9) {
        $("#enemyBar").width("90%");
        $("#enemyBar").addClass("bg-success").removeClass("bg-warning bg-danger");
    } else if (enemyCurrentHealth / enemyTotalHealth > .8) {
        $("#enemyBar").width("80%");
        $("enemyBar").addClass("bg-success").removeClass("bg-warning bg-danger");
    } else if (enemyCurrentHealth / enemyTotalHealth > .7) {
        $("#enemyBar").width("70%");
        $("#enemyBar").addClass("bg-success").removeClass("bg-warning bg-danger");
    } else if (enemyCurrentHealth / enemyTotalHealth > .6) {
        $("#enemyBar").width("60%");
        $("#enemyBar").addClass("bg-warning").removeClass("bg-success bg-danger");
    } else if (enemyCurrentHealth / enemyTotalHealth > .5) {
        $("#enemyBar").width("50%");
        $("#enemyBar").addClass("bg-warning").removeClass("bg-success bg-danger");
    } else if (enemyCurrentHealth / enemyTotalHealth > .4) {
        $("#enemyBar").width("40%");
        $("#enemyBar").addClass("bg-warning").removeClass("bg-success bg-danger");
    } else if (enemyCurrentHealth / enemyTotalHealth > .3) {
        $("#enemyBar").width("30%");
        $("#enemyBar").addClass("bg-danger").removeClass("bg-warning bg-success");
    } else if (enemyCurrentHealth / enemyTotalHealth > .2) {
        $("#enemyBar").width("20%");
        $("#enemyBar").addClass("bg-danger").removeClass("bg-warning bg-success");
    } else if (enemyCurrentHealth / enemyTotalHealth > .1) {
        $("#enemyBar").width("10%");
        $("#enemyBar").addClass("bg-danger").removeClass("bg-warning bg-success");
    } else if (enemyCurrentHealth < 1) {
        $("#enemyBar").width("0%");
    }
}

function enemyChampionInfo() {
    $("#enemyChampion").html("");
    $("#enemyChampion").html("Name: " + enemyChampion + "<br>Level: " + enemyLevel + "<br>Attack: " + enemyAttack + "<br>Magic: " + enemyMagic + "<br>Armor: " + enemyArmor + "<br>Magic Resist: " + enemyMagicResist + "<br>Health: " + enemyCurrentHealth + "/" + enemyTotalHealth);
}
function calcStats() {
    userAttack = userAttack + champions[userIndex].attackGrowth;
    userMagic = userMagic + champions[userIndex].magicGrowth;
    userArmor = userArmor + champions[userIndex].armorGrowth;
    userMagicResist = userMagicResist + champions[userIndex].magicResistGrowth;
    userTotalHealth += champions[userIndex].healthGrowth;
    userCurrentHealth += champions[userIndex].healthGrowth;
}

function championInfo() {
    $("#championInfo").html("");
    $("#championInfo").html("Name: " + champions[userIndex].name + "<br>Gold: " + gold + "<br>Level: " + level + "<br>Attack: " + userAttack + "<br>Magic: " + userMagic + "<br>Armor: " + userArmor + "<br>Magic Resist: " + userMagicResist + "<br>Health: " + userCurrentHealth + "/" + userTotalHealth);
}

for (j = 0; j < champions.length; j++) {
    var championButton = $("<button>");
    $(championButton).addClass("champion-button");
    $(championButton).attr("data-champion", j);
    $(championButton).append(champions[j].pic);
    $("#championSelect").append(championButton);
}

$(document).on("click", ".champion-button", function () {
    $("#championSidebar").html("Name: " + champions[$(this).attr("data-champion")].name + "<br>Attack: " + champions[$(this).attr("data-champion")].attack + "<br>Magic: " + champions[$(this).attr("data-champion")].magic + "<br>Armor: " + champions[$(this).attr("data-champion")].armor + "<br>Magic Resist: " + champions[$(this).attr("data-champion")].magicResist + "<br>Health: " + champions[$(this).attr("data-champion")].health);
    userIndex = $(this).attr("data-champion");
});

$("#lock").on("click", function () {
    champions[userIndex].audio.play();
    $("#startAlert").text("");
    userAttack = champions[userIndex].attack;
    userMagic = champions[userIndex].magic
    userArmor = champions[userIndex].armor;
    userMagicResist = champions[userIndex].magicResist;
    userTotalHealth = champions[userIndex].health;
    userCurrentHealth = champions[userIndex].health;
    userAttackGrowth = champions[userIndex].attackGrowth;
    userMagicGrowth = champions[userIndex].magicGrowth;
    userArmorGrowth = champions[userIndex].armorGrowth;
    userMagicResistGrowth = champions[userIndex].magicResistGrowth;
    userChampion = champions[userIndex].name;
    gold = 500;
    championInfo();
    $("#userPanelPic").append(champions[userIndex].pic);
    $("#userText").addClass("show").removeClass("hide");
    $("#championSelect").text("");
    $("#championSidebar").text("");
    $("#lock").addClass("hide");
    $("#champSelect").addClass("gone");
    $("#welcome").addClass("gone");
    $("#championSelect").addClass("gone");
    $("#instructions").addClass("gone");
    $("#yourItems").removeClass("hide");
    $("#userHealth").removeClass("hide");
    $("#userBar").addClass("bg-success");
});

for (m = 0; m < items.length; m++) {
    var itemButton = $("<button>");
    $(itemButton).addClass("item-button");
    $(itemButton).attr("data-item", m);
    $(itemButton).append(items[m].pic);
    $("#shop").append(itemButton)
}

$(document).on("click", ".item-button", function () {
    itemAttribute = $(this).attr("data-item");
    $("#shopSidebar").text("");
    if (items[itemAttribute].hasOwnProperty("healthRestore")) {
        $("#shopSidebar").html("Name: " + items[itemAttribute].name + "<br>" + "Cost: " + items[itemAttribute].cost + "<br>" + "Health Restore: " + items[itemAttribute].healthRestore);
    } else if (items[itemAttribute].hasOwnProperty("attackDamage")) {
        $("#shopSidebar").html("Name: " + items[itemAttribute].name + "<br>" + "Cost: " + items[itemAttribute].cost + "<br>" + "Bonus Attack Damage: " + items[itemAttribute].attackDamage);
    } else if (items[itemAttribute].hasOwnProperty("healthAdded")) {
        $("#shopSidebar").html("Name: " + items[itemAttribute].name + "<br>" + "Cost: " + items[itemAttribute].cost + "<br>" + "Bonus Health: " + items[itemAttribute].healthAdded);
    } else if (items[itemAttribute].hasOwnProperty("armorAdded")) {
        $("#shopSidebar").html("Name: " + items[itemAttribute].name + "<br>" + "Cost: " + items[itemAttribute].cost + "<br>" + "Bonus Armor: " + items[itemAttribute].armorAdded);
    } else if (items[itemAttribute].hasOwnProperty("magicDamage")) {
        $("#shopSidebar").html("Name: " + items[itemAttribute].name + "<br>" + "Cost: " + items[itemAttribute].cost + "<br>" + "Bonus Magic Damage: " + items[itemAttribute].magicDamage);
    } else if (items[itemAttribute].hasOwnProperty("magicResist")) {
        $("#shopSidebar").html("Name: " + items[itemAttribute].name + "<br>" + "Cost: " + items[itemAttribute].cost + "<br>" + "Bonus Magic Resist: " + items[itemAttribute].magicResist);
    }
});

$("#buy").on("click", function () {
    if (userIndex === 1000) {
        $("#shopAlert").html("You need to choose a champion before purchasing items.")
    } else if (gold < items[itemAttribute].cost) {
        $("#shopAlert").text("You don't have enough gold to purchase this item.");
    } else if (gold >= items[itemAttribute].cost) {
        if (items[itemAttribute].hasOwnProperty("healthRestore")) {
            if (userCurrentHealth <= userTotalHealth - 150) {
                userCurrentHealth = userCurrentHealth + 150;
                gold = gold - items[itemAttribute].cost;
                $("#shopAlert").text("");
                $("#shopAlert").html("You have purchased a Health Potion. Your health has been restored by 150 points.");
                userHealth();
                championInfo();
            } else {
                $("#shopAlert").text("");
                $("#shopAlert").text("Your current health is too high to purchase this item.");
            }
        }
        if (items[itemAttribute].hasOwnProperty("attackDamage")) {
            $("#shopAlert").html("You have purchased a " + items[itemAttribute].name + ". Your attack has been increased by " + items[itemAttribute].attackDamage + ".");
            userAttack = userAttack + items[itemAttribute].attackDamage;
            gold = gold - items[itemAttribute].cost;
            userItems.push(items[itemAttribute]);
            $("#userItems").append(items[itemAttribute].pic);
        } else if (items[itemAttribute].hasOwnProperty("magicDamage")) {
            $("#shopAlert").html("You have purchased a " + items[itemAttribute].name + ". Your magic has been increased by " + items[itemAttribute].magicDamage + ".");
            userMagic = userMagic + items[itemAttribute].magicDamage;
            gold = gold - items[itemAttribute].cost;
            userItems.push(items[itemAttribute]);
            $("#userItems").append(items[itemAttribute].pic);
        } else if (items[itemAttribute].hasOwnProperty("armor")) {
            $("#shopAlert").html("You have purchased a " + items[itemAttribute].name + ". Your armor has been increased by " + items[itemAttribute].armorAdded + ".");
            userArmor = userArmor + items[itemAttribute].armor;
            gold = gold - items[itemAttribute].cost;
            userItems.push(items[itemAttribute]);
            $("#userItems").append(items[itemAttribute].pic);
        } else if (items[itemAttribute].hasOwnProperty("magicResist")) {
            $("#shopAlert").html("You have purchased a " + items[itemAttribute].name + ". Your magic resist has been increased by " + items[itemAttribute].magicResist + ".");
            userMagicResist = userMagicResist + items[itemAttribute].magicResist;
            gold = gold - items[itemAttribute].cost;
            userItems.push(items[itemAttribute]);
            $("#userItems").append(items[itemAttribute].pic);
        } else if (items[itemAttribute].hasOwnProperty("healthAdded")) {
            $("#shopAlert").html("You have purchased a " + items[itemAttribute].name + ". Your health has been increased by " + items[itemAttribute].healthAdded + ".");
            userTotalHealth = userTotalHealth + items[itemAttribute].healthAdded;
            userCurrentHealth = userCurrentHealth + items[itemAttribute].healthAdded;
            gold = gold - items[itemAttribute].cost;
            userItems.push(items[itemAttribute]);
            $("#userItems").append(items[itemAttribute].pic);
        }
        championInfo();
        $("#startAlert").text("");

    }
})

$("#start").on("click", function () {
    $("#shopAlert").text("");
    if (userIndex === 1000) {
        $("#startAlert").text("You need to choose a champion before battling an opponent.")
    } else if (userItems.length === 0) {
        $("#startAlert").text("You should purchase an item before battling an opponent.")
    } else {
        enemyChampionIndex = Math.floor(Math.random() * champions.length);
        while (enemyChampionIndex == userIndex) {
            enemyChampionIndex = Math.floor(Math.random() * champions.length);
        }
        $("#enemyHealth").removeClass("hide");
        $("#enemyBar").addClass("bg-success");
        enemyChampion = champions[enemyChampionIndex].name;
        enemyLevel = level;
        enemyAttack = champions[enemyChampionIndex].attack + (enemyLevel - 1) * champions[enemyChampionIndex].attackGrowth;
        enemyMagic = champions[enemyChampionIndex].magic + (enemyLevel - 1) * champions[enemyChampionIndex].magicGrowth;
        enemyArmor = champions[enemyChampionIndex].armor + (enemyLevel - 1) * champions[enemyChampionIndex].armorGrowth;
        enemyMagicResist = champions[enemyChampionIndex].magicResist + (enemyLevel - 1) * champions[enemyChampionIndex].magicResistGrowth;
        enemyTotalHealth = champions[enemyChampionIndex].health + (enemyLevel - 1) * champions[enemyChampionIndex].healthGrowth;
        enemyCurrentHealth = champions[enemyChampionIndex].health + (enemyLevel - 1) * champions[enemyChampionIndex].healthGrowth;
        enemyHealth();
        $("#battle").addClass("show").removeClass("hide");
        $("#attack").addClass("show").removeClass("hide");
        $("#enemyText").addClass("show").removeClass("hide");
        enemyChampionInfo();
        $("#enemyChampionPic").text("");
        $("#enemyChampionPic").append(champions[enemyChampionIndex].pic);
        $("#start").addClass("hide");

    }
})

$("#attack").on("click", function () {
    $("#shopAlert").text("");
    $("#battleText").text("");
    $("#attack").addClass("hide").removeClass("show");
    setTimeout(function () {
        setTimeout(function () { 
        var damageDealt = 0;
        var damageTaken = 0;
        if (userAttack > userMagic) {
            damageDealt = Math.floor(userAttack * (100 / (100 + enemyArmor)));
            enemyCurrentHealth = enemyCurrentHealth - damageDealt;
        } else {
            damageDealt = Math.floor(userMagic * (100 / (100 + enemyMagicResist)));        
            enemyCurrentHealth = enemyCurrentHealth - damageDealt;
        }
        if (enemyAttack > enemyMagic) {
            damageTaken = Math.floor(enemyAttack * (100 / (100 + userArmor)));
            userCurrentHealth = userCurrentHealth - damageTaken;
        } else {
            damageTaken = Math.floor(enemyMagic * (100 / (100 + userMagicResist)));
            userCurrentHealth = userCurrentHealth - damageTaken;
        }
        userHealth();
        enemyHealth();
        if (enemyCurrentHealth > 0 && userCurrentHealth > 0) {
            $("#battleText").html("Your attack dealt " + damageDealt + " damage to " + enemyChampion + ". " + enemyChampion + " now has " + enemyCurrentHealth + " health remaining.<br>" + enemyChampion + " counter attacked you for " + damageTaken + " damage. You now have " + userCurrentHealth + " health remaining.");
            enemyChampionInfo();
            championInfo();
            setTimeout(function() { 
            $("#attack").addClass("show").removeClass("hide");
        }, 500)
        } else if (userCurrentHealth < 1) {
            defeat.play();
            $("#whole").addClass("gone");
            $("#lose").removeClass("gone");
        } else if (enemyCurrentHealth < 1) {
            kill.play();
            enemyCurrentHealth = 0;
            enemyChampionInfo();
            $("#battleText").html("Your attack killed " + enemyChampion + ". You have been rewarded with 500 gold and 100 experience. Click Battle Opponent when you are ready for your next challenge.");
            gold = gold + 500;
            experience = experience + 100;
            champions.splice(enemyChampionIndex, 1);
            if (experience >= 3000) {
                var newLevel = 10;
                victory.play();
                $("#whole").addClass("gone");
                $("#win").removeClass("gone");
            } else if (experience >= 2400) {
                var newLevel = 9;
            } else if (experience >= 1900) {
                var newLevel = 8;
            } else if (experience >= 1500) {
                var newLevel = 7;
            } else if (experience >= 1100) {
                var newLevel = 6;
            } else if (experience >= 800) {
                var newLevel = 5;
            } else if (experience >= 500) {
                var newLevel = 4;
            } else if (experience >= 300) {
                var newLevel = 3;
            } else if (experience >= 100) {
                var newLevel = 2;
            }
            if (newLevel !== level) {
                level = newLevel;
                userHealth();
                calcStats();
            }
            championInfo();
            $("#start").removeClass("hide");
        }
    })
    }, 1000)
})