import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <img src="./logo-small.png" alt="logoshecodes" />
      <form>
        <input type="text" placeholder="Enter a city..." />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
