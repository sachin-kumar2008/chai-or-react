import React from 'react'
import Header from './components/header/page'
import Footer from './components/footer/footer'

function Layout() {
    return(
        <>
        <Header/>
        <Outlet/>
        <footer/>
        
        </>
    )
}
export default Layout