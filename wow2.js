
// Selecting player race
let playerRace = ['orc', 'troll', 'tauren', 'undead']

// Selecting player Class
let playerClass = ['warrior', 'shaman', 'druid', 'mage']

// Function that peforms action based on player Race and Class
function attack(playerRace, playerClass) {
    if ([0, 1, 2, 3].includes && playerClass === 'warrior') {
        return '/charge' + ' /hamstring' + ' /mortalstrike';
    }
    else if ([0, 1, 2].includes && playerClass === 'shaman') {
        return 'natureSwiftNess ' + ' chainLightning' + ' earthShock'
    }   
    else if (playerRace === 'tauren' && playerClass === 'druid') {
        return 'Starfire ' + ' Moonfire' + ' Wrath'
    }
    else if ([1, 3].includes && playerClass === 'mage') {
        return 'pressenceOfMind ' + ' Pyroblast' + ' Fireblast'
    }
    else 
    return 'choose a different race and class'  
}

// Select Race and Class
console.log(attack('orc', 'druid'))

// Declare honor
let honor = 7000;

// Function to get title based on honor 
function getTitle(honor){
if (honor > 100000) {
    return 'High Warlord'    
}
else if (honor > 5000) {
    return 'Grunt'
}
else if (honor > 1000) {
    return 'Scout'
}
else {
    return 'Go PVP'
}
}

// how much honor the player got
honor -= 6500; 

// Determine title based on honor (jag förstår inte riktigt denna)
let title = getTitle(1100000);

// input how much honor player got 
console.log(title);




// Fråga henkte: Vad exakt innebär den orange texten efter function. Den man kallar på?

// Kolla även om namn på spels. ex chainlightning borde vara i camelCase. 

// borde let playerRace och playerClass vara en const istället?

// Ska jag lägga mellanslag innan efter efter chainLightning?

// Hur skulle du rekommendera att ha space mellan orden Chain Lightning. Använda <+ ' '>?

// Är det ok att använda mellanrum i 'High Warlord'?