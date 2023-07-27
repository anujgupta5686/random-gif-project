import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag() {
  const [tag, setTag] = useState();
  const { gif, loader, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className=" mt-[15px] text-2xl underline uppercase font-bold">
        Random {tag} Gif
      </h1>

      {loader ? <Spinner /> : <img src={gif} alt="" width="450" />}

      <input
        type="text"
        name="randomName"
        value={tag}
        onChange={(event) => {
          setTag(event.target.value);
        }}
        className="text-center w-10/12 text-lg py-2 rounded-lg mb-[3px]"
      />

      <button
        className="w-10/12 bg-white opacity-30 text-lg py-2 rounded-lg mb-[20px]"
        onClick={() => fetchData(tag)}
      >
        Generate
      </button>
    </div>
  );
}
