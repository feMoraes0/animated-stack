import React from 'react';
import './Home.css';

function Home() {
  function handleAnimations() {
    const card = document.getElementsByClassName('card1')[0];
    const card2 = document.getElementsByClassName('card2')[0];
    const card3 = document.getElementsByClassName('card3')[0];
    const card4 = document.getElementsByClassName('card4')[0];
    if (card != null) {
      card.classList.add('card-depois');
      setInterval(() => {
        card.classList.remove('card-depois');
      }, 1500);
      setInterval(() => {
        card.classList.replace('card1', 'card4');
        card2.classList.replace('card2', 'card1');
        card3.classList.replace('card3', 'card2');
        card4.classList.replace('card4', 'card3');
      }, 1000);
    }


    console.log(card);
  }

  return (
    <div className='home-body'>
      <button onClick={() => handleAnimations()} type='button'>clique</button>
      <div className='page-card card1'>
        <p>1</p>
      </div>
      <div className='page-card card2'>
        <p>2</p>
      </div>
      <div className='page-card card3'>
        <p>3</p>
      </div>
      <div className='page-card card4'>
        <p>4</p>
      </div>
    </div>
  );
}

export default Home;
