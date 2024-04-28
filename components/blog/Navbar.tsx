const Navbar = () => {
  return (
    <nav className="w-full h-14 mt-4 px-4 py-2 bg-[#B99253]">
      <div className="container w-[1320px] h-full px-[15px] flex">
        <div className="w-[66px] h-full flex items-center text-lg text-[#5050507e] oxygen">
          Logros:
        </div>
        {/* <div className="w-[66px] h-full flex items-center justify-center text-lg text-[#222222] font-bold oxygen">
          Todos
        </div> */}
        {/* <div className="w-[162px] h-full flex items-center justify-center text-lg text-[#1e1e1e81] font-bold oxygen">
          Reconocimientos
        </div> */}
        {/* <div className="w-[159px] h-full flex items-center justify-center text-lg text-[#1e1e1e81] font-bold oxygen">
          Metas cumplidas
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
