import React, { useState } from 'react'
import "./flip.css"
import ReactCardFlip from 'react-card-flip';

export default function Flip() {
  const[isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
      setIsFlipped(!isFlipped);
  }
   
  return (
    <>
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
    <div className='card'>
          <div className="flip-card-inner">
            <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Card Number</label>
            <input type="text" maxLength="16" className="form-control" id="cardname" placeholder="Card Number" /*value={data.CardNumber}*/ readOnly/>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Expiry</label>
            <input type="text" className="form-control" id="expiry" placeholder="Card Expiry Date" /*value={data.Expiry}*/ readOnly/>
            </div>
            <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Card Holder Name</label>
            <input type="text" className="form-control" id="chn" placeholder="Card Holder Name" /*value={data.CardHolderName}*/ readOnly/>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">CVV</label>
              <input type="text" maxLength="3" className="form-control" id="cvv" placeholder="CVV" /*value={data.cvv}*/ readOnly/>
            </div>
          </div>
          </div>
          <div>
            <button onClick={handleClick}>Flip</button>
          </div>
    </ReactCardFlip>
    </>
  )
}
