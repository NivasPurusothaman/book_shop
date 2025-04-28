import Main from "./components/Main";
import { StoreProvider } from "easy-peasy";
import store from "./store.js";

function App() {
  return (
    <StoreProvider store={store}>
      <Main />
    </StoreProvider>
  );
}

export default App;
