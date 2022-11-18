import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeAdmin from './components/admin/homeAdmin'
import MyInfo from './components/admin/myInfo'
import UsersList from './components/admin/usersList'
import Login from './components/auth/login'
import LoginSign from './components/auth/loginSign'
import SignUp from './components/auth/signUp'
import Verification from './components/auth/verification'
import About from './components/client/about'
import Home from './components/client/home'
import NotFound from './components/notFound'
import Layout from './layout/layout'
import LayoutAdmin from './layoutAdmin/layoutAdmin'
import ToysList from './components/client/toysList' 
import MyToysList from './components/client/myToysList'
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Client Layout */}
                <Route path='/' element={<Layout />}>
                    {/* Outlet */}
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/loginsign' element={<LoginSign />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/verification/:name' element={<Verification />} />
                    <Route path='/myinfo' element={<MyInfo />} />
                    <Route path='/toysList' element={<ToysList />} />
                    <Route path='/mytoysList' element={<MyToysList />} />

                    {/* ******** */}
                </Route>
                
                {/* Admin Layout */}
                <Route path='/admin' element={<LayoutAdmin />}>
                    {/* Outlet */}
                    <Route path='/admin' element={<HomeAdmin />} />
                    <Route path='/admin/usersList' element={<UsersList />} />
                    <Route path='/admin/myinfo' element={<MyInfo />} />
                    <Route path='/admin/toysList' element={<ToysList />} />
                    <Route path='/admin/mytoysList' element={<MyToysList />} />


                    {/* ******** */}
                </Route>
                {/*   (*) => Rest of routes!?!?  */}
                <Route path='*' element={<NotFound />} />

            </Routes>
        </Router>
    )
}

export default AppRoutes