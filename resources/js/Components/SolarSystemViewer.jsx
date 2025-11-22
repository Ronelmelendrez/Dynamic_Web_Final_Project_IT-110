import React, { useEffect, useRef } from "react";

export default function SolarSystemViewer() {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Optional: Add any initialization logic here
    console.log("Solar System Viewer mounted");
  }, []);

  return (
    <div className="w-full h-full relative">
      <iframe
        ref={iframeRef}
        src="/index.html"
        className="w-full h-full border-0"
        title="Solar System Virtual Museum"
        style={{
          background: "transparent",
          minHeight: "500px",
        }}
      />
    </div>
  );
}
