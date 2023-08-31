
import React, {useState} from "react";
import { Card,CardContent,Grid,Button } from "@mui/material";


function App() {
  const [img, setImg]=useState("Hyundai")

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
       <Card>
          <CardContent>
            <img src={`img/${img}.jpg`} width={400} height={300} alt="" />

          </CardContent>
       </Card>
      </Grid>
   
     <Grid item xs={3}>
      <Button  
      fullWidth onClick={()=>setImg("Airplane")} variant="contained" color="warning"  >
        Airplane
      </Button>
     </Grid>
   
     <Grid item xs={3}>
      <Button fullWidth  onClick={()=>setImg("Bike")} variant="contained" color="warning"  >
        Bike
      </Button>
     </Grid>

     <Grid item xs={3}>
      <Button fullWidth onClick={()=>setImg("Taxi")} variant="contained" color="warning"  >
        Taxi
      </Button>
     </Grid>

     <Grid item xs={3}>
      <Button fullWidth onClick={()=>setImg("Train")} variant="contained" color="warning"  >
        Train
      </Button>
     </Grid>

     <Grid item xs={3}>
      <Button  onClick={()=>setImg("Vain")} variant="contained" color="warning"  >
        Vain
      </Button>
     </Grid>

    </Grid>
    
  );
}

export default App;
