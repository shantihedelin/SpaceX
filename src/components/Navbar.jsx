import { Link } from "react-router-dom";

export default function Navbar() {
  // implement og and metadata here
  return (
    <div className="bg-transparent p-4 px-12">
      <ul className="flex justify-between items-center">
        <h1>SpaceX</h1>
        <div className="flex space-x-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/launches">Launches</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
