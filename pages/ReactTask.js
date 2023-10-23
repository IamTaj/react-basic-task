import React,{Component} from "react";
import "./payment.css"


class ReactTask extends Component{
    constructor(props){
        super(props);
        this.state ={
            plotno: "",
            street: "",
            landmark: "",
            city: "",
            state: "",
            pincode: "",
            country: "",
            formErrors:{
                plotno: "",
                street: "",
                landmark: "",
                city: "",
                state: "",
                pincode: "",
                country: "",
            },
        }
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
      }



    render(){
        return(
            <>
    <div className="container">
      <div className='form'>
        <div className="address">
        <h2>ADDRESS FORM</h2>
        <form action="">
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Plot No</label>
            <input type="text" className="form-control" id="plotno" name='plotno' value={this.state.plotno} placeholder="Plotno" required/>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Street</label>
            <input type="text" className="form-control" id="street" placeholder="Street" value={this.state.street}/>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">LandMark</label>
            <input type="text" className="form-control" id="landmark" placeholder="LandMark" value={this.state.landmark}/>
            <h1>Please ener correct landmark/correct format</h1>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">City</label>
            <input type="text" className="form-control" id="city" placeholder="City" value={this.state.city}/>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">State</label>
            <input type="text" className="form-control" id="state" placeholder="State" value={this.state.state}/>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Pincode</label>
            <input type="text" className="form-control" id="pincode" placeholder="Pincode" value={this.state.pincode}/>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Country</label>
            <input type="text" className="form-control" id="country" placeholder="Country" value={this.state.country} />
            </div>
            <button type="submit" id='submit' className="btn btn-primary">Set Address</button>
        </form>
        </div>

        <div className="credit">
        <h2>CARD DETAILS</h2>
        <form action="">
        <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Card Number</label>
            <input type="text" className="form-control" id="plotno" placeholder="Card Number" />
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">CVV</label>
            <input type="text" className="form-control" id="street" placeholder="CVV"/>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Expiry</label>
            <input type="text" className="form-control" id="landmark" placeholder="Card Expiry Date"/>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Card Holder Name</label>
            <input type="text" className="form-control" id="city" placeholder="Card Holder Name"/>
            <button type="submit" id='submit' className="btn btn-primary">Add Card Details</button>
            </div>
            </form>
          </div>
      </div>
      <div className="card-display">

            <p>Card Details Here</p>

      </div>
    </div>
    </>
        )
    }
}
export default ReactTask;