import _ from 'lodash';
import moment from 'moment'

const dogAges = [15,24,28,32,36,40,44,48,52,56,60,64,68,72,75,77,80,82,85,87,90,92,95,97,100,102,105,107,110,112]

const scheduleDefs = {
  dog: dogAges.map((age, i) => ({
    hYears: i + 1,
    dYears: age,
    delta: age - (i === 0 ? 0 : dogAges[i-1])
  }))
}

const getSchedule = (bday, schedule = scheduleDefs.dog) => {
  const scheduleMap = {}
  for (let i=0;i<schedule.length;i++) {
    let lastBday = moment(bday).add(i, 'years');
    const { hYears, dYears, delta } = schedule[i];
    const diff = 365.0 / delta
    for (let j=0;j<delta;j++) {
      if (!_.isArray(scheduleMap[lastBday.year()])) {
        scheduleMap[lastBday.year()] = []
      }
      scheduleMap[lastBday.year()].push({
        hYears: hYears - 1,
        dYears: dYears - delta + j,
        date: moment(lastBday),
      })
      lastBday = lastBday.add(diff, 'days')
    }
  }
  return scheduleMap
}

const getSummary = (bday, schedule = scheduleDefs.dog) => {
  const now = moment()
  const scheduleMap = getSchedule(bday, schedule)
  const currPoss = _.defaultTo(scheduleMap[now.year()-1], []).concat(_.defaultTo(scheduleMap[now.year()], []))
  const nextPoss = _.defaultTo(scheduleMap[now.year()], []).concat(_.defaultTo(scheduleMap[now.year()+1], []))
  let curr = currPoss[0];
  for (let i=0;i<currPoss.length;i++) {
    if (now.diff(currPoss[i].date) >= 0) {
      curr = currPoss[i]
    }
  }
  let next = null;
  for (let i=0;i<nextPoss.length;i++) {
    if (now.diff(nextPoss[i].date) < 0 && next === null) {
      next = nextPoss[i]
    }
  }
  return {
    bdays: {
      curr,
      next,
    },
    schedules: {
      curr: {
        year: now.year(),
        vals: _.defaultTo(scheduleMap[now.year()], [])
      },
      next: {
        year: now.year() + 1,
        vals: _.defaultTo(scheduleMap[now.year() + 1], [])
      },
      all: scheduleMap
    },
  }
}

export default {
  scheduleDefs,
  getSchedule,
  getSummary,
}
