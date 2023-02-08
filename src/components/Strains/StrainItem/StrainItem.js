import { useContext } from "react";

import StrainItemForm from "./StrainItemForm";
import CartContext from "../../../store/cart-context";
import classes from "./StrainItem.module.css";

const StrainItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.strain}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <StrainItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default StrainItem;
