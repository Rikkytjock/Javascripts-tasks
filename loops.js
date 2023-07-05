const availableRaces = ['Orc', 'Undead', 'Troll', 'Tauren']

// Vi vill logga ut alla tillgängliga raser
for (let i = 0; i < availableRaces.length; i++) {
  console.log((i + 1) + ': ' + availableRaces[i])
}

const availableActions = ['Zug zug', 'Mana break', 'Pull', 'Log out']

let chosenAction = availableActions[random(4)]
let isLoggedIn = chosenAction !== 'Log out'

while (isLoggedIn) {
  handleAction()
}

do {
  handleAction()
} while (isLoggedIn);

function handleAction() {
  chosenAction = availableActions[random(4)]

  console.log(chosenAction)

  isLoggedIn = chosenAction !== 'Log out'
}

function random(maxNumber) {
  return Math.floor(Math.random() * maxNumber)
}