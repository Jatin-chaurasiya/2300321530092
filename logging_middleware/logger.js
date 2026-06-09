const BASE_URL =
  "http://20.244.56.144/evaluation-service/logs";

export const Log = async (
  stack,
  level,
  packageName,
  message
) => {
  try {
    const token = import.meta.env.access_token;

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });

    const data = await response.json();
    console.log("Log Response:", data);
  } catch (error) {
    console.error("Logger Error:", error);
  }
};