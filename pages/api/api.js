// export const getCuratedPhotos = async () => {

export const getCurateData = async () => {
  const res = await fetch(`https://restcountries.com/v2/all`);
  const responseJson = await res.json();
  return { allData: responseJson };
};

export const getCountryDataByName = async (name) => {
  // const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const res = await fetch(`https://restcountries.com/v2/alpha/${name}`);

  const responseJson = await res.json();
  return responseJson;
};
