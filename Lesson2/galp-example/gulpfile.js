const { src, dest } = require('gulp');

const compiler = require('sass');
const createTranslater = require('gulp-sass');

const scssTocss = createTranslater(compiler);

exports.default = async function () {
    console.log("Hello!");
}

exports.copy = async () => {

    return src('./scss/*.scss').pipe(dest('output'));
};

exports.translate = async () => {
    return src('./scss/*.scss').pipe(scssTocss()).pipe(dest('css'));
};
