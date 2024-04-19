import React from "react";
import Image from "next/image";

function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Image src="/logo.png" alt="" width="100" height="30" />
          </li>
          <li>Home</li>
          <li>Nosotros</li>
          <li>Servicios</li>
          <li>Contacto</li>
          <li className="">Soy Cliente</li>
        </ul>
      </nav>
    </header>
  );
}


export default NavBar;
