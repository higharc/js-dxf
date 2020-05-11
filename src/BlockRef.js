class BlockRef {
  constructor(block, handle, x, y, z, options) {
    this.block = block;
    this.handle = handle;
    this.x = x;
    this.y = y;
    this.z = z;
    this.options = options;
  }

  toDxfString() {
    let s = `0\nINSERT\n`;
    s += `5\n${this.handle}\n`;
    s += '100\nAcDbEntity\n';
    s += `8\n${this.layer.name}\n`;
    s += `6\nContinuous\n`;
    s += '100\nAcDbBlockReference\n';
    s += `2\n${this.block.name}\n`;
    s += `10\n${this.x}\n`;
    s += `20\n${this.y}\n`;
    s += `30\n${this.z}\n`;
    return s;
  }
}

module.exports = { BlockRef }