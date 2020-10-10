const { webFrame } = require('electron');
const baseZoomLevel = webFrame.getZoomLevel();
let currZoomLevel = baseZoomLevel;

const zoomIn = () => {
  currZoomLevel += 0.5;
  return setZoom();
};

const zoomOut = () => {
  currZoomLevel -= 0.5;
  return setZoom();
};

const resetZoom = () => {
  currZoomLevel = baseZoomLevel;
  return setZoom();
};

const setZoom = () => {
  webFrame.setZoomLevel(currZoomLevel);
};

module.exports = {
  zoomIn,
  zoomOut,
  resetZoom,
};
