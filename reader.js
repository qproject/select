require('./select.styl');
module.exports = {
    template: require('./select.jade'),
    imports(data) {
        return data;
    },
    exports(scope) {
        return scope;
    }
};