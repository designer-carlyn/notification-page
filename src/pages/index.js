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
    let newArr = [...unread];
    newArr.map((item) => {
      return (item.isRead = true);
    });
    setUnread(newArr);
  }

  function markAllAsUnread() {
    let newArr = [...unread];
    newArr.map((item) => {
      return (item.isRead = false);
    });
    setUnread(newArr);
  }

  return (
    <main className="notifications">
      <div className="notifications__holder">
        <NotificationsHeader
          counter={unreadCounter.length}
          markAsRead={markAllAsRead}
          markAsUnread={markAllAsUnread}
        ></NotificationsHeader>
        <div className="notifications__list">
          {notifications.map((notification, index) => {
            return (
              <NotificationsItem
                key={index}
                id={index}
                {...notification}
                clickNotification={(event) => clickNotification(event, index)}
              ></NotificationsItem>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Notification Page</title>;
