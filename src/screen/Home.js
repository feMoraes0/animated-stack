import React from 'react';
import './Home.css';

function Home() {
  const children = ['card-1', 'card-2', 'card-3', 'card-4'];
  const childrenLenght = 4;

  /**
   * @param {List} elements
   * @param {String} currentElementId
   */
  function handleClassesSwapAnimation(elements, currentElementId) {
    const currentElementValue = document.getElementById(currentElementId).classList.value;
    let nextElementValue = currentElementValue.replace(' go-next', '');

    elements.forEach((element) => {
      const elementValue = document.getElementById(element).classList.value;
      document.getElementById(element).classList.value = nextElementValue;
      nextElementValue = elementValue;
    });

    const removeInterval = setInterval(() => {
      document.getElementById(currentElementId).classList.value = nextElementValue;
      document.getElementById(currentElementId).classList.remove('go-next');
      clearInterval(removeInterval);
    }, 250);
  }

  function nextCard() {
    if (children.length === childrenLenght) {
      const actualCard = children.shift();
      const element = document.getElementById(actualCard).classList;

      element.add('go-next');

      const swapInterval = setInterval(() => {
        handleClassesSwapAnimation(children, actualCard);
        children.push(actualCard);
        clearInterval(swapInterval);
      }, 500);
    }
  }

  function previousCard() {
    if (children.length === childrenLenght) {
      const lastCard = children.pop();
      const element = document.getElementById(lastCard).classList;

      element.add('go-next');

      const swapInterval = setInterval(() => {
        handleClassesSwapAnimation(children.reverse(), lastCard);
        children.push(lastCard);
        children.reverse();
        clearInterval(swapInterval);
      }, 500);
    }
  }

  return (
    <div className='home-body'>
      <button onClick={() => nextCard()} type='button'>Go Next</button>
      <button className='back' onClick={() => previousCard()} type='button'>Go Back</button>
      <div id='card-1' className='page-card card1' style={{ backgroundColor: 'red' }}>
        <p>1</p>
      </div>
      <div id='card-2' className='page-card card2' style={{ backgroundColor: 'blue' }}>
        <p>2</p>
      </div>
      <div id='card-3' className='page-card card3' style={{ backgroundColor: 'yellow' }}>
        <p>3</p>
      </div>
      <div id='card-4' className='page-card card4' style={{ backgroundColor: 'white' }}>
        <p>4</p>
      </div>
    </div>
  );
}


export default Home;
