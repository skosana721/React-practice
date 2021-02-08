import { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlledLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

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
      <TextField variant="filled" type="date" label="The date" />
      <TextField variant="filled" type="time" label="The time" />
      <TextField variant="filled" type="password" label="password" />
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
    <div className="App">
      <header className="App-header">Material-UI Practice</header>
      <CheckBoxExample />
      <Button endIcon={<SaveIcon />} variant="outlined" color="primary">
        Click
      </Button>
    </div>
  );
}

export default App;
