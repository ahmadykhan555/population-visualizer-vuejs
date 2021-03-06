import mapbox from "mapbox-gl";
import { mapboxSecretToken } from "../../secrets/mapbox";
mapbox.accessToken = mapboxSecretToken;

export const mapInit = (containerId) => {
  if (!mapbox.accessToken || !containerId) {
    return null;
  }

  const map = new mapbox.Map({
    container: containerId,
    style: "mapbox://styles/mapbox/light-v10",
  });
  return map;
};
