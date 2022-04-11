type Staff = {
  name: string;
  salary: number;
};

type staffKeys = keyof Staff; // "name" | "salary"

//Using it to restrict function values
function getValue<T, U extends keyof T>(source: T, propertyName: U) {
  return source[propertyName];
}

const value = getValue({ min: 1, max: 5 }, "min");
