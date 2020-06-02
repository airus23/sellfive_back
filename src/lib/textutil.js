function trimRight(str, chars) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str.charAt(i)) == -1) {
      return str.substr(0, i + 1)
    }
  }
  return '';
}

module.exports = {
  trimRight,
};