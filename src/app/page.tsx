'use client'

import { Button } from "@components/Button/Button";
import { centeredContainer } from "../styles/common/containers";

const texts = {
  buttonText: "Crear una rifa",
}

export default function Home() {
  const handleClick = () => {
    console.log('Button clicked');
  }

  return (
    <main className={`${centeredContainer}`}>
      <Button onClick={handleClick}>{texts.buttonText}</Button>
    </main>
  );
}
