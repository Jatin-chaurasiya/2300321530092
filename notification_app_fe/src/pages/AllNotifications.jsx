import { useEffect, useState } from "react";
import { fetchNotifications } from "../services/notificationService";

function AllNotifications() {

  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {

    const loadData = async () => {

      const data =
        await fetchNotifications();

      setNotifications(
        data.notifications || []
      );
    };

    loadData();

  }, []);

  return (
    <>
      <h2>All Notifications</h2>

      {notifications.map((item) => (
        <div key={item.ID}>
          {item.Message}
        </div>
      ))}
    </>
  );
}

export default AllNotifications;