import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {

 const [index, setIndex]= useState(0);
 console.log(people);
 const {id,name,image,job,text} =people[index];

 

 const  checkNumber=(number)=>
{
  console.log(number,"number")
  if(number>people.length-1){
    return 0;
  }
  else if(number<0){
    return people.length-1
  }
  else
  return number;
}

const nextperson =()=>{
setIndex((index)=>{
  let newIndex= index+1;
  return checkNumber(newIndex)
}
)
}

const prevperson=()=>{
  setIndex((index)=>{
    let newIndex= index -1;
    
    return checkNumber(newIndex)
  })
}
const randomPerson =()=>{

  let randomNumber= Math.floor(Math.random()*people.length);
  setIndex(checkNumber(randomNumber));
  if(randomNumber===index){
    randomNumber=index+1
  }
}


  return (
    <article className='review'>
    <div className="img-container">
      <img src={image} alt={name}  className='person-img'/>
      <span className='quote-icon'>
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={nextperson}>
      <FaChevronLeft/>
      </button>
      <button className='next-btn' onClick={prevperson}>
     <FaChevronRight/>
      </button>
    </div>
    <div >
 <button className='random-btn' onClick={randomPerson}>Surprise Me</button>
    </div>
    </article>
  )
};

export default Review;
