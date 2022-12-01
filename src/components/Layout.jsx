import { Outlet, Link } from "react-router-dom";
import '../components/Layout.css'

export const Layout = () => {
  return (
    <>
      <div className="container-layout">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <span>|</span>
            <li><Link to="/quotes">Quotes</Link></li>
            <span>|</span>
            <li><Link to="/characters">Characters</Link></li>
            <span>|</span>
            <li><Link to="/episodes">Episodes</Link></li>
          </ul>
        </nav>
      </div>

      <div className="container-outlet">
      <Outlet />
      </div>
    
    </>
  )
};
