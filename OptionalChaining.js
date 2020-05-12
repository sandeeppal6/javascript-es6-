const person = {
  name: "sandeep",
  email: "sandeep.pal@gmail.com",
  contact: {
    mobile: 7895645621,
    landLine: "011 - 4562389",
  },
  address: {
    perset: {},
    current: {},
  },
};

const address = person && person.address;
// person.address.current &&
// person.address.current.city;

// console.log(city);

// const address = person?.address && "no address filed assosieted";

console.log(address && Object.keys(address));
// console.log(person?.address?.current?.city);
