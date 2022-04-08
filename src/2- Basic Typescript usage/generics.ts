interface Contact5 {
  id: number;
  name: string;
}

//Eg 1 : Adding the same generic type 'T' to the parameter and to the return value
function clone3<T>(source: T): T {
  return Object.apply({}, source);
}

const c: Contact5 = { id: 123, name: "Homer Simpson" };
const d = clone3(c);

const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopy = clone3(dateRange);

//Eg 2 : Adding two generic types. One for the argument and other for the return type
function clone4<T1, T2>(source: T1): T2 {
  return Object.apply({}, source);
}

const e = clone4<Contact5, Date>(c);

//Eg 3: Restrict type
function clone<T1, T2 extends T1>(source: T1): T2 {
  return Object.apply({}, source);
}
