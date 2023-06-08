const {getOptions} = require('loader-utils');
const marked = require("marked");

module.exports = function (source) {
    //注意，不要导出闭包，而要导出函数，webpack的全部配置都在arguments的callee里面
    const options = getOptions(this);
    const content = marked.parse(source);
    const s = encodeURIComponent(content);
    return `module.exports=decodeURIComponent(\`${s}\`)`;
};