const userData = (firstName, lastName, ...rest) => {
  console.log(`Rest data: ${rest} `);
};

userData("sandeep", "pal", "sandeep.pal@gmail.com", 9879879875);
