const axios = require("axios");

// clabback, promise creation, handling of promise with then-catch / async-await
const getConvidInfo = new Promise((resolve, reject) => {
  axios
    .get("https://covid19.mathdro.id/api")
    .then((result) => resolve(result.data))
    .catch((err) => reject(err));
});

// suupose
const getConvidInfo2 = (value) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://covid19.mathdro.id/api/${value}`)
      .then((result) => resolve(result.data))
      .catch((err) => reject(err));
  });
};

const getCovidData = async () => {
  const data = await getConvidInfo;
  const data2 = await getConvidInfo2(data.confirmed.value);

  console.log(data2);

  const res = {
    confirmed: data.confirmed.value,
    recovered: data.recovered.value,
    deaths: data.deaths.value,
  };
  console.log("Convid Current Data: ", res);
};

getCovidData();
