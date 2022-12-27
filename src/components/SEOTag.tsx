import { Helmet } from 'react-helmet-async';

interface SEOTagProps {
  title?: string;
}

export default function SEOTag({ title }: SEOTagProps) {
  return (
    <Helmet>
      <title>{title ? title : 'REACT-SHOP'}</title>
    </Helmet>
  );
}
