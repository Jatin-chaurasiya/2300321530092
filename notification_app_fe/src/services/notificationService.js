const BASE_URL =
  "http://4.224.186.213/evaluation-service/notifications";

export const fetchNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {

  const token =
    import.meta.env.VITE_ACCESS_TOKEN;

  let url =
    `${BASE_URL}?page=${page}&limit=${limit}`;

  if (type) {
    url += `&notification_type=${type}`;
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};