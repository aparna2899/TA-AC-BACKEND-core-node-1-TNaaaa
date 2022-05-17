function areaOfSquare(side) {
  return side * side;
}

function areaOfRect(length, width) {
  return length * width;
}

function areaOfCircle(radius) {
  return 3.14 * radius * radius;
}

module.exports = {
  areaOfSquare: areaOfSquare,
  areaOfRect: areaOfRect,
  areaOfCircle: areaOfCircle,
};
