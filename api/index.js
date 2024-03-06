import { rollup } from 'rollup';
import config from '../rollup.config.mjs';
async function build() {
  const inputOptions = config;
  const outputOptions = config;
  const bundle = await rollup(inputOptions);
  const { output } = await bundle.generate(outputOptions);
  await bundle.close();
  console.log(output);
}
build();
