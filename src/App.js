import "./App.css";
import Profile from "./Profile";
import Login from "./Login";
import { store } from "./Store";
import { Provider } from "react-redux";
import { Test } from "./parent/fils/test";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Login />
        <Test />
        <Profile />
      </Provider>
    </div>
  );
}

export default App;
