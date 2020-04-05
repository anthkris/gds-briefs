import React from 'react';

const Nav = () => {
  return (
    <nav className="nav navbar-custom">
      <a className="navbar-brand" href="https://godesignsomething.co">Go Design Something</a>
      <ul className="ml-auto d-flex main-nav">
        <li className="nav-item">
          <a className="nav-link active" href="/">Briefs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://goo.gl/forms/8OjBfa4IOn4Uy7TD2">Suggest a Brief</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
