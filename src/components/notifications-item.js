import React from "react";

const NotificationsItem = ({
  avatar,
  username,
  content,
  topic,
  isRead,
  date,
  comment,
  isComment,
  isNotifImage,
  notifImage,
  notifImageName,
}) => {
  return (
    <div className={"notification-item " + (!isRead ? "unread" : "")}>
      <div className="item-avatar">
        <img src={avatar} alt={username}></img>
      </div>
      <div className="item-content">
        <div className="content-description">
          <span>
            <span className="description-link content-name">{username}</span>{" "}
            {content}
            <span className="description-link content-topic"> {topic}</span>
          </span>
          {!isRead && <span className="status"></span>}
        </div>
        <div className="content-date">{date}</div>
        {isComment && (
          <div className="content-comment">
            <p>{comment}</p>
          </div>
        )}
      </div>
      {isNotifImage && (
        <div className="item-image">
          <img src={notifImage} alt={notifImageName}></img>
        </div>
      )}
    </div>
  );
};

export default NotificationsItem;
