var width = 960;
var height = 500;

var lowColor = '#b7e4c7'
var highColor = '#006837'

// D3 Projection
var projection = d3.geoAlbersUsa()
    .translate([width / 2, height / 2])
    .scale([1000]);

var path = d3.geoPath()
    .projection(projection);

var svg = d3.select("#visual-1")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(d3.zoom().on("zoom", function () {
        svg.attr("transform", d3.event.transform)
    }))
    .append("g");

// Create tooltip
var tooltip = d3.select(".custom-tooltip");
d3.json("us-income.json", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].income))
    }
    var minVal = d3.min(dataArray)
    var maxVal = d3.max(dataArray)
    var ramp = d3.scaleLinear().domain([minVal, maxVal]).range([lowColor, highColor])

    d3.json("us-states.json", function (json) {

        for (var i = 0; i < data.length; i++) {

            var stateName = data[i].state_name;
            var stateIncome = data[i].income;

            for (var j = 0; j < json.features.length; j++) {
                var jsonState = json.features[j].properties.name;
                if (stateName == jsonState) {
                    json.features[j].properties.value = stateIncome;
                    break;
                }
            }
        }

        svg.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) { return ramp(d.properties.value) })
            .on("mouseover", function (d) {
                d3.select(this).transition().duration(300)
                    .style("fill", "gray")
                    .style("stroke", "gray")
                    .style("stroke-width", 2);
            
                tooltip.style("display", "inline-block")
                    .html(`<strong>${d.properties.name}</strong><br>Income: $${d.properties.value.toLocaleString()}`)
                    .style("left", event.offsetX + 85 + "px")
                    .style("top", event.offsetY + 55 + "px");
            })
            .on("mousemove", function (d) {
                tooltip
                    .style("left", event.offsetX + 85 + "px")
                    .style("top", event.offsetY + 55 + "px");
            })
            .on("mouseout", function (d) {
                d3.select(this).transition().duration(300)
                    .style("fill", function (d) { return ramp(d.properties.value) })
                    .style("stroke", "#fff")
                    .style("stroke-width", 1);
            
                tooltip.style("display", "none");
            });

        createLegend(minVal, maxVal, '#visual-1');
    });
});

function createLegend(minVal, maxVal, containerId) {
    var legendDiv = d3.select(containerId).select(".legend");
    var w = 140, h = 300;
    var key = legendDiv.append("svg")
        .attr("width", w)
        .attr("height", h)
        .attr("class", "legend");

    var legend = key.append("defs")
        .append("svg:linearGradient")
        .attr("id", "gradient")
        .attr("x1", "100%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "100%")
        .attr("spreadMethod", "pad");

    legend.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", highColor)
        .attr("stop-opacity", 1);

    legend.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", lowColor)
        .attr("stop-opacity", 1);

    key.append("rect")
        .attr("width", w - 100)
        .attr("height", h)
        .style("fill", "url(#gradient)")
        .attr("transform", "translate(0,10)");

    var y = d3.scaleLinear()
        .range([h, 0])
        .domain([minVal, maxVal]);

    var yAxis = d3.axisRight(y);

    key.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(41,10)")
        .call(yAxis);
}