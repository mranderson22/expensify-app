// const person = {
//   name: 'Andrew',
//   age: 31,
//   location: { 
//   city: 'Charlotte',
//   temp: 92
//   }
// };

// const { name: firstname = 'anonymous', age } = person;
// const { city, temp } = person.location;

// console.log(`${firstname} is ${age}.`);

// console.log(`It's ${temp} in ${city}.`);

// const book = {
//   title: 'Leviathan Wakes',
//   author: 'James Corey',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//Array Destructuring

// const address = ['14928 Jerpoint Abby Drive', 'Charlotte', 'NC', '14928'];

// const [, city, state = 'Greenville'] = address;

// console.log(`You are in ${city}, ${state}`)

const item = ['latte (hot)', '$3.00', '$3.50', '$4.25'];

const [type, small, medium, large] = item;

console.log(`A medium ${type} costs ${medium}`);



