interface WeatherDailyInfoProps {
  data: any;
  toggled: boolean;
}

const WeatherDailyInfo = (props: WeatherDailyInfoProps) => {
  return (
    <div className="shadow-lg backdrop-brightness-110 backdrop-blur-3xl bg-white/30 w-full rounded-lg sm:px-8 px-6 py-5">
      <p className="text-xl sm:text-2xl">Daily Forecast</p>
      <div className="w-full py-1 sm:py-5 mt-4 sm:px-12 flex justify-center">
        <WeatherColumn
          data={{
            title: props.toggled ? "00:00" : "12am",
            icon: props.data.forecast.forecastday[0].hour[0].condition.icon,
            temp: `${
              props.toggled
                ? Math.floor(
                    props.data.forecast.forecastday[0].hour[0].temp_c
                  ) + "°c"
                : Math.floor(
                    props.data.forecast.forecastday[0].hour[0].temp_f
                  ) + "°f"
            }`,
          }}
        />
        <WeatherColumn
          data={{
            title: props.toggled ? "04:00" : "4am",
            icon: props.data.forecast.forecastday[0].hour[4].condition.icon,
            temp: `${
              props.toggled
                ? Math.floor(
                    props.data.forecast.forecastday[0].hour[4].temp_c
                  ) + "°c"
                : Math.floor(
                    props.data.forecast.forecastday[0].hour[4].temp_f
                  ) + "°f"
            }`,
            style: "hidden sm:flex",
          }}
        />
        <WeatherColumn
          data={{
            title: props.toggled ? "08:00" : "8am",
            icon: props.data.forecast.forecastday[0].hour[8].condition.icon,
            temp: `${
              props.toggled
                ? Math.floor(
                    props.data.forecast.forecastday[0].hour[8].temp_c
                  ) + "°c"
                : Math.floor(
                    props.data.forecast.forecastday[0].hour[8].temp_f
                  ) + "°f"
            }`,
          }}
        />
        <WeatherColumn
          data={{
            title: props.toggled ? "12:00" : "12pm",
            icon: props.data.forecast.forecastday[0].hour[12].condition.icon,
            temp: `${
              props.toggled
                ? Math.floor(
                    props.data.forecast.forecastday[0].hour[12].temp_c
                  ) + "°c"
                : Math.floor(
                    props.data.forecast.forecastday[0].hour[12].temp_f
                  ) + "°f"
            }`,
            style: "hidden sm:flex",
          }}
        />
        <WeatherColumn
          data={{
            title: props.toggled ? "16:00" : "4pm",
            icon: props.data.forecast.forecastday[0].hour[16].condition.icon,
            temp: `${
              props.toggled
                ? Math.floor(
                    props.data.forecast.forecastday[0].hour[16].temp_c
                  ) + "°c"
                : Math.floor(
                    props.data.forecast.forecastday[0].hour[16].temp_f
                  ) + "°f"
            }`,
          }}
        />
        <WeatherColumn
          data={{
            title: props.toggled ? "20:00" : "8pm",
            icon: props.data.forecast.forecastday[0].hour[20].condition.icon,
            temp: `${
              props.toggled
                ? Math.floor(
                    props.data.forecast.forecastday[0].hour[20].temp_c
                  ) + "°c"
                : Math.floor(
                    props.data.forecast.forecastday[0].hour[20].temp_f
                  ) + "°f"
            }`,
            style: "hidden sm:flex",
          }}
        />
        <WeatherColumn
          data={{
            title: props.toggled ? "23:00" : "11pm",
            icon: props.data.forecast.forecastday[0].hour[23].condition.icon,
            temp: `${
              props.toggled
                ? Math.floor(
                    props.data.forecast.forecastday[0].hour[23].temp_c
                  ) + "°c"
                : Math.floor(
                    props.data.forecast.forecastday[0].hour[23].temp_f
                  ) + "°f"
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
    style?: string;
  };
}

const WeatherColumn = (props: WeatherColumnProps) => {
  return (
    <div
      className={`flex flex-col content-center items-center mx-1 ${props.data.style}`}
    >
      <p className="text-sm sm:text-base">{props.data.title}</p>
      <img src={props.data.icon} alt="" className="w-18" />
      <p className="text-sm sm:text-base">{props.data.temp}</p>
    </div>
  );
};

export default WeatherDailyInfo;
