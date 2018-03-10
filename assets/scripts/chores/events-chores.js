'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store')
const moment = require('moment')
const appLogic = require('../app-logic')

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
    .then(appLogic.checkOverDue)
    .catch(choresUI.updateChoreFailure)
  $('#create-chore').find('input, select, textarea').val('')
}

const changeChore = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  choresAPI.updateChore(data)
    .then(choresUI.updateChoreSuccess)
    .then(choresAPI.getAllChores)
    .then(choresUI.getAllChoresSuccess)
    .then(appLogic.checkOverDue)
    .catch(choresUI.updateChoreFailure)
  $('#update-chore').find('input, select, textarea').val('')
}

const deleteChore = function () {
  const choreID = $(this).attr('data-id')

  choresAPI.destroyChore(choreID)
    .then(choresUI.destroyChoreSuccess)
    .then(choresAPI.getAllChores)
    .then(choresUI.getAllChoresSuccess)
    .catch(choresUI.destroyChoreFailure)
}

const finishChore = function () {
  const choreID = $(this).attr('data-id')
  // choreID val is coerced in to an INT with precceding "+"
  const choreObject = store.chores.find(item => item.id === +choreID)

  const currentDate = moment()
  const alteredDate = moment().add(choreObject.chore_interval, 'days')
  // console.log('current date ::', currentDate)
  // console.log('altered date ::', alteredDate)
  // console.log('clicked chore id ::', choreID)
  // console.log('all stored chores ::', store.chores)
  // console.log('clicked chore object::', choreObject)

  const chore = choreObject
  chore.id = +choreID
  chore.last_done = currentDate.format('YYYY-MM-DD')
  chore.over_due = false

  const data = {chore}
  // console.log('NEW objechorect ::', data)

  choresAPI.updateChore(data)
    .then(choresUI.updateChoreSuccess(alteredDate))
    .then(choresAPI.getAllChores)
    .then(choresUI.getAllChoresSuccess)
    .then(appLogic.checkOverDue)
    .catch(choresUI.destroyChoreFailure)
}

const addHandlers = function () {
  $('aside').on('submit', '#create-chore', createChore)
  $('aside').on('submit', '#update-chore', changeChore)
  $('#show-chores').on('click', '.update-chore', () => {
    console.log('template update')
  })
  $('#show-chores').on('click', '.delete-chore', deleteChore)
  $('#show-chores').on('click', '.finish-chore', finishChore)
}

module.exports = {
  addHandlers,
  changeChore,
  deleteChore,
  finishChore
}
