import Navbar from "../Navbar";
import { useState } from "react";
import style from "./ProductPage.module.css";

export default function ProductPage() {
  const images = [
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/1.jpg?5491",
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/2.jpg?5491')",
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/5.jpg?5491",
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/7.jpg?5491",
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/2.jpg?5491",
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/5.jpg?5491",
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1542852/7.jpg?5491",
  ];
  const [primaryImageIndex, setPrimaryImageIndex] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState(0);

  function PrimaryImage() {
    return (
      <div className={style["primary-image"]}>
        <img src={images[primaryImageIndex]} />
      </div>
    );
  }

  function SecondaryImages() {
    const items = [];
    const imgCount = 4;

    for (let i = 0; i < images.length; i++) {
      if (i === primaryImageIndex) continue;
      items.push(
        <img key={i} src={images[i]} onClick={() => setPrimaryImageIndex(i)} />,
      );
    }

    return <div className={style["secondary-images"]}>{items}</div>;
  }

  return (
    <div className={style["container"]}>
      <Navbar />
      <div className={style["product-container"]}>
        <div className={style["product-images"]}>
          <PrimaryImage />
          <SecondaryImages />
        </div>
        <div className={style["product-details"]}>
          <h1>Elegant Luxury Watch</h1>
          <p className={style["brand"]}>Prestige Time Co.</p>
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
              type="text"
              inputMode="numeric"
              patterm="[0-9]*"
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
      <footer>
        <p>&copy; 2024 Timeless Watches. Crafted for Excellence.</p>
      </footer>
    </div>
  );
}
