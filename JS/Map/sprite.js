export class Sprite {
    constructor(chart) {

        this.image = new am4maps.MapImageSeries();
    }
    init = (chart) => {
        chart.series.push(this.image);
        this.createDataEllipses();
    }
    createDataEllipses = () => {
        let imageSeriesTemplate = this.image.mapImages.template;
        let circle = imageSeriesTemplate.createChild(am4core.Circle);
        circle.radius = 20;
        circle.fill = am4core.color("#B27799");
        circle.stroke = am4core.color("#FFFFFF");
        circle.strokeWidth = 2;
        circle.nonScaling = true;
        circle.tooltipText = "{title}: {people}";
        imageSeriesTemplate.propertyFields.latitude = "latitude";
        imageSeriesTemplate.propertyFields.longitude = "longitude";
        this.addData();

    }
    addData = () => {
        this.image.data = [{
            "latitude": 48.856614,
            "longitude": 2.352222,
            "title": "Paris",
            "people":5
          }, {
            "latitude": 40.712775,
            "longitude": -74.005973,
            "title": "New York",
            "people":15
          }, {
            "latitude": 49.282729,
            "longitude": -123.120738,
            "title": "Vancouver",
            "people":8
          },{
            "latitude":51.2538,
            "longitude":-85.3232,
            "title":"Canada",
            "people":24
          }];
          console.log(this.image);
    }
}