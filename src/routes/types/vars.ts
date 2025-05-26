type User = {
  name: string;
  age: number;
};
interface User2 {
  name: string;
  age: number;
}

class User3 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user: User = {
  name: "John",
  age: 30,
};

const user2: User2 = {
  name: "John",
  age: 30,
};

const user3 = new User3("John", 30);

interface Human1 extends User {
  gender: "male";
}

type Human2 = User & {
  gender: "male";
};

class Human3 extends User3 {
  gender: "male";
  constructor(name: string, age: number, gender: "male") {
    super(name, age);
    this.gender = gender;
  }
}

const man: Human1 = {
  name: "John",
  age: 30,
  gender: "male",
};

const man2: Human2 = {
  name: "John",
  age: 30,
  gender: "male",
};

const man3 = new Human3("John", 30, "male");
