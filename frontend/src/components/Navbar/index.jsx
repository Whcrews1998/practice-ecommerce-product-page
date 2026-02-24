import { useState } from "react";
import style from "./Navbar.module.css";

export default function Navbar() {
  const [searchBar, setSearchBar] = useState("");
  return (
    <header className={style["container"]}>
      <div className={style["logo"]}>Timeless Watches</div>
      <div className={style["search-bar"]}>
        <input
          type="text"
          name="search-bar"
          value={searchBar}
          placeholder="Search..."
          onChange={(e) => setSearchBar(e.target.value)}
        />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
