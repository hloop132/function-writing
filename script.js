//function declaration
//start with function, then the function name(this could be anything), then parantacies, curly brackets for the code block, you write the function code in the curly brackets, out side of curly brackets call the cuntion with the name and parentacies
//***you can hoist a function declaration,cannot be dont with function expression it can be put onywhere on the page below it being called 
//ex: greet();
//then function greet(){.....} ****/
function greet() {
    console.log("you got this");
}
greet();


//function expression
//this is the better way to write functions
//start with defining a variable const or let then name it (this could be anything), = function () { code block goes here };
//call function with what you named it ();
const speak = function () {
    console.log("you can do it");
};
speak();

//function expression with parameters adn arguments
//start with defininging the variable and then naming the parameter, then call the fucntions argument. the parameter adn argument must be in the same order so name must come firast and time 2nd and so on
const say = function (name, time){
    console.log(`${name} good ${time}`);
};
say('heather','afternoon')

//returnig values
//with a function expression with the const variable = function(name){
//create a new variable let name = to what you are doing with function;
//return new variable (let);
//}
//make 2nd varible name(let) = 1st variable name(const);
//console.log()
const calcArea = function (radius){
    let area = 3.14 * radius **2;
    return area;
}
const newArea = calcArea(5);
console.log(newArea)
//Arrow Functions of this same function above 
// const calcArea = radius => 3.14 * radius**2;
// const area = calcArea(5);
// console.log('area is:' , area);

//for loop with function expression
const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log(bill([10,15,30], 0.2));

////////////////////////////////////
const name = 'lucipur'

const meet = function (){
    console.log("hello")
}
meet();

//methods
//is dot notation and defined on data types or objects or strings
//methods are fucntions defined and called in a different way
let resultTwo = name.toUpperCase();
console.log(resultTwo)

//callback functions
//call back functions are when functions are passed in as arguements instead of "strings"
const myFunc = function(callbackFunc){
    let value = 50; 
    callbackFunc(value)
}
myFunc(function(value){
    //its doing somthing
    console.log(value);
});

//for loop function (for.each is the short cut ) HAD TROUBLE WRITING THIS AS A FUNC EXPRESS?
// const person = function(logPerson){
// let people = ['mario', 'luigi', 'ryu', 'shuan', 'woody'];
// for (let i = 0; i < logPerson.length; i++) {
           
// }
// const callback(people)
// }
//     person(function(people){

//     }


//     console.log();
    
const ul = document.querySelector('.people');

const people = ['woody', 'meenha', 'lucipur', 'maggie', 'josh'];

let html = ``;

for (let i = 0; i < people.length; i++) {
    //create html template 
html += `<li style= "color: purple">${people}</li>`
    
};
console.log(html);
ul.innerHTML = html;
//how to get it so its each person name??