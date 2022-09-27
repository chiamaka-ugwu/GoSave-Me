import React from 'react';
import { Link } from 'react-router-dom';
import './styles/admin-dashboard.css';
import Button from '../button/Button';


const FundRequest = ({setPage}) => {
    return (
        <>
            <div className="dashboard admin">
                <div className="left">
                    <div className="dashboard-links admin-links">
                        <p 
                            onClick={() => {
                                setPage(1);
                            }} 
                            className='dashboard-link link2 admin-link'
                        >
                            Hospital
                        </p>
                        <p
                            onClick={() => {
                                setPage(2);
                            }}  
                            className='dashboard-link link2 admin-link'
                        >
                            Overview
                        </p>
                        <p
                            className='dashboard-link link-active admin-link'
                        >
                            Fund Requests
                        </p>
                    </div>
                </div>
                <div className="right">
                    <h3 className='db-h3'>Fund Requests</h3>
                    <div className="table-container table-cont">
                        <div className="table-box">
                            <h4>Full name of the hospital will be here</h4>
                            <div className="box-btns">
                                <Button btnName='Accept' btnClass='accept-btn' />
                                <h4 className='decline'>Decline</h4>
                            </div>
                        </div>
                        <div className="table-box">
                            <h4>Full name of the hospital will be here</h4>
                            <div className="box-btns">
                                <Button btnName='Accept' btnClass='accept-btn' />
                                <h4 className='decline'>Decline</h4>
                            </div>
                        </div>
                        <div className="table-box">
                            <h4>Full name of the hospital will be here</h4>
                            <div className="box-btns">
                                <Button btnName='Accept' btnClass='accept-btn' />
                                <h4 className='decline'>Decline</h4>
                            </div>
                        </div>
                        <div className="table-box">
                            <h4>Full name of the hospital will be here</h4>
                            <div className="box-btns">
                                <Button btnName='Accept' btnClass='accept-btn' />
                                <h4 className='decline'>Decline</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FundRequest
