class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.height * this.width;
    return area;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

const rect = new Rectangle(2, 4, "black");
const area = rect.area();
rect.paint();
console.log(area);

// Date

const date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());

// map

const map = new Map();
map.set("name", "Pratima");
map.set("age", "30");
console.log(map.get("name"));
