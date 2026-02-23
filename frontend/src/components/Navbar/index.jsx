import { useState } from "react";
import style from "./Navbar.module.css";

export default function Navbar() {
  const [searchBar, setSearchBar] = useState("");
  return (
    <div className={style["container"]}>
      <h2>Timeless Watches</h2>
      <input
        type="text"
        name="search-bar"
        value={searchBar}
        placeholder="Search..."
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <button type="button">Shop</button>
      <button type="button">New Arrivals</button>
      <button type="button">Brands</button>
      <button type="button">About</button>
      <button type="button">Contact</button>
    </div>
  );
}
