import Navbar from "../Navbar";
import { useState } from "react";
import style from "./ProductPage.module.css";

export default function ProductPage() {
  const [purchaseAmount, setPurchaseAmount] = useState(0);

  return (
    <div className={style["container"]}>
      <Navbar />
      <div className={style["product-images"]}>{/* IMPLEMENT */}</div>
      <div className={style["product-details"]}>
        <h3>Elegant Luxury Watch</h3>
        <p>Prestige Time Co.</p>
        <div className={style["prices"]}>
          <span className={style["current-price"]}>$499.99</span>
          <span className={style["original-price"]}>$799.99</span>
          <span className={style["discount"]}>38% off</span>
        </div>
        <p className={style["product-description"]}>
          This luxurious timepiece combines elegance with precision
          craftsmanship. Perfect for formal occasions or everyday wear, it
          features premium materials and impeccable design.
        </p>
        <div className={style["ratings"]}>{/* IMPLEMENT */}</div>
        <div className={style["purchase-amount"]}>
          <button
            type="button"
            onClick={() =>
              setPurchaseAmount(purchaseAmount > 0 ? purchaseAmount - 1 : 0)
            }
          >
            -
          </button>
          <input
            type="number"
            name="amount"
            value={purchaseAmount}
            onChange={(e) => setPurchaseAmount(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setPurchaseAmount(purchaseAmount + 1)}
          >
            +
          </button>
        </div>
        <button className={style["add-to-bag-btn"]} type="button">
          Add to Bag
        </button>
        <div className={style["offer-container"]}>{/* IMPLEMENT */}</div>
      </div>
    </div>
  );
}
