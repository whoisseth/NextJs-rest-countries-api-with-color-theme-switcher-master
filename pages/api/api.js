// export const getCuratedPhotos = async () => {

export const getCurateData = async () => {
  const res = await fetch(`https://restcountries.com/v2/all`);
  const responseJson = await res.json();
  return { allData: responseJson };
};
