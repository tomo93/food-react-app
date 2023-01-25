import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const [btnBump, setbtnBump] = useState(false);
  const cartCtx = useContext(CartContext); //quando il contesto cambia il componente viene rieseguito

  const numberCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnBump ? classes.bump : ""}`;

  const { items } = cartCtx;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setbtnBump(true);

    const timer = setTimeout(() => {
      setbtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberCartItems}</span>
    </button>
  );
}

HeaderCartButton.propTypes = {};

export default HeaderCartButton;
