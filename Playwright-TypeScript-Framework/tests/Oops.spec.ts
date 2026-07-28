import { test } from "@playwright/test";
import * as inheritance from "../Oops/Inheritance.ts"
import * as polymorphism from "../Oops/Polymorphism.ts"
import * as abstraction from "../Oops/Abstarction.ts"
import * as encapsulation from "../Oops/Encapsulation.ts"



test('Inheritance', async () => {

    let dog = new inheritance.Dog();
    dog.bark();
    dog.eat();
    dog.shelter();// inheritance concept

});


test('Polymorphism', async () => {

    let dog = new polymorphism.Dog();
    dog.sound();// override these all methods 
    dog.move();
    dog.climb();
    dog.sleep();
    dog.eat();//Polymorphism

    let cat = new polymorphism.Cat();
    cat.sound();
    cat.move();
    cat.climb();
    cat.sleep();
    cat.eat();

});


test('Abstraction', async () => {

    const dog = new abstraction.Dog();

    dog.sound();
    dog.eat();
    dog.sleep();


});


test('Encapsulation', async () => {
    const emp = new encapsulation.Employee();
    let salary = emp.getSalary();
    console.log(salary);
    let password = emp.getPassword();
    console.log(password);

})

