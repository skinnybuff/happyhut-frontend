'use strict'

const store = require('../store')

const eraseHUD = function (time) {
  window.setTimeout(() => {
    $('#app-hud').text('')
  }, time)
}

const signUpSuccess = function (data) {
  // console.log(data)
  $('#app-hud').text('You have signed up, Please Sign In.')
  eraseHUD(4000)
}

const signUpFailure = function (data) {
  // console.error('sign up error')
  $('#app-hud').text('Your signed up failed, Please Try Again.')
  eraseHUD(6000)
}

const signInSuccess = function (data) {
  // console.log(data)
  store.user = data.user
  $('#app-hud').text('You have signed in.')
  eraseHUD(2000)
  return data
}

const signInFailure = function (data) {
  // console.log('error')
  $('#app-hud').text('Your signed in failed, Please Try Again.')
  eraseHUD(6000)
}

const changePasswordSuccess = function (data) {
  // console.log('Changed password!')
  $('#app-hud').text('You password was changed.')
  eraseHUD(2000)
}

const changePasswordFailure = function (data) {
  // console.error('change password error')
  $('#app-hud').text('Change password failed, Please Try Again.')
  eraseHUD(6000)
}

const signOutSuccess = function () {
  // console.log('Signed out!')
  store.user = null
  store.chores = null
  $('#app-hud').text('You have Signed Out.')
  eraseHUD(2000)
}

const signOutFailure = function () {
  $('#app-hud').text('Sign Out Failed, Please Try Again.')
  eraseHUD(6000)
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
