import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Child from "./callback/Child";
import Parent from "./callback/Parent";
import Calculator from "./css_basic/Calculator";
import Hover from "./css_basic/hover/Hover";
import ReactRouter from "./css_basic/ReactRouter";
import ReactRouterSandbox from "./css_basic/ReactRouterSandbox";
import ReactToPdf from "./css_basic/ReactToPdf";
import Sound from "./css_basic/Sound";
import Main from "./NestedRouter/Main";
import RouterExample from "./RouterExample1.js/RouterExample";
import SimpleRouter from "./SimpleRouter/SimpleRouter";
import UseCallbackExample from "./UseCallback/UseCallbackExample";
import UseCallbackExample1 from "./UseCallback/UseCallbackExample1";
import UseMemoEx1 from "./useMemoHook/UseMemoEx1";

// import FormikForm from "./css_basic/FormFormik";

function App() {
  return (
    <div className="App">
      {/* <SimpleRouter /> */}
      {/* <Parent /> */}
      {/* <Main /> */}
      {/* <RouterExample /> */}
      {/* <ReactRouterSandbox /> */}
      {/* <ReactRouter /> */}
      {/* <ReactToPdf /> */}
      {/* <Sound /> */}
      {/* <Calculator /> */}
      {/* <FormikForm /> */}
      {/* <UseCallbackExample /> */}
      {/* <UseMemoEx1 /> */}
      <Hover />
    </div>
  );
}

export default App;
