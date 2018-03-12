'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events-auth')
const choresEvents = require('./chores/events-chores')
const displayLoginAuth = require('./templates/show-login-auth.handlebars')

$(() => {
  setAPIOrigin(location, config)
  // in it all click handlers
  authEvents.addHandlers()
  choresEvents.addHandlers()
  // load templates for a user not logged in
  const userLoginHTML = displayLoginAuth()
  $('aside').append(userLoginHTML)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
