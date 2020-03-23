module.exports = {
	siteName: 'PJ Balaoro',
	plugins: [
		{
			use: 'gridsome-plugin-tailwindcss',
			options: {
				tailwindConfig: './tailwind.config.js',
			},
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: './src/data/sketches/*.json',
				typeName: 'Sketch',
				refs: {
					category: {
						typeName: 'SketchCategory',
						create: true,
					},
				},
			},
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'Post',
				baseDir: './src/data/posts',
				path: '*.md',
				pathPrefix: '/post',
				refs: {
					tags: {
						typeName: 'Tag',
						create: true,
					},
					category: {
						typeName: 'Category',
						create: true,
					},
				},
			},
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'Article',
				baseDir: './src/data/articles',
				path: '**/*.md',
				pathPrefix: '/',
			},
		},
	],
	transformers: {
		remark: {},
	},
	chainWebpack: config => {
		config.module
			.rule('postcss')
			.oneOf('normal')
			.use('postcss-loader')
			.tap(options => {
				options.plugins.unshift(...[require('postcss-nested')])
				return options
			})
	},
}
