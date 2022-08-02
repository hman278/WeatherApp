import { useEffect, useState } from "react";

interface HeaderProps {
  data: any;
  inputCallback: (input: string) => void;
  toggleCallback: (toggled: boolean) => void;
  statusCode: string;
}

const Header = (props: HeaderProps) => {
  const [toggled, setToggled] = useState<boolean>(
    localStorage.getItem("toggled") === "true"
  );
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    props.toggleCallback(toggled);
  }, []);

  const getIconColor = () => {
    return props.data.current.condition.icon.includes("day") &&
      props.data !== undefined
      ? "gray"
      : "black";
  };

  const getToggleSwitchColors = () => {
    return props.data.current.condition.icon.includes("day") &&
      props.data !== undefined
      ? "peer-checked:bg-cyan-100 bg-yellow-100"
      : "peer-checked:bg-blue-200 bg-blue-100";
  };

  const getSearchIcon = () => {
    return (
      <div className="absolute px-1 sm:px-2">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-6 h-5"
          color={getIconColor()}
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"> </path>
        </svg>
      </div>
    );
  };

  return (
    <header className="shadow-lg backdrop-brightness-110 backdrop-blur-3xl bg-white/30 rounded-lg py-2.5 px-4 sm:px-5 w-full flex justify-between items-center">
      <h1 className="pl-4 text-lg sm:text-xl">Weather</h1>
      <div className="relative flex items-center w-full mx-5 sm:mx-24">
        {getSearchIcon()}
        <input
          className={`border-2 placeholder:text-xs sm:placeholder:text-sm text-xs sm:text-sm rounded-lg outline-blue-200 bg-white/80 indent-0.5 sm:indent-3 pl-7 pt-2 pb-2 w-full opacity-90 ${
            props.statusCode === "ERR_BAD_REQUEST"
              ? "outline-red-500"
              : "outline-blue-200"
          }`}
          placeholder="Search location..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              props.inputCallback(input);
            }
          }}
        />
      </div>
      <div className="flex justify-end pr-4">
        <label className="w-11">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={(e) => {
              localStorage.setItem("toggled", String(!toggled));
              props.toggleCallback(!toggled);
              setToggled(!toggled);
            }}
            checked={toggled}
          />
          <div
            className={`w-11 h-6 ring-1 ${getToggleSwitchColors()} ring-slate-300 relative rounded-full cursor-pointer peer peer-focus:ring-1 peer-focus:ring-slate-400 peer-checked:after:translate-x-full after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}
          >
            <div className="flex justify-between">
              <p className="pl-1.5 text-sm ">M</p>
              <p className="pr-2.5 text-sm ">I</p>
            </div>
          </div>
        </label>
      </div>
    </header>
  );
};

export default Header;
