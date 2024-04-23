import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="">
      <h1>Nosotros</h1>
      <div className="lado1">
        <div className="">
          <Image src="/about.png" alt="" width="1000" height="600" />
          <h1>Obtén un Credito</h1>
        </div>
      </div>

      <div className="lado2">
        <div className="">
          Somos “Cayetano” Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Quibusdam dolor dolorum error vitae aliquid vero provident perspiciatis. 
          Nulla velit quia error cumque inventore blanditiis eos quis laudantium fugiat? 
          Placeat, corrupti..
          <br />
         
          <br />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio iure eum autem, 
         iste magni ullam doloremque voluptatibus omnis blanditiis accusantium nam, debitis 
         vero aut delectus architecto nulla vel modi..
        </div>
      </div>
    </div>
  );
}

export default About;
