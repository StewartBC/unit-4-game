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
        pic: "<img src=\"assets/images/Aatrox.png\" alt=\"Aatrox\">"
    },
    ahri = {
        name: "Ahri",
        attack: 0,
        magic: 70,
        armor: 20,
        magicResist: 30,
        health: 526,
        magicGrowth: 5,
        attackGrowth: 0,
        armorGrowth: 3,
        magicResistGrowth: 1,
        healthGrowth: 92,
        pic: "<img src=\"assets/images/Ahri.png\" alt=\"Ahri\">"
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
    if (enemyCurrentHealth / enemyTotalHealth > .9) {
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
    userHealth += champions[userIndex].healthGrowth;
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
        userItems.push(items[itemAttribute]);
        if (items[itemAttribute].hasOwnProperty("healthRestore")) {
            if (userCurrentHealth < userTotalHealth - 150) {
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
            $("#userItems").append(items[itemAttribute].pic);
        } else if (items[itemAttribute].hasOwnProperty("magicDamage")) {
            $("#shopAlert").html("You have purchased a " + items[itemAttribute].name + ". Your magic has been increased by " + items[itemAttribute].magicDamage + ".");
            userMagic = userMagic + items[itemAttribute].magicDamage;
            gold = gold - items[itemAttribute].cost;
            $("#userItems").append(items[itemAttribute].pic);
        } else if (items[itemAttribute].hasOwnProperty("armor")) {
            $("#shopAlert").html("You have purchased a " + items[itemAttribute].name + ". Your armor has been increased by " + items[itemAttribute].armorAdded + ".");
            userArmor = userArmor + items[itemAttribute].armor;
            gold = gold - items[itemAttribute].cost;
            $("#userItems").append(items[itemAttribute].pic);
        } else if (items[itemAttribute].hasOwnProperty("magicResist")) {
            $("#shopAlert").html("You have purchased a " + items[itemAttribute].name + ". Your magic resist has been increased by " + items[itemAttribute].magicResist + ".");
            userMagicResist = userMagicResist + items[itemAttribute].magicResist;
            gold = gold - items[itemAttribute].cost;
            $("#userItems").append(items[itemAttribute].pic);
        } else if (items[itemAttribute].hasOwnProperty("healthAdded")) {
            $("#shopAlert").html("You have purchased a " + items[itemAttribute].name + ". Your health has been increased by " + items[itemAttribute].healthAdded + ".");
            userTotalHealth = userTotalHealth + items[itemAttribute].healthAdded;
            userCurrentHealth = userCurrentHealth + items[itemAttribute].healthAdded;
            gold = gold - items[itemAttribute].cost;
            $("#userItems").append(items[itemAttribute].pic);
        }
        championInfo();
        $("#startAlert").text("");

    }
})

$("#start").on("click", function () {
    $("#shopAlert").text("");
    $("#startAlert").text("");
    if (userIndex === 1000) {
        $("#startAlert").text("You need to choose a champion before battling an opponent.")
    } else if (userItems.length === 0) {
        $("#startAlert").text("You should purchase an item before battling an opponent.")
    } else {
        var enemyChampionIndex = Math.floor(Math.random() * champions.length);
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
            console.log(damageDealt);
            enemyCurrentHealth = enemyCurrentHealth - damageDealt;
        } else {
            damageDealt = Math.floor(userMagic * (100 / (100 + enemyMagicResist)));
            console.log(damageDealt);             
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
            $("#whole").addClass("gone");
            $("#lose").removeClass("gone");
        } else if (enemyCurrentHealth < 1) {
            enemyCurrentHealth = 0;
            enemyChampionInfo();
            $("#battleText").html("Your attack killed " + enemyChampion + ". You have been rewarded with 500 gold and 100 experience. Click Battle Opponent when you are ready for your next challenge.");
            gold = gold + 500;
            experience = experience + 100;
            if (experience >= 3000) {
                var newLevel = 10;
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
            $("#start").addClass("show").removeClass("hide");
        }
    })
    }, 1000)
})