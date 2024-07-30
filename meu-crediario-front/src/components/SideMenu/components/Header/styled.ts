import { styled, Box } from "@mui/material";

export const StyledBox = styled(Box)`
  box-shadow: 0px 1px 13px 0px rgba(10, 40, 85, 0.34);
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledBoxImage = styled(Box)<{ src: string }>`
  width: 50%;
`;
