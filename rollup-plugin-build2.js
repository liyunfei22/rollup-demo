export default function build2() {
  return {
    name: 'build2',
    async options (InputOptions) {
      console.log('build2-->', InputOptions)
    },
    async buildStart (InputOptions) {
      console.log('build_buildStart-->', InputOptions)
    },
    async resolveId(source, importer, options) {
      console.log('resolveId--->', source, importer, options)
     }
  }
}