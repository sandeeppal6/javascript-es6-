const user = {
  firstName: "Sandeep",
  lastName: "Pal",
  getName: function () {
    return `Name: ${this.firstName} ${this.lastName}`;
  },
};

// add new properties
user.email = "sandeep.pal@gmail.com";

console.log(user.getName());
console.log(`Email: ${user.email}`);

// delete property
delete user.firstName;
console.log(user.firstName);

// create deep copy
const newUser1 = Object.assign({}, user);
// or
const newUser2 = { ...user };
console.log("Deep copy: ", newUser1, newUser2);

// create shallow copy
const newUser3 = user;
console.log("Shallow copy: ", newUser3);

// update object while creating deep copy
const newUser4 = Object.assign(user, {
  firstName: "Shrikant",
  mobile: 9879879875,
});
// or
const newUser5 = { ...user, firstName: "Shrikant", mobile: 9879879875 };
console.log("Deep copy: ", newUser4, newUser5);
