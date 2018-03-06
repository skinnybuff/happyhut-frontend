'use strict'

const store = require('../store')
const displayAllChores = require('../templates/show-all-chores.handlebars')

// const formatDateUS = function (file, idToChange) {
//   const createdDate = new Date(file.createdAt)
//   const formatCreateDate = createdDate.toLocaleString('en-US')
//   // console.log('formatCreateDate is:', formatCreateDate)
//   $(idToChange + file.id).text(formatCreateDate)
// }

const createChoreSuccess = function (data) {
  store.chores.push(data.chore)
  // const singleFileHTML = showFile({ file: data.file })
  // $('#files-display-container').prepend(singleFileHTML)
  // formatDateUS(data.file, '#created-time-')
  // }
  // $('').val('')
}

const createChoreFailure = function () {
  console.log('createChoreFailure')
}

const getAllChoresSuccess = function (data) {
  // save all files from the request to the local store
  store.chores = data.chores
  console.log('getAllFilesSuccess data is:', data)
  const allChoresHTML = displayAllChores({ chores: data.chores })
  $('#show-chores').html(allChoresHTML)
}

const getAllChoresFailure = function (data) {
  console.log('getAllChoresFailure')
}

const updateChoreSuccess = function (data) {
  console.log('File updated!! Here\'s what we got:', data)
}

const updateChoreFailure = function (data) {
  console.log('updateChoreFailure')
}

const deleteChoreSuccess = function (data) {
  console.log('File was successfully deleted.')
}

const deleteChoreFailure = function (data) {
  console.log('deleteChoreFailure')
}

module.exports = {
  createChoreSuccess,
  createChoreFailure,
  getAllChoresSuccess,
  getAllChoresFailure,
  updateChoreSuccess,
  updateChoreFailure,
  deleteChoreSuccess,
  deleteChoreFailure
}
