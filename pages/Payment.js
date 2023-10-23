import React, { useState } from 'react'
import './payment.css';


export default function Payment() {
  const [errors, setErrors] = useState({});
  const [isFlipped, setIsFlipped] = useState(true);

  
  const [data, setData] = useState(
    { 
      plotno:"", 
      street:"",
      landmark:"",
      city:"",
      state:"",
      pincode:"",
      country:"",
      CardNumber:"", 
      cvv:"",
      Val:"", 
      Expiry:"", 
      CardHolderName:"" 
    })
    const [temp, setTemp] = useState({tmpCardNo:"",tmpCVV:"",tmpVal:"",tmpExpiry:"", tmpCHN:""})

    const CardNo =(x) =>{
      setTemp({
        ...temp,
        tmpCardNo:x.target.value,
      })
    }
    const CVV =(x) =>{
      setTemp({
        ...temp,
        tmpCVV:x.target.value,
      })
    }
    const Val =(x) =>{
      setTemp({
        ...temp,
        tmpVal:x.target.value,
      })
    }
    const Exp =(x) =>{
      setTemp({
        ...temp,
        tmpExpiry:x.target.value,
      })
    }
    const CHN=(x) =>{
      setTemp({
        ...temp,
        tmpCHN:x.target.value,
      })
    }

    const show =(x) =>{
      //console.log(x);
      x.preventDefault();
      setData({
        ...data,
        CardNumber: temp.tmpCardNo,
        cvv: temp.tmpCVV,
        Val: temp.tmpVal,
        Expiry: temp.tmpExpiry,
        CardHolderName: temp.tmpCHN,
      })
    }
    const flip = () =>{
      setIsFlipped(previsFlipped => !previsFlipped);
    }
  
    const validate = () =>{
      const {plotno, street,landmark,city,state,pincode,country} = data;
      const error = {};
      if(!plotno){
        error.plotno = "Please enter a plot number"
      }
      if(!street){
        error.street = "Please provide a street name"
      }
      else if(!/^[A-Za-z]+( [A-Za-z]+)*$/.test(street)){
        error.street = "Please enter a valid street name of 2 words"
      }
      if(!landmark){
        if(landmark.length<3)
        error.landmark = "Please provide a land mark"
      }
      else if(!isNaN(landmark)){
        error.landmark = "Please enter the landmark in alphabets only"
      }
      if(!city){
        error.city = "Please enter a city name"
      }
      else if(city.includes(" ")){
        error.city = " Please enter the city name in one word"
      }
      if(!state){
        error.state = "Please enter a state name"
      }
      else if(!isNaN(state)){
        error.state = "Please enter the state in alphabets"
      }
      if(!pincode){
        error.pincode = "Please enter a pincode"
      }
      else if(isNaN(pincode)){
        error.pincode = "Please enter the pincode in numbers"
      }
      if(!country){
        error.country = "Please enter a valid country"
      }
      else if(!isNaN(country)){
        error.country = "Please enter the country name in alphabets only"
      }
      return error;
    }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setData((formData) => ({ ...formData, [name]: value }));
      setErrors((errors) => ({ ...errors, [name]: "" }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const error = validate();
      setErrors(error);
      if (Object.keys(error).length === 0) {
      
        console.log(data)
      };
    }
  

  return (
    <>
    <div className="container">
      <div className='form'>
        <div className="address">
        <h2>ADDRESS FORM</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Plot No</label>
            <input type="number" className="form-control" id="plotno" name='plotno' placeholder="Plotno" onChange={handleChange}/>
            <p className='error'> {errors.plotno} </p>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Street</label>
            <input type="text" className="form-control" id="street" name='street' placeholder="Street" onChange={handleChange}/>
            <p className="error"> {errors.street} </p>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">LandMark</label>
            <input type="text" className="form-control" id="landmark" name='landmark' placeholder="LandMark" onChange={handleChange}/>
            <p className="error"> {errors.landmark} </p>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">City</label>
            <input type="text" className="form-control" id="city" name='city' placeholder="City"onChange={handleChange}/>
            <p className="error"> {errors.city} </p>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">State</label>
            <input type="text" className="form-control" id="state" name='state' placeholder="State" onChange={handleChange}/>
            <p className="error"> {errors.state} </p>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Pincode</label>
            <input type="text" className="form-control" id="pincode" name='pincode' placeholder="Pincode" onChange={handleChange}/>
            <p className="error"> {errors.pincode} </p>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Country</label>
            <input type="text" className="form-control" id="country" name='country' placeholder="Country" onChange={handleChange}/>
            <p className="error"> {errors.country} </p>
            </div>
            <button type="submit" id='submit' className="btn btn-secondary">Set Address</button>
        </form>
          </div>
        
        <div className="credit">
        <h2>CARD DETAILS</h2>

        <form onSubmit={show}>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Card Number</label>
            <input type="text" minLength={19} maxLength={19} className="form-control" id="cardnumber" placeholder="XXXX XXXX XXXX XXXX" name='cardnumber' pattern='[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}'  onChange={CardNo} required/>
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">CVV</label>
            <input type="text" maxLength={3} className="form-control" id="cvv" placeholder="CVV" onChange={CVV} pattern="[0-9]*"required/>
          </div>
          <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">Valid From</label>
              <input type="text" className="form-control" id="expiry-mm" placeholder="MM/YY" pattern='[0-9]{2}/[0-9]{2}'  onChange={Val} required/>
          </div>
          <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">Expiry</label>
              <input type="text" className="form-control" id="expiry-mm" placeholder="MM/YY" pattern='[0-9]{2}/[0-9]{2}' onChange={Exp} required/>
          </div>
          <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">Card Holder Name</label>
              <input type="text" className="form-control" id="chn" placeholder="Card Holder Name" onChange={CHN} required/>
          </div>
          <button type="submit" id='submit' className="btn btn-secondary">Add Card</button>
        </form>

      </div>
      </div>
      <div className="card-display">
        
        <div className="flip-card">
        <p className="heading"><h4>Virtual Card</h4></p>
        <div className='atmcard'>
          {isFlipped?
          <div className="flip-card-inner">
            <div className="upper">
              <p className='bank-name'>XXXX Bank</p>
              <p className='card-type'>DEBIT CARD</p>
            </div>
            <div className="mid">
              <div className='chip'><img src="https://w7.pngwing.com/pngs/169/83/png-transparent-integrated-circuit-smart-card-card-chip-electronics-text-rectangle.png" height="50px"/></div>
              <div className='logo'><img src="https://www04.wellsfargomedia.com/assets/images/icons/212x131/contactless-indicator_212x131.png" height={"40px"} /></div>
            </div>
            <div className="cardno">
            <input type="text" maxLength={19} className="form-control" id="cardname" placeholder="XXXX XXXX XXXX XXXX" value={data.CardNumber} readOnly/>
            </div>
            <div className="card-valid">
            <div><p className='val'>Valid From : <input className='expiry' placeholder='MM/YY' value={data.Val} readOnly/></p></div>
              <div><p className='exp'>Valid Thru : <input className='expiry' placeholder='MM/YY' value={data.Expiry} readOnly/></p></div>
            </div>
            <div className="chn">
            <input type="text" className="form-control" id="chn" placeholder="Card Holder Name" value={data.CardHolderName.toUpperCase()}readOnly/>
            </div>
            </div>
            :
          <div className="flip-card-back">
            <div className='black-border'>____________________________________</div>
            <br />
            <div className="cvv">
              <div className="bird"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdgSj2JgBBoWEUR49kYkloNEFuxn3ZPUIPw&usqp=CAU" width="45px" /></div>
              <input type="text"  maxLength={3} className="cvv-1" id="cvv" placeholder="CVV" value={data.cvv}  readOnly/>
            </div>
            <div className="down-info">
              <div className="info">This card is the property of XXXX Bank to it must be returned upon request or if found. The use of this card will be governed by our Banking Agreement. If found, please return to any branch of XXXX Bank </div> 
              <div className="help">
                <p>Helpline Numbers:</p>
                <ul>
                  <li>6601 4444/3940 4444 - Ahmedabad,Bengaluru, Chennai, Delhi, Hyderabad, Kolkata, Mumbai, Pune</li>
                  <li>6601 4444 - Allahbad, Amritsar, Bhubneshwar, Indore, Jalandhar, Kanpur, Lucknow, Ludhiana, Patna</li>
                  <li>3940 444 - Bhopal, Chnadigarh, Jaipur, Nagpur, Surat</li>
                  <li>011-6601 4444 - Gurgaon, Noida, Dehradun</li>
                  <li>022-66014444 - Guwahati, Cuttack, Mysore</li>
                </ul> 
              </div>
            </div>
          </div>
          }
          </div>
          
        </div>
     
        <div className='Button'>
        <button onClick={flip} className="btn btn-secondary">Flip</button>
        </div>
      </div>
    </div>
   </>
  )
}

