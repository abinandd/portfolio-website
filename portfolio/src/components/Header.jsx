const Header = () => {
  return (
    <div className="fixed top-0 z-10 flex justify-end w-full p-4 bg-transparent text-amber-50" >
      <ul className="list-none flex end gap-8 pr-4 text-lg">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      </ul>
      {/* <Link>Home</Link>
      <Link>About</Link>
      <Link>Contact</Link> */}
    </div>
  );
};

export default Header;
