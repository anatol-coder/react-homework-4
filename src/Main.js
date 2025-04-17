import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main" class="d-flex justify-content-between m-3 p-3">
      <div>
        <h2>San Francisco</h2>
        <p>
          Thursday 18:59, overcast clouds
          <br />
          Humidity: 82%, Wind: 3.13km/h
        </p>
      </div>
      <div>
        <h2>13℃</h2>
      </div>
    </div>
  );
}
