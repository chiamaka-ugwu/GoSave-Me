import React from "react";
import "./styles/signup2.css";
import Button1 from "../../components/button/Button";
import notice from "../../assets/images/notice.png";

import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

const Signup2 = ({ action, data, setData }) => {
    window.scroll(0, 0)

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
        //   if (info.file.status === 'done') {
        //     message.success(`${info.file.name} file uploaded successfully`);
        //   } else if (info.file.status === 'error') {
        //     message.error(`${info.file.name} file upload failed.`);
        //   }
        },
    };

    return (
        <>
            <h4 className="signup-h4">Sign Up to Get Started</h4>
            <div className="notice-cont">
                <img src={notice} alt="notice" />
                <p className="notice-text">
                In order to protect our life savers, only <b>Hospitals</b> can create
                accounts and add patients. If you are an individual, kindly contact
                the hospital administering treatment for assistance.
                </p>
            </div>
            <div className="linked-btns">
                <b
                    onClick={() => {
                        action(1);
                    }}
                    >
                    <button type="button" className="link-btn active">
                        1
                    </button>
                </b>
                <div className="line active"></div>
                <b
                    onClick={() => {
                        action(2);
                    }}
                    >
                    <button type="button" className="link-btn active">
                        2
                    </button>
                </b>
                <div className="line"></div>
                <b
                    onClick={() => {
                        action(3);
                    }}
                    >
                    <button type="button" className="link-btn">
                        3
                    </button>
                </b>
            </div>
            <h4 className="title">Additional Organisation Info</h4>
            <h5 className="instruction">
                Additional details about your organisation
            </h5>
            <h5 className="bank">Bank account details</h5>
            <div className="account-box">
                <input
                    onChange={(e) => {
                        setData({
                            ...data,
                            accountName: e.target.value,
                        });
                    }}
                    value={data.accountName}
                    type="text"
                    name="account-name"
                    placeholder="Account Name"
                    className="login-input account"
                    />
                <input
                    onChange={(e) => {
                        setData({
                            ...data,
                            accountNumber: e.target.value,
                        });
                    }}
                    value={data.accountNumber}
                    type="text"
                    name="account-number"
                    placeholder="Account Number"
                    className="login-input account2"
                />
            </div>
            <select 
                onChange={(e) => {
                    setData({
                        ...data,
                        bankName: e.target.value,
                    });
                }}
                value={data.bankName}
                name="bank-name" 
                className="bank-name"
                >
                <option value="Bank Name">Bank Name</option>
                <option value="First Bank" name="First Bank">First Bank PLC</option>
                <option value="UBA" name="UBA">United Bank for Africa</option>
            </select>
            <h5 className="bank">Optional Info</h5>
            <div className="account-box more-info">
                <input
                    onChange={(e) => {
                        setData({
                            ...data,
                        orgURL: e.target.value,
                        });
                    }}
                    value={data.orgURL}
                    type="text"
                    name="organisation-url"
                    placeholder="Organisation Website URL"
                    className="login-input account"
                />
                {/* <label for="inputTag" className="account2 hospital-logo">
                    <input type="file" name="hospital-logo" className="file" id='inputTag' />
                    <span>Upload Logo</span>
                    <span id="imageName"></span>
                </label> */}
                <Upload {...props} >
                    <Button className="hospital-logo" icon={<UploadOutlined />}>Upload Logo</Button>
                </Upload>
            </div>
            <h5 className="bank">Social Media Handles</h5>
            <div className="account-box account-box2">
                <input
                    onChange={(e) => {
                        setData({
                            ...data,
                        instagram: e.target.value,
                        });
                    }}
                    value={data.instagram}
                    type="text"
                    name="instagram"
                    placeholder="Instagram"
                    className="login-input social"
                />
                <input
                    onChange={(e) => {
                        setData({
                            ...data,
                        facebook: e.target.value,
                        });
                    }}
                    value={data.facebook}
                    type="text"
                    name="facebook"
                    placeholder="Facebook"
                    className="login-input social"
                />
                <input
                    onChange={(e) => {
                        setData({
                            ...data,
                        twitter: e.target.value,
                        });
                    }}
                    value={data.twitter}
                    type="text"
                    name="twitter"
                    placeholder="Twitter"
                    className="login-input social"
                />
            </div>
            <div className="login-btn-cont signup-btn-cont">
                <p 
                    onClick={() => {
                        action(1);
                    }}
                    className="prev"
                    >
                    Previous
                </p>
                <Button1
                    btnName="Continue"
                    btnClass="continue-btn"
                    onClick={() => {
                        action(3);
                    }}
                />
            </div>
        </>
    );
};

export default Signup2;
