import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name:"kimchi",
    rating: 3,
    price: 3000
  },
  {
    id:2,
    name:"ice",
    rating: 4,
    price: 3000
  },
  {
    id:3,
    name:"jeon",
    rating: 5,
    price: 3000
  },
  {
    id:4,
    name:"bap",
    rating: 2,
    price: 3000
  },
  {
    id:5,
    name:"kim",
    rating: 5,
    price: 3000
  }
]

function Food({name, OfPrice, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5</h4>
      <h4>Price of the dish is {OfPrice}</h4>
    </div>
  )
}

//isRequired는 무조건 있어야한다!! 만약에 없으면 에러뜸 ! 
//isRequired를 안적으면 object안에 없어도됨
Food.propTypes = {
  name: PropTypes.string.isRequired,
  OfPrice: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
}

function renderFood(dish){
  console.log(dish)
  return <Food key={dish.id} name={dish.name} OfPrice={dish.price} rating = {dish.rating} />
}

function App() {
  return (
    <div className="App">
      {foodILike.map( renderFood )}
    </div>
  );
}

export default App;
