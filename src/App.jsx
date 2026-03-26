import "./App.css";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Home from "./components/Home";
import Table from "./components/Table";
import Steps from "./components/Steps";
import Temdesign from "./components/Temdesign";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Nav />
      <Search></Search>
      <Home></Home>
      <Table></Table>
      <Steps></Steps>
      <Temdesign></Temdesign>
      <Footer></Footer>
    </>
  );
}

export default App;
