import React, { useState, useEffect } from "react";
import LoadingComp from "./LoadingComp";

const Loading = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // Set a timer to remove the message from the DOM after 5 seconds.
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    // Clean up the timer when the component unmounts.
    return () => clearTimeout(timer);
  }, []);

  if (showMessage) {
    return <LoadingComp />;
  } else {
    return null;
  }
};

export default Loading;
