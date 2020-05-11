const Drawing = require('./../src/Drawing');
const Line = require('./../src/Line');

const fs = require('fs');

let d = new Drawing();
d.setUnits('Yards')

const block = d.addBlock('0', 'SQUARE', 20, 0, 0, 0);
d.drawOnBlock(block, (drawing) => {
  drawing.drawLine(-50, 0, 0, 50);
  drawing.drawLine(0, 50, 50, 0);
  drawing.drawLine(50, 0, 0, -50);
  drawing.drawLine(0, -50, -50, 0);
  drawing.drawText(0, -60, 10, 0, 'RAD!');
});

d.addLayer('l_green', Drawing.ACI.GREEN, 'CONTINUOUS');
d.setActiveLayer('l_green');
d.addBlockRef(block, 21, 128.25, 128.75, 0, {});
d.addBlockRef(block, 21, 256.25, 128.75, 0, {});

fs.writeFileSync(__filename + '.dxf', d.toDxfString());