/* Import React */
import React, { useState } from "react";

/* Import Components */
import NotificationsHeader from "../components/notifications-header";
import NotificationsItem from "../components/notifications-item";

/* Import Style */
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "../scss/components/index.scss";

/* Import Notifications */
import notifications from "../components/notifications";

const IndexPage = () => {
  const [unread, setUnread] = useState(notifications);

  let unreadCounter = notifications.filter(
    (notification) => notification.isRead === false
  );

  const clickNotification = (event, index) => {
    let newArr = [...unread];
    newArr[index].isRead = true;
    setUnread(newArr);
  };

  function markAllAsRead() {
    unread.map((notification) => {
      return setUnread((notification.isRead = true));
    });
  }

  return (
    <main className="notifications">
      <div className="notifications__holder">
        <NotificationsHeader
          counter={unreadCounter.length}
          markAsRead={markAllAsRead}
        ></NotificationsHeader>
        <div className="notifications__list">
          {notifications.map((notification, index) => {
            return (
              <NotificationsItem
                key={index}
                id={index}
                isRead={notification.isRead}
                username={notification.username}
                avatar={notification.avatar}
                content={notification.content}
                topic={notification.topic}
                date={notification.date}
                comment={notification.comment}
                isComment={notification.isComment}
                isNotifImage={notification.isNotifImage}
                notifImage={notification.notifImage}
                notifImageName={notification.notifImage}
                clickNotification={(event) => clickNotification(event, index)}
              ></NotificationsItem>
            );
          })}
          {/* {notifications.map((notification) => {
            return <h1 key={notification.id}>{notification.name}</h1>;
          })} */}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Notification Page</title>;
