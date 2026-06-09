const weight = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const getPriorityNotifications = (
  notifications,
  topN = 10
) => {

  return [...notifications]
    .sort((a, b) => {

      const priority =
        weight[b.Type] - weight[a.Type];

      if (priority !== 0) {
        return priority;
      }

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );
    })
    .slice(0, topN);
};