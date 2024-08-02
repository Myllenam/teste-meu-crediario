import { type FC } from "react";

import { StyledPagination, StyledPaginationItem } from "./styled";

export const Pagination: FC<{
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}> = ({ page, totalPages, onChange }) => {
  return (
    <StyledPagination
      data-testid="pagination-component"
      count={totalPages}
      page={page}
      onChange={(e, p) => {
        if (p === page) return;
        onChange(p);
      }}
      renderItem={(item) => <StyledPaginationItem currentpage={item.page as number} {...item} />}
    />
  );
};
