import logo from './logo.svg';
import {Container , AppBar , Typography , Grow , Grid} from '@material-ui/core';
import Student from './Components/showStudent/showStudent.js';
import Create from './Components/createStudent/createStudent.js';
import './App.css';
import useStyles from './style';

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.AppBar} position="static" color="inherit">
        <Typography className = {classes.heading} variant="h2" align="center">Student Create & Show
        
        </Typography>
        
        </AppBar>

        <Grow in>
          <Container>
            <Grid container="space-between"  alignItems="stretch">
              
               <Grid item xs={12} sm={7}>
                 <AppBar className={classes.AppBar} position="static" color="inherit">
                   <Student/>
                 </AppBar>

               </Grid>
                 <Grid item xs={12} sm={4}>
                 <AppBar className={classes.AppBar} position="static" color="inherit">
                   <Create/>
                 </AppBar>

                 </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
     
    </div>
  );
}

export default App;


