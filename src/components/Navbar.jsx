import React, { useRef } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  const navbarRef = useRef(null);

 useGSAP(
    () => {
      document.addEventListener("DOMContentLoaded", () => {
        if (!navbarRef.current) return;

        gsap.fromTo(
          navbarRef.current,
          {
            y: -100, // Comienza fuera de la pantalla (arriba)
            opacity: 0,
          },
          {
            y: 0, // Termina en su posición normal
            opacity: 1,
            duration: 2,
            ease: "power3.out",
            delay: 0.8, // Pequeño delay para mejor efecto
          }
        );
      });
      // Animación de entrada desde arriba
    },
    { scope: navbarRef }
  );

  return (
    <nav
      ref={navbarRef}
      className="fixed px-6 md:px-12 backdrop-blur-3xl top-0 left-0 right-0 w-full flex py-6 justify-between items-center navbar"
    >
      <img
        src={logo}
        alt="hoobank"
        className="w-[124px] h-[32px] sm:w-[160px] sm:h-[40px]"
        loading="eager"
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-semibold
                 cursor-pointer text-[18px] text-white  transition duration-200 ease-in-out hover:text-[#33bbcf] hover:scale-105 hover:shadow-2xl ${
                   index === navLinks.length - 1 ? "mr-0" : "mr-10"
                 }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          src={toogle ? close : menu}
          alt="menu"
          className="w-[28px] h=[28px] object-contain"
          onClick={() => setToogle((prev) => !prev)}
          loading="eager"
        />
        <div
          className={`${
            toogle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute z-10 top-20 right-0 mx-4 my-2 min-w-[140px]  w-3/5 rounded-xl sidebar `}
        >
          <ul className="list-none flex flex-col  justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white transition duration-200 ease-in-out hover:text-[#33bbcf]   ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`} onClick={()=> setToogle(false)}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {
          toogle && (
            <div className="z-0 absolute top-0 right-0 left-0 h-svh " onClick={()=> setToogle(false)}>

            </div>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
