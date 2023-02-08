import StrainItemForm from "./StrainItemForm";
import classes from "./StrainItem.module.css";

const StrainItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.strain}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <StrainItemForm id={props.id} />
      </div>
    </li>
  );
};

export default StrainItem;
