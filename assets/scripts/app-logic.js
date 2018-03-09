'use strict'

const store = require('./store')
const moment = require('moment')

const checkOverDue = function () {
  // console.log('check over due')
  const allChores = store.chores
  const currentDate = moment()

  allChores.forEach((chore) => {
    const dueDate = moment(chore.last_done).add(chore.chore_interval, 'days')
    if (dueDate === currentDate) {
      $('#' + chore.id).toggleClass('over-due')
    }
  })
}

module.exports = {
  checkOverDue
}
