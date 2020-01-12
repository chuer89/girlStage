import { resolve } from 'path'
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       { path: '/', component: '../pages/index' }
  //     ]
  //   }
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      // dynamicImport: { webpackChunkName: true },
      title: 'girlStage',
      dll: true,
      hardSource: false,
      // locale: {
      //   enable: true,
      //   default: 'en-US',
      // },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
          /config\//,
        ],
      },
    }],
  ],
  targets: {
    ie: 9,
  },
  hash: true,
  alias: {
    '@config': resolve(__dirname,"./src/config"),
    '@common': resolve(__dirname,"./src/common"),
    '@utils': resolve(__dirname,"./src/utils"),
    '@themes': resolve(__dirname, './src/themes'),
    '@services': resolve(__dirname, './src/services'),
    '@components': resolve(__dirname, './src/components'),
    '@assets': resolve(__dirname, './src/assets'),
  },
  chainWebpack(config, { webpack }) {
    config
      .plugin('env')
      .use(require.resolve('webpack/lib/DefinePlugin'), [{ HOST_ENV: JSON.stringify(process.env.HOST_ENV), }]);
  },
}
