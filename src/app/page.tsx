'use client'

import { Button } from "@components/Button/Button";
import { centeredContainer } from "../styles/common/containers";
import { Input } from "@components/Input/Input";

const texts = {
  buttonText: "Crear una rifa",
}

export default function Home() {
  const handleClick = () => {
    console.log('Button clicked');
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }

  return (
    <main className={`${centeredContainer}`}>
      <form>
        <Input
          id="raffleNumbers"
          type="number"
          placeholder="50"
          label="Ingresa la cantidad de boletas de tu rifa"
          min={10}
          max={200}
          onChange={handleInputChange} />
        <Button onClick={handleClick}>{texts.buttonText}</Button>
      </form>
    </main>
  );
}
