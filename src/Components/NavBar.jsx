"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BurgerMenuButton from "./BurgerMenuButton";

function NavBar() {
  
  const [isVisible, SetIsVisible] = React.useState(window.innerWidth >= 640);
  const showOptions = () => {
    SetIsVisible(!isVisible);
  };
  React.useEffect(() => {
    const handleResize = () => {
      SetIsVisible(window.innerWidth >= 640);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header class="w-full">
      <nav class="flex relative h-28 justify-between sm:items-center">
        <Image
          src="/logo.png"
          alt="Cayetano Logo"
          width="100"
          height="30"
          style={{ marginTop: "5px" }}
        />

        <ul
          className={`${isVisible
            ? "bg-slate-600 rounded flex flex-col absolute top-full right-3 sm:flex-row sm:static sm:top-0 sm:gap-2 sm:mr-2 md:gap-5 md:mr-24 md:text-lg"
            :"opacity-0"}`}>
          <li class="py-0.5 px-1">
            <Link href={"/"}>Home</Link>
          </li>
          <li class="py-0.5 px-1">
            <Link href={"/"}>Nosotros</Link>
          </li>
          <li class="py-0.5 px-1">
            <Link href={"/"}>Servicios</Link>
          </li>
          <li class="py-0.5 px-1">
            <Link href={"/"}>Contacto</Link>
          </li>
          <li class="py-0.5 px-1">
            <Link href={"/"}>Soy Cliente</Link>
          </li>
        </ul>
        <BurgerMenuButton style={"mt-5 mr-5"} showOptions={showOptions} />
      </nav>
    </header>
  );
}

export default NavBar;
