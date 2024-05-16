// const x: number = 1;
// console.log(x);

// function greet(firstname: string) {
//     console.log("Hello " + firstname);
// }

// greet("Saad")

// function sum(a: number, b: number): number {
//     return a + b; 
// }

// const value = sum(3, 5);
// console.log(value);

// function isLegal(age: number): boolean {
//     return age > 18 ? true : false;
// }

// const x = isLegal(19);
// console.log(x);

// function runAfter1S(fn: () => void) {
//     setTimeout(fn, 1000);
// }

// runAfter1S(() => {
//     console.log("Hello World!")
// })

// const greet = (name: string) => `Hello, ${name}!`;

// interface User {
//     firstName : string,
//     lastName : string,
//     age : number,
//     email? : string             // optional
// }

// function isLegal(user: User) {
//     return user.age > 18 ? true : false
// }

// console.log(isLegal({
//     firstName : "Muhammad",
//     lastName : "Saad",
//     age : 19
// }));

// type greetArg = number | string | boolean;

// function greet(id: greetArg) {

// }

// greet(1);
// greet("1");

function getFirstElement<T> (arr: T[]): T {
    return arr[0];
}

const el = getFirstElement(["saad", "ali", "ahmed"]);
el.toUpperCase();
console.log(el);