import React from 'react';
import { Link } from 'react-router';

const AppBarContainer = () =>
  <nav>
    <div className="nav-wrapper row small-collapse">
      <div className="column small-6">
        <h1 className="logo"><Link to="/">Will Chertoff</Link></h1>
      </div>
      <div className="column small-6">
        <div className="nav-links">
          <ul>
            <li><Link to="/"><img src="/icons/photos.svg" alt="Stream" /></Link></li>
            <li><Link to="/blog"><img src="/icons/blog.svg" alt="Blog" /></Link></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>;

export default AppBarContainer;
