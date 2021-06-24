import "../components-style/Launches.css";
import { useState } from "react";

export default function Launches() {
  const [launches, setLaunches] = useState([{ name: "", date: "" }]);
  fetch("https://api.spacexdata.com/v4/launches/upcoming")
    .then((res) => res.json())
    .then((data) => {
      setLaunches(
        data.map((launch) => {
          let dateUTC = new Date(launch.date_utc);
          let date =
            dateUTC.toDateString().slice(4) +
            " at " +
            dateUTC.toTimeString().slice(0, 8);
          return {
            name: launch.name,
            date: date
          };
        })
      );
    });
  return (
    <div className="hero">
      <ul>
        {launches.map((launch, key) => (
          <li key={key} className="launch">
            <span className="name">{launch.name}</span> <br />
            <span className="date">To be launched on {launch.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
