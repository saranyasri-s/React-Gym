import classes from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Pages/Home";
import ExerciseDetails from "./Pages/ExerciseDetails";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className={classes.App}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/exercise/:id"
          element={<ExerciseDetails></ExerciseDetails>}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
