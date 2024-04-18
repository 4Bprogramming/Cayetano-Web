import React from "react";
import Image from "next/image";


function HomeImg() {
  let Provincias = [
    "opciones",
    "opciones 2",
    "opciones 3",
    "opciones 4",
    "opciones 5",
  ];

  return (
    <div className="">
      <div className="lado1">
        <div className="">
          <Image src="/img2.png" alt="" width="1000" height="600" />
          <h1>Obtén un Credito</h1>
        </div>
      </div>

      <div className="lado2">
        <h3>Simula tu Crédito</h3>
        <form>
          <p className="">Localidad</p>
          <select
           
          >
            <option>&nbsp;</option>
            {Provincias &&
              Provincias.map((prov) => {
                return (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                );
              })}
          </select>

          <p className="">Provincia</p>
          <select
          
          >
            <option>&nbsp;</option>
            {Provincias &&
              Provincias.map((prov) => {
                return (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                );
              })}
          </select>

          <div className="">
            <button className="">Siguiente</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomeImg;
