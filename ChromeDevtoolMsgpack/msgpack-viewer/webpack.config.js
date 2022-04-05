module.exports = {
    mode: "none",//可取值包括production development
    entry: {
        'content': './content.js',
        'background': './background.js',
    },
    output: {
        filename: '[name].js'
    }
};