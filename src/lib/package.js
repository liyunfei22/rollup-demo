import pkg from '../../package.json';
import $ from 'jquery';
export default () => {
  const pkgText = JSON.stringify(pkg);
  const text = 'this is append dom';
  const dom = `
    <p>${text}</p>
    <code>${pkgText}</code>
  `;
  
  $('body').append(dom);
}