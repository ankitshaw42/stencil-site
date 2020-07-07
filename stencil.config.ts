import { Config } from '@stencil/core';
import dotenvPlugin from 'rollup-plugin-dotenv';

export const config: Config = {
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://stenciljs.com/',
      prerenderConfig: './prerender.config.ts',
      serviceWorker: {
        unregister: true,
      },
      copy: [
        { src: 'cli.ts.deno', dest: 'cli.ts' },
      ],
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/prerender',
    },
  ],
  globalStyle: 'src/global/style/app.css',
  plugins: [dotenvPlugin()],
};
