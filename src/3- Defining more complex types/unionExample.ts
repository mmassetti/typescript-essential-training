type ConctactName6 = string;

//Eg 1: Allowing multiple types with the pipe operator ( | )
interface Contact6 {
  id: number;
  name: ConctactName6;
  birthdayDate?: Date | string | number;
}

//Use these type as an alias
type ContactBirthdayDate = Date | string | number;

interface Contact7 {
  id: number;
  name: ConctactName6;
  birthdayDate?: ContactBirthdayDate;
}

//Eg 2: Extendind behavior with the & operator
interface Address7 {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalCode: string;
}

type AddressableContact = Contact7 & Address7;

//Eg 3: An alternative to ENUM values

/*
Before:

enum ContactStatus {
  Active,
  Inactive,
  New,
}

*/

type ContactStatus7 = "active" | "inactive" | "new";

//usage: status: ContactStatus7
