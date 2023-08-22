import { Button } from "@nextui-org/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center gap-4">
      <video
        autoPlay
        loop
        className="fixed w-full h-full object-cover z-0 opacity-70"
      >
        <source src="/bg.webm" type="video/webm" />
      </video>
      <p className="text-xl font-bold z-10">CheckWOW</p>
      <div className="flex z-10 gap-4">
        <Link href="/login">
          <Button variant="shadow" color="primary">
            Entrar
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
