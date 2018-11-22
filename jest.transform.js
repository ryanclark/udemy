const typescript = require('typescript');

const tsConfig = require('./tsconfig.json');

module.exports = {
  process(src, path) {
    if (/\.tsx?$/.test(path)) {
      tsConfig.compilerOptions.inlineSourceMap = true;
      tsConfig.compilerOptions.sourceMap = false;
      tsConfig.compilerOptions.module = 'commonjs';

      console.warn(path);

      const transpiled = typescript.transpile(src, tsConfig, 'file.tsx', []);

      console.warn(tsConfig);
      console.warn(transpiled);

      return transpiled;
    }

    return src;
  },
};
