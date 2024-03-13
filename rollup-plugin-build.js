export default function build() {
  return {
    name: 'build',
    async options(InputOptions) {
      console.log('build_options-->', InputOptions)
    },
    async buildStart (InputOptions) {
      console.log('build_buildStart-->', InputOptions)
    }
  }
}