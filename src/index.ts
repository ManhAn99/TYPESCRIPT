// 
let id: number = 5
let company : string = 'Manh An'
let isPublished : boolean = true
let x : any = 'Hello'

let ids: number[] = [1,2,3,4]
let ar: any[] = [1,true, 'Hello']

//Tuple--specify exact type in array
let person: [number,string,boolean] = [1,'an',true]

//Tuple array
let employee : [number,string][]

employee = [
    [1,'an'],
    [2,'an2'],
    [3,'an3'],
]

//Union-- if you want a particular variable to be able to hold more than one type

let pid : string | number 
pid = 23

//Enum basically allow us to define a set of named constant either numeric or string

enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

//Objects
type User = {
    id : number,
    name : string
}

const user : User = {
    id : 1,
    name : 'John'
}

//Type Assertion is explicitly telling the complier that we want to treat an entity  as a different type

let cid: any = 1;

// let customerId = <number>cid
let customerId = cid as number

//Function
function addNum (x: number,y:number): number {
    return x +y
}

//void
function log(message: string | number): void {
  console.log(message)
}

//Interfaces: is kind of like a custom type or a specific structure to an object or a function 

interface UserInterface  {
   readonly id : number,
    name : string,
    age? : number
}

const user1 : UserInterface = {
    id : 1,
    name : 'John'
}

interface  MathFunc {
    (x : number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x +y
const sub: MathFunc = (x: number, y: number): number => x -y


interface PersonInterface  {
     id : number,
     name : string,
     register() : string
 }

//Classes
class Person implements PersonInterface  {
    id : number
    name : string

    constructor(id : number, name : string) {
     this.id = id;
     this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const an = new Person(1,'An')

//Subclass
class Employee extends Person{
    position : string

    constructor(id : number,name : string, position : string) {
      super(id,name)
      this.position = position;
    }
}

const emp = new Employee(2,'an','developer')

//Generics basically used for build reusable components

function getArray<T>(items : T[]) : T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['a', 'b', 'c'])




