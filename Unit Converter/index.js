let input = document.getElementById("distance-input")
let output = document.getElementById("result")
const feetBtn = document.getElementById("feet")
const inchesBtn = document.getElementById("inches")
const meterBtn = document.getElementById("meter")
const cmBtn = document.getElementById("cm")
const mmBtn = document.getElementById("mm")
const kmBtn = document.getElementById("km")
const mileBtn = document.getElementById("mile")

const feetCon = document.getElementById("feet-con")
const inchesCon = document.getElementById("inches-con")
const meterCon = document.getElementById("meter-con")
const cmCon = document.getElementById("cm-con")
const mmCon = document.getElementById("mm-con")
const kmCon = document.getElementById("km-con")
const mileCon = document.getElementById("mile-con")

let loggedEntries = []

const calc = document.getElementById("calculate")
let inBtn;
let outBtn;
let units = ["ft", "inch", "meter", "cm", "mm", "km", "mile"]

//FEET TO
function ftToFt(val) {
    return val
}
function ftToInches(val) {
    return val * 12
}
function ftToMeters(val) {
    return val / 3.2808
}
function ftToCm(val) {
    return val / 0.032808
}
function ftToMm(val) {
    return val / 0.0032808
}
function ftToKm(val) {
    return val / 3280.8
}
function ftToMiles(val) {
    return val * 0.00018939
}

//INCH TO
function inToInches(val) {
    return val
}
function inToFt(val) {
    return val*0.083333
}
function inToMeters(val) {
    return val/39.370
}
function inToCm(val) {
    return val/0.39370
}
function inToMm(val) {
    return val/0.039370
}
function inToKm(val) {
    return val/39370
}
function inToMiles(val) {
    return val*0.000015783
}

//METER TO
function meterToMeter(val) {
    return val
}
function meterToFt(val) {
    return val*3.2808
}
function meterToInches(val) {
    return val*39.370
}
function meterToCm(val) {
    return val/0.01
}
function meterToMm(val) {
    return val/0.001
}
function meterToKm(val) {
    return val/1000
}
function meterToMiles(val) {
    return val*0.00062137
}

//CM TO
function cmToCm(val) {
    return val
}
function cmToFt(val) {
    return val*0.032808
}
function cmToInches(val) {
    return val*0.39370
}
function cmToMeters(val) {
    return val/100
}
function cmToMm(val) {
    return val/0.1
}
function cmToKm(val) {
    return val/100000
}
function cmToMiles(val) {
    return val*0.0000062137
}

//MM TO
function mmToMm(val) {
    return val
}
function mmToFt(val) {
    return val*0.00328084
}
function mmToInches(val) {
    return val*0.039370
}
function mmToMeters(val) {
    return val/1000
}
function mmToCm(val) {
    return val/10
}
function mmToKm(val) {
    return val/1000000
}
function mmToMiles(val) {
    return val*0.00000062137
}

//KM TO
function kmToKm(val) {
    return val
}
function kmToFt(val) {
    return val*3280.8
}
function kmToInches(val) {
    return val*39370
}
function kmToMeters(val) {
    return val*1000
}
function kmToCm(val) {
    return val*100000
}
function kmToMm(val) {
    return val*1000000
}
function kmToMiles(val) {
    return val*0.62137
}
//MILES TO
function milesToMiles(val) {
    return val
}
function milesToFt(val) {
    return val*5280
}
function milesToInches(val) {
    return val*63360
}
function milesToMeters(val) {
    return val/0.00062137
}
function milesToCm(val) {
    return val/0.0000062137
}
function milesToMm(val) {
    return val/0.00000062137
}
function milesToKm(val) {
    return val/0.62137
}

//RENDER RESULT
function renderResult(useThisOne) {
    let listItems = ""
    loggedEntries.unshift(`${input.value} ${inBtn} converts to ${useThisOne(input.value)} ${outBtn}`)
    for (let i = 0; i < loggedEntries.length; i++) {
        listItems += `<li>${loggedEntries[i]}</li>`
        }
        output.innerHTML = listItems
    //output.textContent = `${input.value} ${inBtn} converts to ${useThisOne(input.value)} ${outBtn}`
}

//INPUT CLICK LISTENERS
feetBtn.addEventListener("click", function() {
    inBtn = units[0]
})
inchesBtn.addEventListener("click", function() {
    inBtn = units[1]
})
meterBtn.addEventListener("click", function() {
    inBtn = units[2]
})
cmBtn.addEventListener("click", function() {
    inBtn = units[3]
})
mmBtn.addEventListener("click", function() {
    inBtn = units[4]
})
kmBtn.addEventListener("click", function() {
    inBtn = units[5]
})
mileBtn.addEventListener("click", function() {
    inBtn = units[6]
})

