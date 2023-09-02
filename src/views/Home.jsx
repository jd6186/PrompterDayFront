import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Box, Chip } from "@mui/material";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import classes from "./Home.module.css";
import logo from "../assets/images/logo.svg";
import { useState } from "react";

const categories = [
  {
    id: "전체",
    name: "전체",
  },
  {
    id: "사회",
    name: "사회",
  },
  {
    id: "정치",
    name: "정치",
  },
  {
    id: "엔터",
    name: "엔터",
  },
  {
    id: "경제",
    name: "경제",
  },
  {
    id: "IT",
    name: "IT",
  },
  {
    id: "스포츠",
    name: "스포츠",
  },
];

export default function Home() {
  const navigator = useNavigate();
  const [tab, setTab] = useState("전체");

  const moveToDocs = (id) => {
    navigator("/docs/" + id);
  };

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
        <Typography variant="h3">금융감독원</Typography>
      </div>
      <div className={classes.middleContainer}>
        <div className={classes.speechBubbleTwo} onClick={() => moveToDocs(1)}>
          <Typography variant="h3">연체율 상승</Typography>
        </div>
        <div>
          <div
            className={classes.speechBubbleThree}
            onClick={() => moveToDocs(1)}
          >
            <Typography variant="h3">조선비즈</Typography>
          </div>
          <div
            className={classes.speechBubbleFour}
            onClick={() => moveToDocs(1)}
          >
            <Typography variant="h3">나흘</Typography>
          </div>
        </div>
      </div>
      <div className={classes.middleContainer2}>
        <div className={classes.speechBubbleFive} onClick={() => moveToDocs(1)}>
          <Typography variant="h3">실적 방어</Typography>
        </div>
        <div className={classes.speechBubbleSix} onClick={() => moveToDocs(1)}>
          <Typography variant="h3">대손비용 증가</Typography>
        </div>
      </div>
    </div>
  );
}
