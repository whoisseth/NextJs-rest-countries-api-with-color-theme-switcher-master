const path = "https://restcountries.com/v3.1";
// const path = "https://restcountries.com/v2";
// const path = "https://restcountries.com/v3.1/name/peru";

export const apiData = async() => {
    const res = await fetch(`${path}/all`);
    // const res = await fetch(`https://restcountries.com/v3.1/all`);
    const responseJson = await res.json();
    return { allData: responseJson };
};

export const getCountryDataByName = async name => {
    const res = await fetch(`${path}/name/${name}`);
    const responseJson = await res.json();
    return responseJson;
};
export const getCountryLocation = async name => {
    const res = await fetch(pathLatLong);
    const responseJson = await res.json();
    return { allData: responseJson };
};

//