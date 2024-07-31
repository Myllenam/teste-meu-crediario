import { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'

import { Menu } from '../Menu'
import { SideMenu } from '../SideMenu'
import { StyledContainer, StyledContainerMain } from './styled'
import { theme } from 'src/styles/theme'


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
    <StyledContainer data-testid="common-layout"> 
        <Menu onShowSideMenu={onShowSideMenu}  isUpSm={isUpSm}/>
        {!isUpSm && <SideMenu onHideSideMenu={onHideSideMenu} onShowSideMenu={onShowSideMenu} open={showSideMenu} />}
        <StyledContainerMain>
        <Outlet/>
        </StyledContainerMain>
    </StyledContainer>
  )
}
