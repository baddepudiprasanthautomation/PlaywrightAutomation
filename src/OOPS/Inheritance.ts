
//Inheritance allows one class to acquire properties and methods from another class

class Animal
{
    eat()
    {
        console.log("Animal is eating");
    }
}

class Dog extends Animal
{
    bark()
    {
        console.log("Dog is barking");
    }
}

//creating object
//reference variabe =  object;
const dog = new Dog();
dog.bark();
dog.eat();