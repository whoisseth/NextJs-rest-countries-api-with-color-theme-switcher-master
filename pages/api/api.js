const path = "https://restcountries.com/v2";

export const getCurateData = async () => {
  const res = await fetch(`${path}/all`);
  const responseJson = await res.json();
  return { allData: responseJson };
};

export const getCountryDataByName = async (name) => {
  const res = await fetch(`${path}/alpha/${name}`);
  const responseJson = await res.json();
  return responseJson;
};
