let health = 100;
let energy = 100;
let gold = 50;
let happiness = 50;
let hunger = 50;
let age = 1;

const restButton = document.querySelector('#rest');
const checkUpButton = document.querySelector('#checkUp');
const playbutton = document.querySelector('#play');
const feedButton = document.querySelector('#feed');
const sleepButton = document.querySelector('#sleep');
const textInfo = document.querySelector('#textInfo');

const hpStat = document.querySelector('#hpStat');
const energyStat = document.querySelector('#energyStat');
const goldStat = document.querySelector('#goldStat');
const happStat = document.querySelector('#happStat');
const hungerStat = document.querySelector('#hungerStat');
const ageStat = document.querySelector('#ageStat');
const petDisplay = document.querySelector('#petDisplay');

function feed () {
    console.log('Feed button clicked');
    if (hunger - 10 < 0) {
        textInfo.innerHTML = "The pet is not hungry.";
    } else {
        hunger -= 10;
        hungerStat.innerHTML = hunger;
        if (gold - 5 < 0) {
            textInfo.innerHTML = "Not enough money to feed pet."
        } else {
            gold -= 5;
            goldStat.innerHTML = gold;
        }

        textInfo.innerHTML = "You fed the pet! Decreased 10 hunger points and spended 5 gold."
    } 
}

function play () {
    console.log("Play button clicked");

    if (energy - 15 < 0) {
        textInfo.innerHTML = "Pet does not have enough energy to play."
    } else if (happiness >= 85) {
        textInfo.innerHTML = "Pet is too excited, let them rest first."
    } else if (health <= 20) {
        textInfo.innerHTML = "Pet health is poor, go check up with the vet."
    } else {
        let added;
        if (gold >= 2 && happiness <= 95) {
            let chance = Math.random();
    
            if (chance <= 0.3) {
                gold -= 2;
                goldStat.innerHTML = gold;
                happiness += 5;
                happStat.innerHTML = happiness;
                added = "You bought a toy for the pet. Increased 5 happines but spended 2 gold.";
            } else {
                added = '';
            }
        }

        health -= 5;
        hpStat.innerHTML = health;
        energy -= 15;
        energyStat.innerHTML = energy;
        happiness += 10;
        happStat.innerHTML = happiness;
        hunger += 10;
        hungerStat.innerHTML = hunger;
        textInfo.innerHTML = `${added} Played with your pet. Gained 10 happiness, decreased 15 energy, 5 health points and increased hunger by 10.`
    } 
}

function rest () {
    if (energy + 15 > 100) {
        textInfo.innerHTML = "Your pet is still full of energy, why dont play with pet?"
    } else {
        if (hunger < 50) {
            hunger -= 5;
            hungerStat.innerHTML = hunger;
            textInfo.innerHTML = "Pet is hungry, doesnt want to rest."
        } 

        energy += 15;
        energyStat.innerHTML = energy;
        textInfo.innerHTML = "After rest, your pet recovered some energy."
    }    
}

function checkUp () {
    if (gold < 20) {
        textInfo.innerHTML = "You do not have enough gold to go to the vet."
    } else if (health > 70) {
        textInfo.innerHTML = "Pet is still healthy.";
    } else {
        gold -= 20;
        goldStat.innerHTML = gold;
        health = Math.floor((health / 2));
        hpStat.innerHTML = health;
        textInfo.innerHTML = "You went to the vet for 20 gold";
    }
}

function gameOver () {
    if (health < 5) {
        alert('PET DIED, you did not take good care of pet...')
        return true;
    } else if (energy < 5) {
        alert('PET DIED, you did not take good care of pet...')
        return true;
    } else if (hunger > 90) {
        alert('PET DIED, you did not take good care of pet...')
        return true;
    } else {
        return false;
    }
}

function restart () {
    health = 100;
    energy = 100;
    gold = gold;
    happiness = 50;
    hunger = 50;
    age = 1;
    hpStat.innerHTML = health;
    energyStat.innerHTML = energy;
    goldStat.innerHTML = gold;
    happStat.innerHTML = happiness;
    hungerStat.innerHTML = hunger;
    ageStat.innerHTML = age;
}

function sleep () {
    age += 1;
    health -= 2;
    energy -= 15;
    hunger += 20;
    happiness -= Math.floor((happiness / 2));
    if (gameOver()) {
        restart();
    }
    ageStat.innerHTML = age;
    hpStat.innerHTML = health;
    energyStat.innerHTML = energy;
    hungerStat.innerHTML = hunger;
    happStat.innerHTML = happiness;

    let randomNum = Math.random();
    let goldGain;
    let issues = [];

    if (randomNum >= 0 && randomNum < 0.1) {
        gold += 30;
        goldStat.innerHTML = gold;
        goldGain = "You worked hard and gained a 30 golds. You came home with your pet waiting for you."
    } else if (randomNum >= 0.1 && randomNum < 0.4) {
        gold += 7;
        gold.innerHTML = gold;
        goldGain = "You worked hard and gained a 30 golds! You came home with your pet waiting for you."
    } else if (randomNum >= 0.3 && randomNum < 0.7) {
        gold += 10;
        gold.innerHTML = gold;
        goldGain = "You worked hard and gained a 30 golds! You came home with your pet waiting for you."
    } else {
        gold += 12;
        goldStat.innerHTML = gold;
        goldGain = "You worked hard and gained a 30 golds! You came home with your pet waiting for you."
    }

    if (health < 40) {
        issues.push('Time for a check up it seems... ');
    }
    if (energy < 40) {
        issues.push('Pet is not that energetic now, lets get some rest. ');
    } 
    if (happiness < 20) {
        issues.push('Lets play with pet. ');
    }
    if (hunger < 30) {
        issues.push('Pet is hungry! ');
    }

    textInfo.innerHTML = `${goldGain} ${issues}`
}
