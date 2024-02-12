import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  // const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={
          scrolled 
            ? "flex justify-beetween items-center z-10 gap-6 fixed p-4 w-full text-green-700 text-4xl bg-white"
            : "flex justify-beetween items-center z-10 gap-6 fixed p-6 w-full text-white text-5xl bg-transparant"
        }
      >
        {/* <div  className="flex justify-beetween items-center z-10 gap-6 fixed p-6 w-full bg-white" */}

        <ul className="flex justify-between w-full font-extrabold gap-8 px-10">
          <Link to="/cuisines" className="text-2xl">ALL MENU</Link>
          <li className="text-2xl">BY CATEGORIES</li>
          <Link
            to="/"
            className=" text-green-700 font-bold text"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            <span className="text-yellow-400">SAB</span>BAY
          </Link>
          <li className="text-2xl">HOW TO ORDER</li>
          <li className="text-2xl">ABOUT</li>
        </ul>
      </div>
    </>
  );
}
