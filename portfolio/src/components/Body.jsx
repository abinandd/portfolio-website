import User from "../assets/user.png";
const Body = () => {
  return (
    <div className="relative text-amber-50 pt-40 flex ml-8 mr-8 justify-between flex-row ">

      <div className="basis-1/3">
        <img className="w-80 rounded-full " src={User} />
      </div>

      <div className="basis-2/3">
        <h1 className="text-4xl">Welcome!</h1>
        <h1 className="text-5xl mt-4">I'm Abhinand ,</h1>
        <h1 className="text-6xl">I'm a React Developer</h1>
        <p className="text-2xl mt-5">
        A Developer obsessed with speed and efficiency. My mission is to strip away every millisecond of load time and every ounce of jank, delivering web applications that feel lightning-fast and incredibly smooth
        </p>
      </div>
    </div>
  );
};

export default Body;
