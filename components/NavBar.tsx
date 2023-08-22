import Link from "next/link";
import Account from "./Account";

const NavBar = () => {
  return (
    <div className="bg-[#101f35] backdrop-blur-sm p-4 flex flex-col xl:flex-row gap-4 items-center justify-center md:justify-between">
      <Link href="/dashboard">
        <h1 className="font-semibold cursor-pointer text-xl">
          CheckWOW
        </h1>
      </Link>
      <nav className="flex items-center gap-4">
        <Link
          href="/asistance"
          className="xl:py-1 xl:px-2 rounded-lg hover:bg-[#f8d300] hover:text-black font-bold transition-colors"
        >
          Asistencia
        </Link>
        <Account />
      </nav>
    </div>
  );
};

export default NavBar;
