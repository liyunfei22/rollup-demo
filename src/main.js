import foo from './foo.js'
import { version } from '../package.json'
import answer from 'the-answer'
import _ from 'lodash'
// export default function() {
//   console.log('version' + version)
// }
export default () => {
  console.log(`the answer is ${answer}`);
}
