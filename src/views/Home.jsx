import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Box, Chip } from "@mui/material";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import classes from "./Home.module.css";
import logo from "../assets/images/logo.svg";
import { useState } from "react";
import data from "../utils/mock";

const categories = [
  {
    id: "all",
    name: "전체",
  },
  {
    id: "politics",
    name: "사회",
  },
  {
    id: "society",
    name: "정치",
  },
  {
    id: "life",
    name: "생활",
  },
  {
    id: "economy",
    name: "경제",
  },
  {
    id: "science",
    name: "과학",
  },
];

export default function Home() {
  const navigator = useNavigate();
  const [tab, setTab] = useState("all");

  const moveToDocs = (id) => {
    navigator("docs/" + id);
  };

  const keywords = data[tab];

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <img src={logo} alt="logo" />
        <SearchIcon sx={{ fontSize: 30 }} />
      </Box>

      <Typography
        variant="h2"
        gutterBottom
        sx={{
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        Now
        <br />
        Hot Keywords
      </Typography>
      <Box className={classes.chipContainer}>
        {categories.map((category) => (
          <Chip
            label={category.name}
            variant="outlined"
            className={classes.chip}
            key={category.id}
            onClick={() => setTab(category.id)}
            sx={{
              color: tab === category.id ? "#FFF" : "#888888",
              borderColor: tab === category.id ? "#FFF" : "#888888",
            }}
          />
        ))}
      </Box>
      <div className={classes.speechBubbleOne} onClick={() => moveToDocs(1)}>
        <Typography variant="h3">{keywords[0]}</Typography>
      </div>
      <div className={classes.middleContainer}>
        <div className={classes.speechBubbleTwo} onClick={() => moveToDocs(1)}>
          <Typography variant="h3">{keywords[1]}</Typography>
        </div>
        <div>
          <div
            className={classes.speechBubbleThree}
            onClick={() => moveToDocs(1)}
          >
            <Typography variant="h3">{keywords[2]}</Typography>
          </div>
          <div
            className={classes.speechBubbleFour}
            onClick={() => moveToDocs(1)}
          >
            <Typography variant="h3">{keywords[3]}</Typography>
          </div>
        </div>
      </div>
      <div className={classes.middleContainer2}>
        <div className={classes.speechBubbleFive} onClick={() => moveToDocs(1)}>
          <Typography variant="h3">{keywords[4]}</Typography>
        </div>
        <div className={classes.speechBubbleSix} onClick={() => moveToDocs(1)}>
          <Typography variant="h3">{keywords[5]}</Typography>
        </div>
      </div>
    </div>
  );
}
