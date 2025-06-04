import { useEffect, useState } from "react";
import { LOCATION_API_KEY } from "@env";
const useCountry = () => {
  const [countryInfo, setCountryInfo] = useState({ countryCode: "", city: "" });

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const url =
          "https://ipgeolocation.abstractapi.com/v1/?api_key=" +
          LOCATION_API_KEY +
          "&ip_address=142.126.159.63";

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCountryInfo({
          countryCode: data.country_code,
          city: data.city,
        });
      } catch (error) {
        console.error("Error fetching country info:", error);
      }
    };

    fetchCountryInfo();
  }, []);
  return countryInfo;
};
export default useCountry;
