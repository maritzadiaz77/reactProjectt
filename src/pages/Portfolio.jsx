import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <>
      <h2>This is my Portfolio!</h2>
      <div>
        <a href="renderlinkhere/">
          <img className="project1" src="/assets/project1.jpg" />
        </a>
        <a href="githublinkhere">
          <br></br>
          <button className="ghbutton">Github Repostitory</button>
        </a>
      </div>
      <div>
        {/* <a href="renderlinkhereee">
          <img className="portpicture" src={lalogo} />
        </a>
        <a href="githublinkhereee">
          <br></br>
          <button className="ghbutton">A Github Repostitory!!</button>
        </a> */}
      </div>
    </>
  );
}
