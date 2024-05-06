import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import {
  IoLocationOutline,
  IoSearchOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import Button from "../components/Button";
import MedicalCenter from "../components/MedicalCenter";
import { useSnackbar } from "notistack";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState(location.state.state);
  const [city, setCity] = useState(location.state.city);
  const [stateData, setStateData] = useState([]);
  const [cities, setCities] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states").then(async (res) => {
      setStateData(await res.json());
    });
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      const res = await fetch(
        `https://meddata-backend.onrender.com/cities/${state}`
      );
      const data = await res.json();
      setCities(data);
    };

    fetchCities();
  }, [state]);



  useEffect(() => {
    if (location.state) {
      const fetcheResults = async () => {
        const res = await fetch(
          `https://meddata-backend.onrender.com/data?state=${location.state.state}&city=${location.state.city}`
        );

        const data = await res.json();
        setResults(data);
      };

      fetcheResults();
    }
  }, [location.state]);

  const handleSearch = async () => {
    if (!state) {
      enqueueSnackbar("Please select your state", { variant: "error" });
      return;
    }

    if (!city) {
      enqueueSnackbar("Please select your city", { variant: "error" });
      return;
    }

    const res = await fetch(
      `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
    );

    const data = await res.json();
    setResults(data);
    delete location.state.state;
    delete location.state.city;
  };


  return (
    <>
      <div className="h-24 bg-primary w-full rounded-b-2xl"></div>
      <div className="max-w-5xl w-full p-6 -mt-14 bg-white shadow-lg rounded-3xl mx-auto flex gap-8">
        <SearchInput
          placeholder="State"
          icon={IoLocationOutline}
          value={state}
          onChange={setState}
          options={stateData}
        />
        <SearchInput
          placeholder="City"
          icon={IoLocationOutline}
          value={city}
          onChange={setCity}
          options={cities}
        />
        <Button icon={IoSearchOutline} label="Search" onClick={handleSearch} />
      </div>

      <section className="py-12 container">
        <div>
          <h4 className="text-2xl text-black font-semibold mb-2">
            {results?.length} medical centers available in {state}
          </h4>
          <div className="flex items-center gap-4 text-[#787887]">
            <IoCheckmarkCircleOutline size={24} />
            <p className="text-lg">
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </div>
        </div>

        <div className="my-8 mt-16 flex lg:flex-row flex-col gap-8">
          <div className="flex-1">
            {results &&
              results?.map((result, i) => {
                return <MedicalCenter key={i} data={result} />;
              })}
          </div>

          <div className="w-[363px] max-h-max"></div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
