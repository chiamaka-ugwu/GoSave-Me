import React, { useState } from 'react';
import './styles/contact-us.css';
import contact from '../../assets/images/contact.png';
import Button from '../button/Button';
import whatsapp from '../../assets/images/whatsapp.png';
import phone from '../../assets/images/phone.png';
import supabase from "../../config/supabase";


const ContactUs = () => {
    const [contactData, setContactData] = useState({});
    const supabse_conn = supabase();
    const addContact = () => {
        supabse_conn
          .from("contactUs")
          .insert({
            firstName: contactData.name,
            lastName: contactData.lastName,
            email: contactData.email,
            description: contactData.description,
            metadata: { ...contactData},
          })
          .then((res) => {
            console.log(res);
            // setModal(false);
            // setalert(true)
          })
          .catch((error) => {
            alert(error);
          });
      };
    return (
        <>
            <div className="contact-us">
                <div className="left">
                    <div className="contact-img">
                        <img src={contact} alt="contact" />
                    </div>
                    {/* <div className="contact-links">
                        <img src={whatsapp} alt="whatsapp" />
                        <img src={phone} alt="phone" />
                    </div> */}
                </div>
                <div className="right">
                    <h1 className='touch'>Get in touch</h1>
                    <p>Have an inquiry or some feedback for us? <br /> 
                        Fill out the form below to contact our team.
                    </p>
                    <form 
                        onSubmit={(e)=> {
                            e.preventDefault();
                            console.log('Started');
                            console.log(contactData);
                            addContact();
                            console.log('Done');
                        }}
                        className='contact-form'
                    >
                        <div className="contact-name">
                            <input 
                                onChange={(e) => {
                                    setContactData({
                                        ...contactData,
                                        name: e.target.value,
                                    });
                                }}
                                value={contactData.name}
                                type="text" 
                                name='name'
                                placeholder='First Name' 
                            />
                            <input
                                onChange={(e) => {
                                    setContactData({
                                        ...contactData,
                                        lastName: e.target.value,
                                    });
                                }}
                                value={contactData.lastName}
                                type="text" 
                                name='lastName'
                                placeholder='Last Name' 
                            />
                        </div>
                        <input 
                            onChange={(e) => {
                                setContactData({
                                    ...contactData,
                                    email: e.target.value,
                                });
                            }}
                            value={contactData.email}
                            type="text"
                            name='email' 
                            className='email' 
                            placeholder='Email Address' 
                        />
                        <textarea
                            onChange={(e) => {
                                setContactData({
                                    ...contactData,
                                    description: e.target.value,
                                });
                            }}
                            value={contactData.description} 
                            name="description" 
                            rows="5" 
                            placeholder='Description of Illness'>
                        </textarea>
                        <Button type='submit' btnName='Contact Us' />
                    </form>
                </div>
            </div> 
        </>
    )
}

export default ContactUs
