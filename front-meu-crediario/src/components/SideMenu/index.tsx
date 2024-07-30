import { FC } from 'react'
import { StyledDrawer } from './styled'
import { Button } from '@mui/material'

export const SideMenu:FC<{onHideSideMenu:()=>void, onShowSideMenu:()=>void, open:boolean}> = ({onHideSideMenu,onShowSideMenu,open}) => {
  return (
    <StyledDrawer
    onClose={onHideSideMenu}
    onOpen={onShowSideMenu}
    open={open}
    variant="temporary"
    anchor="left"
  >
   <Button>ff</Button>
  </StyledDrawer>
  )
}
