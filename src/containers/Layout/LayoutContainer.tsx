import React, { ReactNode } from 'react';

import Navbar from '../Navigation/Navbar';
import Footer from '../../components/Footer';
import SEOTag from '../../components/SEOTag';

interface LayoutProps {
  seoTitle?: string;
  children: ReactNode;
}

export default function Layout({ seoTitle, children }: LayoutProps) {
  return (
    <div className=" dark:bg-gray-800">
      <SEOTag title={seoTitle} />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
