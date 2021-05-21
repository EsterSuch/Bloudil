module.exports = function(eleventyConfig) {
// Výchozí výstupní složka je: _site
// Zkopírovat images/ do _site/images
eleventyConfig.addPassthroughCopy("images");
// Zkopírovat css/ to _site/css/
eleventyConfig.addPassthroughCopy("css");
// Limit pro zobrazení článků na hlavní stránce //
eleventyConfig.addFilter("limit", function (arr, limit) {
  return arr.slice(0, limit)
});

// ...necháme, co už v konfiguraci je, a přidáme:
return {
// možné formáty šablon
templateFormats: ["njk","html", "md", "liquid"],
// jako šablonovací jazyk zvolíme Nunjucks`
markdownTemplateEngine: "njk",
htmlTemplateEngine: "njk",
dataTemplateEngine: "njk",
}
};