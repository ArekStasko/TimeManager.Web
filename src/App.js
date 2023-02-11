import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import { store, persistor } from "./store/index";
import Home from './pages/Home/Home'
import {PersistGate} from "redux-persist/integration/react";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <PersistGate persistor={persistor}>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/SignIn" element={<SignIn />} />
                  <Route exact path="SignUp" element={<SignUp />} />
               </Routes>
            </PersistGate>
          </Router>
        </div>
      </Provider>
  );
}

export default App;
