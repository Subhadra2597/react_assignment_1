import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import './Product.css'
function Product(props) {
  return (
      <>
      <div className='product_item'>
    <Card >
      <Card.Img variant="top" src={props.productData.image}/>
      <Card.Body>
        <Card.Title>{props.productData.title}</Card.Title>
        <Card.Text>
        {props.productData.description}
        {props.productData.price}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Product