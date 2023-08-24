"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";

const NotFound = () => {
  return (
    <div className="bg-[#191e24] min-h-screen flex flex-col justify-center items-center">
      <div className="flex items-center">
        <img
          src="https://i.postimg.cc/tgyKVZzW/peepo.png"
          alt="Peepo"
          className="p-4 hidden sm:block"
        />
        <img
          src="https://i.postimg.cc/nhFHyhsF/peepo-mobile.png"
          alt="Peepo"
          className="p-4 block sm:hidden"
        />
        <h1 className="text-6xl lg:text-8xl text-danger font-bold">404</h1>
      </div>
      <p className="p-4 text-center">
        Esta página no está disponible en este momento o no existe
      </p>
      <Link href="/dashboard">
        <Button size="lg" variant="ghost" color="danger">
          Volver al inicio
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
