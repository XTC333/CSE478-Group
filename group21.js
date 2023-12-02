
// Define the dimensions for the visualization.
const width = 960, height = 500;
const innerRadius = 100, outerRadius = Math.min(width, height) / 2;
const fullCircle = 2 * Math.PI;

const svg = d3.select('#innovativeView').append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', `translate(${width / 2},${height / 2})`);

// Load your CSV data.
d3.csv('medincome.csv').then(function(data) {
  // Convert strings to numbers and sort by median income.
  const incomeData = data.map(d => ({
    state: d.State,
    medianIncome: +d.Median_Household_Income.replace(/\$/g, '').replace(/,/g, '')
  })).sort((a, b) => d3.ascending(a.medianIncome, b.medianIncome));

  // Define a scale for the angular coordinate.
  const angleScale = d3.scaleBand()
    .domain(incomeData.map(d => d.state))
    .range([0, fullCircle])
    .padding(0.1);

  // Define a scale for the radial coordinate.
  const radiusScale = d3.scaleLinear()
    .domain([0, d3.max(incomeData, d => d.medianIncome)])
    .range([innerRadius, outerRadius]);

  // Create the radial bars.
  svg.append('g')
    .selectAll('path')
    .data(incomeData)
    .enter()
    .append('path')
    .attr('fill', '#69b3a2')
    .attr('d', d3.arc()  // Using the arc generator
      .innerRadius(innerRadius)
      .outerRadius(d => radiusScale(d.medianIncome))
      .startAngle(d => angleScale(d.state))
      .endAngle(d => angleScale(d.state) + angleScale.bandwidth())
      .padAngle(0.01)
      .padRadius(innerRadius));

  // Add labels (state names)
svg.append('g')
  .selectAll('text')
  .data(incomeData)
  .enter()
  .append('text')
  // Adjust the 'x' position to move the text closer or to overlap the slice
  .attr('x', d => radiusScale(d.medianIncome) - 200) // Decrease the radius for text by 20 units
  .attr('y', d => angleScale(d.state))
  .text(d => d.state) // Use abbreviations here if needed
  .style('font-size', '11px')
  .attr('text-anchor', 'middle')
  .attr('transform', d => {
    // Calculate the angle for the rotation
    const angle = (angleScale(d.state) + angleScale.bandwidth() / 2) * 180 / Math.PI - 90;
    // Calculate the radial position for the text
    const radialPosition = innerRadius + (radiusScale(d.medianIncome) - innerRadius) / 2 - 7; // Decrease the radial position to move the text closer
    return `rotate(${angle}) translate(${radialPosition},0)`;
  })
  .style('alignment-baseline', 'middle');
  
  // Context for high income
svg.append('text')
  .attr('x', width / 2 - innerRadius)
  .attr('y', -height / 2 + 20) // Position this at the top of the chart
  .text('Outer Spiral: Higher AVG Income')
  .style('font-size', '14px')
  .attr('text-anchor', 'middle');

// Context for low income
svg.append('text')
  .attr('x', width / 2 - innerRadius)
  .attr('y', -height / 2 + 40) // Position this slightly below the first annotation
  .text('Inner Spiral: Lower AVG Income')
  .style('font-size', '14px')
  .attr('text-anchor', 'middle');


  
});
