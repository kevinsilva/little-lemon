import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export default function useAnalytics() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    console.log(process.env.REACT_APP_GOOGLE_ANALYTICS_ID)
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Little Lemon" });
  }, []);
}

