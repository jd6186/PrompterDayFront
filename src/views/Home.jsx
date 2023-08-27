import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigator = useNavigate();

  const moveToDocs = (id) => {
    navigator("/docs/" + id);
  };

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            초전도체
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              moveToDocs("superconductor");
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            ChatGPT
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              moveToDocs("chatgpt");
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            삼중수소
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              moveToDocs("triplehydrogen");
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
