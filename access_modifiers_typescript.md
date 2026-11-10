**Access Modifiers In TypeScript OOP**

**Introduction**

Access modifiers control how class properties and methods can be accessed or changed in TypeScript. It help protect data and organize object oriented code. TypeScript provides public, private, protected and readonly.Each with different purpose.

**Detailed Explanation:**

- **public**: public is a default access level .A public property or method can be accessed from inside and outside the class. Example:

class Person{

    public name ="Alex";

}

const person = new Person();

console.log(person.name);

**output:**

<!-- Alex -->

**private**: A private member can only be accessed inside the class where it is declared. It can not be accessed directly from outside or by subclass.

Class BankAccount {

    Private balance = 1000;

showBalance(){

    return this.balance;

}

}

To reach private property need to use showBalace() method .Directly access outside the class is not possible.

**protected**: A protected member is accessible inside its class and its subclasses,but not directly from outside.

Class Animal {

    protected sound = "some sound";

}

Class Dog extends Animal{

    makesound(){

        return this.sound;

    }

}

**readonly:** A readonly property can be assigned when declared, but it cannot be reassigned afterward.

Class Product{  
    readonly id:number;

    constructor(id:number){

        this.id=id;

    }

}

**Conclusion**

Use public for members that should be openly accessible, private for internal class details, protected when subclasses need access, and readonly for value that should not be reassigned after initialization. These modifiers make TypeScript more safer and easier to maintain.