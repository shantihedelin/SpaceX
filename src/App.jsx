import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRockets } from "./redux/rocketsSlice";

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
        <ul className="bg-pink-400">
          {rockets
            .slice()
            .sort((a, b) => new Date(b.first_flight) - new Date(a.first_flight))
            .map((rocket) => (
              <li key={rocket.id}>
                {rocket.name} <br />
                Date: {rocket.first_flight} <br />
                Cost: ${rocket.cost_per_launch} <br />
                Height of rocket in meter: {rocket.height.meters} m <br />
                Success rate: {rocket.success_rate_pct}% <br />
                Description: {rocket.description} <br />
                <div className="">
                  {rocket.flickr_images
                    .slice()
                    .reverse()
                    .map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${rocket.name} image`}
                      />
                    ))}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
