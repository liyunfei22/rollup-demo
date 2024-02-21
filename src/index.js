import demo from './lib/demo';
import $ from 'jquery';
import pkg from './../package.json';
import './css/index.scss';


const pkgText = JSON.stringify(pkg);
const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log([...arr1, ...arr2]);

export async function initDemo () {
  let data = await demo();
  console.log(data);
}

const text = 'this is append dom';
const dom = `
<p>${text}</p>
<code>${pkgText}</code>
`;

$('body').append(dom);

console.log('render end!')
initDemo();
