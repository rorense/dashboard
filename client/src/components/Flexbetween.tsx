import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Reusuable flex box component
const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

export default FlexBetween;