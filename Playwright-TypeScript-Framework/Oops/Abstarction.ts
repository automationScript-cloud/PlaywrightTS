abstract class Animal {
    abstract sound(): void;
    abstract eat(): void;

    sleep() {
        console.log("Sleeping");
    }
}

export class Dog extends Animal {
    sound() {
        console.log("Bark");
    }
    eat() {
        console.log("Bread");
    }
}

