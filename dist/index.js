"use strict";
// 
let id = 5;
let company = 'Manh An';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4];
let ar = [1, true, 'Hello'];
//Tuple--specify exact type in array
let person = [1, 'an', true];
//Tuple array
let employee;
employee = [
    [1, 'an'],
    [2, 'an2'],
    [3, 'an3'],
];
//Union-- if you want a particular variable to be able to hold more than one type
let pid;
pid = 23;
//Enum basically allow us to define a set of named constant either numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
//Type Assertion is explicitly telling the complier that we want to treat an entity  as a different type
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//Function
function addNum(x, y) {
    return x + y;
}
//void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const an = new Person(1, 'An');
//Subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(2, 'an', 'developer');
//Generics basically used for build reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['a', 'b', 'c']);
