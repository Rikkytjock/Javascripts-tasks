
// Welcome message
console.log("Welcome to the World of ScriptCraft");

// Choose Race and Class message
console.log('Choose your Race and Class');

// Assigning races and classes
const playerRace = ['orc', 'undead'];
const playerClass = ['warrior', 'rouge'];

// Selecting Race and Class
console.log(raceGreeting('orc'));
console.log(classGreeting('warrior'));

// Prompting message about the quest 
console.log('Your quest is to slay 10 Boars')

// Your quest 
let boarQuestComplete = 10; 

// Your progress in the quest
let boarQuestProgress = 2;

// Console log the quests
console.log(questGiverBoars(boarQuestComplete, boarQuestProgress))

function raceGreeting(playerRace) {
    if (playerRace === 'orc') {
        return 'You have choosen Orc, Lokthar Ogar!'
    } 

    else if (playerRace === 'undead') {
        return 'You have choosen Undead, For the Forsaken!'
    }

}

function classGreeting(playerClass) {
    if (playerClass === 'warrior') {
        return 'Warrior says: You have my Axe!'
    }

    else if (playerClass === 'rouge') {
        return 'Rouge says: From the Shadows I come!'
    }

}

function questGiverBoars(boarQuestComplete, boarQuestProgress) {
    if (boarQuestProgress < boarQuestComplete) {
    return 'You need to kill more boars'
    }

    else if (boarQuestProgress === boarQuestComplete) {
        return 'Quest completed'
    }

    else if (boarQuestProgress > boarQuestComplete) {
        return 'You are already done, stop killing the boars!'
    }

}




// Frågor till henke: Finns det ett bättre sätt att välja på quest. Just nu blir det att comment out

// Spelar det någon roll i vilken ordning jag skriver de oranga?
