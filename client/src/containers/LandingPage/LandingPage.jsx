import { Link } from "react-router-dom";
import "./LandingPage.css"


export default function LandingPage() {
  return (
    <div >
      <div >
        <h2>Ready to Videogames?</h2>
        <Link to="/home">
          <button type="submit">Enter</button>
        </Link>
      </div>
    </div>
  );
}


