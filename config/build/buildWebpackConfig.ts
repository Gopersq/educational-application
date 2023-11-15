import webpack from "webpack"
import { BuildDevServer } from './buildDevServer'
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { buildResolves } from "./buildResolves"
import { BuildOptions } from "./types/config"

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  
  const {
    mode,
    paths,
    isDev
  } = options
  
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[hash].js',
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(),
    plugins: buildPlugins(paths),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? BuildDevServer(options) : undefined
  }
}