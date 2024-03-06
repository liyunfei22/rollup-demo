import demo from './lib/demo';
import showPackage from './lib/package';
import common from './lib/commonjs';
import {name} from 'module-a';
// import('./msg').then(res => {
//   console.log(res);
// }) 

console.log(common.add(1,2));
export async function initDemo () {
  console.log(name);
  let data = await demo();
  console.log(data);
  showPackage();
}
initDemo();
