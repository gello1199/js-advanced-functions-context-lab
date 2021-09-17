/* Your Code Here */

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
} 

let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]

function createEmployeeRecords(array) {
    return array.map(arr => {
        // debugger
        return createEmployeeRecord(arr)
    })
}

function createTimeInEvent(date) {
    let [fullDate, hour] = date.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: fullDate,
    })
    // debugger
    return this
}

function createTimeOutEvent(date) {
    let [fullDate, hour] = date.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: fullDate,
    })
    // debugger
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(time => {
        return time.date === date
    })

    let timeOut = this.timeOutEvents.find(time => {
        return time.date === date
    })
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    let payRate = this.payPerHour
    
    return hoursWorked * payRate
}

function findEmployeeByFirstName(srcArray, firstName) {
    let findEmployee = srcArray.find(name => {
        return name.firstName === firstName
    })
    return findEmployee
}

function calculatePayroll(array) {
    let timeReducer = array.reduce(function(accumulator, record) {
        return accumulator + allWagesFor.call(record)
    }, 0)
    return timeReducer
}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

