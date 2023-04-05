class Character {
  constructor(name, lifePoints, attack, defense) {
    this.name = name;
    this.lifePoints = lifePoints;
    this.attack = attack;
    this.defense = defense;
  }

  toAttack(target) {
    target.lifePoints -= this.attack - target.defense;
    return target.lifePoints;
  }
}

class Thief extends Character {
  constructor(name, lifePoints, attack, defense) {
    super(name, lifePoints, attack, defense);
  }
  toAttack(target) {
    target.lifePoints -= (this.attack - target.defense) * 2;
    return target.lifePoints;
  }
}

class Mage extends Character {
  constructor(name, lifePoints, attack, defense, magic) {
    super(name, lifePoints, attack, defense);
    this.magic = magic;
  }

  toAttack(target) {
    target.lifePoints -= this.attack + this.magic - target.defense;
    return target.lifePoints;
  }

  heal(target) {
    target.lifePoints += 2 * this.magic;
    return target.lifePoints;
  }
}

class Warrior extends Character {
  constructor(name, lifePoints, attack, defense, shield, position) {
    super(name, lifePoints, attack, defense);
    this.shield = shield;
    this.position = "attacking";
  }

  toAttack(target) {
    if (this.position == "atacck") {
      target.lifePoints -= this.attack - target.defense;
      return target.lifePoints;
    } else {
      console.log("Posição de defesa, não é possível atacar!");
    }
  }

  switchStance() {
    if (this.position === "attacking") {
      this.position = "defending";
      this.defense += this.shield;
    } else {
      this.position = "attacking";
      this.defense -= this.shield;
    }
  }
}

const arthur = new Mage("Arthur", 90, 4, 2, 14);
const beatrice = new Thief("Beatrice", 140, 22, 8);
const cain = new Warrior("Cain", 200, 14, 12, 4);

console.table({ arthur, beatrice, cain });

cain.switchStance();
arthur.toAttack(cain);
beatrice.toAttack(arthur);

console.table({ arthur, beatrice, cain });

cain.toAttack(arthur);
arthur.heal(arthur);
beatrice.toAttack(cain);

console.table({ arthur, beatrice, cain });
