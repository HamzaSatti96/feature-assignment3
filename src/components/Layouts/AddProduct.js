import React, { useState } from 'react'
export default function () {
    const [ProductName, setProductName] = useState('Enter Email');
  const [ProductPrice, setProductPrice] = useState('Enter Password');
    let myStyle={
        color:'black',
        backgroundColor:'lightgrey',
             width: '50%',
              margin: 'auto',
              padding: '20px',
              border: '2px solid black',
              borderRadius: '10px',
      }
    //   const handlesubmit = (e) => {
    //     console.log(ProductName);
    //     console.log(ProductPrice);
    //   };
      const getData = async(e) => {
        e.preventDefault();
        console.log(ProductName);
        const options = {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ProductName, ProductPrice }),
        };
        const  res=await fetch('https://cyberfortsolutions-default-rtdb.firebaseio.com/products.json', options);
        console.log(res);
        if (res.status === 0) {
          console.log('Product added');
        }
        else{
            console.log('Product not added');
            }
      };
      const handleProductNameChange = (e) => {
        var val1 = setProductName(e.target.value);
        console.log(val1);
      };
      const handleProductPriceChange = (e) => {
        let val = setProductPrice(e.target.value);
        console.log(val);
      };
  return (
    <div>
        <form onSubmit={getData} style={myStyle}>
  <div className="form-group">
    <label >Productname</label>
    <input type="Productname" className="form-control"  placeholder={ProductName}   onChange={handleProductNameChange}
         />
  </div>
  <div className="form-group">
    <label >Price</label>
    <input type="text" className="form-control"  placeholder={ProductPrice}  onChange={handleProductPriceChange}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  )
}
