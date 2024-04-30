import Link from "next/link";

type NavbarProps = {
  category: "all" | "recognitions" | "achievements";
};

const Navbar = ({ category }: NavbarProps) => {
  return (
    <nav className="w-full md:h-14 max-md:h-auto mt-4 px-4 py-2 bg-[#B99253]">
      <div className="container xl:w-[1320px] lg:w-[960px] h-full px-[15px] flex max-md:flex-col">
        <div className="md:w-[66px] max-md:w-full md:h-full max-md:h-10 flex items-center text-lg text-[#5050507e] oxygen">
          Logros:
        </div>
        <div
          className={`md:w-[66px] max-md:w-full md:h-full max-md:h-10 flex items-center md:justify-center text-lg  font-bold oxygen ${
            category === "all"
              ? "text-[#222222]"
              : "text-[#1e1e1e81] hover:text-[#1e1e1ec9]"
          }`}
        >
          <Link href="/blog">Todos</Link>
        </div>
        <div
          className={`md:w-[162px] max-md:w-full md:h-full max-md:h-10 flex items-center md:justify-center text-lg transition hover:duration-150 font-bold oxygen ${
            category === "recognitions"
              ? "text-[#222222]"
              : "text-[#1e1e1e81] hover:text-[#1e1e1ec9]"
          }`}
        >
          <Link href="/blog/reconocimientos">Reconocimientos</Link>
        </div>
        <div
          className={`md:w-[159px] max-md:w-full md:h-full max-md:h-10 flex items-center md:justify-center text-lg text-[#1e1e1e81] hover:text-[#1e1e1ec9] transition hover:duration-150 font-bold oxygen ${
            category === "achievements"
              ? "text-[#222222]"
              : "text-[#1e1e1e81] hover:text-[#1e1e1ec9]"
          }`}
        >
          <Link href="/blog/metas-cumplidas">Metas cumplidas</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
