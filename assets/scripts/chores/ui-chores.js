'use strict'

const store = require('../store')
const displayAllChores = require('../templates/show-all-chores.handlebars')

const messageHUD = function (txt, time) {
  $('#app-hud').text(`${txt}`)
  window.setTimeout(() => {
    $('#app-hud').text('')
  }, time)
}

const renderTemplate = function (selector, data) {
  const html = displayAllChores({chores: data})
  $(selector).html(html)
}

const createChoreSuccess = function (data) {
  store.chores.push(data.chore)
  messageHUD('New Chore Created', 8000)
}

const createChoreFailure = function () {
  // console.log('createChoreFailure')
  messageHUD('Could not create a chore', 10000)
}

const getAllChoresSuccess = function (data) {
  // save all files from the request to the local store
  store.chores = data.chores
  // console.log('getAllFilesSuccess data is:', data)

  renderTemplate('#show-chores', store.chores)
}

const getAllChoresFailure = function (data) {
  // console.log('getAllChoresFailure')
  messageHUD('Getting all the Chores Failed', 10000)
}

const updateChoreSuccess = function (data) {
  // console.log('File updated!! Here\'s what we got:', data)
  messageHUD('Your Chore was Updated', 8000)
}

const updateChoreFailure = function (data) {
  // console.log('updateChoreFailure')
  messageHUD('Update Chore Failed', 8000)
}

const destroyChoreSuccess = function (data) {
  // console.log('File was successfully deleted.')
  messageHUD('Chore Deleted', 8000)
}

const destroyChoreFailure = function (data) {
  // console.log('deleteChoreFailure')
  messageHUD('Chore Delete Failed', 8000)
}

const toogleVisibilty = function () {
  // get the data attribute for the chore ID
  const clickedId = $(this).attr('data-id')
  // creates a string to pase into jquery
  const staticUpdateID = '#update-static-' + clickedId
  // adds or removes the visible class to the static info
  $(staticUpdateID).toggleClass('visible')
  // string to pass parent div id to jquery
  const choreIDstring = '#' + clickedId
  $(choreIDstring).toggleClass('editable')
  const updateID = '#update-inplace-' + clickedId
  // console.log(updateID)
  $(updateID).toggleClass('visible')
}

module.exports = {
  createChoreSuccess,
  createChoreFailure,
  getAllChoresSuccess,
  getAllChoresFailure,
  updateChoreSuccess,
  updateChoreFailure,
  destroyChoreSuccess,
  destroyChoreFailure,
  toogleVisibilty,
  renderTemplate
}
