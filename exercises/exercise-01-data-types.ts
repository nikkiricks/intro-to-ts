/**
 * Exercise 1: annotate data types such as string, date, number and array
 */

const firstName = "John";
// string
const lastName = "Doe";
// string
const age = 18;
// number
const gender = "male";
// string
const birthday = new Date(1991, 11, 25);
// date
const yearsOfExperience = "5";
// string
const profession = "Web Developer";
// string
const languages = ["JavaScript", "NodeJS", "TypeScript"];
// array
const frameworks = Array("React", "Vue", "Angular");
// array
const address: Address = {
  street: "123 George St",
  suburb: "Sydney",
  postcode: 2000,
  state: "NSW",
  country: "Australia",
};
// object
const isEmployee = true;
// bollean
interface Address {
  street: string;
  suburb: string;
  postcode: number;
  state: string;
  country: string;
}
// object
