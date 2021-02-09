import { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlledLabel from "@material-ui/core/FormControlLabel";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    background: "navy",
    color: "white",
    border: "none",
    borderRadius: 10,
    fontSize: 14,
  },
});
const StyledButton = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Some button</Button>;
};
const CheckBoxExample = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <StyledButton />
      <Grid container spacing={5} justify="center">
        <Grid item>
          <Paper style={{ height: 60, width: 60, backgroundColor: blue }} />
        </Grid>
        <Grid item>
          <Paper style={{ height: 60, width: 60, backgroundColor: blue }} />
        </Grid>
        <Grid item>
          <Paper style={{ height: 60, width: 60, backgroundColor: blue }} />
        </Grid>
      </Grid>
      <FormControlledLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        }
        label="CheckBox"
      />
    </div>
  );
};
function App() {
  return (
    <Container maxWidth="md">
      <div className="App">
        <header className="App-header">Material-UI Practice</header>
        <CheckBoxExample />
        <Button endIcon={<SaveIcon />} variant="outlined" color="primary">
          Click
        </Button>
      </div>
    </Container>
  );
}

export default App;
