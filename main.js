// alert("hello from JS");

// console.log("hi");

// console.error("this is an error");

// console.warn("This is a warning");

// let age =10;
// age=12;
// console.log(age);

// const age =10;
// console.log(age);

 // const name ="gaya";
 // const age=10;
// const rating = 1.5;
// const is_handsome= true;
// const vada= undefined;
// let gonga;
//
// console.log(typeof(name));

//console.log("this is "+name+" and my age is "+age);
// const hello=`this is ${name} and my age is ${age}`;
// console.log(hello.split(' '));

// const fruits =['apple','oranges','strawberry'];
// console.log(fruits);

// const fruits =new Array('apple','oranges','strawberry');
// console.log(fruits);

// fruits[3]='banana';
// console.log(fruits);

// const person ={
//   firstName :"Gayaprashad",
//   lastName : "Saravanabhavan",
//   age       : 25,
//   hobbies   :['Reading','Blogging'],
//   address   :{
//     street  :"V.P colony extension",
//     city    :"chennai",
//     state   :"tamilnadu"
//   }
// };
//
// person.email ="gayaprashad.s@gmail.com";
// console.log(person);

const todos =[
  { id: 1,
    text : "wash dishes",
    isCompleted :true
  },
  { id :2,
    text : "learn to programme",
    isCompleted : false
  },
  { id: 3,
    text :  "help mummy",
    isCompleted : true
  }
];

// console.log(todos[1].text);

// const todosJSON = JSON.stringify(todos);
// console.log(JSON.stringify(todos));

// for (let i=0;i<10 ; i++){
//   console.log(i);
// }

// for (let i=0;i<todos.length ; i++){
//   console.log(todos[i].id);
//   console.log(todos[i].text);
//   console.log(todos[i].isCompleted);
// }

// for (let todo of todos){
//     console.log(todo.id);
//     console.log(todo.text);
//     console.log(todo.isCompleted);
// };

// todos.forEach (function(todo){
//   console.log(todo.text);
// });

// let list = todos.map (function(todo){
//   return todo.isCompleted ;
// });
//
// console.log(list);

//3-17

// let correct = todos.filter (function(todo){
//   return todo.isCompleted === true ;
// }).map(function(todo){
//   return todo.text;
// });
//
// console.log(correct);


// const a=10;
// if (a>10 && a<15){
//   console.log("The number is between 10 and 15");
// }else{
//   console.log("The number is not between 10 and 15");
// }

//4-4

// let a =10
// let color = (a<11)? "red":"blue";
// console.log(color);
//
// switch (color){
//   case 'red':
//     console.log("It is red color");
//     break;
//   case 'blue':
//     console.log("It is blue color");
//     break;
//   default:
//     console.log("It is neither red nor blue color");
//     break;
// }

// 4-5

// function addNum(a,  b){
//   return a+b;
// }
// console.log(addNum(5,4));

// addNum= (a,b) => {return a+b};
//
// console.log(addNum(5,4));

//5-2,3
// function Person (firstName, lastName, dob){
//   this.firstName =firstName;
//   this.secondName=lastName;
//   this.dob = new Date(dob);
    // this.getBirthYear = function (){
    //   return this.dob.getFullYear();
    // }
    // this.getFullName = function() {
    //     return `${this.firstName} ${this.secondName}`;
    // }
// }
// const a =new Person('Gayaprashad','Saravanabhavan','4-4-1990');
// const b =new Person('John','doe','5-12-2012');
//
// console.log(a.getFullName());

//5-5
// function Person (firstName, lastName, dob){
//   this.firstName =firstName;
//   this.secondName=lastName;
//   this.dob = new Date(dob);
// }
//
// Person.prototype.getBirthYear = function (){
//   return this.dob.getFullYear();
// }
//
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.secondName}`;
// }
// const a =new Person('Gayaprashad','Saravanabhavan','4-4-1990');
// const b =new Person('John','doe','5-12-2012');
//
// console.log(a.getFullName());

// class person{
//   constructor(firstName,lastName,dob){
//     this.firstName= firstName;
//     this.lastName=lastName;
//     this.dob= new Date(dob);
//   }
//
//   getBirthYear(){
//     return this.dob.getFullYear();
//   }
//
//   getFullName(){
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
//
// const a =new person('Gayaprashad','Saravanabhavan','4-4-1990');
// const b =new person('John','doe','5-12-2012');
//
// console.log(a);

// const id= document.getElementById('my-form');
// console.log(id);

// const id= document.querySelectorAll('.items');
// console.log(id);

// console.log(id);
// for(i=0;i<id.length;i++){
//   console.log(id[i]);
// }

const  form =document.querySelector("#my-form");
const nameInput= document.querySelector("#name");
const emailInput =document.querySelector("#email");
const msg= document.querySelector(".msg");
const usr = document.querySelector("#users");

form.addEventListener('submit', onSubmit);

function onSubmit(event){
  event.preventDefault();
  if (nameInput.value === '' || emailInput.value ===''){
    msg.classList.add("error");
    msg.innerHTML= "<h3>Please enter all the fields</h3>";

    setTimeout( ()=>{ msg.remove()}, 3000);
  }
  else{
    
  }
}
