module.exports = {
	siteName: 'PJ Balaoro',
	plugins: [
		{
			use: 'gridsome-source-static-meta',
			options: {
				path: 'src/data/site/*.json'
			}
		},
		{
			use: 'gridsome-plugin-tailwindcss',
			options: {
				tailwindConfig: './tailwind.config.js'
			},
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: './src/data/blog/**/*.md',
				typeName: 'Post',
				refs: {
					tags: {
						typeName: 'Tag',
						create: true
					},
					category: {
						typeName: 'Category',
						create: true
					}
				}
			}
		},
		{
			use: '@gridsome/vue-remark',
			options: {
				typeName: 'Article',
				baseDir: './src/data/article',
				template: './src/templates/Article.vue'
			}
		}
	],
	templates: {
		Post: '/post/:fileInfo__name',
		// SitePage: '/:id'
	},
	chainWebpack: config => {
		config.module
			.rule('postcss')
			.oneOf('normal')
			.use('postcss-loader')
			.tap(options => {
				options.plugins.unshift(...[
					require('postcss-nested'),
				])
				return options
			})
	},
};