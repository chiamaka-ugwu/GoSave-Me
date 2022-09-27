import React from 'react';
import Button from '../button/Button';
import './styles/modal.css';

const Modal = ({setModal}) => {
    return (
        <>
            <div className="modal" onClick={() => setModal(false)}>
                <div className="modal-box modal-box1" onClick={(e) => e.stopPropagation()}>
                    <h3>Contribute To Save A Life</h3>
                    <form className='contribution-form'>
                        <input type="text" name='name' className='same-width' placeholder='Name' />
                        <input type="email" name="email" className='same-width' placeholder='Email Address' />
                        <select name="location" className='select-location'>
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
                        <div className="money">
                            <select name="currency">
                                <option value="₦">₦</option>
                                <option value="$">$</option>
                                <option value="€">€</option>
                                <option value="£">£</option>
                            </select>
                            <input type="text" name="amount" placeholder='Amount' />
                        </div>
                        <div className="anonymous">
                            <input type="checkbox" name="checkbox" id="checkbox" checked />
                            <p>Contribute Anonymously</p>
                        </div>
                        <Button btnName='Save a life' btnClass='form-submit1' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Modal
