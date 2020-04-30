const axios = require("axios");

const getConvidInfo = new Promise((resolve, reject) => {
  axios
    .get("https://covid19.mathdro.id/api")
    .then((result) => resolve(result.data))
    .catch((err) => reject(err));
});

const getCovidData = async () => {
  const data = await getConvidInfo;
  console.log(data);
};

getCovidData();
