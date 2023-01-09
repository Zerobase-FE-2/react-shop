import React, { ReactNode } from 'react';

import Navbar from '../Navigation/Navbar';
import Footer from '../../components/Footer';
import SEOTag from '../../components/SEOTag';
import { Link } from 'react-router-dom';

interface LayoutProps {
  seoTitle?: string;
  children: ReactNode;
}

export default function Layout({ seoTitle, children }: LayoutProps) {
  return (
    <div className="drawer dark:bg-gray-800">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <SEOTag title={seoTitle} />

      <div className="drawer-content">
        <Navbar />
        {children}
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu w-80 bg-base-100 p-4 text-base-content">
          <li>
            <Link to={'/accessory'}>악세서리</Link>
          </li>
          <li>
            <Link to={'/fashion'}>패션</Link>
          </li>
          <li>
            <Link to={'/digital'}>디지털</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
