// A record is an alternative to the ANY type that it's more secure and elegant
let x: Record<string, string> = { name: "Wruce Bayne" };
//x.number = 1234; //throws error
x.name = "Test";
