'use strict'

const store = require('../store')
const displayUserAuth = require('../templates/show-user-auth.handlebars')
const displayLoginAuth = require('../templates/show-login-auth.handlebars')

const eraseHUD = function (time) {
  window.setTimeout(() => {
    $('#app-hud').text('')
  }, time)
}

const signUpSuccess = function (data) {
  // console.log(data)
  $('#app-hud').text('You have signed up, Please Sign In.')
  eraseHUD(8000)
}

const signUpFailure = function (data) {
  // console.error('sign up error')
  $('#app-hud').text('Your signed up failed, Please Try Again.')
  eraseHUD(10000)
}

const signInSuccess = function (data) {
  // console.log(data)
  store.user = data.user
  $('#app-hud').text('You have signed in.')
  eraseHUD(8000)
  const userAdminHTML = displayUserAuth()
  $('aside').append(userAdminHTML)
  $('#sign-up').remove()
  $('#sign-in').remove()
}

const signInFailure = function (data) {
  // console.log('error')
  $('#app-hud').text('Your signed in failed, Please Try Again.')
  eraseHUD(10000)
}

const changePasswordSuccess = function (data) {
  // console.log('Changed password!')
  $('#app-hud').text('You password was changed.')
  eraseHUD(8000)
}

const changePasswordFailure = function (data) {
  // console.error('change password error')
  $('#app-hud').text('Change password failed, Please Try Again.')
  eraseHUD(10000)
}

const signOutSuccess = function () {
  // console.log('Signed out!')
  store.user = null
  store.chores = null
  $('#app-hud').text('You have Signed Out.')
  eraseHUD(8000)
  $('aside').empty()
  $('main').empty()
  const userLoginHTML = displayLoginAuth()
  $('aside').append(userLoginHTML)
}

const signOutFailure = function () {
  $('#app-hud').text('Sign Out Failed, Please Try Again.')
  eraseHUD(10000)
  return 'Error'
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
