'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const choresAPI = require('../chores/api-chores')
const choresUI = require('../chores/ui-chores')

const createChore = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  choresAPI.createChore(data)
    .then(choresUI.createChoreSuccess)
    .then(choresAPI.getAllChores)
    .then(choresUI.getAllChoresSuccess)
    .catch(choresUI.updateChoreFailure)
  $('#create-chore').find('input:password, select, textarea').val('')
}

const changeChore = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  choresAPI.updateChore(data)
    .then(choresUI.updateChoreSuccess)
    .then(choresAPI.getAllChores)
    .then(choresUI.getAllChoresSuccess)
    .catch(choresUI.updateChoreFailure)
  $('#update-chore').find('input:password, select, textarea').val('')
}

const deleteChore = function () {
  const choreID = $(this).attr('data-id')

  choresAPI.destroyChore(choreID)
    .then(choresAPI.destroyChoreSuccess)
    .then(choresAPI.getAllChores)
    .then(choresUI.getAllChoresSuccess)
    .catch(choresAPI.destroyChoreFailure)
}

const finishChore = function () {

}

const addHandlers = function () {
  $('#create-chore').on('submit', createChore)
  $('#update-chore').on('submit', changeChore)
  $('#show-chores').on('click', '.delete-chore', deleteChore)
  $('#show-chores').on('click', '.finish-chore', () => { console.log('finish button clicked') })
}

module.exports = {
  addHandlers,
  changeChore,
  deleteChore,
  finishChore
}
