import { useDispatch, useSelector } from "react-redux";
import { fetchLaunches } from "../redux/launchesSlice";
import { useEffect } from "react";

function Launches() {
  const dispatch = useDispatch();
  const launches = useSelector((state) => state.launches.launches);
  const launchstatus = useSelector((state) => state.launches.status);
  const error = useSelector((state) => state.launches.error);

  useEffect(() => {
    if (launchstatus === "idle") {
      dispatch(fetchLaunches());
    }
  }, [launchstatus, dispatch]);

  return (
    <div>
      <ul>
        {launches
          .slice()
          .sort((a, b) => new Date(b.date_utc) - new Date(a.date_utc))
          .map((launch) => (
            <li key={launch.id} className="my-8">
              <p>{launch.name}</p>
              <p>{launch.date_utc}</p>
              <img src={launch.links.flickr.original}/>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Launches;
