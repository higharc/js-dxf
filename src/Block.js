class Block {
	constructor(layer, name, handle, x, y, z) {
		this.layer = layer;
		this.name = name;
		this.handle = handle;
		this.flags = 0;
		this.x = x;
		this.y = y;
		this.z = z;
		this.shapes = []
	}

	addShape(shape) {
		this.shapes.push(shape);
		shape.layer = this.layer;
	}

	toDxfString() {
		let s = '0\nBLOCK\n';
		s += `5\n${this.handle}\n`
		s += '100\nAcDbEntity\n'
		s += `8\n0\n`
		s += `100\nAcDbBlockBegin\n`
		s += `2\n${this.name}\n`
		s += `70\n${this.flags}\n`

		s += `10\n${this.x}\n`
		s += `20\n${this.y}\n`
		s += `30\n${this.z}\n`
		s += `3\n${this.name}\n`
		s += `1\n\n`

		for(const shape of this.shapes) {
			s += shape.toDxfString();
		}

		s += '0\nENDBLK\n';
		s += `5\n${this.handle}\n`
		s += `100\nAcDbBlockEnd\n`

		return s;
	}
}

module.exports = { Block };