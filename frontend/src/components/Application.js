import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Up from "./Up";
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { SiAdobe } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import "./Application.css";

function Application() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dateBirth, setDateBirth] = useState('');
  const [license, setLicense] = useState('');
  const [socialSecurity, setSocialSecurity] = useState('');
  const [status, setStatus] = useState("--Select Your Status--");
  const [currAddress, setCurrAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [yearsLived, setYearsLived] = useState('');

  const [prevAddress, setPrevAddress] = useState('');
  const [prevCity, setPrevCity] = useState('');
  const [prevState, setPrevState] = useState('');
  const [prevZipCode, setPrevZipCode] = useState('');
  const [prevYearsLived, setPrevYearsLived] = useState('');

  const [currOccupation, setCurrOccupation] = useState('');
  const [currEmployer, setCurrEmployer] = useState('');
  const [empPhoneNumber, setEmpPhoneNumber] = useState('');
  const [yearsWorking, setYearsWorking] = useState('');
  const [empAddress, setEmpAddress] = useState('');
  const [empCity, setEmpCity] = useState('');
  const [empState, setEmpState] = useState('');
  const [empZipCode, setEmpZipCode] = useState('');

  const [prevOccupation, setPrevOccupation] = useState('');
  const [prevEmployer, setPrevEmployer] = useState('');
  const [prevEmpPhoneNumber, setPrevEmpPhoneNumber] = useState('');
  const [prevYearsWorking, setPrevYearsWorking] = useState('');
  const [prevEmployerAddress, setPrevEmployerAddress] = useState('');
  const [prevEmpCity, setPrevEmpCity] = useState('');
  const [prevEmpState, setPrevEmpState] = useState('');
  const [prevEmpZipCode, setPrevEmpZipCode] = useState('');

  const [totalGrossIncome, setTotalGrossIncome] = useState('');
  const [residence, setResidence] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [checkingAccount, setCheckingAccount] = useState('');
  const [enterMessage, setEnterMessage] = useState('');

  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contacts');
  };

  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const onChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePhone = (event) => {
    const { value } = event.target;
    setPhone(value);
  };

  const onChangeDateBirth = (event) => {
    setDateBirth(event.target.value);
  };

  const onChangeLicense = (event) => {
    setLicense(event.target.value);
  };

  const onChangeSocialSecurity = (event) => {
    setSocialSecurity(event.target.value);
  };

  const onChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const onChangeCurrAddress = (event) => {
    setCurrAddress(event.target.value);
  };

  const onChangeCity = (event) => {
    setCity(event.target.value);
  };

  const onChangeState = (event) => {
    setState(event.target.value);
  };

  const onChangeZipCode = (event) => {
    setZipCode(event.target.value);
  };

  const onChangeYearsLived = (event) => {
    setYearsLived(event.target.value);
  };

  const onChangePrevAddress = (event) => {
    setPrevAddress(event.target.value);
  };

  const onChangePrevCity = (event) => {
    setPrevCity(event.target.value);
  };

  const onChangePrevState = (event) => {
    setPrevState(event.target.value);
  };

  const onChangePrevZipCode = (event) => {
    setPrevZipCode(event.target.value);
  };

  const onChangePrevYearsLived = (event) => {
    setPrevYearsLived(event.target.value);
  };

  const onChangeCurrOccupation = (event) => {
    setCurrOccupation(event.target.value);
  };

  const onChangeCurrEmployer = (event) => {
    setCurrEmployer(event.target.value);
  };

  const onChangeEmpPhoneNumber = (event) => {
    setEmpPhoneNumber(event.target.value);
  };

  const onChangeYearsWorking = (event) => {
    setYearsWorking(event.target.value);
  };

  const onChangeEmployerAddress = (event) => {
    setEmpAddress(event.target.value);
  };

  const onChangeEmpCity = (event) => {
    setEmpCity(event.target.value);
  };

  const onChangeEmpState = (event) => {
    setEmpState(event.target.value);
  };

  const onChangeEmpZipCode = (event) => {
    setEmpZipCode(event.target.value);
  };

  const onChangePrevOccupation = (event) => {
    setPrevOccupation(event.target.value);
  };

  const onChangePrevEmployer = (event) => {
    setPrevEmployer(event.target.value);
  };

  const onChangePrevEmpPhoneNumber = (event) => {
    setPrevEmpPhoneNumber(event.target.value);
  };

  const onChangePrevYearsWorking = (event) => {
    setPrevYearsWorking(event.target.value);
  };

  const onChangePrevEmpAddress = (event) => {
    setPrevEmployerAddress(event.target.value); 
  };  

  const onChangePrevEmpCity = (event) => {
    setPrevEmpCity(event.target.value);
  };

  const onChangePrevEmpState = (event) => {
    setPrevEmpState(event.target.value);
  };

  const onChangePrevEmpZipCode = (event) => {
    setPrevEmpZipCode(event.target.value);
  };

  const onChangeTotalGrossIncome = (event) => {
    setTotalGrossIncome(event.target.value);
  };

  const onChangeResidence = (event) => {
    setResidence(event.target.value);
  };

  const onChangeSetMonthlyPayment = (event) => {
    setMonthlyPayment(event.target.value); 
  };  

  const onChangeCheckingAccount = (event) => {
    setCheckingAccount(event.target.value);
  };

  const onChangeEnterMessage = (event) => {
    setEnterMessage(event.target.value);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      phone,
      dateBirth,
      license,
      socialSecurity,
      status,
      currAddress,
      city,
      state,
      zipCode,
      yearsLived,
      prevAddress,
      prevCity,
      prevState,
      prevZipCode,
      prevYearsLived,
      currOccupation,
      currEmployer,
      empPhoneNumber,
      yearsWorking,
      empAddress,
      empCity,
      empState,
      empZipCode,
      prevOccupation,
      prevEmployer,
      prevEmpPhoneNumber,
      prevYearsWorking,
      prevEmployerAddress,
      prevEmpCity,
      prevEmpState,
      prevEmpZipCode,
      totalGrossIncome,
      residence,
      monthlyPayment,
      checkingAccount,
      enterMessage
    };

    console.log("Information: ", formData);

    toggleModal();

    fetch('https://national-auto-backup-frontend.onrender.com/applicationmail', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(formData)
    }).then(response => {
      console.log("response", response);
      return response.json();
    }).then(data => {
      console.log("Success", data);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setDateBirth('');
      setLicense('');
      setSocialSecurity('');
      setStatus('');
      setCurrAddress('');
      setCity('');
      setState('');
      setZipCode('');
      setYearsLived('');
    
      setPrevAddress('');
      setPrevCity('');
      setPrevState('');
      setPrevZipCode('');
      setPrevYearsLived('');
    
      setCurrOccupation('');
      setCurrEmployer('');
      setEmpPhoneNumber('');
      setYearsWorking('');
      setEmpAddress('');
      setEmpCity('');
      setEmpState('');
      setEmpZipCode('');
    
      setPrevOccupation('');
      setPrevEmployer('');
      setPrevEmpPhoneNumber('');
      setPrevYearsWorking('');
      setPrevEmployerAddress('');
      setPrevEmpCity('');
      setPrevEmpState('');
      setPrevEmpZipCode('');
    
      setTotalGrossIncome('');
      setResidence('');
      setMonthlyPayment('');
      setCheckingAccount('');
      setEnterMessage('');
    })    
  };

  return (
    <div className="application">
      <div className="the-home-page">
        <div className="navbar-container">
          <div className="navbar-inner">
            <div className="navbar-content">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
      <div className="applynow container">
        <div className="applynow-text">
          <h1>CREDIT APPLICATION</h1>
          <p>Explore multiple options to initiate your vehicle acquisition journey with National Auto. Complete our convenient online Credit Application or download the PDF form for offline submission. For any inquiries, reach out to us now.</p>
          <button className="btn" onClick={handleClick}>CONTACT US NOW</button>
        </div>
      </div>
      <div className="title-container">
        <h1>NATIONAL AUTO LEASING & SALES | CREDIT APPLICATION</h1>
      </div>
      <div className="instructions-form">
        <div className="apply-col">
          <div className="left-section">
            <h3>INSTRUCTIONS</h3>
            <p>With National Auto, you have a few ways of getting started on getting your new vehicle. The simplest and fastest way is to fill out our Credit Application on the right. Once we receive it, we will contact you to get things moving.</p>
            <p>If you don't feel comfortable providing this information online, you can download the PDF form below, fill it out and fax or email it to us. Or, you can simply call us, or stop by our office.</p>
            <p>Whichever way you choose, we will process your request promptly, and in most cases, you can get your vehicle within the same business day.</p>
            <p>For more information, feel free to call us at 818.957.5700</p>
            <div className="download">
              <h3>DOWNLOAD</h3>
              <a className="downloadbtn" href="https://nationalautola.com/NCA1.pdf" type="submit">
                <SiAdobe className="adobe" /> DOWNLOAD PDF
              </a>
            </div>
          </div>
        </div>
        <div className="apply-col second-apply-col">
          <form onSubmit={onSubmitForm}>
            <h2>APPLY FOR CREDIT</h2>
            <div>
              <input 
                placeholder="First Name" 
                type="text"
                name="firstname"
                className="theinput"
                value={firstName}
                onChange={onChangeFirstName}
                required
              />
              <input 
                placeholder="Last Name" 
                type="text"
                name="lastname"
                className="theinput"
                value={lastName}
                onChange={onChangeLastName}
                required
              />
            </div>
            <div>
              <input 
                placeholder="Email Address" 
                type="text"
                name="email"
                className="theinput"
                value={email}
                onChange={onChangeEmail}
                required
              />
              <input 
                placeholder="Phone Number" 
                type="number"
                name="phone"
                className="theinput"
                value={phone}
                onChange={onChangePhone}
                required
              />
            </div>
            <div>
              <input 
                placeholder="Date of Birth (MM/DD/YYYY)" 
                type="text"
                name="datebirth"
                className="theinput"
                value={dateBirth}
                onChange={onChangeDateBirth}
                required
              />
              <input 
                placeholder="Driver's License #" 
                type="text"
                name="license"
                className="theinput"
                value={license}
                onChange={onChangeLicense}
                required
              />
            </div>
            <div>
              <input 
                placeholder="Social Security Number" 
                type="text"
                name="ssn"
                className="theinput"
                value={socialSecurity}
                onChange={onChangeSocialSecurity}
                required
              />
              <select name="status" id="status" className="status" value={status} onChange={onChangeStatus} required>
                <option value="--Select Your Status--">-- Select Your Status --</option>
                <option value="Married">Married</option>
                <option value="Single">Single</option>
                <option value="Divorced">Divorced</option>
              </select>
            </div>
            <div>
              <input 
                placeholder="Current Address" 
                type="text"
                name="curaddress"
                className="theinput"
                value={currAddress}
                onChange={onChangeCurrAddress}
                required
              />
              <input 
                placeholder="City" 
                type="text"
                name="city"
                className="theinput"
                value={city}
                onChange={onChangeCity}
                required
              />
            </div>
            <div>
              <input 
                placeholder="State" 
                type="text"
                name="state"
                className="theinput"
                value={state}
                onChange={onChangeState}
                required
              />
              <input 
                placeholder="ZIP Code" 
                type="text"
                name="zipcode"
                className="theinput"
                value={zipCode}
                onChange={onChangeZipCode}
                required
              />
            </div>
            <div>
              <input 
                placeholder="Years Lived There"
                type="text"
                name="yearslived"
                className="theinput lonelyinput"
                value={yearsLived}
                onChange={onChangeYearsLived}
                required
              />
            </div>
            <h5>If less than 5 years, please provide previous address: </h5>
            <div>
              <input 
                placeholder="Previous Address"
                type="text"
                name="prevaddress"
                className="theinput"
                value={prevAddress}
                onChange={onChangePrevAddress}
                required
              />
              <input 
                placeholder="Previous City"
                type="text"
                name="prevcity"
                className="theinput"
                value={prevCity}
                onChange={onChangePrevCity}
                required
              />
            </div>
            <div>
              <input 
                placeholder="Previous State"
                type="text"
                name="prevstate"
                className="theinput"
                value={prevState}
                onChange={onChangePrevState}
                required
              />
              <input 
                placeholder="Previous ZIP Code"
                type="text"
                name="prevzipcode"
                className="theinput"
                value={prevZipCode}
                onChange={onChangePrevZipCode}
                required
              />
            </div>
            <div>
              <input 
                placeholder="Years Lived At Previous Address"
                type="text"
                name="prevyears"
                className="theinput lonelyinput"
                value={prevYearsLived}
                onChange={onChangePrevYearsLived}
                required
              />
            </div>
            <h4>EMPLOYMENT</h4>
            <div>
              <input 
                placeholder="Current Occupation"
                type="text"
                name="curroccupation"
                className="theinput"
                value={currOccupation}
                onChange={onChangeCurrOccupation}
                required
              />
              <input 
                placeholder="Current Employer"
                type="text"
                name="curremployer"
                className="theinput"
                value={currEmployer}
                onChange={onChangeCurrEmployer}
                required
              />
            </div>
            <div>
              <input 
                placeholder="Employer Phone Number"
                type="number"
                name="employeephone"
                className="theinput"
                value={empPhoneNumber}
                onChange={onChangeEmpPhoneNumber}
                required
              />
              <input 
                placeholder="Years Working There"
                type="number"
                name="yearsworking"
                className="theinput"
                value={yearsWorking}
                onChange={onChangeYearsWorking}
                required
              />
            </div>
            <div>
              <input 
                placeholder="Employer's Address"
                type="text"
                name="employeraddress"
                className="theinput"
                value={empAddress}
                onChange={onChangeEmployerAddress}
                required
              />
              <input 
                placeholder="City"
                type="text"
                name="employercity"
                className="theinput"
                value={empCity}
                onChange={onChangeEmpCity}
                required
              />
            </div>
            <div>
              <input 
                placeholder="State"
                type="text"
                name="employerstate"
                className="theinput"
                value={empState}
                onChange={onChangeEmpState}
                required
              />
              <input 
                placeholder="ZIP Code"
                type="text"
                name="employerzipcode"
                className="theinput"
                value={empZipCode}
                onChange={onChangeEmpZipCode}
                required
              />
            </div>
            <h5>If less than 5 years, please provide previous employment: </h5>
            <div>
              <input 
                placeholder="Previous Occupation"
                type="text"
                name="prevoccupation"
                className="theinput"
                value={prevOccupation}
                onChange={onChangePrevOccupation}
                required
              />
              <input 
                placeholder="Previous Employer"
                type="text"
                name="prevemployeer"
                className="theinput"
                value={prevEmployer}
                onChange={onChangePrevEmployer}
                required
              />
            </div>
            <div>
              <input 
                placeholder="Previous Employer Phone Number"
                type="text"
                name="prevemployerphone"
                className="theinput"
                value={prevEmpPhoneNumber}
                onChange={onChangePrevEmpPhoneNumber}
                required
              />
              <input 
                placeholder="Years Working There"
                type="text"
                name="yearsworking"
                className="theinput"
                value={prevYearsWorking}
                onChange={onChangePrevYearsWorking}
                required
              />
            </div>
            <div>
              <input 
                placeholder="Previous Employer's Address"
                type="text"
                name="prevemployeraddress"
                className="theinput"
                value={prevEmployerAddress}
                onChange={onChangePrevEmpAddress}
                required
              />
              <input 
                placeholder="City"
                type="text"
                name="prevcity"
                className="theinput"
                value={prevEmpCity}
                onChange={onChangePrevEmpCity}
                required
              />
            </div>
            <div>
              <input 
                placeholder="State"
                type="text"
                name="prevstate"
                className="theinput"
                value={prevEmpState}
                onChange={onChangePrevEmpState}
                required
              />
              <input 
                placeholder="ZIP Code"
                type="text"
                name="prevzipcode"
                className="theinput"
                value={prevEmpZipCode}
                onChange={onChangePrevEmpZipCode}
                required
              />
            </div>
            <h4>FINANCIAL INFORMATION</h4>
            <div>
              <input 
                placeholder="Total Monthly Gross Income"
                type="text"
                name="totalgrossincome"
                className="theinput"
                value={totalGrossIncome}
                onChange={onChangeTotalGrossIncome}
                required
              />
              <input 
                placeholder="Residence: (Own, Rent, Other)"
                type="text"
                name="residence"
                className="theinput"
                value={residence}
                onChange={onChangeResidence}
                required
              />
            </div>
            <div>
              <input 
                placeholder="Rent or Mortgage Monthly Payment"
                type="text"
                name="rentmortagemonthly"
                className="theinput"
                value={monthlyPayment}
                onChange={onChangeSetMonthlyPayment}
                required
              />
              <input 
                placeholder="Checking Account With"
                type="text"
                name="checkingaccount"
                className="theinput"
                value={checkingAccount}
                onChange={onChangeCheckingAccount}
                required
              />
            </div>
            <div>
              <textarea name="message" className="the-text-message" rows="3" value={enterMessage} onChange={onChangeEnterMessage} placeholder="Enter Your Message Here"></textarea>
            </div>
            <div className="terms-conditions">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">I authorize National Auto and it's lenders to check and verify my credit. I also agree to be bound by the <a href="/termsconditions" className="terms" target="_blank" rel="noopener noreferrer">Terms of Service and Privacy Policy</a>.</label>
            </div>
            <button type="submit" className="submitbtn">Submit</button>
            {modal && (
              <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                  <div className="check-mark">
                    <IoCheckmarkDoneSharp />
                  </div>
                  <h2>Form Submitted!</h2>
                  <p>Thank you for submitting the inquiry. The request will be reviwed by our administration and we will contact you regarding the further steps!</p>
                  <a className="close-modal" onClick={toggleModal}>
                    <IoMdClose />
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
      <Up />
    </div>
  );
}

export default Application;
