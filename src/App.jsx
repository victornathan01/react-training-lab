import "../src/App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

function App() {
  return (
    <div>
      <h1>IdCard</h1>
      <IdCard
        imgsrc="https://randomuser.me/api/portraits/men/44.jpg"
        firstName="Doe"
        lastName="Joe"
        gender="Male"
        height="1.74"
        birth="04/24/1994"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={"1988-05-11"}
        imgsrc="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1>Greetings!</h1>
      <div className="greetings">
        <Greetings lang="en">John</Greetings>
      </div>

      <div className="greetings">
        <Greetings lang="de">María</Greetings>
      </div>

      <h1>Random</h1>
      <div>
        <Random min={1} max={6} /> 
      </div>

      <div>
          <Random min={1} max={100} />
      </div>
      
     <h1>Box Color</h1>
     <div className="greetings">
      <BoxColor/>
     </div>
      
     

    </div>
  );
}

export default App;
