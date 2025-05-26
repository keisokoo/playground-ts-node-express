function a<T>(a: T): T {
  return a;
}

a<string>("hello");
a<number>(1);
a<boolean>(true);

const foo = {
  name: "John",
  age: 30,
  stack: ["Figma", "Go", "React"],
};

const foo2 = {
  name: "James",
  age: 21,
  stack: ["JavaScript", "TypeScript"],
};

type Foo = {
  name: string;
  age: number;
  stack: string[];
};

function bar1<T extends Foo>(c: T["stack"][number]) {
  return c;
}

function bar2<T extends Foo>(b: T, c: T["stack"][number]) {
  return c;
}
function bar3<T extends Foo>(b: T, c: keyof T) {
  return b[c];
}

const result = bar3(foo, "name");

bar1<typeof foo>("Go");

bar2(foo, "Go");
