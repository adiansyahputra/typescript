// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'adi',
//   age: 21,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR',
}

const person = {
  name: 'adi',
  age: 21,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

// person.role.push('admin')
// person.role[1] = 10

// person.role = [0, 'admn', 'user']

let favoriteActivities: string[];
favoriteActivities = ['sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) !!! ERROR !!!
}
