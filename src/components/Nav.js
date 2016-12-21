import React from 'react';
import { Link } from 'react-router';

const Nav = () =>
  <nav>
    <div className="nav-wrapper row small-collapse">
      <div className="small-12">
        <div className="nav-links">
          <ul>
            <li><Link to="/">Stream</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="mailto:willchertoff@gmail.com">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>;

export default Nav;
