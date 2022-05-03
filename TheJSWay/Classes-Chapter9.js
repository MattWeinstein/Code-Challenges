// TODO: define the Dog class here

class Dog{
    constructor(name,species,size){
        this.name=name
        this.species=species
        this.size=size
    }
    bark(){
        if(this.size>60){
            console.log('Grrr! Grrr!')
        } else if(this.size<=60){
            console.log('Woof Woof!')
        }
    }
}


const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);


//---------- Account List ----------\\

class BankAccount{
    constructor(name,balance){
        this.name=name
        this.balance=balance
    }
    credit(moneyAdded){
        this.balance+=moneyAdded
    }
    describe(){
       console.log( `Owner: ${this.name} Balance: ${this.balance} `)
    }
}

const sean = new BankAccount('Sean',0)
const brad = new BankAccount('Brad',0)
const georges = new BankAccount('Georges',0)
let array =[sean,brad,georges]

array.forEach(element=> element.credit(1000))
array.forEach(element=> element.describe())

//---------- Understanding Object Oriented Programming ----------\\
class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.gold = gold
      this.key=key
      this.xp = 0; // XP is always zero for new characters
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          this.gold+=target.gold
          target.gold=0
          this.key+=target.key
          target.key=0
          const bonusXP = 10;
          console.log(
            `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.key} key(s) and ${target.gold} gold`
          );
          this.xp += bonusXP;
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength, ${this.xp} XP points, ${this.gold} gold and ${this.key} key(s)`;
    }
  }

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);
const monster = new Character("Spike", 40, 20);
