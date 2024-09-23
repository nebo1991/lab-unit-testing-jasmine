function calculateArea(height, width) {
  if ((!height && height !== 0) || (!width && width !== 0)) return undefined;
  return height * width;
}
