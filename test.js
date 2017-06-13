const polyline = require('./index.js')
const point = [[ 25.960133583941623, -80.19400462408761 ]]
const lineToBinary = (l) => l.map(c => c.map(p => (p >>> 0).toString(2)))
const line = polyline.encode(point)
console.log('done encode')
const reverse = polyline.decode(line)
console.log(line, reverse, point)
console.log(lineToBinary(reverse))
console.log(lineToBinary(point))


