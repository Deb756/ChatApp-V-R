import React from 'react'
import App from '../App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/chat' element={<h2>This is Chat page</h2>} />
        </Routes>
    )
}

export default AppRoutes
