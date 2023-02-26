import React from "react";

const NotifcationHeader = ({ counter, markAsRead, markAsUnread }) => {
  return (
    <div className="notifications__header">
      <h3>
        Notifications <span>{counter}</span>
      </h3>
      {counter !== 0 ? (
        <div className="mark-read" onClick={markAsRead} role="presentation">
          Mark all as read
        </div>
      ) : (
        <div className="mark-read" onClick={markAsUnread} role="presentation">
          Mark all as unread
        </div>
      )}
    </div>
  );
};

export default NotifcationHeader;
