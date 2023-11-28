import React, { useEffect, useState } from "react";
import { HAM_MENU, LOGO_URL, UTUBE_SEARCH_API } from "../utils/constants";
import img1 from "../images/notification.png";
import img2 from "../images/more.png";
import img3 from "../images/Jack.png";
import img4 from "../images/search.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import useSelection from "antd/es/table/hooks/useSelection";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  /*
  seachCache =[
    "iphone":["iphone11", "iphone12", "iphone13"]
  ]
  searchQuery ="iphone11"
  */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(UTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="flex items-center justify-between shadow-xl h-20">
        <div className="flex items-center">
          <img
            alt="ham"
            onClick={() => handleClick()}
            className="w-10 h-10 mx-5 hover:bg-gray-400 hover:rounded-full cursor-pointer"
            src={HAM_MENU}
          />
          <a href="/">
            <img alt="logo" className="w-32 cursor-pointer" src={LOGO_URL} />
          </a>
        </div>
        <div className="">
          <div className="flex items-center border-2 rounded-full py-2 px-6">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              type="text"
              className="w-[600px] outline-none"
              placeholder="Search"
            />
            <img src={img4} className="cursor-pointer w-5" alt="search" />
          </div>
          {showSuggestions && (
            <div className="absolute bg-white w-[620px] rounded-lg border border-gray-100 shadow-lg">
              <ul>
                {suggestions.map((s) => (
                  <li key={s} className="hover:bg-gray-300 px-3 py-1">
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex mx-12">
          <img alt="more" className="w-10 h-10 cursor-pointer" src={img2} />
          <img
            alt="messaage"
            className="w-10 h-10 mx-6 cursor-pointer"
            src={img1}
          />
          <img
            alt="user"
            className="w-10 h-10 rounded-full cursor-pointer"
            src={img3}
          />
        </div>
      </div>
    </>
  );
};

export default Head;

