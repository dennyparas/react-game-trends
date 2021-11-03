import { FC, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GoSearch, GoThreeBars } from "react-icons/go";
import { useHistory } from "react-router-dom";

const Navbar: FC = () => {
  let history = useHistory();
  const queryParams = useLocation().search;

  const searchTermQuery = new URLSearchParams(queryParams).get("search") || "";

  const [navbarOpen, setNavbarOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState(searchTermQuery || "");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const searchTermQuery = searchTerm !== "" ? `search=${searchTerm}` : "";
      history.push(`/games?${searchTermQuery}`);
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-1 bg-gradient-to-r from-green-500 to-indigo-800  mb-3">
      <div className="container mx-auto flex flex-wrap items-center ">
        <div className="w-full relative flex justify-between lg:w-auto flex-grow ">
          <NavLink
            to="/"
            className="flex text-md font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-white"
          >
            Game Trends
          </NavLink>
          <div className="relative  justify-center sm:mr-4 flex items-center my-1 rounded-lg focus-within:shadow-lg bg-white overflow-hidden ">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <GoSearch className="h-6 w-6" />
            </div>

            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-transparent h-full w-full  focus:outline-none outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
            />
          </div>
          <button
            className="flex text-white cursor-pointer leading-none pl-3 pr-1 pt-2 border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <GoThreeBars className="text-2xl " />
          </button>
        </div>

        <div
          className={
            "lg:flex items-center" + (navbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <NavLink
                to="/games"
                activeClassName="font-bold"
                className="px-3 py-2 flex items-center text-xs uppercase font-normal leading-snug text-white hover:opacity-75"
              >
                Browse Games
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/platforms"
                activeClassName="font-bold"
                className="px-3 py-2 flex items-center text-xs uppercase font-normal leading-snug text-white hover:opacity-75"
              >
                Platforms
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/genres"
                activeClassName="font-bold"
                className="px-3 py-2 flex items-center text-xs uppercase font-normal leading-snug text-white hover:opacity-75"
              >
                Genres
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/tags"
                activeClassName="font-bold"
                className="px-3 py-2 flex items-center text-xs uppercase font-normal leading-snug text-white hover:opacity-75"
              >
                Tags
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/developers"
                activeClassName="font-bold"
                className="px-3 py-2 flex items-center text-xs uppercase font-normal leading-snug text-white  hover:opacity-75"
              >
                Developers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/publishers"
                activeClassName="font-bold"
                className="px-3 py-2 flex items-center text-xs uppercase font-normal leading-snug text-white hover:opacity-75"
              >
                Publishers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/stores"
                activeClassName="font-bold"
                className="px-3 py-2 flex items-center text-xs uppercase font-normal leading-snug text-white hover:opacity-75"
              >
                Stores
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
