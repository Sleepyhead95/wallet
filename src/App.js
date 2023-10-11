import "./App.scss";
import Header from "./Header";
import Main from "./Main";
import Dates from "./Dates";
import GraphBox from "./GraphBox";
import Buttons from "./Buttons";
import Footer from "./Footer";
// import PhoneBody from "./PhoneBody";

function App() {
  return (
    <>
      {/* <PhoneBody /> */}
      <Header />
      <Main />
      <Dates />
      <GraphBox />
      <Buttons />
      <Footer />
    </>
  );
}

export default App;
