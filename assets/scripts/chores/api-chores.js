'use strict'
const config = require('../config')
const store = require('../store')

const createChore = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/chores',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const destroyChore = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/chores/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getOneChore = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/chores/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAllChores = () => {
  return $.ajax({
    url: config.apiOrigin + '/chores',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateChore = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/chores/' + data.chore.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getAllChores,
  createChore,
  destroyChore,
  updateChore,
  getOneChore
}
