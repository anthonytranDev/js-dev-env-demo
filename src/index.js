import numeral from 'numeral';
import './index.css';
/* eslint-disable no-console */
const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`)



const component = () => {
  const div = document.createElement("div");
  const h1 = document.createElement("h1")
  const content = document.createTextNode("Hello World!")
  h1.appendChild(content)
  div.appendChild(h1)
  return div
}

document.body.appendChild(component());
