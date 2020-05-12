// ...

const x = [1, 2, 3];
const y = [4, 5, 6];

const z = [x, y];
const c = [...x, ...y]; // [1,2,3  4,5,6]
const a = { ...x, ...y }; // {"0": 1, "1": 2.....}

console.log(z);
console.log(c);
console.log(a);

const person = {
  name: "sandeep",
};

const newPerson = {
  ...person,
  email: "sandeep@gmail.com",
  name: "sandeep pal",
}; // deep-copy

console.log(newPerson);

const { email } = newPerson;
console.log(email);
