import {
    Sprite
}
from './sprite.js';
class Map {
    constructor() {

        this.chart = am4core.create("chartdiv", am4maps.MapChart);

        this.container = am4core.create("chartdiv", am4core.Container);
        this.chart = null;

        this.series = new am4maps.MapPolygonSeries();

    }
    init = () => {
        this.setup();
        this.setStyleProperties();
        // this.showCanadianProvinces();

        let sprite = new Sprite();
        sprite.init(this.chart);

    }
    setup = () => {
        this.container.width = am4core.percent(100);
        this.container.height = am4core.percent(100);
        this.chart = this.container.createChild(am4maps.MapChart);

        this.chart.height = am4core.percent(100);
        this.setZoom();
        this.chart.geodata = am4geodata_worldLow;

        this.chart.projection = new am4maps.projections.Orthographic();
        this.chart.panBehavior = "rotateLongLat";


        this.chart.projection = new am4maps.projections.Miller();
        this.chart.panBehavior = "move";


        // this.chart.deltaLatitude = -30;
        // this.chart.deltaLongitude = 100;

        this.series.useGeodata = true;
        this.chart.series.push(this.series);

        this.series.exclude = ["AQ"];
        this.chart.seriesContainer.resizable = false;


    }


    setZoom = () => {
        this.chart.homeZoomLevel = 2;
        this.chart.zoomControl = new am4maps.ZoomControl();
        this.chart.zoomControl.align = "right";
        this.chart.zoomControl.marginRight = 15;
        this.chart.zoomControl.valign = "middle";
        this.chart.homeGeoPoint = {
            longitude: 0,
            latitude: -2
        };
    }
    setStyleProperties = () => {
            console.log(this.series);
            let polygonTemplate = this.series.mapPolygons.template;
            polygonTemplate.tooltipText = "{name}";
            polygonTemplate.fill = am4core.color("#ffeacc");
            let hs = polygonTemplate.states.create("hover");
            hs.properties.fill = am4core.color("#e8be82");

            this.setData(polygonTemplate);

        }
        /*    showCanadianProvinces = () => {
                let canadaSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
                canadaSeries.geodata = am4geodata_canadaLow;
                let canada_polygonTemplate = canadaSeries.mapPolygons.template;
                canada_polygonTemplate.tooltipText = "{name}";
                canada_polygonTemplate.fill = am4core.color("#eb713d");
                let hs = canada_polygonTemplate.states.create("hover");
                hs.properties.fill = am4core.color("orange");
            }*/
    setData = (template) => {
            this.series.data = [{
                    id: "US",
                    name: "United States",
                    value: 100,

        }, {
                    id: "MX",
                    name: "Mexico",
                    value: 40,

        }, {
                    id: "CA",
                    name: "Canada",
                    value: 80,
                    disabled: true,
                    fill: am4core.color('#eb713d'),
                    hover: am4core.color('red')
        }, {
                    id: "CN",
                    name: "China",
                    value: 12,
                    disabled: true,
        },

                {
                    id: "US",
                    name: "United States",
                    value: 100,

        }, {
                    id: "MX",
                    name: "Mexico",
                    value: 40,

        }, {
                    id: "CA",
                    name: "canada",
                    value: 80,
                    disabled: true,
                    fill: am4core.color('#eb713d'),
                    hover: am4core.color('red')
        }]
                    template.propertyFields.fill = "fill"
                    template.tooltipText = "{name}: {value}"
        
    }
}
            export let yearbookMap = new Map();
