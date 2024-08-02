import { Box, styled, Typography } from "@mui/material";

export const StyledContainer = styled(Box)<{ src: string }>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export const StyledContainerText = styled(Box)`
  width: 100%;
  display: flex;
  padding-top: 70px;
  padding-left: 50px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    justify-content: center;
    padding-left: 0;
  }
`;

export const StyledTypography = styled(Typography)`
  max-width: 550px;
  text-align: center;
  font-size: 48px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 28px;
  }
  ${({ theme }) => theme.breakpoints.down(140)} {
    font-size: 18px;
  }
`;
