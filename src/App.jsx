import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

function App() {
  const [flashColor, setFlashColor] = useState("");
  const [murderCount, setMurderCount] = useState(0);
  const [violentCrimeCount, setViolentCrimeCount] = useState(0);
  const [rapeCount, setRapeCount] = useState(0);
  const [robberyCount, setRobberyCount] = useState(0);
  const [aggravatedAssaultCount, setAggravatedAssaultCount] = useState(0);
  const [propertyCrimeCount, setPropertyCrimeCount] = useState(0);
  const [burglaryCount, setBurglaryCount] = useState(0);
  const [larcenyTheftCount, setLarcenyTheftCount] = useState(0);
  const [motorVehicleTheftCount, setMotorVehicleTheftCount] = useState(0);

  const flashAndUpdateCount = (setCount, color, interval, length) => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);
      setFlashColor(color);
      setTimeout(() => {
        setFlashColor("");
      }, length || 500);
    }, interval);

    return intervalId;
  };

  useEffect(() => {
    const murderInterval = flashAndUpdateCount(
      setMurderCount,
      "#FF0000",
      32.1 * 60 * 1000,
      2000
    );
    const violentCrimeInterval = flashAndUpdateCount(
      setViolentCrimeCount,
      "#000",
      26.3 * 1000
    );
    const rapeInterval = flashAndUpdateCount(
      setRapeCount,
      "#abbeea",
      3.8 * 60 * 1000,
      2000
    );
    const robberyInterval = flashAndUpdateCount(
      setRobberyCount,
      "#D5842F",
      2 * 60 * 1000
    );
    const aggravatedAssaultInterval = flashAndUpdateCount(
      setAggravatedAssaultCount,
      "#FFC0CB",
      38.5 * 1000
    );
    const propertyCrimeInterval = flashAndUpdateCount(
      setPropertyCrimeCount,
      "#00FF00",
      4.6 * 1000
    );
    const burglaryInterval = flashAndUpdateCount(
      setBurglaryCount,
      "#D5842F",
      28.3 * 1000
    );
    const larcenyTheftInterval = flashAndUpdateCount(
      setLarcenyTheftCount,
      "#D5842F",
      6.2 * 1000
    );
    const motorVehicleTheftInterval = flashAndUpdateCount(
      setMotorVehicleTheftCount,
      "#FF69B4",
      43.8 * 1000
    );

    return () => {
      clearInterval(murderInterval);
      clearInterval(violentCrimeInterval);
      clearInterval(rapeInterval);
      clearInterval(robberyInterval);
      clearInterval(aggravatedAssaultInterval);
      clearInterval(propertyCrimeInterval);
      clearInterval(burglaryInterval);
      clearInterval(larcenyTheftInterval);
      clearInterval(motorVehicleTheftInterval);
    };
  }, []);

  return (
    <div className="h-screen bg-[#101010] w-full font-vt323 text-white flex flex-col items-center justify-center">
      <h1 className="mt-10 title text-6xl bg-gradient-to-r from-[#830dd9] to-pink-500 bg-clip-text text-transparent h-fit">
        shimmer
      </h1>
      <div className="mt-0 flex flex-row items-center justify-center">
        <div className="ml-8 text-white counters-wrapper h-fit border border-white-800 p-2 w-[12vw] mr-20">
          <div className="mb-2 p-1 relative text-white rounded-lg group">
            <div className="absolute w-[10vw] inset-0 rounded-lg bg-gradient-to-r from-[#abbeea] to-[#aaaffd] blur-sm opacity-75 group-hover:opacity-100 transition duration-800 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">rape: {rapeCount}</div>
          </div>
          <div className="mb-2 p-1 relative text-white rounded-lg group">
            <div className="absolute w-[10vw] pr-[4.4vw] inset-0 rounded-lg bg-gradient-to-r from-[#FF0000] to-[#FF3300] blur-sm opacity-75 group-hover:opacity-100 transition duration-800 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">murder: {murderCount}</div>
          </div>
          <div className="mb-2 p-1 relative text-white rounded-lg group">
            <div className="absolute w-[10vw] pr-[4.8vw] inset-0 rounded-lg bg-gradient-to-r from-[#D5842F] to-[#D9A76F] blur-sm opacity-75 group-hover:opacity-100 transition duration-800 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">robbery: {robberyCount}</div>
          </div>
          <div className="mb-2 p-1 relative text-white rounded-lg group">
            <div className="absolute w-[10vw] pr-[5.2vw] inset-0 rounded-lg bg-gradient-to-r from-[#D9A76F] to-[#D5842F] blur-sm opacity-75 group-hover:opacity-100 transition duration-800 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">burglary: {burglaryCount}</div>
          </div>{" "}
          <div className="mb-2 p-1 relative text-white rounded-lg group">
            <div className="absolute w-[10vw] pr-[7.8vw] inset-0 rounded-lg bg-gradient-to-r from-[#D5842F] to-[#D9A76F] blur-sm opacity-75 group-hover:opacity-100 transition duration-800 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">larceny-theft: {larcenyTheftCount}</div>
          </div>
          <div className="mb-2 p-1 relative text-white rounded-lg group">
            <div className="absolute w-[3.5vw] pr-[10vw] inset-0 rounded-lg bg-gradient-to-r from-[#FF69B4] to-[#FF9FD9] blur-sm opacity-75 group-hover:opacity-100 transition duration-800 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">
              vehicle theft: {motorVehicleTheftCount}
            </div>
          </div>
          <div className="mb-2 p-1 relative text-white rounded-lg group">
            <div className="absolute w-[3.5vw] pr-[10vw] inset-0 rounded-lg bg-gradient-to-r from-[#fff] via-[#101010] to-[#fff] blur-sm opacity-75 group-hover:opacity-100 transition duration-800 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">violent crime: {violentCrimeCount}</div>
          </div>
          <div className="mb-2 p-1 relative text-white rounded-lg group">
            <div className="absolute w-[3.5vw] pr-[10vw] inset-0 rounded-lg bg-gradient-to-r from-[#99FF99] to-[#00FF00] blur-sm opacity-75 group-hover:opacity-100 transition duration-800 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">property crime: {propertyCrimeCount}</div>
          </div>
          <div className="mb-2 p-1 relative text-white rounded-lg group">
            <div className="absolute w-[3.5vw] pr-[10vw] inset-0 rounded-lg bg-gradient-to-r from-[#FFC0CB] to-[#FFC9FB] blur-sm opacity-75 group-hover:opacity-100 transition duration-800 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">
              aggravated assault: {aggravatedAssaultCount}
            </div>
          </div>
        </div>
        <div className="map-wrapper h-[80vh] w-[70vw]">
          <ComposableMap projection="geoAlbersUsa" className="h-full">
            <Geographies geography={geoUrl}>
              {({ outline, borders }) => {
                return (
                  <>
                    <Geography
                      geography={outline}
                      fill={flashColor || "#fff"}
                      stroke={"#d2b48c"}
                      className="stroke-1 hover:stroke-[2px] transition ease-in-out duration-200"
                    />
                    <Geography
                      geography={borders}
                      fill="none"
                      stroke={"#fff"}
                      className="transition ease-in-out duration-200"
                    />
                  </>
                );
              }}
            </Geographies>
          </ComposableMap>
        </div>
      </div>

      <footer className="flex flex-col items-center">
        <p className="mb-2 bg-gradient-to-r from-[#830dd9] to-pink-500 bg-clip-text text-transparent h-fit">
          shimmer is made with love by{" "}
          <a
            href="https://github.com/pranavkoirala"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-black rounded-lg px-2 py-1 group"
          >
            <span
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-white to-blue-200 blur-sm opacity-75 group-hover:opacity-100 transition duration-800 group-hover:duration-200 animate-tilt"
              aria-hidden="true"
            ></span>
            <span className="relative">pranav</span>
          </a>
        </p>
        <p className="mb-4 bg-gradient-to-r from-[#830dd9] to-pink-500 bg-clip-text text-transparent">
          data from{" "}
          <a
            href="https://ucr.fbi.gov/crime-in-the-u.s/2019/crime-in-the-u.s.-2019/topic-pages/crime-clock#:~:text=The%20Crime%20Clock%20represents%20the,aggravated%20assault%20every%2038.5%20seconds."
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-black rounded-lg px-2 py-1 mb-4 group"
          >
            <span
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-white to-blue-200 blur-sm opacity-75 group-hover:opacity-100 transition duration-800 group-hover:duration-200 animate-tilt"
              aria-hidden="true"
            ></span>
            <span className="relative">crime clock</span>
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
