type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Adi',
  privilages: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Adi', 'Putra');
result.split(' ');

const fetchedUserData = {
  id: 'u1',
  name: 'adi',
  job: {
    title: 'insya Allah CTO',
    description: 'My own company',
  },
};

console.log(fetchedUserData?.job?.title);

const userInput = undefined;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);
//   if ('privilages' in emp) {
//     console.log('Privilages: ' + emp.privilages);
//   }
//   if ('startDate' in emp) {
//     console.log('Start Date: ' + emp.startDate);
//   }
// }

// printEmployeeInformation({ name: 'Adi', startDate: new Date() });

// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a truck...');
//   }

//   loadCargo(amount: number) {
//     console.log('Loading cargo ...' + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(313);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//   }
//   console.log('Moving at speed: ' + speed);
// }

// moveAnimal({ type: 'bird', flyingSpeed: 20 });

// const userInputElement = document.getElementById('user-input');

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'Hi There';
// }

// interface ErrorContainer {
//   //{email: 'Not a valid email', username: 'Must start with a capital character}
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: 'Not a valid email!',
//   username: 'Must start with a capital character',
// };
