import React, { useEffect, useState } from 'react';
import './index.css';
import DOMHelper from '../../services/DOMHelper';
import Animation from '../../services/Animation';
import Cards from '../components/cards';
import Button from '../components/button';

function AnimatedStack() {
  const [cardsId, setCardsId] = useState([]);
  const [numberOfCards, setNumberOfCards] = useState(0);

  useEffect(() => {
    const tempCards = [];
    const listOfChildren = document.getElementById('cards').children;

    for (let i = 0; i < listOfChildren.length; i += 1) {
      tempCards.push(listOfChildren[i].id);
    }

    setCardsId(tempCards);
    setNumberOfCards(listOfChildren.length);
  }, []);

  function nextCard() {
    if (cardsId.length === numberOfCards) {
      const localCards = cardsId;
      const actualCard = localCards.shift();
      const actualCardClassList = DOMHelper.getClassListById(actualCard);

      actualCardClassList.add('go-next');

      const swapInterval = setInterval(() => {
        Animation.handleClassesSwapAnimation(localCards, actualCard, 'go-next', 250);
        localCards.push(actualCard);
        setCardsId(localCards);
        clearInterval(swapInterval);
      }, 500);
    }
  }

  function previousCard() {
    if (cardsId.length === numberOfCards) {
      const localCards = cardsId;
      const lastCard = localCards.pop();
      const actualCardClassList = DOMHelper.getClassListById(lastCard);

      actualCardClassList.add('go-next');

      const swapInterval = setInterval(() => {
        Animation.handleClassesSwapAnimation(localCards.reverse(), lastCard, 'go-next', 250);
        localCards.push(lastCard);
        localCards.reverse();
        setCardsId(localCards);
        clearInterval(swapInterval);
      }, 500);
    }
  }

  return (
    <div className='home-body'>
      <div className='buttons'>
        <Button onPressed={() => nextCard()} text='Next' />
        <Button onPressed={() => previousCard()} text='Previous' />
      </div>
      <div id='cards'>
        <Cards id='card-1' className='card1'>
          <p>1</p>
        </Cards>
        <Cards id='card-2' className='card2'>
          <p>2</p>
        </Cards>
        <Cards id='card-3' className='card3'>
          <p>3</p>
        </Cards>
        <Cards id='card-4' className='card4'>
          <p>4</p>
        </Cards>
      </div>
    </div>
  );
}

export default AnimatedStack;
