d3.json("data.json").then(function (data) {

    function createScatterPlot() {

        const svgWidth = 600;
        const svgHeight = 400;
        const margin = { top: 20, right: 20, bottom: 50, left: 50 };
        const width = svgWidth - margin.left - margin.right;
        const height = svgHeight - margin.top - margin.bottom;
    
        const svg = d3.select("#scatterplot")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
        const xData = data.map(d => d.CostOfLivingIndex2023);
        const yData = data.map(d => d.income);
    
        const xScale = d3.scaleLinear()
            .domain([d3.min(xData), d3.max(xData)])
            .range([0, width]);
    
        const yScale = d3.scaleLinear()
            .domain([d3.min(yData), d3.max(yData)])
            .range([height, 0]);
    
        const xAxis = d3.axisBottom(xScale);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)

        svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", height - 6)
            .text("Cost of Living Index");
        
        const yAxis = d3.axisLeft(yScale);
        svg.append("g")
            .call(yAxis)

        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("y", 6)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .text("Median Income");
    
        svg.selectAll("circle")
            .data(data)
            .enter().append("circle")
            .attr("cx", d => xScale(d.CostOfLivingIndex2023))
            .attr("cy", d => yScale(d.income))
            .attr("r", 8)
            .attr("fill", "steelblue")
            .on("mouseover", function (event, d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
    
                tooltip.html(d.state)
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });
    
        addHoverFunctionality(svg, data);
    }
    
    function createConnectedScatterPlot() {

        const svgWidth = 600;
        const svgHeight = 400;
        const margin = { top: 20, right: 20, bottom: 50, left: 50 };
        const width = svgWidth - margin.left - margin.right;
        const height = svgHeight - margin.top - margin.bottom;
    
        const svg = d3.select("#scatterplot2")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
        const xData = data.map(d => d.income);
        const yData = data.map(d => d.rate);
    
        const xScale = d3.scaleLinear()
            .domain([d3.min(xData), d3.max(xData)])
            .range([0, width]);
    
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(yData)])
            .range([height, 0]);
    
        const xAxis = d3.axisBottom(xScale);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)

        svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", height - 6)
            .text("Median Income");
    
        const yAxis = d3.axisLeft(yScale);
        svg.append("g")
            .call(yAxis)
        
        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("y", 6)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .text("Unemployment Rate");

        svg.selectAll("line")
            .data(data)
            .enter().append("line")
            .attr("x1", d => xScale(d.income))
            .attr("y1", d => yScale(d.rate))
            .attr("x2", (d, i, nodes) => i < nodes.length - 1 ? xScale(data[i + 1].income) : xScale(d.income))
            .attr("y2", (d, i, nodes) => i < nodes.length - 1 ? yScale(data[i + 1].rate) : yScale(d.rate))
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2);

        svg.selectAll("circle")
            .data(data)
            .enter().append("circle")
            .attr("cx", d => xScale(d.income))
            .attr("cy", d => yScale(d.rate))
            .attr("r", 8)
            .attr("fill", "steelblue")
            .on("mouseover", function (event, d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
    
                tooltip.html(d.state)
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });
    
        addHoverFunctionality(svg, data);
    }

    function addHoverFunctionality(svg, data) {
        const tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);
    
        svg.selectAll("circle")
            .on("mouseover", function (event, d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
    
                tooltip.html(d.state)
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });
    }

    createScatterPlot();
    createConnectedScatterPlot();
    
});
