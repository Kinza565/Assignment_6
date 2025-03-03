import React from 'react'
import Link from 'next/link';
const Navbar: React.FC = () => {
  return (
    <nav>
      <nav className="navbar">
        <div className="logo">Kinzah Khan</div>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar