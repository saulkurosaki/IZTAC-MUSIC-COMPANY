const Navbar = () => {
  return (
    <nav className="w-full md:h-14 max-md:h-auto mt-4 px-4 py-2 bg-[#B99253]">
      <div className="container xl:w-[1320px] lg:w-[960px] h-full px-[15px] flex max-md:flex-col">
        <div className="md:w-[66px] max-md:w-full md:h-full max-md:h-10 flex items-center text-lg text-[#5050507e] oxygen">
          Logros:
        </div>
        <div className="md:w-[66px] max-md:w-full md:h-full max-md:h-10 flex items-center md:justify-center text-lg text-[#222222] font-bold oxygen">
          Todos
        </div>
        <div className="md:w-[162px] max-md:w-full md:h-full max-md:h-10 flex items-center md:justify-center text-lg text-[#1e1e1e81] font-bold oxygen">
          Reconocimientos
        </div>
        <div className="md:w-[159px] max-md:w-full md:h-full max-md:h-10 flex items-center md:justify-center text-lg text-[#1e1e1e81] font-bold oxygen">
          Metas cumplidas
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
