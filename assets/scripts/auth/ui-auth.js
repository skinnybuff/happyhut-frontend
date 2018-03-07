'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
}

const signUpFailure = function (data) {
  console.error('sign up error')
}

const signInSuccess = function (data) {
  // console.log(data)
  store.user = data.user
  return data
}

const signInFailure = function (data) {
  console.log('error')
  return data
}

const changePasswordSuccess = function (data) {
  console.log('Changed password!')
}

const changePasswordFailure = function (data) {
  console.error('change password error')
}

const signOutSuccess = function () {
  console.log('Signed out!')
  store.user = null
}

const signOutFailure = function () {
  console.log('error')
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
