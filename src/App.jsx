import { useState } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
  const [loader, setLoader] = useState(false);
  return (
    <>
      {loader && <Loader />}
      <Header />
    </>
  );
}

export default App;
