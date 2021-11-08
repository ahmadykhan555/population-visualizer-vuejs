import { httpGET } from "./http";

export const fetchCountriesPopulationData = async () => {
  const { data } = await httpGET(
    "https://countriesnow.space/api/v0.1/countries/population"
  );
  return data;
};