//OUTPUT CLICK LISTENERS
feetCon.addEventListener("click", function() {
    outBtn = units[0]
})
inchesCon.addEventListener("click", function() {
    outBtn = units[1]
})
meterCon.addEventListener("click", function() {
    outBtn = units[2]
})
cmCon.addEventListener("click", function() {
    outBtn = units[3]
})
mmCon.addEventListener("click", function() {
    outBtn = units[4]
})
kmCon.addEventListener("click", function() {
    outBtn = units[5]
})
mileCon.addEventListener("click", function() {
    outBtn = units[6]
})

//CALCULATE BUTTON
calc.addEventListener("click", function() {
    //ft to
    if (inBtn === units[0] && outBtn === units[1])
    renderResult(ftToInches)
    else if (inBtn === units[0] && outBtn === units[2])
    renderResult(ftToMeters)
    else if (inBtn === units[0] && outBtn === units[3])
    renderResult(ftToCm)
    else if (inBtn === units[0] && outBtn === units[4])
    renderResult(ftToMm)
    else if (inBtn === units[0] && outBtn === units[5])
    renderResult(ftToKm)
    else if (inBtn === units[0] && outBtn === units[6])
    renderResult(ftToMiles)
    else if (inBtn === units[0] && outBtn === units[0])
    renderResult(ftToFt)
    //inch to
    if (inBtn === units[1] && outBtn === units[0])
    renderResult(inToFt)
    else if (inBtn === units[1] && outBtn === units[2])
    renderResult(inToMeters)
    else if (inBtn === units[1] && outBtn === units[3])
    renderResult(inToCm)
    else if (inBtn === units[1] && outBtn === units[4])
    renderResult(inToMm)
    else if (inBtn === units[1] && outBtn === units[5])
    renderResult(inToKm)
    else if (inBtn === units[1] && outBtn === units[6])
    renderResult(inToMiles)
    else if (inBtn === units[1] && outBtn === units[1])
    renderResult(ftToFt)
    //meter to
    if (inBtn === units[2] && outBtn === units[0])
    renderResult(meterToFt)
    else if (inBtn === units[2] && outBtn === units[1])
    renderResult(meterToInches)
    else if (inBtn === units[2] && outBtn === units[3])
    renderResult(meterToCm)
    else if (inBtn === units[2] && outBtn === units[4])
    renderResult(meterToMm)
    else if (inBtn === units[2] && outBtn === units[5])
    renderResult(meterToKm)
    else if (inBtn === units[2] && outBtn === units[6])
    renderResult(meterToMiles)
    else if (inBtn === units[2] && outBtn === units[2])
    renderResult(meterToMeter)
    //cm to
    if (inBtn === units[3] && outBtn === units[0])
    renderResult(cmToFt)
    else if (inBtn === units[3] && outBtn === units[1])
    renderResult(cmToInches)
    else if (inBtn === units[3] && outBtn === units[2])
    renderResult(cmToMeters)
    else if (inBtn === units[3] && outBtn === units[4])
    renderResult(cmToMm)
    else if (inBtn === units[3] && outBtn === units[5])
    renderResult(cmToKm)
    else if (inBtn === units[3] && outBtn === units[6])
    renderResult(cmToMiles)
    else if (inBtn === units[3] && outBtn === units[3])
    renderResult(cmToCm)
    //mm to
    if (inBtn === units[4] && outBtn === units[0])
    renderResult(mmToFt)
    else if (inBtn === units[4] && outBtn === units[1])
    renderResult(mmToInches)
    else if (inBtn === units[4] && outBtn === units[2])
    renderResult(mmToMeters)
    else if (inBtn === units[4] && outBtn === units[3])
    renderResult(mmToCm)
    else if (inBtn === units[4] && outBtn === units[5])
    renderResult(mmToKm)
    else if (inBtn === units[4] && outBtn === units[6])
    renderResult(mmToMiles)
    else if (inBtn === units[4] && outBtn === units[4])
    renderResult(mmToMm)
    //km to
    if (inBtn === units[5] && outBtn === units[0])
    renderResult(kmToFt)
    else if (inBtn === units[5] && outBtn === units[1])
    renderResult(kmToInches)
    else if (inBtn === units[5] && outBtn === units[2])
    renderResult(kmToMeters)
    else if (inBtn === units[5] && outBtn === units[3])
    renderResult(kmToCm)
    else if (inBtn === units[5] && outBtn === units[4])
    renderResult(kmToMm)
    else if (inBtn === units[5] && outBtn === units[6])
    renderResult(kmToMiles)
    else if (inBtn === units[5] && outBtn === units[5])
    renderResult(kmToKm)
    //miles to
    if (inBtn === units[6] && outBtn === units[0])
    renderResult(milesToFt)
    else if (inBtn === units[6] && outBtn === units[1])
    renderResult(milesToInches)
    else if (inBtn === units[6] && outBtn === units[2])
    renderResult(milesToMeters)
    else if (inBtn === units[6] && outBtn === units[3])
    renderResult(milesToCm)
    else if (inBtn === units[6] && outBtn === units[4])
    renderResult(milesToMm)
    else if (inBtn === units[6] && outBtn === units[5])
    renderResult(milesToKm)
    else if (inBtn === units[6] && outBtn === units[6])
    renderResult(milesToMiles)
})




