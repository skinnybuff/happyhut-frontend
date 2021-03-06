'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const authAPI = require('./api-auth')
const authUI = require('./ui-auth')
const choresAPI = require('../chores/api-chores')
const choresUI = require('../chores/ui-chores')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  if (data.password !== data.password_confirmation) {
    return authUI.signUpFailure()
  }
  authAPI.signUp(data)
    .then(authUI.signUpSuccess)
    .catch(authUI.signUpFailure)
  $('#sign-up').find('input:text, input:password, select, textarea').val('')
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()

  // console.log('sign in data', data)
  authAPI.signIn(data)
    .then(authUI.signInSuccess)
    .then(choresAPI.getAllChores)
    .then(choresUI.getAllChoresSuccess)
    .catch(authUI.signInFailure)
  $('#sign-in').find('input:text, input:password, select, textarea').val('')
}

const changePassword = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  authAPI.changePassword(data)
    .then(authUI.changePasswordSuccess)
    .catch(authUI.changePasswordFailure)
  $('#change-password').find('input:password').val('')
}

const signOut = function (event) {
  event.preventDefault()
  authAPI.signOut()
    .then(authUI.signOutSuccess)
    .catch(authUI.signOutFailure)
}

const addHandlers = function () {
  $('aside').on('submit', '#sign-up', onSignUp)
  $('aside').on('submit', '#sign-in', onSignIn)
  $('aside').on('submit', '#change-password', changePassword)
  $('aside').on('submit', '#sign-out', signOut)
}

module.exports = {
  addHandlers
}
