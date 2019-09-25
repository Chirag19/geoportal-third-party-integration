import { Component, OnInit } from '@angular/core';
import { Map } from '@ignf-geoportal/sdk-3d';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map = null;
  switch2D3D = function switch2D3D() {
    this.map = this.map.switch2D3D( (this.map.getViewMode() === "2d")? "3d":"2d");
  };

  constructor() { }

  mapLoaded() {
    console.log("carte chargée !");
  }

  ngOnInit() {
      this.map = Map.load("viewerDiv",{
          apiKey : "jhyvi0fgmnuxvfv0zjzorvdn",
          library: "2d",
          // center : {
          //     x : 2.357,
          //     y : 48.83,
          //     projection : "CRS:84"
          // },
          layersOptions : {
              'ORTHOIMAGERY.ORTHOPHOTOS': {
                  type : "color",
                  title : "Photographies aériennes",
                  description : "Photographies aériennes",
                  format : "wmts",
                  outputFormat : "image/jpeg",
                  url : "http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/geoportail/wmts",
                  layer : "ORTHOIMAGERY.ORTHOPHOTOS",
                  tileMatrixSet : "PM",
                  tileMatrixSetLimits : {
                    "0": {
                      "minTileRow": "0",
                      "maxTileRow": "1",
                      "minTileCol": "0",
                      "maxTileCol": "1"
                    },
                    "1": {
                      "minTileRow": "0",
                      "maxTileRow": "2",
                      "minTileCol": "0",
                      "maxTileCol": "2"
                    },
                    "2": {
                      "minTileRow": "0",
                      "maxTileRow": "4",
                      "minTileCol": "0",
                      "maxTileCol": "4"
                    },
                    "3": {
                      "minTileRow": "0",
                      "maxTileRow": "8",
                      "minTileCol": "0",
                      "maxTileCol": "8"
                    },
                    "4": {
                      "minTileRow": "0",
                      "maxTileRow": "16",
                      "minTileCol": "0",
                      "maxTileCol": "16"
                    },
                    "5": {
                      "minTileRow": "0",
                      "maxTileRow": "32",
                      "minTileCol": "0",
                      "maxTileCol": "32"
                    },
                    "6": {
                      "minTileRow": "0",
                      "maxTileRow": "64",
                      "minTileCol": "0",
                      "maxTileCol": "64"
                    },
                    "7": {
                      "minTileRow": "0",
                      "maxTileRow": "128",
                      "minTileCol": "0",
                      "maxTileCol": "128"
                    },
                    "8": {
                      "minTileRow": "0",
                      "maxTileRow": "256",
                      "minTileCol": "0",
                      "maxTileCol": "256"
                    },
                    "9": {
                      "minTileRow": "0",
                      "maxTileRow": "512",
                      "minTileCol": "0",
                      "maxTileCol": "512"
                    },
                    "10": {
                      "minTileRow": "0",
                      "maxTileRow": "1024",
                      "minTileCol": "0",
                      "maxTileCol": "1024"
                    },
                    "11": {
                      "minTileRow": "0",
                      "maxTileRow": "2048",
                      "minTileCol": "0",
                      "maxTileCol": "2048"
                    },
                    "12": {
                      "minTileRow": "0",
                      "maxTileRow": "4096",
                      "minTileCol": "0",
                      "maxTileCol": "4096"
                    },
                    "13": {
                      "minTileRow": "0",
                      "maxTileRow": "8192",
                      "minTileCol": "0",
                      "maxTileCol": "8192"
                    },
                    "14": {
                      "minTileRow": "0",
                      "maxTileRow": "16384",
                      "minTileCol": "0",
                      "maxTileCol": "16384"
                    },
                    "15": {
                      "minTileRow": "0",
                      "maxTileRow": "32768",
                      "minTileCol": "0",
                      "maxTileCol": "32768"
                    },
                    "16": {
                      "minTileRow": "0",
                      "maxTileRow": "65536",
                      "minTileCol": "0",
                      "maxTileCol": "65536"
                    },
                    "17": {
                      "minTileRow": "0",
                      "maxTileRow": "131072",
                      "minTileCol": "0",
                      "maxTileCol": "131072"
                    },
                    "18": {
                      "minTileRow": "0",
                      "maxTileRow": "262144",
                      "minTileCol": "0",
                      "maxTileCol": "262144"
                    },
                    "19": {
                      "minTileRow": "0",
                      "maxTileRow": "524288",
                      "minTileCol": "0",
                      "maxTileCol": "524288"
                    },
                    "20": {
                      "minTileRow": "0",
                      "maxTileRow": "1048576",
                      "minTileCol": "0",
                      "maxTileCol": "1048576"
                    },
                    "21": {
                      "minTileRow": "0",
                      "maxTileRow": "2097152",
                      "minTileCol": "0",
                      "maxTileCol": "2097152"
                    }
                 },
                  topLeftCorner : {
                      x:-20037508,
                      y:20037508
                  },
                  resolutions : [156543.033928041,78271.51696402048,39135.758482010235,19567.87924100512,9783.93962050256,4891.96981025128,2445.98490512564,1222.99245256282,611.49622628141,305.7481131407048,152.8740565703525,76.43702828517624,38.21851414258813,19.10925707129406,9.554628535647032,4.777314267823516,2.388657133911758,1.194328566955879,0.5971642834779395,0.2985821417389697,0.1492910708694849,0.0746455354347424],
                  matrixIds : ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21"],
                  styleName : "normal",
                  // version : "1.1.0",
                  minZoom : 0,
                  maxZoom : 19,
                  visibility : true,
                  quicklookUrl:"http://wxs.ign.fr/static/pictures/ign_ortho.jpg",
                  legends:[
                     {"format":"format","url":"http://wxs.ign.fr/static/legends/ign_bdortho_legende.jpg","minScaleDenominator":1067},
                     {"format":"format","url":"http://wxs.ign.fr/static/legends/legend3.jpg","minScaleDenominator":2133},
                     {"format":"format","url":"http://wxs.ign.fr/static/legends/legend2.jpg","minScaleDenominator":136495},
                     {"format":"format","url":"http://wxs.ign.fr/static/legends/legend1.jpg","minScaleDenominator":534}
                  ],
                  metadata:[{"format":"xml","url":"http://wxs.ign.fr/geoportail/csw?service=CSW&version=2.0.2&request=GetRecordById&Id=IGNF_BDORTHOr_2-0.xml"},{"format":"xml","url":"http://wxs.ign.fr/geoportail/csw?service=CSW&version=2.0.2&request=GetRecordById&Id=SPOT5.xml"},{"format":"xml","url":"http://wxs.ign.fr/geoportail/csw?service=CSW&version=2.0.2&request=GetRecordById&Id=NCL-DITTT-ORTHO.xml"},{"format":"xml","url":"http://wxs.ign.fr/geoportail/csw?service=CSW&version=2.0.2&request=GetRecordById&Id=IGNF_BDORTHOr_2-0.xml"},{"format":"xml","url":"http://wxs.ign.fr/geoportail/csw?service=CSW&version=2.0.2&request=GetRecordById&Id=IGNF_ORTHOHR_1-0.xml"}],
                 originators:[
                     {"name":"IGN","attribution":"Institut national de l'information géographique et forestière","logo":"http://wxs.ign.fr/static/logos/IGN/IGN.gif","url":"http://www.ign.fr","constraints":[{"crs":"EPSG:4326","bbox":{"left":-63.160706,"right":55.84643,"top":51.090965,"bottom":-21.401262},"minScaleDenominator":1067,"maxScaleDenominator":1067,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-178.18713,"right":55.85611,"top":51.090965,"bottom":-21.401329},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-178.18713,"right":55.85611,"top":51.090965,"bottom":-21.401329},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-178.18713,"right":55.85611,"top":51.090965,"bottom":-21.401329},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-178.18713,"right":55.85611,"top":51.090965,"bottom":-21.401329},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-178.18713,"right":55.85611,"top":51.090965,"bottom":-21.401329},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-178.18713,"right":55.85611,"top":51.090965,"bottom":-21.401329},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":2.2243388,"right":5.7168245,"top":45.11295,"bottom":43.153347},"minScaleDenominator":534,"maxScaleDenominator":534,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"e-Megalis","attribution":"Syndicat mixte de coopération territoriale (e-Megalis)","logo":"http://wxs.ign.fr/static/logos/e-Megalis/e-Megalis.gif","url":"http://www.e-megalisbretagne.org//","constraints":[{"crs":"EPSG:4326","bbox":{"left":-5.1937118,"right":-0.98568505,"top":48.980812,"bottom":47.23789},"minScaleDenominator":1067,"maxScaleDenominator":1067,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-5.1937118,"right":-0.98568505,"top":48.980812,"bottom":47.23789},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-5.1937118,"right":-0.98568505,"top":48.980812,"bottom":47.23789},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-5.1937118,"right":-0.98568505,"top":48.980812,"bottom":47.23789},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-5.1937118,"right":-0.98568505,"top":48.980812,"bottom":47.23789},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-5.1937118,"right":-0.98568505,"top":48.980812,"bottom":47.23789},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-5.1937118,"right":-0.98568505,"top":48.980812,"bottom":47.23789},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"CRCORSE","attribution":"CRCORSE","logo":"http://wxs.ign.fr/static/logos/CRCORSE/CRCORSE.gif","url":"http://www.corse.fr//","constraints":[{"crs":"EPSG:4326","bbox":{"left":8.428783,"right":9.688606,"top":43.08541,"bottom":41.338627},"minScaleDenominator":1067,"maxScaleDenominator":559082265,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":8.428783,"right":9.688606,"top":43.08541,"bottom":41.338627},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":8.428783,"right":9.688606,"top":43.08541,"bottom":41.338627},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":8.428783,"right":9.688606,"top":43.08541,"bottom":41.338627},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":8.428783,"right":9.688606,"top":43.08541,"bottom":41.338627},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":8.428783,"right":9.688606,"top":43.08541,"bottom":41.338627},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":8.428783,"right":9.688606,"top":43.08541,"bottom":41.338627},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"FEDER2","attribution":"Fonds européen de développement économique et régional","logo":"http://wxs.ign.fr/static/logos/FEDER2/FEDER2.gif","url":"http://www.europe-en-france.gouv.fr/","constraints":[{"crs":"EPSG:4326","bbox":{"left":1.3577043,"right":4.269964,"top":50.37648,"bottom":48.824635},"minScaleDenominator":1067,"maxScaleDenominator":1067,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.3577043,"right":4.269964,"top":50.37648,"bottom":48.824635},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.3577043,"right":4.269964,"top":50.37648,"bottom":48.824635},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.3577043,"right":4.269964,"top":50.37648,"bottom":48.824635},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.3577043,"right":4.269964,"top":50.37648,"bottom":48.824635},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.3577043,"right":4.269964,"top":50.37648,"bottom":48.824635},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.3577043,"right":4.269964,"top":50.37648,"bottom":48.824635},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"CRAIG","attribution":"Centre Régional Auvergnat de l'Information Géographique (CRAIG)","logo":"http://wxs.ign.fr/static/logos/CRAIG/CRAIG.gif","url":"http://www.craig.fr","constraints":[{"crs":"EPSG:4326","bbox":{"left":2.0398402,"right":4.5090737,"top":46.8038,"bottom":44.60505},"minScaleDenominator":1067,"maxScaleDenominator":1067,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":2.0398402,"right":4.5090737,"top":46.8038,"bottom":44.60505},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":2.0398402,"right":4.5090737,"top":46.8038,"bottom":44.60505},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":2.0398402,"right":4.5090737,"top":46.8038,"bottom":44.60505},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":2.0398402,"right":4.5090737,"top":46.8038,"bottom":44.60505},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":2.0398402,"right":4.5090737,"top":46.8038,"bottom":44.60505},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":2.0398402,"right":4.5090737,"top":46.8038,"bottom":44.60505},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":2.2243388,"right":2.7314367,"top":45.11295,"bottom":44.76621},"minScaleDenominator":534,"maxScaleDenominator":534,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"CNES_AUVERGNE","attribution":"Centre national d'études spatiales (CNES)","logo":"http://wxs.ign.fr/static/logos/CNES_AUVERGNE/CNES_AUVERGNE.gif","url":"http://www.cnes.fr/","constraints":[{"crs":"EPSG:4326","bbox":{"left":2.2656832,"right":4.0227704,"top":46.8038,"bottom":45.279934},"minScaleDenominator":1067,"maxScaleDenominator":1067,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":2.2656832,"right":4.0227704,"top":46.8038,"bottom":45.279934},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":2.2656832,"right":4.0227704,"top":46.8038,"bottom":45.279934},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":2.2656832,"right":4.0227704,"top":46.8038,"bottom":45.279934},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":2.2656832,"right":4.0227704,"top":46.8038,"bottom":45.279934},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":2.2656832,"right":4.0227704,"top":46.8038,"bottom":45.279934},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":2.2656832,"right":4.0227704,"top":46.8038,"bottom":45.279934},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"PPIGE","attribution":"PPIGE","logo":"http://wxs.ign.fr/static/logos/PPIGE/PPIGE.gif","url":"http://www.ppige-npdc.fr/","constraints":[{"crs":"EPSG:4326","bbox":{"left":1.5212119,"right":4.2673664,"top":51.090965,"bottom":49.957302},"minScaleDenominator":1067,"maxScaleDenominator":1067,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.5212119,"right":4.2673664,"top":51.090965,"bottom":49.957302},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.5212119,"right":4.2673664,"top":51.090965,"bottom":49.957302},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.5212119,"right":4.2673664,"top":51.090965,"bottom":49.957302},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.5212119,"right":4.2673664,"top":51.090965,"bottom":49.957302},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.5212119,"right":4.2673664,"top":51.090965,"bottom":49.957302},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.5212119,"right":4.2673664,"top":51.090965,"bottom":49.957302},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"SIGLR","attribution":"SIGLR","logo":"http://wxs.ign.fr/static/logos/SIGLR/SIGLR.gif","url":"http://www.siglr.org//","constraints":[{"crs":"EPSG:4326","bbox":{"left":1.6784439,"right":4.8729386,"top":44.978218,"bottom":42.316307},"minScaleDenominator":1067,"maxScaleDenominator":1067,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.6784439,"right":4.8729386,"top":44.978218,"bottom":42.316307},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.6784439,"right":4.8729386,"top":44.978218,"bottom":42.316307},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.6784439,"right":4.8729386,"top":44.978218,"bottom":42.316307},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.6784439,"right":4.8729386,"top":44.978218,"bottom":42.316307},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.6784439,"right":4.8729386,"top":44.978218,"bottom":42.316307},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.6784439,"right":4.8729386,"top":44.978218,"bottom":42.316307},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"CG45","attribution":"Le conseil général du Loiret","logo":"http://wxs.ign.fr/static/logos/CG45/CG45.gif","url":"http://www.loiret.com","constraints":[{"crs":"EPSG:4326","bbox":{"left":1.4883244,"right":3.1349874,"top":48.354233,"bottom":47.471867},"minScaleDenominator":1067,"maxScaleDenominator":1067,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.4883244,"right":3.1349874,"top":48.354233,"bottom":47.471867},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.4883244,"right":3.1349874,"top":48.354233,"bottom":47.471867},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.4883244,"right":3.1349874,"top":48.354233,"bottom":47.471867},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.4883244,"right":3.1349874,"top":48.354233,"bottom":47.471867},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.4883244,"right":3.1349874,"top":48.354233,"bottom":47.471867},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":1.4883244,"right":3.1349874,"top":48.354233,"bottom":47.471867},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"CG06","attribution":"Département Alpes Maritimes (06) en partenariat avec : Groupement Orthophoto 06 (NCA, Ville de Cannes, CARF, CASA,CG06, CA de Grasse) ","logo":"http://wxs.ign.fr/static/logos/CG06/CG06.gif","url":"http://www.cg06.fr","constraints":[{"crs":"EPSG:4326","bbox":{"left":6.6093955,"right":7.7436337,"top":44.377018,"bottom":43.44647},"minScaleDenominator":1067,"maxScaleDenominator":1067,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":6.6093955,"right":7.7436337,"top":44.377018,"bottom":43.44647},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":6.6093955,"right":7.7436337,"top":44.377018,"bottom":43.44647},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":6.6093955,"right":7.7436337,"top":44.377018,"bottom":43.44647},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":6.6093955,"right":7.7436337,"top":44.377018,"bottom":43.44647},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":6.6093955,"right":7.7436337,"top":44.377018,"bottom":43.44647},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":6.6093955,"right":7.7436337,"top":44.377018,"bottom":43.44647},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"RGD_SAVOIE","attribution":"Régie de Gestion de Données des Pays de Savoie (RGD 73-74)","logo":"http://wxs.ign.fr/static/logos/RGD_SAVOIE/RGD_SAVOIE.gif","url":"http://www.rgd.fr","constraints":[{"crs":"EPSG:4326","bbox":{"left":5.7759595,"right":7.0887337,"top":46.438328,"bottom":45.65335},"minScaleDenominator":1067,"maxScaleDenominator":1067,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":5.5923314,"right":7.2323394,"top":46.438328,"bottom":45.017353},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":5.5923314,"right":7.2323394,"top":46.438328,"bottom":45.017353},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":5.5923314,"right":7.2323394,"top":46.438328,"bottom":45.017353},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":5.5923314,"right":7.2323394,"top":46.438328,"bottom":45.017353},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":5.5923314,"right":7.2323394,"top":46.438328,"bottom":45.017353},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":5.5923314,"right":7.2323394,"top":46.438328,"bottom":45.017353},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"CNES_971","attribution":"Centre national d'études spatiales (CNES)","logo":"http://wxs.ign.fr/static/logos/CNES_971/CNES_971.gif","url":"http://www.cnes.fr/","constraints":[{"crs":"EPSG:4326","bbox":{"left":-61.82342,"right":-60.99497,"top":16.521578,"bottom":15.819616},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-61.82342,"right":-60.99497,"top":16.521578,"bottom":15.819616},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-61.82342,"right":-60.99497,"top":16.521578,"bottom":15.819616},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-61.82342,"right":-60.99497,"top":16.521578,"bottom":15.819616},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-61.82342,"right":-60.99497,"top":16.521578,"bottom":15.819616},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-61.82342,"right":-60.99497,"top":16.521578,"bottom":15.819616},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"CNES_972","attribution":"Centre national d'études spatiales (CNES)","logo":"http://wxs.ign.fr/static/logos/CNES_972/CNES_972.gif","url":"http://www.cnes.fr/","constraints":[{"crs":"EPSG:4326","bbox":{"left":-61.247208,"right":-60.778458,"top":14.899901,"bottom":14.371855},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-61.247208,"right":-60.778458,"top":14.899901,"bottom":14.371855},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-61.247208,"right":-60.778458,"top":14.899901,"bottom":14.371855},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-61.247208,"right":-60.778458,"top":14.899901,"bottom":14.371855},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-61.247208,"right":-60.778458,"top":14.899901,"bottom":14.371855},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-61.247208,"right":-60.778458,"top":14.899901,"bottom":14.371855},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"DITTT","attribution":"Direction des Infrastructures, de la Topographie et des Transports Terrestres","logo":"http://wxs.ign.fr/static/logos/DITTT/DITTT.gif","url":"http://www.dittt.gouv.nc/portal/page/portal/dittt/","constraints":[{"crs":"EPSG:4326","bbox":{"left":163.47784,"right":167.94624,"top":-19.434975,"bottom":-22.767689},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":163.47784,"right":167.94624,"top":-19.434975,"bottom":-22.767689},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":163.47784,"right":167.94624,"top":-19.434975,"bottom":-22.767689},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":163.47784,"right":167.94624,"top":-19.434975,"bottom":-22.767689},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":163.47784,"right":167.94624,"top":-19.434975,"bottom":-22.767689},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":163.47784,"right":167.94624,"top":-19.434975,"bottom":-22.767689},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"CNES_ALSACE","attribution":"Centre national d'études spatiales (CNES)","logo":"http://wxs.ign.fr/static/logos/CNES_ALSACE/CNES_ALSACE.gif","url":"http://www.cnes.fr/","constraints":[{"crs":"EPSG:4326","bbox":{"left":6.8086324,"right":7.668318,"top":48.32695,"bottom":47.39981},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":6.8086324,"right":7.668318,"top":48.32695,"bottom":47.39981},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":6.8086324,"right":7.668318,"top":48.32695,"bottom":47.39981},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":6.8086324,"right":7.668318,"top":48.32695,"bottom":47.39981},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":6.8086324,"right":7.668318,"top":48.32695,"bottom":47.39981},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":6.8086324,"right":7.668318,"top":48.32695,"bottom":47.39981},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"CNES_978","attribution":"Centre national d'études spatiales (CNES)","logo":"http://wxs.ign.fr/static/logos/CNES_978/CNES_978.gif","url":"http://www.cnes.fr/","constraints":[{"crs":"EPSG:4326","bbox":{"left":-63.160706,"right":-62.962185,"top":18.133898,"bottom":18.04345},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-63.160706,"right":-62.962185,"top":18.133898,"bottom":18.04345},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-63.160706,"right":-62.962185,"top":18.133898,"bottom":18.04345},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-63.160706,"right":-62.962185,"top":18.133898,"bottom":18.04345},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-63.160706,"right":-62.962185,"top":18.133898,"bottom":18.04345},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-63.160706,"right":-62.962185,"top":18.133898,"bottom":18.04345},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"CNES_974","attribution":"Centre national d'études spatiales (CNES)","logo":"http://wxs.ign.fr/static/logos/CNES_974/CNES_974.gif","url":"http://www.cnes.fr/","constraints":[{"crs":"EPSG:4326","bbox":{"left":55.205757,"right":55.84643,"top":-20.862825,"bottom":-21.401262},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":55.205757,"right":55.84643,"top":-20.862825,"bottom":-21.401262},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":55.205757,"right":55.84643,"top":-20.862825,"bottom":-21.401262},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":55.205757,"right":55.84643,"top":-20.862825,"bottom":-21.401262},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":55.205757,"right":55.84643,"top":-20.862825,"bottom":-21.401262},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":55.205757,"right":55.84643,"top":-20.862825,"bottom":-21.401262},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"CNES","attribution":"Centre national d'études spatiales (CNES)","logo":"http://wxs.ign.fr/static/logos/CNES/CNES.gif","url":"http://www.cnes.fr/","constraints":[{"crs":"EPSG:4326","bbox":{"left":-55.01953,"right":-50.88867,"top":6.053161,"bottom":1.845384},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-55.01953,"right":-50.88867,"top":6.053161,"bottom":1.845384},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-55.01953,"right":-50.88867,"top":6.053161,"bottom":1.845384},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-55.01953,"right":-50.88867,"top":6.053161,"bottom":1.845384},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"ASTRIUM","attribution":"Airbus Defence and Space","logo":"http://wxs.ign.fr/static/logos/ASTRIUM/ASTRIUM.gif","url":"http://www.geo-airbusds.com/","constraints":[{"crs":"EPSG:4326","bbox":{"left":-55.01953,"right":-50.88867,"top":6.053161,"bottom":1.845384},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-55.01953,"right":-50.88867,"top":6.053161,"bottom":1.845384},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-55.01953,"right":-50.88867,"top":6.053161,"bottom":1.845384},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-55.01953,"right":-50.88867,"top":6.053161,"bottom":1.845384},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"CNES_975","attribution":"Centre national d'études spatiales (CNES)","logo":"http://wxs.ign.fr/static/logos/CNES_975/CNES_975.gif","url":"http://www.cnes.fr/","constraints":[{"crs":"EPSG:4326","bbox":{"left":-56.410988,"right":-56.10308,"top":47.149963,"bottom":46.734093},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-56.410988,"right":-56.10308,"top":47.149963,"bottom":46.734093},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-56.410988,"right":-56.10308,"top":47.149963,"bottom":46.734093},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-56.410988,"right":-56.10308,"top":47.149963,"bottom":46.734093},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-56.410988,"right":-56.10308,"top":47.149963,"bottom":46.734093},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-56.410988,"right":-56.10308,"top":47.149963,"bottom":46.734093},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"CNES_976","attribution":"Centre national d'études spatiales (CNES)","logo":"http://wxs.ign.fr/static/logos/CNES_976/CNES_976.gif","url":"http://www.cnes.fr/","constraints":[{"crs":"EPSG:4326","bbox":{"left":44.916977,"right":45.30442,"top":-12.564543,"bottom":-13.089187},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":44.916977,"right":45.30442,"top":-12.564543,"bottom":-13.089187},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":44.916977,"right":45.30442,"top":-12.564543,"bottom":-13.089187},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":44.916977,"right":45.30442,"top":-12.564543,"bottom":-13.089187},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":44.916977,"right":45.30442,"top":-12.564543,"bottom":-13.089187},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":44.916977,"right":45.30442,"top":-12.564543,"bottom":-13.089187},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"CNES_977","attribution":"Centre national d'études spatiales (CNES)","logo":"http://wxs.ign.fr/static/logos/CNES_977/CNES_977.gif","url":"http://www.cnes.fr/","constraints":[{"crs":"EPSG:4326","bbox":{"left":-62.952805,"right":-62.78276,"top":17.98024,"bottom":17.862621},"minScaleDenominator":2133,"maxScaleDenominator":2133,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-62.952805,"right":-62.78276,"top":17.98024,"bottom":17.862621},"minScaleDenominator":4266,"maxScaleDenominator":4266,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-62.952805,"right":-62.78276,"top":17.98024,"bottom":17.862621},"minScaleDenominator":68248,"maxScaleDenominator":68248,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-62.952805,"right":-62.78276,"top":17.98024,"bottom":17.862621},"minScaleDenominator":34124,"maxScaleDenominator":34124,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-62.952805,"right":-62.78276,"top":17.98024,"bottom":17.862621},"minScaleDenominator":17062,"maxScaleDenominator":17062,"temporalExtent":["2008-06-18","2016-04-13"]},{"crs":"EPSG:4326","bbox":{"left":-62.952805,"right":-62.78276,"top":17.98024,"bottom":17.862621},"minScaleDenominator":8531,"maxScaleDenominator":8531,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"PLANETOBSERVER","attribution":"PlanetObserver (images satellites)","logo":"http://wxs.ign.fr/static/logos/PLANETOBSERVER/PLANETOBSERVER.gif","url":"http://www.planetobserver.com/","constraints":[{"crs":"EPSG:4326","bbox":{"left":-180,"right":180,"top":84,"bottom":-86},"minScaleDenominator":136495,"maxScaleDenominator":559082265,"temporalExtent":["2008-06-18","2016-04-13"]}]},
                     {"name":"MPM","attribution":"Marseille Provence Métropole","logo":"http://wxs.ign.fr/static/logos/MPM/MPM.gif","url":"http://www.marseille-provence.com/","constraints":[{"crs":"EPSG:4326","bbox":{"left":5.076959,"right":5.7168245,"top":43.454994,"bottom":43.153347},"minScaleDenominator":534,"maxScaleDenominator":534,"temporalExtent":["2008-06-18","2016-04-13"]}]}
                  ],
              }
          },
          mapEventsOptions : {
              // Appel de la fonction après le chargement de la carte
              "mapLoaded" : this.mapLoaded
          },
          controlsOptions : {
              layerSwitcher : {
                  maximised : true
              },
              mousePosition : {
                  maximised : false
              },
              attributions : {
                  maximised : false
              }
          }
      });
  }

}
