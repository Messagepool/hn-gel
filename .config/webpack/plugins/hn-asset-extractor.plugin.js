const path = require('path');

module.exports = class HnAssetExtractorPlugin {
  static DEFAULT_OPTIONS = {
    paths: [],
    excludeFiles: ['.js', '.css'],
    removeFromBaseOutput: false
  }
  constructor(options = {}){
    this.options = { ...HnAssetExtractorPlugin.DEFAULT_OPTIONS, ...options};
  }
  apply(compiler){
    const pluginName = 'HnAssetExtractorPlugin';
    const { webpack } = compiler;
    const { Compilation } = webpack;
    compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
      compilation.hooks.processAssets.tap({
        name: pluginName,
        stage: Compilation.PROCESS_ASSETS_STAGE_REPORT 
      }, assets => {
        Object.keys(assets)
          .map( asset => {
            const { excludeFiles, paths, removeFromBaseOutput } = this.options;
            if( excludeFiles.includes(path.extname(asset)) ||
              path.dirname(asset) != '.'
            ){
              return;
            }

            paths.forEach( (assetPath) => {
              compilation.emitAsset(
                `${assetPath}${asset}`,
                assets[asset]
              );
            });
          })
      })
    })
  }
}