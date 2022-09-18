import React from "react";
import WeaterIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeaterIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">10°</span>
            <span className="WeatherForecast-temperature-min">19°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeaterIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">10°</span>
            <span className="WeatherForecast-temperature-min">19°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeaterIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">10°</span>
            <span className="WeatherForecast-temperature-min">19°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeaterIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">10°</span>
            <span className="WeatherForecast-temperature-min">19°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeaterIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">10°</span>
            <span className="WeatherForecast-temperature-min">19°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
