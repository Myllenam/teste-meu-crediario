import { Pagination, PaginationItem, styled } from "@mui/material";


const smallPaginatorSize = 25;
const mediumPaginatorSize = 30;

export const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

export const StyledPaginationItem = styled(PaginationItem)<{ currentpage: number }>`
  &.MuiPaginationItem-page,
  &.Mui-selected {
    border: 2px solid ${({ theme }) =>  theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.main};
    font-family: ${({ theme }) => theme.typography.caption.fontFamily};
    font-size: ${({ currentpage }) => (currentpage < 100 ? 12 : 10)}px;
    font-style: normal;
    font-weight: 500;
    height: ${({ currentpage }) =>
      currentpage < 1000 ? smallPaginatorSize : mediumPaginatorSize}px;
    padding: ${({ currentpage }) => (currentpage < 10000 ? 0 : 15)}px;
    letter-spacing: -0.132px;
    line-height: 14px;
    min-width: auto;
    width: ${({ currentpage }) =>
      currentpage < 1000 ? smallPaginatorSize : mediumPaginatorSize}px;
  }

  &.Mui-selected {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.light};
    }
  }
`;
