import Link from "next/link";
import Account from "./Account";

const NavBar = () => {
  return (
    <header className="bg-[#101f35] backdrop-blur-sm p-4 flex flex-col xl:flex-row gap-4 items-center justify-center md:justify-between">
      <Link href="/dashboard">
        <h1 className="font-semibold cursor-pointer text-xl">CheckWOW</h1>
      </Link>
      <nav className="flex items-center gap-4">
        <Account />
      </nav>
    </header>
  );
};

export default NavBar;
