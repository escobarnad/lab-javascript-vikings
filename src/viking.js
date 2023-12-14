// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        } 
    }
}

// War
class War {
    vikingArmy = []
    saxonArmy = []
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomIndexViking]
        
        let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomIndexSaxon]

        let randomVikingStrength = randomViking.attack()
        const responseFromAttack =  randomSaxon.receiveDamage(randomVikingStrength)
        if (randomSaxon.health <= 0){
            this.saxonArmy.pop(randomSaxon)
        }
        return responseFromAttack
    }

    saxonAttack(){
        let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomIndexViking]
        
        let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomIndexSaxon]

        let randomSaxonStrength = randomSaxon.attack()
        const responseFromAttack = randomViking.receiveDamage(randomSaxonStrength)
        if(randomViking.health <= 0){
            this.vikingArmy.pop(randomViking)
        }
        return responseFromAttack
    }

    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0){
           return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
