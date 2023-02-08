import Input from "../../UI/Input";
import classes from "./StrainItemForm.module.css";

const StrainItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "30",
          stpe: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default StrainItemForm;
