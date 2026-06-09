import dotenv from "dotenv";
import { Log } from "../logging_middleware/logger.js";

dotenv.config();
const TOKEN = process.env.VITE_ACCESS_TOKEN;

const PRIORITY = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

async function getTopNotifications() {
  try {
    await Log(
      "frontend",
      "info",
      "api",
      "Fetching notifications"
    );

    const response = await fetch(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    const data = await response.json();

    console.log("API RESPONSE:");
    console.log(data);

    const notifications =
      data.notifications || data || [];

    notifications.sort((a, b) => {
      const priorityDiff =
        PRIORITY[b.Type] - PRIORITY[a.Type];

      if (priorityDiff !== 0) {
        return priorityDiff;
      }

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );
    });

    const top10 = notifications.slice(0, 10);

    await Log(
      "frontend",
      "debug",
      "component",
      "Top 10 notifications generated"
    );

    console.log("\n===== TOP 10 =====\n");

    top10.forEach((item, index) => {
      console.log(
        `${index + 1}. ${item.Type} | ${item.Message}`
      );
    });

  } catch (error) {
    await Log(
      "frontend",
      "error",
      "api",
      error.message
    );

    console.error(error);
  }
}

getTopNotifications();