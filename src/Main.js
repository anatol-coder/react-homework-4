import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";
import { WiCloudy } from "weather-icons-react";
import { WiCloud } from "weather-icons-react";
import { WiDaySunny } from "weather-icons-react";
import { WiDayCloudy } from "weather-icons-react";

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
        <div class="d-flex">
          <WiCloudy size={34} color="#000" />
          <h2>13°C</h2>
        </div>
      </div>
      <div class="container m-2 p-3">
        <div class="row">
          <div class="col">
            Thu
            <br />
            <WiCloud size={24} color="#000" />
            <br />
            15° 11°
          </div>
          <div class="col">
            Fri
            <br />
            <WiDaySunny size={24} color="#000" />
            <br />
            18° 9°
          </div>
          <div class="col">
            Sat
            <br />
            <WiDayCloudy size={24} color="#000" />
            <br />
            16° 11°
          </div>
          <div class="col">
            Sun
            <br />
            <WiDayCloudy size={24} color="#000" />
            <br />
            16° 10°
          </div>
          <div class="col">
            Mon
            <br />
            <WiDaySunny size={24} color="#000" />
            <br />
            16° 10°
          </div>
        </div>
      </div>
    </div>
  );
}
