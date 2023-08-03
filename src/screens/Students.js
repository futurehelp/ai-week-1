import { useNavigate } from "react-router-dom";
import "../App.css";

export function Students() {
    const navigate = useNavigate();
    return (
      <div className="container">
        <div className="upper">
          <div className="capture">
            <button onClick={() => navigate('/will')}>Will</button>
            <br></br>
            <button onClick={() => navigate('/alex')}>Alex</button>
            <br></br>
            <button onClick={() => navigate('/gray')}>Gray</button>
            <br></br>
            <button onClick={() => navigate('/devansh')}>Devansh</button>
            <br></br>
            <a href="https://github.com/futurehelp/ai-week-1">github code</a>
          </div>
        </div>
      </div>
    )
}

export default Students;