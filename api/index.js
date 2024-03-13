import { rollup } from 'rollup';
import config from '../rollup.config.mjs';

async function build() {
  const inputOptions = {
    input: config.input,
    plugins: config.plugins
  };
  const outputOptions = {
    ...config.output
  };
  const bundle = await rollup(inputOptions);
  const { output } = await bundle.generate(outputOptions);
  await bundle.close();
  // console.log(output);
}
build();
