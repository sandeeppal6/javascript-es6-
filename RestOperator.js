// const userData = (firstName, lastName, ...rest) => {
//   console.log(`Rest data: ${rest} `);
// };

// userData("sandeep", "pal", "sandeep.pal@gmail.com", 9879879875);

const getInfo = ({ city = "", pincode = 0, ...x }) => {
  console.log(x);
  return `city: ${city}, pincode: ${pincode}`;
};

// API endpoint
const person = {
  name: "sandeep",
  email: "sandeep@gmail.com",
  mobile: 78945679855,
  city: "pune",
  pincode: 456,
  exp: 789,
};

console.log(getInfo(person));
