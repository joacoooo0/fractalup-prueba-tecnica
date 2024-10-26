import homeIcon from "../assets/home_icon.png";
import siteIcon from "../assets/site_icon.png";

import { getCountries } from "../api/graphql.ts";
import type { Country } from "../api/types.ts";
import { getCountryImage } from "../api/unsplash.ts";
import { getCountryFlag } from "../api/flags.ts";
import { useState } from "react";

//API GraphQL
const countries = await getCountries();
const countriesWithImages = await Promise.all(
  countries.map(async (country) => {
    const imageUrl =
      (await getCountryImage(country.name)) || "../assets/irlanda.jpg";
    const flagUrl =
      (await getCountryFlag(country.name)) || "../assets/irlanda.jpg";
    return { ...country, imageUrl, flagUrl };
  })
);

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const openModal = (country: Country) => setSelectedCountry(country);
  const closeModal = () => setSelectedCountry(null);

  return (
    <div>
      <main className="flex">
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform translate-x-0">
          <div className="h-full px-3 py-4 overflow-y-auto bg-[#1b1b1b]">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <img src={homeIcon} alt="homeicon" className="w-6" />
                  <span className="ms-3">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="/vista1"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <img src={siteIcon} alt="homeicon" className="w-6" />
                  <span className="ms-3">Vista 1</span>
                </a>
              </li>
              <li>
                <a
                  href="/vista2"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <img src={siteIcon} alt="homeicon" className="w-6" />
                  <span className="ms-3">Vista 2</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="ml-64 w-full h-full p-5">
          <form className="w-72 mb-10">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Busca un país"
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Buscar
              </button>
            </div>
          </form>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {countriesWithImages.map((country) => (
              <div
                key={country.name}
                className="2xl:w-80 w-auto h-auto bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <button onClick={() => openModal(country)} className="w-full">
                  <img
                    className="rounded-t-3xl w-full h-20 object-cover 2xl:h-40"
                    src={country.imageUrl}
                    alt={country.name}
                  />
                </button>

                <div className="p-5 flex">
                  <img
                    className="rounded-t-3xl w-[60px] h-auto"
                    src={country.flagUrl}
                    alt={country.name}
                    width="80px"
                    height="20px"
                  />
                  <span className="ml-5">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {country.name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {country.capital}
                    </p>
                  </span>
                </div>
              </div>
            ))}
          </section>
          {selectedCountry && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-96 dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedCountry.name}
                </h2>

                <img
                  src={selectedCountry.flagUrl}
                  alt="Flag"
                  className="my-4 w-full rounded-lg"
                />
                <p className=" text-blue-400 font-bold">
                  Capital:{" "}
                  <span className="text-white font-semibold">
                    {selectedCountry.capital}
                  </span>
                </p>
                <h2 className=" text-blue-400 font-bold">
                  Lenguaje:{" "}
                  <span className="text-white font-semibold">
                    {selectedCountry.languages[0]?.name || "No disponible"}
                  </span>
                </h2>
                <h2 className=" text-blue-400 font-bold">
                  Continente:{" "}
                  <span className="text-white font-semibold">
                    {selectedCountry.continent.name || "No disponible"}
                  </span>
                </h2>
                <button
                  onClick={closeModal}
                  className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
