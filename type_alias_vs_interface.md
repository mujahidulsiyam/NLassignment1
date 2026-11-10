**Type Alias VS Interface in TypeScript and When to use Each**

**Introduction**

Type aliases and interfaces are two ways to describe the shape of data in TypeScript . They almost do similar type job ,but they have different capabilities which are useful in different situations.

**Detailed Explanation:**

An interface is mainly used to describe the structure of objects.For Example:

Interface User{

    Name:string;

    Age:number;

}

A type alias can describe and object too . For example:

type User ={

    name: string;

    age:number;

};

Interfaces support declaration merging.TypeScript combines multiple declaration.For Example: 

interface User{

    Name:string;

}

Interface User{

    Age:number;

}

But type alias cannot be redeclared with the same name . On the other hand type aliases are more flexible, they can represent unions, primitives, tuples and combinations of types. For example:

type Status ="loading" | "success" | "error";

type ID = string | number;

**Conclusion:**

Choose interface when describing object structures, and Choose type when program need unions,types,primitives,or more complex type combinations.For ordinary object definitions,either is Valid.