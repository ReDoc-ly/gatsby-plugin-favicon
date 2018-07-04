import webpack from 'webpack'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

exports.modifyWebpackConfig = ({ config, stage }, { logo, icons, title, background }) => {
  if (stage === 'develop-html' || stage === 'build-html') {
    config.plugin(`Favicon`, FaviconsWebpackPlugin, [
      {
        logo: logo || './src/favicon.png',
        prefix: 'favicons/',
        title,
        background: background || '#fff',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          yandex: true,
          windows: true,
          ...icons,
        },
      },
    ])
  }
}

