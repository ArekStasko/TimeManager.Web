import './App.css';
import './assets/styles/themes/default/theme.scss'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import { store, persistor } from "./store/index";
import Home from './Pages/Home'
import {PersistGate} from "redux-persist/integration/react";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import FlashLayout from "./Layouts/FlashLayout";
import ManagerLayout from "./Layouts/ManagerLayout";
import Manager from "./Pages/Manager";
import TaskForm from "./Pages/TaskForm";

function App() {


  return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <PersistGate persistor={persistor}>
              <Routes>
                  <Route exact path="/" element={<FlashLayout Component={<Home />}/>} />
                  <Route exact path="/SignIn" element={<FlashLayout Component={<SignIn />}/>} />
                  <Route exact path="/SignUp" element={<FlashLayout Component={<SignUp />}/>} />
                  <Route exact path="/Manager" element={<FlashLayout Component={<ManagerLayout />}/>} />
                  <Route exact path="/Manager/TaskForm/:date" element={<FlashLayout Component={<TaskForm />}/>} />
               </Routes>
            </PersistGate>
          </Router>
        </div>
      </Provider>
  );
}
export default App;
