interface Contact3 {
  id: number;
  name: string;
}

//Eg #1: Typing functions: parameter and return type
function clone(source: Contact3): Contact3 {
  return Object.apply({}, source);
}

const a: Contact3 = { id: 123, name: "Homer Simpson" };
const b = clone(a);

//Eg #2: Function that receives another function
function clone2(
  func: (source: Contact3) => Contact3 //Look here
): Contact3 {
  //Do something.
  return;
}

//Eg #3: Add method to an interface
interface Contact4 {
  id: number;
  name: string;
  clone(name: string): Contact4; //Look here
}
