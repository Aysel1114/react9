import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to = "/about">About</Link>
        </li>
        <li>
          <Link to = "/projects">Projects</Link>
        </li>
        <li>
          <Link to = "/contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  )
}
