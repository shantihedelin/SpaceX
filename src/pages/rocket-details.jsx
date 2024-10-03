import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function RocketDetail() {
  const { id } = useParams(); // hämtar id från url:en
  const rockets = useSelector((state) => state.rockets.rockets);
  const rocket = rockets.find((rocket) => rocket.id === id); // hitta raket baserat på id

  if (!rocket) {
    return <p>Couldn't find rocket.</p>;
  }

  return (
    <div>
      <h1>{rocket.name}</h1>
      <img src={rocket.flickr_images[0]} alt={rocket.name} />
      <p>Date: {rocket.first_flight}</p>
      <p>Cost: ${rocket.cost_per_launch}</p>
      <p>Height: {rocket.height.meters} m</p>
      <p>Success rate: {rocket.success_rate_pct}%</p>
      <p>Description: {rocket.description}</p>
    </div>
  );

}

export default RocketDetail;