import React from "react";

const NotifcationHeader = ({ counter, markAsRead }) => {
  return (
    <div className="notifications__header">
      <h3>
        Notifications <span>{counter}</span>
      </h3>
      <div className="mark-read" onClick={markAsRead} role="presentation">
        Mark all as read
      </div>
    </div>
  );
};

export default NotifcationHeader;
