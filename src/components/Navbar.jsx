import { Link, useLocation, useNavigate } from "react-router-dom";
import { facilities, links } from "../constants";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import Button from "./Button";
import { IoSearchOutline } from "react-icons/io5";
import { useSnackbar } from "notistack";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [state, setState] = useState();
  const [city, setCity] = useState("");
  const [stateData, setStateData] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectFacility, setSelectFacility] = useState("");
  const navigate = useNavigate();

  const toggleOpen = () => setOpen((prevState) => !prevState);

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

  const handleSearch = async () => {
    if (!state) {
      enqueueSnackbar("Please select your state", { variant: "error" });
      return;
    }

    if (!city) {
      enqueueSnackbar("Please select your city", { variant: "error" });
      return;
    }

    navigate("/search", { state: { city, state } });
  };

  return (
    <header className="gradient relative">
      <div className="w-full py-3 bg-primary text-white flex items-center justify-center px-4">
        <span className="text-sm text-center">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </span>
      </div>

      <div className="container  flex items-center justify-between relative">
        <Link to="/">
          <img src="/images/logo.png" alt="logo" className="w-28" />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          <li
            className={`cursor-pointer py-7 ${
              pathname === "/search"
                ? "border-b-4 border-primary font-semibold text-primary"
                : ""
            }`}
          >
            <Link to="/search">Find Doctors</Link>
          </li>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  to={link.path}
                  className="capitalize font-medium hover:text-[#102851] transition"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <button className="bg-primary text-white  rounded-lg px-4 py-3 text-sm font-semibold">
            My Bookings
          </button>
        </ul>

        <button onClick={toggleOpen} className="lg:hidden block cursor-pointer">
          <HiOutlineMenuAlt3 size={24} />
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden block absolute left-0 right-0 top-16 border shadow-lg z-10 transition duration-300 bg-white p-4 ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-[900px]"
          }`}
        >
          <ul className="flex flex-col gap-6 h-auto">
            <li className="cursor-pointer list-none">Find Doctors</li>
            {links.map((link, index) => {
              return (
                <li key={index} className="list-none">
                  <Link
                    onClick={toggleOpen}
                    to={link.path}
                    className="capitalize font-medium hover:text-[#102851] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <button className="bg-primary text-white  rounded-lg px-4 py-3 text-sm font-semibold">
              My Bookings
            </button>
          </ul>
        </div>
      </div>

      {/* Banner */}
      {pathname === "/" && (
        <div>
          <div className="container py-10 flex lg:flex-row flex-col gap-10 items-center justify-center relative">
            <div className="lg:w-1/2 w-full space-y-3">
              <h3 className="sm:text-3xl text-2xl font-semibold">
                Skip the travel! Find Online
              </h3>
              <h1 className="sm:text-5xl text-4xl font-extrabold">
                Medical <span className="text-primary">Centers</span>
              </h1>

              <p className="text-[#5C6169] sm:text-xl text-lg md:w-[570px]">
                Connect instantly with a 24x7 specialist or choose to video
                visit a particular doctor.
              </p>
              <Button onClick={() => {}} label="Find Centers" />
            </div>

            <div className="lg:w-1/2 w-full">
              <img src="/images/hero.png" alt="hero" className="mx-auto" />
            </div>
          </div>

          <div className="container bg-white shadow-lg rounded-lg border border-[#F0F0F0] p-8">
            <div className="flex items-center sm:flex-row flex-col gap-8 max-w-[900px] mx-auto">
              <SearchInput
                placeholder="State"
                icon={IoSearchOutline}
                value={state}
                onChange={setState}
                options={stateData}
              />
              <SearchInput
                placeholder="City"
                icon={IoSearchOutline}
                value={city}
                onChange={setCity}
                options={cities}
              />
              <Button
                icon={IoSearchOutline}
                label="Search"
                onClick={handleSearch}
              />
            </div>

            <div className="mt-16 mb-10">
              <h2 className="text-xl text-center">You may be looking for</h2>

              <div className="mt-10 grid xl:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-4">
                {facilities.map((obj, index) => (
                  <div
                    onClick={() => setSelectFacility(obj.name)}
                    key={index}
                    className={`flex flex-col items-center justify-center gap-3 rounded-lg h-[153px] cursor-pointer ${
                      selectFacility === obj.name
                        ? "border border-primary bg-primary/20 text-primary font-semibold"
                        : "bg-white shadow border"
                    }`}
                  >
                    <img src={obj.image} alt={obj.name} className="" />
                    <h3
                      className={`text-lg ${
                        selectFacility === obj.name
                          ? "text-primary"
                          : "text-grayish"
                      } text-center`}
                    >
                      {obj.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

export const Search = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative border w-full border-gray-300 rounded-lg h-[50px]">
      <IoSearchOutline
        size={24}
        className="absolute top-1/2 -translate-y-1/2 left-2 text-[#9CA3AF]"
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="pl-10 pr-4 w-full placeholder:text-grayish rounded-lg text-sm h-full border-0 outline-0"
      />
    </div>
  );
};
