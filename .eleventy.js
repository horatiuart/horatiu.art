module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/CNAME');

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            data: '_data',
            output: '_site',
        },
        passthroughFileCopy: true,
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    }
}
