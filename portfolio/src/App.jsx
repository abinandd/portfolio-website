import Header from "./components/Header";
import Body from "./components/Body";
import "./index.css"

const App = () => {
  return (
    <div className="bg-blue-400 h-screen ">
     <div className=""><Header /></div>
     <div className=""> <Body /></div>
    </div>
  );
};

export default App;
