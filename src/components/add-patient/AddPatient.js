import React, { useState } from 'react';
import './styles/add-patient.css';
import info from '../../assets/images/i-circle.png';
import add from '../../assets/images/add.png';
import Button from '../button/Button';
import supabase from "../../config/supabase";


const AddPatient = () => {
    const [patientData, setPatientData] = useState({});
    const supabse_conn = supabase();
    const addPatient = () => {
        console.log("started");
        console.log(patientData)
        supabse_conn
        .from("patients")
        .select("email")
        .or(
            `email.eq.${patientData.patientEmail}`
        )
        .then((selectRes) => {
            if (selectRes.error == null) {
                if (selectRes.patientData.length < 1) {
                    supabse_conn
                    .from("patients")
                    .insert({
                        name: patientData.patientName,
                        email: patientData.patientEmail,
                        nextOfKin: patientData.nextOfKin,
                        nextOfKinPhone: patientData.nextOfKinPhone,
                        patientData,
                    })
                    .then(() => {
                        // console.log(res.patientData[0]);
                    })
                    .catch((error) => {
                        alert(error);
                    });
                } else {
                    alert("Email already used");
                }
            } else {
                alert("Error occured");
            }
            console.log("done");
        })    
    }

    return (
        <>
            <form className="add-patient" onSubmit={
                (e) => {
                    e.preventDefault();
                    addPatient();
                }} >
                <div className="left">
                    <h3>Add Patient</h3>
                    <p className="bold">Input patients details and illness description</p>
                    <div className='add-patient-form'>
                        <input
                            onChange={(e) => {
                                setPatientData({
                                    ...patientData,
                                    patientName: e.target.value,
                                });
                              }}
                            value={patientData.patientName} 
                            type="text" 
                            name="patient-name" 
                            className='full-width' 
                            placeholder='Patient Name'
                            required
                        />
                        <input 
                            onChange={(e) => {
                                setPatientData({
                                    ...patientData,
                                    patientIllness: e.target.value,
                                });
                              }}
                            value={patientData.patientIllness} 
                            type="text" 
                            name="illness" 
                            className='full-width' 
                            placeholder='Nature of Illness' 
                        />
                        <input
                            onChange={(e) => {
                                setPatientData({
                                    ...patientData,
                                    treatment: e.target.value,
                                });
                              }}
                            value={patientData.treatment} 
                            type="text" 
                            name="treatment" 
                            className='full-width' 
                            placeholder='Treatment Required' 
                        />
                        <textarea
                            onChange={(e) => {
                                setPatientData({
                                    ...patientData,
                                    description: e.target.value,
                                });
                              }}
                            value={patientData.description}
                            name="description" 
                            rows="5" 
                            className='full-width' 
                            placeholder='Description of Illness'>
                        </textarea>
                        <input
                            onChange={(e) => {
                                setPatientData({
                                    ...patientData,
                                    patientEmail: e.target.value,
                                });
                              }}
                            value={patientData.patientEmail} 
                            type="email" 
                            name="email" 
                            className='full-width' 
                            placeholder='Email Address' 
                        />
                        <select 
                            onChange={(e) => {
                                setPatientData({
                                    ...patientData,
                                    patientLocation: e.target.value,
                                });
                              }}
                            value={patientData.patientLocation}
                            name="location" 
                            className='select-location2'>
                            <option value="none">Location</option>
                            <option value="Abia">Abia</option>
                            <option value="Adamawa">Adamawa</option>
                            <option value="Akwa-Ibom">Akwa-Ibom</option>
                            <option value="Anambra">Anambra</option>
                            <option value="Bauchi">Bauchi</option>
                            <option value="Bayelsa">Bayelsa</option>
                            <option value="Benue">Benue</option>
                            <option value="Borno">Borno</option>
                            <option value="Cross River">Cross River</option>
                            <option value="Delta">Delta</option>
                            <option value="Ebonyi">Ebonyi</option>
                            <option value="Edo">Edo</option>
                            <option value="Ekiti">Ekiti</option>
                            <option value="Enugu">Enugu</option>
                            <option value="FCT">FCT</option>
                            <option value="Gombe">Gombe</option>
                            <option value="Imo">Imo</option>
                            <option value="Jigawa">Jigawa</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Kano">Kano</option>
                            <option value="Katsina">Katsina</option>
                            <option value="Kebbi">Kebbi</option>
                            <option value="Kogi">Kogi</option>
                            <option value="Kwara">Kwara</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Nassarawa">Nassarawa</option>
                            <option value="Niger">Niger</option>
                            <option value="Ogun">Ogun</option>
                            <option value="Ondo">Ondo</option>
                            <option value="Osun">Osun</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Plateau">Plateau</option>
                            <option value="Rivers">Rivers</option>
                            <option value="Sokoto">Sokoto</option>
                            <option value="Taraba">Taraba</option>
                            <option value="Yobe">Yobe</option>
                            <option value="Zamfara">Zamfara</option>
                        </select>
                        <div className="input-group">
                            <div className="money money2">
                                <select 
                                    onChange={(e) => {
                                        setPatientData({
                                            ...patientData,
                                            currency: e.target.value,
                                        });
                                    }}
                                    value={patientData.currency} 
                                    name="currency">
                                    <option value="₦">₦</option>
                                    <option value="$">$</option>
                                    <option value="€">€</option>
                                    <option value="£">£</option>
                                </select>
                                <input
                                    onChange={(e) => {
                                        setPatientData({
                                            ...patientData,
                                            amount: e.target.value,
                                        });
                                    }}
                                    value={patientData.amount} 
                                    type="text" 
                                    name="amount" 
                                    className='amount2' 
                                    placeholder='Amount' />
                            </div>
                            <select
                                onChange={(e) => {
                                    setPatientData({
                                        ...patientData,
                                        deadline: e.target.value,
                                    });
                                    }}
                                value={patientData.deadline} 
                                className='deadline' 
                                name="deadline">
                                <option value="">Deadline</option>
                                <option value="Oct. 2022">Oct. 2022</option>
                                <option value="Nov. 2022">Nov. 2022</option>
                                <option value="Dec. 2022">Dec. 2022</option>
                            </select>
                            <img src={info} className='info' alt="info" />
                        </div>
                        <p className="bold">Patient's next of kin details</p>
                        <input
                            onChange={(e) => {
                                setPatientData({
                                    ...patientData,
                                    nextOfKin: e.target.value,
                                });
                                }}
                            value={patientData.nextOfKin} 
                            type="text" 
                            name="next-of-kin-name" 
                            className='full-width' 
                            placeholder='Patient next of kin name' 
                        />
                        <input 
                            onChange={(e) => {
                                setPatientData({
                                    ...patientData,
                                    nextOfKinPhone: e.target.value,
                                });
                                }}
                            value={patientData.nextOfKinPhone} 
                            type="tel" 
                            name="next-of-kin-phone" 
                            className='full-width' 
                            placeholder='Phone number' 
                        />
                        <input
                            onChange={(e) => {
                                setPatientData({
                                    ...patientData,
                                    nextOfKinEmail: e.target.value,
                                });
                                }}
                            value={patientData.nextOfKinEmail} 
                            type="email" 
                            name="next-of-kin-email" 
                            className='full-width' 
                            placeholder='Email Address' 
                        />
                        {/* <Button btnName='Submit' btnClass='form-submit' type='submit' /> */}
                    </div>
                </div>
                <div className="right">
                    <h3>Add Images</h3>
                    <p className="small">Add at least 4 photos for this category <br /> First picture - is the title picture. </p>
                    <div className='patient-images'>
                        <div className="group2">
                            <label for="image1">
                                <input 
                                    type="file" 
                                    name="image1" 
                                    id="image1" 
                                />
                                <img src={add} alt="add" />
                            </label>
                            <label for="image2">
                                <input 
                                    type="file" 
                                    name="image2" 
                                    id="image2" 
                                />
                                <img src={add} alt="add" />
                            </label>
                            <label for="image3">
                                <input 
                                    type="file" 
                                    name="image3" 
                                    id="image3" 
                                />
                                <img src={add} alt="add" />
                            </label>
                            <label for="image4">
                                <input 
                                    type="file" 
                                    name="image4" 
                                    id="image4" 
                                />
                                <img src={add} alt="add" />
                            </label>
                        </div>
                        <p>Each picture must not exceed 5 Mb <br /> Supported formats are *.jpg and *.png </p>
                        <Button btnName='Submit' btnClass='form-submit2' type='submit' />
                    </div>                    
                </div>
            </form>
        </>
    )
}

export default AddPatient
