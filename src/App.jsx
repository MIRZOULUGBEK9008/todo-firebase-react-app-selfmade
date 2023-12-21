import { useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [loader, setLoader] = useState(false);
  return loader && <Loader />;
}

export default App;
