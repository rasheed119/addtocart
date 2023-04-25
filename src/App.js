import React from "react";
import "./style.css";
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cart from "./cart.svg";


export default function App() {
  const phone_data=[
    {
      product_image : "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
      product_name : "Apple iPhone 14 Pro Max",
      product_price : "₹1,27,999",
      product_rating : "4.6 out of 5"
    },
    {
      product_image : "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold4-5g-2.jpg",
      product_name : "Samsung Galaxy Z Fold4",
      product_price : "₹1,45,999",
      product_rating : "4.5 out of 5"
    },
    {
      product_image : "https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-1-iv-05.jpg",
      product_name : "Sony Xperia 1 IV",
      product_price : "₹65,600",
      product_rating : "4.4 out of 5"
    },
    {
      product_image : "https://fdn2.gsmarena.com/vv/pics/google/google-pixel7-pro-2.jpg",
      product_name : "Google Pixel 7 Pro",
      product_price : "₹68,800",
      product_rating : "4.4 out of 5"
    }
  ]
  const [count,setcount] = useState(0)
  return (
    <div className="App">
    <div className="cart-value">
        <img src={cart}></img><span>{count}</span>
      </div>  

      <div className="card-container">
      {phone_data.map((product,index)=>(
        <Product
        key={index}
        product = {product}
        count = {count}
        setcount={setcount}
        />
      ))}
      </div>
    </div>
  );
}

function Product({product,count,setcount}){
  const [show,setshow] = useState(true);
  function addtocart(){
    setcount(count + 1);
    setshow(!show)
  }
  function removefromcart(){
    setcount(count - 1);
    setshow(!show)
  }
  return(
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.product_image} />
    <Card.Body className="text-center">
      <Card.Text>{product.product_name}</Card.Text>
      <Card.Text>{product.product_price}</Card.Text>
      <Card.Text>{product.product_rating}</Card.Text>

      {show ?
      <Button onClick={addtocart}
       variant="primary">Add to cart</Button>
       : 
      <Button onClick={removefromcart}
       variant="danger">Remove from Cart</Button>
       }
    </Card.Body>
  </Card>
  )
}
