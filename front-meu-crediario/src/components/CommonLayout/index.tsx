import { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'

import { Menu } from '../Menu'
import { StyledContainer, StyledContainerMain } from './styled'
import { SideMenu } from '../SideMenu'
import { theme } from '../../styles/theme'

export const Component:FC = () => {
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const [showSideMenu, setShowSideMenu]=useState(false)
  const onShowSideMenu = ()=>{
    setShowSideMenu(true)
  }

  const onHideSideMenu = ()=>{
    setShowSideMenu(false)
  }
  return (
    <StyledContainer> 
        <Menu onShowSideMenu={onShowSideMenu}  isUpSm={isUpSm}/>
        {!isUpSm && <SideMenu onHideSideMenu={onHideSideMenu} onShowSideMenu={onShowSideMenu} open={showSideMenu} />}
        <StyledContainerMain>
        <Outlet/>
        </StyledContainerMain>
    </StyledContainer>
  )
}
