import React, { useContext } from "react";

import BodyPart from "./BodyPart";
import { Box, Typography } from "@mui/material";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
function HorizontalScrollBar({ data, selectedBodyPart, setSelectedBodyPart }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((bodypart) => (
        <Box
          key={bodypart.id || bodypart}
          title={bodypart.id || bodypart}
          itemId={bodypart.id || bodypart}
          m="0 40px"
        >
          <BodyPart
            bodypart={bodypart}
            selectedBodyPart={selectedBodyPart}
            setSelectedBodyPart={setSelectedBodyPart}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScrollBar;
