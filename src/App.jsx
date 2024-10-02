import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRockets } from "./redux/rocketsSlice";
import RocketSlideShow from "./components/RocketSlideShow";

function App() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const rocketStatus = useSelector((state) => state.rockets.status);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    if (rocketStatus === "idle") {
      dispatch(fetchRockets());
    }
  }, [rocketStatus, dispatch]);

  return (
    <>
      <div>
        <ul className="">
          <div className="flex justify-center flex-col">
            {rockets
              .slice()
              .sort(
                (a, b) => new Date(b.first_flight) - new Date(a.first_flight)
              )
              .map((rocket) => (
                <li key={rocket.id} className="bg-green-500 my-8">
                  <p>
                    {rocket.name} <br />
                    Date: {rocket.first_flight} <br />
                    Cost: ${rocket.cost_per_launch} <br />
                    Height of rocket in meter: {rocket.height.meters} m <br />
                    Success rate: {rocket.success_rate_pct}% <br />
                    Description: {rocket.description} <br />
                  </p>

                  <RocketSlideShow images={rocket.flickr_images} />
                </li>
              ))}
          </div>
        </ul>
      </div>
    </>
  );
}

export default App;
