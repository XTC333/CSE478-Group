d3.csv("median-household-income-by-state-2023.csv").then(function (data) { 

  // Set up SVG canvas
  const margin = { top: 0, right: 10, bottom: 30, left: 0 },
    width = 800 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;

  const svg = d3
    .select("#radialProgressChart")
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
    .attr("transform", `translate(${-30},${margin.top})`);

  // Max income for scaling
  const maxIncome = d3.max(data, (d) => +d.MedianHouseholdIncome2021);

  // Income scale
  const incomeScale = d3
    .scaleLinear()
    .domain([0, maxIncome])
    .range([0, 2 * Math.PI]);

  // Arc generators
  const backgroundArc = d3
    .arc()
    .innerRadius(35)
    .outerRadius(40)
    .startAngle(0)
    .endAngle(2 * Math.PI);
  const incomeArc = d3.arc().innerRadius(35).outerRadius(40);

  // Calculate positions for each state
  const positions = data.map((_, i) => {
    const x = 100 + (i % 7) * 110; // 7 bars per line, 100px apart
    const y = 100 + Math.floor(i / 7) * 110; // New line every 7 bars, 100px apart
    return [x, y];
  });

  // Create groups for each state
  const stateGroups = svg
    .selectAll(".state-group")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "state-group")
    .attr(
      "transform",
      (d, i) => `translate(${positions[i][0]},${positions[i][1]})`
    );

  // Draw background arcs
  stateGroups.append("path").attr("d", backgroundArc).style("fill", "#ccc");

  // Draw income arcs
  stateGroups
    .append("path")
    .style("fill", "#53777A")
    .attr("d", (d) =>
      incomeArc
        .startAngle(0)
        .endAngle(incomeScale(+d.MedianHouseholdIncome2021))(d)
    );

  // Add percentage text
  stateGroups
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dy", "0.5em")
    .style("fill", "#53777A")
    .text(
      (d) =>
        `${(
          (incomeScale(+d.MedianHouseholdIncome2021) / (2 * Math.PI)) *
          100
        ).toFixed(1)}%`
    );

  // Add state name text
  stateGroups
    .append("text")
    .style("fill", "#53777A")
    .attr("text-anchor", "middle")
    .attr("dy", "3.5em")
    .text((d) => d.state);
});
