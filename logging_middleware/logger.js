const BASE_URL =
  "http://20.244.56.144/evaluation-service/logs";

export async function Log(
  stack,
  level,
  packageName,
  message,
  token
) {
  try {
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

    console.log("Log Created:", data);

    return data;
  } catch (error) {
    console.error("Logger Error:", error);
  }
}