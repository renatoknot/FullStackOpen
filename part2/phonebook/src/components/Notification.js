import React from "react";

const Notification = ({ message, type, styles }) => {
  if (message === null || type === null) {
    return null;
  }

  return <div className={styles[type]}>{message}</div>;
};

export default Notification;
