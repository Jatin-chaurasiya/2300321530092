import { useEffect, useState } from "react";

import { fetchNotifications }
from "../services/notificationService";

import { getPriorityNotifications }
from "../utils/priorityUtils";

function PriorityNotifications() {

  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {

    const loadData = async () => {

      const data =
        await fetchNotifications();

      const top10 =
        getPriorityNotifications(
          data.notifications || []
        );

      setNotifications(top10);
    };

    loadData();

  }, []);

  return (
    <>
      <h2>Top 10 Priority Notifications</h2>

      {notifications.map((item) => (
        <div key={item.ID}>
          {item.Message}
        </div>
      ))}
    </>
  );
}

export default PriorityNotifications;