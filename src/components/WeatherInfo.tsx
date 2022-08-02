import { useState } from "react";

interface WeatherInfoProps {
  data: any;
  toggled: boolean;
}

interface InfoPanelProps {
  data: any;
  toggled: boolean;
}

const WeatherInfo = (props: WeatherInfoProps) => {
  return (
    <div className="shadow-lg backdrop-brightness-110 backdrop-blur-3xl bg-white/30 px-8 sm:px-10 py-5 w-full rounded-lg flex-row justify-between">
      <div className="w-full justify-center block md:flex md:justify-between content-center flex-wrap">
        <p className="text-2xl sm:text-3xl">
          {props.data.location.country}, {props.data.location.name}
        </p>
        <div className="flex items-center">
          <p>{props.data.current.condition.text}</p>
        </div>
      </div>
      <div className="flex justify-center sm:justify-between items-start flex-wrap pt-5">
        <div className="flex flex-row flex-wrap items-center">
          <img
            className="w-16"
            src={props.data.current.condition.icon}
            alt=""
          />
          <p className="text-4xl pl-1 sm:pl-3 pb-2">
            {props.toggled
              ? props.data.current.temp_c + "°c"
              : props.data.current.temp_f + "°f"}
          </p>
        </div>
        <div className="mx-6"></div>
        <InfoPanel data={props.data} toggled={props.toggled} />
      </div>
    </div>
  );
};

const InfoPanel = (props: InfoPanelProps) => {
  const [hideWeatherDetails, setHideWeatherDetails] = useState<boolean>(true);

  const getInfoPanelColor = () => {
    return props.data.current.condition.icon.includes("day") &&
      props.data !== undefined
      ? "from-cyan-50"
      : "from-blue-200";
  };

  const getInfoBorderColor = () => {
    return props.data.current.condition.icon.includes("day") &&
      props.data !== undefined
      ? "border-gray"
      : "border-gray-400";
  };

  const getInfoShowMoreColor = () => {
    return props.data.current.condition.icon.includes("day") &&
      props.data !== undefined
      ? "bg-cyan-50 hover:bg-blue-50"
      : "bg-blue-200 hover:bg-blue-300";
  };

  return (
    <div
      className={`justify-around mt-4 flex-col w-64 rounded-xl bg-gradient-to-b ${getInfoPanelColor()} p-4`}
    >
      <div
        className={`flex justify-between m-2  border-b ${getInfoBorderColor()}`}
      >
        <p>Feels Like</p>
        <p>
          {props.toggled
            ? props.data.current.feelslike_c + "°c"
            : props.data.current.feelslike_f + "°f"}
        </p>
      </div>
      <div
        className={`flex justify-between m-2  border-b ${getInfoBorderColor()}`}
      >
        <p>Humidity</p>
        <p>{props.data.current.humidity}%</p>
      </div>
      <div
        className={`flex justify-between m-2  ${
          !hideWeatherDetails ? "border-b" : ""
        } ${getInfoBorderColor()}`}
      >
        <p>Wind</p>
        <p>
          {props.toggled
            ? props.data.current.wind_kph + "km/h"
            : props.data.current.wind_mph + "mp/h"}
        </p>
      </div>
      <div hidden={hideWeatherDetails}>
        <div
          className={`flex justify-between m-2  border-b ${getInfoBorderColor()}`}
        >
          <p>Wind Gusts</p>
          <p>
            {props.toggled
              ? props.data.current.gust_kph + "km/h"
              : props.data.current.gust_mph + "mp/h"}
          </p>
        </div>
        <div
          className={`flex justify-between m-2  border-b ${getInfoBorderColor()}`}
        >
          <p>UV</p>
          <p>{props.data.current.uv}</p>
        </div>
        <div
          className={`flex justify-between m-2  border-b ${getInfoBorderColor()}`}
        >
          <p>Pressure</p>
          <p>↔ {props.data.current.pressure_mb} mb</p>
        </div>
        <div
          className={`flex justify-between m-2  border-b ${getInfoBorderColor()}`}
        >
          <p>Cloud Cover</p>
          <p>{props.data.current.cloud}%</p>
        </div>
        <div className="flex justify-between m-2 ">
          <p>Visibility</p>
          <p>
            {props.toggled
              ? props.data.current.vis_km + "km"
              : props.data.current.vis_miles + "mi"}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          className="pt-4"
          onClick={(e) => {
            setHideWeatherDetails(!hideWeatherDetails);
          }}
        >
          <div
            className={`justify-center px-4 py-2 rounded-3xl  font-semibold text-sm ${getInfoShowMoreColor()}`}
          >
            {hideWeatherDetails ? "Show More" : "Show Less"}
          </div>
        </button>
      </div>
    </div>
  );
};

export default WeatherInfo;
