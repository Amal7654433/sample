// const numbers = [10, 20, 30, 40, 50];

// const found = numbers.map(function (element) {
//   return element *2
// });

// console.log(found); // Output: 30
// const a=["david",9,"kevin"]
// const b=[6,9,"batman"]
// const n=[...a,...b]
// console.log(n)

const persons = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 35 },
    { name: 'Charlie', age: 22 }
];
const found = [{...persons,name:"jawan"}]

console.log(found)

// const bel=persons.age<25
// // const bel = persons.filter((person, index) => index === 2);

//  console.log(bel)

// for (var i = 0; i < persons.length; i++) {
//     for (var j = i + 1; j < persons.length; j++) {
//         if (persons[i].age > persons[j].age) {
//             var temp = persons[j].age
//             persons[j].age = persons[i].age
//             persons[i].age = temp

//         }
//     }

// }
// for(i=0;i<persons.length;i++)
// console.log(persons[i].age)

// let smallestAge = persons[0].age; // Initialize with the age of the first person

// for (let i = 1; i < persons.length; i++) {
//     if (persons[i].age < smallestAge) {
//         smallestAge = persons[i].age;
//     }
// }

// console.log('The smallest age is:', smallestAge);
