// import linkedinlogo from '../assets/linkedinlogo.png';
// import githublogo from '../assets/githublogo.png';
import "./App.css";

export default function Footer() {
  return (
    <>
      <h3>My Links</h3>
      <a href="https://www.linkedin.com/in/maritza-diaz-65379b15a/">
      {/* just add name of image ex: picture.jpg */}
        <img className="icon" title="Linked-In" src="/assets/linkedinlogo" />
      </a>

      <a href="https://github.com/maritzadiaz77">
        <img className="icon" title="GitHub" src="/assets/githublogo"/>
      </a>
    </>
  );
}
