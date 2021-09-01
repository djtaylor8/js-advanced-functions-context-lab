/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let createEmployeeRecord = function(array) {
    let obj = {
        firstName: `${array[0]}`,
        familyName: `${array[1]}`,
        title: `${array[2]}`,
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return obj;
}

let createEmployeeRecords = function(array) {
    return array.map(arr => createEmployeeRecord(arr))
}


let createTimeInEvent = function(date) {
    let timeIn = {
        type: 'TimeIn',
        hour: parseInt(date.split(' ')[1]),
        date: date.split(' ')[0]
    }
    this.timeInEvents.push(timeIn);
    return this;
}

let createTimeOutEvent = function(date) {
    let timeOut = {
        type: 'TimeOut',
        hour: parseInt(date.split(' ')[1]),
        date: date.split(' ')[0]
    }
    this.timeOutEvents.push(timeOut);
    return this;
}

let hoursWorkedOnDate = function(date) {
    let e = new TypeError('Error - no matching timeOut event found for this record.')
    let inDate = this.timeInEvents.find(function(e) {
        return e.date === date;
    })

    let outDate = this.timeOutEvents.find(function(e) {
        return e.date === date;
    })
    
    if (!outDate) {
        return e.message;
    } else {
        return (outDate.hour - inDate.hour) / 100;
    }
}

let wagesEarnedOnDate = function(date) {
    let payRate = this.payPerHour;
    let hours = hoursWorkedOnDate.call(this, date);
    return payRate * hours;
}





 let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let calculatePayroll = function(array) {
    return array.reduce(function(memo, rec) {
        return memo + allWagesFor.call(rec)
    }, 0)
}

let findEmployeeByFirstName = function(array, name) {
    let result = array.find(function(e) {
        return e.firstName === name; 
    })
    return result;
}

