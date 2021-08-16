const esbuild = require('esbuild');
// const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { esbuildDecorators } = require('@anatine/esbuild-decorators');

esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    outdir: 'dist',
    bundle: true,
    platform: 'node',
    sourcemap: true,
    target: 'node14',

    plugins: [esbuildDecorators()],
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
