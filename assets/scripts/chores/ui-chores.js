'use strict'

const store = require('../store')
const displayAllChores = require('../templates/show-all-chores.handlebars')

const messageHUD = function (txt, time) {
  $('#app-hud').text(`${txt}`)
  window.setTimeout(() => {
    $('#app-hud').text('')
  }, time)
}

const createChoreSuccess = function (data) {
  store.chores.push(data.chore)
  messageHUD('New Chore Created', 4000)
}

const createChoreFailure = function () {
  // console.log('createChoreFailure')
  messageHUD('Could not create a chore', 6000)
}

const getAllChoresSuccess = function (data) {
  // save all files from the request to the local store
  store.chores = data.chores
  // console.log('getAllFilesSuccess data is:', data)
  const allChoresHTML = displayAllChores({ chores: data.chores })
  $('#show-chores').html(allChoresHTML)
}

const getAllChoresFailure = function (data) {
  // console.log('getAllChoresFailure')
  messageHUD('Getting all the Chores Failed', 6000)
}

const updateChoreSuccess = function (data) {
  // console.log('File updated!! Here\'s what we got:', data)
  messageHUD('Your Chore was Updated', 4000)
}

const updateChoreFailure = function (data) {
  // console.log('updateChoreFailure')
  messageHUD('Update Chore Failed', 4000)
}

const destroyChoreSuccess = function (data) {
  // console.log('File was successfully deleted.')
  messageHUD('Chore Deleted', 4000)
}

const destroyChoreFailure = function (data) {
  // console.log('deleteChoreFailure')
  messageHUD('Chore Delete Failed', 4000)
}

module.exports = {
  createChoreSuccess,
  createChoreFailure,
  getAllChoresSuccess,
  getAllChoresFailure,
  updateChoreSuccess,
  updateChoreFailure,
  destroyChoreSuccess,
  destroyChoreFailure
}
