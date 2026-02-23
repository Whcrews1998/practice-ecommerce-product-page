import Navbar from "../Navbar";
import { useState } from "react";
import style from "./ProductPage.module.css";

export default function ProductPage() {
  return (
    <div className={style["container"]}>
      <Navbar />
      <div className={style["product-images"]}></div>
      <div className={style["product-details"]}></div>
    </div>
  );
}
