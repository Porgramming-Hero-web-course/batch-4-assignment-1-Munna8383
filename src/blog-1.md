## -----Typescript-----
Typescript is a programming language developed by Microsoft. It is used in JavaScript to define types. It is always used in development mode to visualise the error while writing the code.

## -----Typescript Typescript-----
There are many types of typescripts like string, boolean, union, intersection, null, never, unknown etc. Today we will see about Union and Intersection.

## -----Union And Its Benefits-----

Union allows us to assign multiple types in single variable.Its specified using (|) symbol.It is used to manage complex object.
For example you have a object of a person with value id,name,age.
Here sometime id can be string or a number.So here you can handle it using Union.Check the code below:

type Person = {

    id:string|number;
    name:string;
    age:number;

}

const person:Person = {

    id:"A124"
    name:"munna",
    age:26
}

const person2:Person = {

    id:23,
    name:"Taher",
    age:22
}

Here we can see that we can assign both number and string in id with help of union.


## -----Intersection And Its Benefits-----

An Intersection is used combines the types into one types and used it in data.When a varibale is intersection type,you must have to give all the key.It denoted using (&) symbol.For example: you have two type of Person and Employee and you make its intersection between them and create a new type .In this time you have provide all the key that you assign in Person and Employee.Check the code below:

type Person = {

    id:number;
    name:string;

}

type Employee = {

    haveJob:boolean;
    email:string;

}

type EmployeeDetails = Person & Employee


const employeeDetails:EmployeeDetails = {

    id:23,
    name:"munna,
    haveJob:true,
    email:"some@gmail.com"

}

Here we can see that we need provide every key of Person and Employee type as we make intersection and create a new type.
