import React from 'react';
import { Link } from 'react-router';

const AppBarContainer = () =>
  <nav>
    <div className="nav-wrapper row small-collapse">
      <div className="small-12">
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
