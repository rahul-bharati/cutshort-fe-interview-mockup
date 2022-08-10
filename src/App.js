import Logo from "./components/Logo";
import Step from "./components/Step";
import Step1 from "./screens/Step1";
import Step2 from "./screens/Step2";
import Step3 from "./screens/Step3";
import Step4 from "./screens/Step4";

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="step-container">
        <Step />
      </div>
      {/* <Step1 /> */}
      {/* <Step2 /> */}
      {/* <Step3 /> */}
      <Step4 />
    </div>
  );
}

export default App;
