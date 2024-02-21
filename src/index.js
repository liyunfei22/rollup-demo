import demo from './lib/demo';
import showPackage from './lib/package';
import common from './lib/commonjs';

const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log([...arr1, ...arr2]);
console.log(common.add(1,2));
export async function initDemo () {
  let data = await demo();
  console.log(data);
  showPackage();
}
