var i = 1
var j = 2
var max = 10
while(j <= max) {
    document.write(j + 'x' + i + '=' + i * j + '<br>')
    j++
}


for (i = 1; i <=max; i++) {
    for (j = 1; j <= max; j++) {
        message = `${j} x ${i} = ${j * i} <br>`
        document.write(message)

    }
}
 
inmultire
 
var i = 2
var j = 1
var max = 10

while (j <= max) {
    // string cu concatenare
    message = j + "x" + i + "=" + i * j
    // string cu interpolare
    message = `${j} x ${i} = ${j * i} <br>`
    document.write(message)
    j++
}
document.write("<br>")

for (i = 1; i <=max; i++) {
    for (j = 1; j <= max; j++) {
        message = `${j} x ${i} = ${j * i} <br>`
        document.write(message)

    }
}
 
bucla for
 
var i = 0
while (i < 5) {
    document.write(i)
    i++
}

document.write("<br>")

for (var i = 0; i < 5; i++) {
    document.write(i)
}
