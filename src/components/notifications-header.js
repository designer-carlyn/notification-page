import React from "react";

const NotifcationHeader = ({ counter }) => {
  return (
    <div className="notifications__header">
      <h3>
        Notifications <span>{counter}</span>
      </h3>
      <div className="mark-read">Mark all as read</div>
    </div>
  );
};

export default NotifcationHeader;
