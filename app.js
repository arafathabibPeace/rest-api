// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const express = require('express')

const app = express() // initialize app

/*  Apps are configured with settings as shown in the conig object below.
    Options include setting views directory, static assets directory,
    and database settings. Default config settings can be seen here:
    https://docs.turbo360.co */

const config = {
  views: 'views', // Set views directory
  static: 'public', // Set static assets 
  db: { 					// Database configuration. Remember to set env variables in .env file: MONGODB_URI, PROD_MONGODB_URI
		url: 'mongodb://localhost/footballdb',
		type: 'mongo',
		onError: (err) => {
			console.log('DB Connection Failed!')
		},
		onSuccess: () => {
			console.log('FOOTBALL DB CONNECTED!')
		}
	}

  /*
    To use the Turbo 360 CMS, from the terminal run
    $ turbo extend cms
    then uncomment the lines 22-23 below: */

  // controllers: require('./controllers'),
  // db: vertex.nedb()
}

vertex.configureApp(app, config)

// import routes
const index = require('./routes/index')
const api = require('./routes/api') // sample API Routes

// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes

module.exports = app
