import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ensures page scrolls to top on navigation between routes.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};
