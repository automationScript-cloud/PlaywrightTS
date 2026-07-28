export class Animal {
    eat() {
        console.log("Animal is eating");
    }

    shelter() {
        console.log("Animal is staying in street");
    }
}


export class Dog extends Animal {
  bark() {
    console.log("Barking");
  }
}


