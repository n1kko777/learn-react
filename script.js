// Task 1
const loop = (times = 0, callback = null) => {
  if (typeof callback == 'function') {
    for (let index = 0; index < times; index++) {
      callback(index);
    }
  } else {
    console.log('callback is null!');
  }
};

loop(3, console.log);
loop(3);

console.log('\n');
// Task 2
const calculateArea = (a, b) => {
  return {
    area: a * b,
    figure: 'rect',
    input: [a, b]
  }
};

const {
  area,
  figure,
  input
} = calculateArea(2, 3);
console.log(area, figure, input);

console.log('\n');
// Task 3
class Human {
  constructor(name, age, dateOfBirth) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }

  displayInfo() {
    console.log(this);
  }
}
class Employee extends Human {
  constructor(name, age, dateOfBirth, salary, department) {
    super(name, age, dateOfBirth);
    this.salary = salary;
    this.department = department;
  }
  displayInfo() {
    super.displayInfo();
  }
}
class Developer extends Employee {
  constructor(name, age, dateOfBirth, salary, department, manager) {
    super(name, age, dateOfBirth, salary, department);
    this.manager = manager;
  }

  setManager(manager) {
    if (this.manager !== undefined) {
      this.manager.removeDev(this);
    }
    this.manager = manager;
    this.manager.addDev(this);
  }
  displayInfo() {
    super.displayInfo();
  }
}
class Manager extends Employee {
  constructor(name, age, dateOfBirth, salary, department) {
    super(name, age, dateOfBirth, salary, department);
    this.devTeams = [];
  }
  addDev(developer) {
    this.devTeams.push(developer);
    developer.manager = this;
  }
  removeDev(developer) {
    if (this.devTeams.includes(developer)) {
      this.devTeams.splice(this.devTeams.indexOf(developer.name), 1);
      developer.manager = undefined;
    }
  }
  displayInfo() {
    super.displayInfo();
  }
}


// create
const hum = new Human('Nikita', 20, '24.06.1998');
const empl = new Employee('Nikita', 20, '24.06.1998', 50000, 'Frontend');
const dev = new Developer('Nikita', 20, '24.06.1998', 50000, 'Frontend');
const mn = new Manager('Ivan', 30, '22.06.1988', 30000, 'Frontend');
const newMn = new Manager('Petr', 25, '22.06.1992', 150000, 'Frontend');
// show
hum.displayInfo();
empl.displayInfo();
dev.displayInfo();
mn.displayInfo();
newMn.displayInfo();

// changes
mn.addDev(dev);
mn.removeDev(dev);

dev.setManager(newMn);


console.log('\n');
// Tsk 4
let promiseArray = [];

for (let i = 0; i < 10; i++) {
  promiseArray[i] = fetch(`https://jsonplaceholder.typicode.com/users/${i+1}`)
    .then(response => response.json());

}

Promise.all(promiseArray)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });