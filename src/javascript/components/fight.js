import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over
    const healthFirstFighter = firstFighter.health;
    const healthSecondFighter = secondFighter.health;
    const leftHealthBar = document.getElementById("left-fighter-indicator");
    const rightHealthBar = document.getElementById("right-fighter-indicator");

    
    
    // console.log(firstFighter)
    // console.log(secondFighter)

    document.addEventListener('keypress', (event) => {
      const keyName = event.key;
      let currentHealthFirst = healthFirstFighter;
      let currentHealthSecond = healthSecondFighter;
    
      if (keyName == 'A' || keyName == 'a') {
        currentHealthSecond = currentHealthSecond - getDamage(firstFighter, secondFighter);
        
        // console.log(currentHealthFirst);
        // console.log(getDamage(firstFighter, secondFighter))
        // updateHealth(currentHealthFirst, currentHealthSecond);
        
      }

      if (keyName == 'J' || keyName == 'j') {
        currentHealthFirst = currentHealthFirst - getDamage(firstFighter, secondFighter);
        // updateHealth(currentHealthFirst, currentHealthSecond);
      }

      leftHealthBar.style.width = `${healthFirstFighter / currentHealthFirst * 100}%`;
      rightHealthBar.style.width = `${healthSecondFighter / currentHealthSecond * 100}%`;
    });
  });
}

function updateHealth(healthFirstFighter, healthSecondFighter) {


  
}

// function updateHealthBar(fighter, newHealth) {
//   const healthBar = document.getElementById("left-fighter-indicator");
//   const health = fighter.health;
//   const newHealth = health - damage;
//   healthBar.style.width = `${health / newHealth * 100}%`;
//   console.log(newHealth);

//   return newHealth;
// }

export function getDamage(attacker, defender) {
  // return damage
  const damageAdded = getHitPower(attacker) - getBlockPower(defender);
  // console.log(damageAdded)
  return damageAdded;
}

export function getHitPower(fighter) {
  // return hit power
  // console.log(fighter.attack)
  return fighter.attack * (Math.random() + 1);
  
}

export function getBlockPower(fighter) {
  // return block power
  // console.log(fighter.defense)
  return fighter.defense * (Math.random() + 1);
  
}


