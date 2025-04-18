import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <div class="d-flex justify-content-between m-2 p-3">
        <div>
          <h2>San Francisco</h2>
          <p>
            Thursday 18:59, overcast clouds
            <br />
            Humidity: 82%, Wind: 3.13km/h
          </p>
        </div>
        <h2>13°C</h2>
      </div>
      <div class="container m-2 p-3">
        <div class="row">
          <div class="col">Thu</div>
          <div class="col">Fri</div>
          <div class="col">Sat</div>
          <div class="col">Sun</div>
          <div class="col">Mon</div>
        </div>
      </div>
    </div>
  );
}
