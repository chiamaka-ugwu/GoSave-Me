import React from 'react'
import AddPatient from '../components/add-patient/AddPatient';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';

const AddPatientPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav className='nav2' />
            <AddPatient />
            {/* <Footer /> */}
        </>
    )
}

export default AddPatientPage
