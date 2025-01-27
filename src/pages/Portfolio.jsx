import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <>
      <h2>This is my Portfolio!</h2>
      <div>
        <a href="https://texteditorrr.onrender.com/">
          <img className="project1" src="/assets/project1.jpg" />
        </a>
        <a href="https://github.com/maritzadiaz77/TextEditorrr">
          <br></br>
          <button className="ghbutton">Github Repository</button>
        </a>
      </div>
      <div>
        <a href="https://texteditorrr.onrender.com/">
          <img className="project2" src="/assets/project2.jpg" />
        </a>
        <a href="https://github.com/maritzadiaz77/TextEditorrr">
          <br></br>
          <button className="ghbutton">A Github Repostitory!!</button>
        </a>
      </div>
    </>
  );
}
