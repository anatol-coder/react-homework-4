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
          <h1>San Francisco</h1>
          <p className="data">
            Thursday 18:59, overcast clouds
            <br />
            Humidity: <span>82%</span>, Wind: <span>3.13km/h</span>
          </p>
        </div>
        <div class="d-flex mt-3">
          <div className="cloud">
            <WiCloudy size={55} color="#000" />
          </div>
          <h2>13</h2>
          <p className="celsius" class="pt-2 h-75">
            °C
          </p>
        </div>
      </div>
      <div class="container m-2 p-3">
        <div class="row">
          <div class="col">
            <strong>Thu </strong>
            <br />
            <br />
            <WiCloud size={40} color="#000" />
            <br />
            <br />
            <span class="temperature-max">15°</span>
            <span class="temperature-min"> 11°</span>
          </div>
          <div class="col">
            <strong>Fri</strong>
            <br />
            <br />
            <WiDaySunny size={40} color="#000" />
            <br />
            <br />
            <span class="temperature-max">18°</span>{" "}
            <span class="temperature-min"> 9°</span>
          </div>
          <div class="col">
            <strong>Sat</strong>
            <br />
            <br />
            <WiDayCloudy size={40} color="#000" />
            <br />
            <br />
            <span class="temperature-max">16°</span>{" "}
            <span class="temperature-min">11°</span>
          </div>
          <div class="col">
            <strong>Sun</strong>
            <br />
            <br />
            <WiDayCloudy size={40} color="#000" />
            <br />
            <br />
            <span class="temperature-max">16°</span>{" "}
            <span class="temperature-min">10°</span>
          </div>
          <div class="col">
            <strong>Mon</strong>
            <br />
            <br />
            <WiDaySunny size={40} color="#000" />
            <br />
            <br />
            <span class="temperature-max">16°</span>{" "}
            <span class="temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
