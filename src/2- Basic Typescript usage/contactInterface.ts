//Creating custom types with interfaces

interface Contact2 extends Address {
  id: number;
  name: string;
  birthDate: Date;
  optionalField?: string;
}

interface Address {
  line1: string;
  line2: string;
  province: string;
  region?: string;
  postalCode: string;
}

let primaryContact: Contact2 = {
  birthDate: new Date("01-01-1980"),
  id: 12345,
  name: "Jamie Johnson",
  line1: "Av Colon",
  line2: "80",
  province: "Buenos Aires",
  postalCode: "8000",
};

//Defining types using type aliases (semantic meanin)
type ConctactName = string;

//Defining enumerable types
enum ContactStatus {
  Active,
  Inactive,
  New,
}

interface Contact2WithAlias {
  id: number;
  name: ConctactName;
  birthDate: Date;
  status: ContactStatus;
}

let otherContact: Contact2WithAlias = {
  birthDate: new Date("01-01-1980"),
  id: 12345,
  name: "Jamie Johnson",
  status: ContactStatus.Active,
};
