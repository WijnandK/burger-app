import React, { Component } from "react";

import classes from "./OrderSummary.module.css";

class orderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey} </span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Totalprice: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout ?</p>
        <button
          className={classes.ButtonSuccess}
          onClick={this.props.purchaseCancelled}
        >
          CANCEL
        </button>
        <button
          className={classes.ButtonDanger}
          onClick={this.props.purchaseContinued}
        >
          CONTINUE
        </button>
      </>
    );
  }
}

export default orderSummary;
