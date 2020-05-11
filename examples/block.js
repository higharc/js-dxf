const Drawing = require('./../src/Drawing');
const Line = require('./../src/Line');

const fs = require('fs');

let d = new Drawing();
d.setUnits('Yards')

const block = d.addBlock('0', 'square', 20, 0, 0, 0);
block.addShape(new Line(-50, 0, 0, 50));
block.addShape(new Line(0, 50, 50, 0));
block.addShape(new Line(50, 0, 0, -50));
block.addShape(new Line(0, -50, -50, 0));

d.addLayer('l_green', Drawing.ACI.GREEN, 'CONTINUOUS');
d.setActiveLayer('l_green');
d.addBlockRef(block, 21, 128.25, 128.75, 0, {});

fs.writeFileSync(__filename + '.dxf', d.toDxfString());