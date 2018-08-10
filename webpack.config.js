module.exports = 
{
	module:
	{
		rules:
		[
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use:
				{
					loader: 'babel-loader',
          options: 
          {
            presets: ['react']
          }
				}
			}
		]
	},
	entry: __dirname + '/client/src/index.js',
	output:
	{
		filename: 'bundle.js',
		path: __dirname + '/client/dist'
	}
}
