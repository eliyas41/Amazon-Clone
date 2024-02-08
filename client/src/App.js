import { useContext, useEffect } from "react";
import "./App.css";
import Routing from "./Router";
import { DataContext } from "./components/DataProvider/DataProvider";
import { auth } from "./utility/firebase";
import { Type } from "./utility/action.type";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return <Routing />;
}

export default App;
