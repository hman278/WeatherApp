import { useEffect, useState } from "react";

import { Helmet } from "react-helmet";

import WeatherInfo from "./WeatherInfo";
import Header from "./Header";
import WeatherWeeklyInfo from "./WeatherWeeklyInfo";
import WeatherDailyInfo from "./WeatherDailyInfo";
import Loading from "./Loading";

const axios = require("axios").default;

const App = () => {
  const [weatherData, setWeatherData] = useState<any>();
  const [errData, setErrData] = useState<any>();
  const [input, setInput] = useState<string>("London");
  const [toggled, setToggled] = useState<boolean>(false);
  const [themeColor, setThemeColor] = useState<string>("#fff7ed");
  const [backgroundColors, setBackgroundColors] = useState<string>(
    "from-teal-100 via-yellow-50 to-orange-50"
  );

  const inputCallback = (input: string) => {
    setInput(input);
  };

  const toggleCallback = (toggled: boolean) => {
    setToggled(toggled);
  };

  const fetchData = (
    position?: GeolocationPosition | undefined,
    name?: string | undefined
  ) => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=yourkey&q=${`${
          position !== undefined
            ? position.coords.latitude + " " + position.coords.longitude
            : name
        }`}&days=3&aqi=yes&alerts=no`
      )
      .then((res: any) => {
        setWeatherData(res);
        if (res.data.current.condition.icon.includes("day")) {
          setBackgroundColors("from-teal-100 via-yellow-50 to-orange-50");
          setThemeColor("#fff7ed");
        } else if (res.data.current.condition.icon.includes("night")) {
          setBackgroundColors("from-gray-800 via-blue-300 to-blue-800");
          setThemeColor("#1e40af");
        }
        setErrData(undefined);
      })
      .catch((err: object) => {
        setErrData(err);
      });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchData(position);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED: {
            fetchData();
          }
        }
      }
    );
  }, []);

  useEffect(() => {
    fetchData(undefined, input);
  }, [input]);

  return (
    <div
      className={`top-0 w-full min-h-screen flex justify-center bg-gradient-to-t ${backgroundColors}`}
    >
      <Helmet>
        <meta name="theme-color" content={themeColor} />
      </Helmet>
      <div className="parent 4xl:w-2/6 3xl:w-2/5 2xl:w-3/6 xl:w-2/4 lg:w-4/6 md:w-3/4 w-11/12 flex flex-col items-center">
        <div className="m-0.5"></div>
        {weatherData !== undefined ? (
          <>
            <Header
              data={weatherData.data}
              inputCallback={inputCallback}
              toggleCallback={toggleCallback}
              statusCode={errData !== undefined ? errData.code : undefined}
            />
            <div className="m-2.5"></div>
            <WeatherInfo data={weatherData.data} toggled={toggled} />
            <div className="m-1.5"></div>
            <WeatherDailyInfo data={weatherData.data} toggled={toggled} />
            <div className="m-1"></div>
            <WeatherWeeklyInfo data={weatherData.data} toggled={toggled} />
            <div className="m-10"></div>
          </>
        ) : (
          <>
            <div className="m-1"></div>
            <Loading />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
