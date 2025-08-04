import React, { useEffect } from 'react';

const GoogleAdsBanner = ({ 
  client = "ca-pub-4150861973710697",
  slot = "7633957095",
  format = "auto",
  fullWidthResponsive = true,
  style = { display: "block" },
  className = ""
}) => {
  useEffect(() => {
    try {
      // Push the ad to Google AdSense
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
};

export default GoogleAdsBanner;