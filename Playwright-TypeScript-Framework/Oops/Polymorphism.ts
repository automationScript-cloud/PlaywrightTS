export class Animal {
    eat() {
        console.log("Animal is eating");
    }

    sleep() {
        console.log("Animal is sleeping");
    }

    sound() {
        console.log("Animal makes a sound");
    }

    move() {
        console.log("Animal is moving");
    }

    climb() {
        console.log("Animal is climbing");
    }

}


export class Cat extends Animal {
    eat() {
        console.log("Cat is eating rat");
    }

    sound() {
        console.log("Cat meows");
    }

    move() {
        console.log("Cat walks silently");
    }

    sleep() {
        console.log("Cat is sleeping in house");
    }

    climb() {
        console.log("Cat climbs the tree");
    }
}


export class Dog extends Animal {
    eat() {
        console.log("Dog is eating meat");
    }

    sound() {
        console.log("Dog barks");
    }

    move() {
        console.log("Dog runs");
    }

    sleep() {
        console.log("Dog is sleeping on the road");
    }

    climb() {
        console.log("Dog climbs the peak of sand");
    }
}