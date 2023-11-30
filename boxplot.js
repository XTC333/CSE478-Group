d3.csv("statistic_id233170_us-median-household-income-2022-by-state.csv").then(
  function (data) { 

    data.forEach((d) => {
      d.income = d.income.replace(/,/g, "").replace("'", ""); // Remove commas and single quote
      d.income = +d.income; // Convert to number
    });

    // Set up SVG canvas
    const margin = { top: 10, right: 30, bottom: 30, left: 100 },
      width = 700 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select("#boxplot")
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr(
        "viewBox",
        "0 0 " +
          (width + margin.left + margin.right) +
          " " +
          (height + margin.top + margin.bottom)
      )
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create scales
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => +d.income) + 2000])
      .range([height, 0])
      .nice();

    // Draw axis
    svg.append("g").call(d3.axisLeft(y));

    // Calculate quartiles and median
    const q1 = d3.quantile(
      data.map((d) => d.income),
      0.25
    );
    const median = d3.quantile(
      data.map((d) => d.income),
      0.5
    );
    const q3 = d3.quantile(
      data.map((d) => d.income),
      0.75
    );
    const interQuantileRange = q3 - q1;
    const min = q1 - 1.5 * interQuantileRange;
    const max = q3 + 1.5 * interQuantileRange; 

    // Add X axis label
    // svg
    //   .append("text")
    //   .attr("text-anchor", "end")
    //   .attr("x", width / 2)
    //   .attr("y", height + margin.bottom - 10)
    //   .text("States");

    // Add Y axis label
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .attr("y", -margin.left + 20)
      .attr("x", - height / 2)
      .text("Median Income ($)");

    // Box
    const boxWidth = 100;
    svg
      .append("rect")
      .attr("x", width / 2 - boxWidth / 2)
      .attr("y", y(q3))
      .attr("height", y(q1) - y(q3))
      .attr("width", boxWidth)
      .style("fill", "#007BFF");

    // Median line
    svg
      .append("line")
      .attr("x1", width / 2 - boxWidth / 2)
      .attr("x2", width / 2 + boxWidth / 2)
      .attr("y1", y(median))
      .attr("y2", y(median))
      .style("stroke", "black")
      .style("width", 80);

    // Whiskers
    svg
      .append("line")
      .attr("x1", width / 2)
      .attr("x2", width / 2)
      .attr("y1", y(min))
      .attr("y2", y(q1))
      .style("stroke", "black");

    svg
      .append("line")
      .attr("x1", width / 2)
      .attr("x2", width / 2)
      .attr("y1", y(q3))
      .attr("y2", y(max))
      .style("stroke", "black");

    // Draw horizontal lines for min and max
    svg
      .append("line")
      .attr("x1", width / 2 - boxWidth / 2)
      .attr("x2", width / 2 + boxWidth / 2)
      .attr("y1", y(min))
      .attr("y2", y(min))
      .style("stroke", "black");

    svg
      .append("line")
      .attr("x1", width / 2 - boxWidth / 2)
      .attr("x2", width / 2 + boxWidth / 2)
      .attr("y1", y(max))
      .attr("y2", y(max))
      .style("stroke", "black");
  }
);
