interface WeatherWeeklyInfoProps {
  data: any;
  toggled: boolean;
}

const WeatherWeeklyInfo = (props: WeatherWeeklyInfoProps) => {
  function getDateName(dateIn: string) {
    let date = new Date(dateIn);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  }

  return (
    <div className="shadow-lg backdrop-brightness-110 backdrop-blur-3xl bg-white/30 w-full flex-row rounded-lg sm:px-8 px-6 py-5">
      <p className="text-xl sm:text-2xl">3-Day Forecast</p>
      <div className="py-1 sm:py-5 mt-4 sm:px-12 flex justify-center">
        <WeatherColumn
          data={{
            title: "Today",
            icon: props.data.forecast.forecastday[0].day.condition.icon,
            temp: `${
              props.toggled
                ? Math.floor(props.data.forecast.forecastday[0].day.avgtemp_c) +
                  "°c"
                : Math.floor(props.data.forecast.forecastday[0].day.avgtemp_f) +
                  "°f"
            }`,
          }}
        />
        <WeatherColumn
          data={{
            title: getDateName(props.data.forecast.forecastday[1].date),
            icon: props.data.forecast.forecastday[1].day.condition.icon,
            temp: `${
              props.toggled
                ? Math.floor(props.data.forecast.forecastday[1].day.avgtemp_c) +
                  "°c"
                : Math.floor(props.data.forecast.forecastday[1].day.avgtemp_f) +
                  "°f"
            }`,
          }}
        />
        <WeatherColumn
          data={{
            title: getDateName(props.data.forecast.forecastday[2].date),
            icon: props.data.forecast.forecastday[2].day.condition.icon,
            temp: `${
              props.toggled
                ? Math.floor(props.data.forecast.forecastday[2].day.avgtemp_c) +
                  "°c"
                : Math.floor(props.data.forecast.forecastday[2].day.avgtemp_f) +
                  "°f"
            }`,
          }}
        />
      </div>
      <div className="m-3"></div>
    </div>
  );
};

interface WeatherColumnProps {
  data: {
    title: string;
    icon: string;
    temp: string;
  };
}

const WeatherColumn = (props: WeatherColumnProps) => {
  return (
    <div className="flex flex-col content-center items-center mx-2">
      <p className="text-sm sm:text-base">{props.data.title}</p>
      <img src={props.data.icon} alt="" className="w-18" />
      <p className="text-sm sm:text-base">{props.data.temp}</p>
    </div>
  );
};

export default WeatherWeeklyInfo;
