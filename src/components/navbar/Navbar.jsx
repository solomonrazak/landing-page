const Navbar = () => {
  return (
    <div className="w-screen px-[5%] flex justify-between bg-black text-white opacity-90 fixed py-5 items-center overflow-x-hidden">
      <div className="flex gap-9 items-center">
        <h1 className="text-[20px] tracking-widest">TECH BROS</h1>
        <div className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Projects</Link>
            </li>
            <li>
              <Link href="">Services</Link>
            </li>
            <li>
              <Link href="">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button className="bg-gradient-to-r from-violet-400 to-pink-500 py-2 px-5 rounded-md text-[18px]">
          Call to Book
        </button>
      </div>
    </div>
  );
};

export default Navbar;
