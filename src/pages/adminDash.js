import React from 'react';
import LoggedInNav from '../components/LoggedInNav';
import Footer from '../components/Footer';
import AdminPage from '../components/AdminDash';

const AdminDash = () => {
    return (
        <>
        <LoggedInNav avatar={localStorage.getItem('avatarLink')}/>
        <AdminPage />
        <Footer/>
        </>
    )
}

export default AdminDash
