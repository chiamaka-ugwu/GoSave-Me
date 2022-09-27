import React from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import Nav from '../components/nav/Nav'

const DashboardPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav className='nav2' />
            <Dashboard />
        </>
    )
}

export default DashboardPage
