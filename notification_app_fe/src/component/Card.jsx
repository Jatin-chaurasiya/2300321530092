import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function NotificationCard({ item }) {

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>

        <Typography variant="h6">
          {item.Type}
        </Typography>

        <Typography>
          {item.Message}
        </Typography>

        <Typography variant="caption">
          {item.Timestamp}
        </Typography>

      </CardContent>
    </Card>
  );
}

export default NotificationCard;