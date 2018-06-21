// forked from tkama's "Cesium CZML rectangle 3D Japan mesh level2" http://jsdo.it/tkama/I4qt
// forked from tkama's "Cesium CZML rectangle 3D" http://jsdo.it/tkama/8Y4p
// forked from tkama's "Cesium CZML animation" http://jsdo.it/tkama/eYt3
// forked from tkama's "Cesium mouse event and JapanMesh" http://jsdo.it/tkama/QHvx
//Cesium地図ビューワの作成

var viewer = new Cesium.Viewer('cesiumContainer'); viewer.dataSources.add(Cesium.KmlData
Source.load('https://github.com/KiyoMinimum/cesium-demo-20180622/blob/master/kml/towers_polygon.kml')); 

var e = viewer.dataSources.add(Cesium.CzmlDataSource.load(t1));
viewer.zoomTo(e);
