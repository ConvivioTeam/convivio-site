const sass = require('./build-process/sass-process');
const pluginLocalRespimg = require('eleventy-plugin-local-respimg');

module.exports = function (eleventyConfig) {
  // Sass pre-processing
  sass(
    './source/_assets/sass/style.scss',
    './destination/_assets/css/style.css'
  );

  // Aliases
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
  eleventyConfig.addLayoutAlias('full-width', 'layouts/full-width.html');
  eleventyConfig.addLayoutAlias('long-form', 'layouts/long-form.html');

  // Static file passthough
  eleventyConfig.addPassthroughCopy('source/_assets/images');
  eleventyConfig.addPassthroughCopy('source/_assets/js');
  eleventyConfig.addPassthroughCopy('source/_assets/webfonts');
  eleventyConfig.addPassthroughCopy('source/favicon.ico');
  eleventyConfig.addPassthroughCopy('source/favicon-152.png');
  eleventyConfig.addPassthroughCopy('source/robots.txt');

  // Custom markdown library
  let markdownIt = require('markdown-it');
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  let markdownLib = markdownIt(options).disable('code');
  eleventyConfig.setLibrary('md', markdownLib);

  // Custom Liquidjs options
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });

  // Content collections
  // Sort team members by 'order' field
  eleventyConfig.addCollection('team', (collection) => {
    var team = collection.getFilteredByTag('team');
    return utils.sortByOrder(team);
  });

  // Responsive images
  eleventyConfig.addPlugin(pluginLocalRespimg, {
    folders: {
      source: 'source', // Folder images are stored in
      output: 'destination', // Folder images should be output to
    },
    images: {
      resize: {
        min: 100, // Minimum width to resize an image to
        max: 740, // Maximum width to resize an image to
        step: 50, // Width difference between each resized image
      },
      gifToVideo: false, // Convert GIFs to MP4 videos
      sizes: '30vw', // Default image `sizes` attribute
      lazy: true, // Include `loading="lazy"` attribute for images
      // additional: [
      //   // Globs of additional images to optimize (won't be resized)
      //   'images/icons/**/*',
      // ],
      watch: {
        src: 'images/**/*', // Glob of images that Eleventy should watch for changes to
      },
      pngquant: {
        /* ... */
      }, // imagemin-pngquant options
      mozjpeg: {
        /* ... */
      }, // imagemin-mozjpeg options
      svgo: {
        /* ... */
      }, // imagemin-svgo options
      gifresize: {
        /* ... */
      }, // @gumlet/gif-resize options
      webp: {
        /* ... */
      }, // imagemin-webp options
      gifwebp: {
        /* ... */
      }, // imagemin-gif2webp options
    },
  });

  return {
    dir: {
      input: './source',
      output: './destination',
    },
  };
};

const utils = {
  sortByOrder: function (collection) {
    return collection.sort((a, b) => {
      if (a.data.order < b.data.order) return -1;
      else if (a.data.order > b.data.order) return 1;
      else return 0;
    });
  },
};
