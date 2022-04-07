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
