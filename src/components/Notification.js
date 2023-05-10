import React, { useState, useEffect } from "react";

const Notification = ({ message }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`notification ${show ? "show" : ""}`}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
