import React, { useState, useEffect } from "react";
import axios from "axios";
import '../assets/dog.css'

export const Dog = () => {
  const [imageDog, setImageDog] = useState("");

  useEffect(() => {
    pegandoDogAleatorio();
  }, []);

  const pegandoDogAleatorio = async () => {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    setImageDog(response.data.message);
  };

  const atualizandoImg = () => {
    pegandoDogAleatorio();
  };

  return (
    <div className="Dog">
      <button onClick={atualizandoImg}>Atualizar</button>
      <img src={imageDog} alt="Random dog" />
    </div>
  );
}
