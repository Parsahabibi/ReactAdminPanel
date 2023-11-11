
import './App.css';
import {Grid} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import router from "./routes/routes";

function App() {



  return (
      <Grid>
        <RouterProvider router={router} />
      </Grid>
  );
}

export default App;
