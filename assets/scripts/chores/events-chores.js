'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const authApi = require('../auth/api-auth')
const authUi = require('../auth/ui-auth')
const choresAPI = require('../chores/api-chores')
const choresUI = require('../chores/ui-chores')

const onSignUp = function (event) {
  const data = getFormFields(this)
  // console.log('events', data)
  event.preventDefault()
  if (data.password !== data.password_confirmation) {
    return authUi.signUpFailure()
  }
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFailure)
  $('#sign-up').find('input:text, input:password, select, textarea').val('')
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .then(choresAPI.getAllChores)
    .then(choresUI.getAllChoresSuccess)
    .catch(authUi.signInFailure)
  $('#sign-in').find('input:text, input:password, select, textarea').val('')
}

const changePassword = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)
  $('#change-password').find('input:password, select, textarea').val('')
}

const signOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', changePassword)
  $('#sign-out').on('submit', signOut)
}

module.exports = {
  addHandlers
}
