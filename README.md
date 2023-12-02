# CSE478-Group WIP Write UP

## Title + names of group members

  Title: The Cost of Living: Struggling to Make Ends Meet

  Contibutors:
  Ta-Shen Chen(tchen128@asu.edu, ID:1218877556), Nina Bryson (nbryson1@asu.edu, ID: 1216354815), Raima Aiyer (raiyer1@asu.edu, ID: 1219074155), Sparsh Bansal (sbansa49@asu.edu, ID: 1229165901)

## Overview

![Phase 1 Visualization](https://github.com/XTC333/CSE478-Group/blob/main/imgs/phase%201%20viz.png?raw=true)

![Phase 1.1 Visualization](https://github.com/XTC333/CSE478-Group/blob/main/imgs/phase%201.1%20viz.png?raw=true)

  "The Cost of Living: Struggling to Make Ends Meet" is a data visualization project aimed at highlighting the economic challenges faced by various income groups across the United States. Using interactive visualizations, this project illustrates the disparities in income, cost of living, and housing affordability.

## Data description

The datasets encompass various economic indicators for U.S. states, including median household income, cost of living, and unemployment rates. Here is an analysis of the type, attributes, their types, scales, and cardinalities of the datasets:
						
	Real Median Household Income by State, Annual (FRED, St. Louis Fed)​​:
      Attribute: Median Household Income
      Type: Quantitative (Ratio Scale)
      Scale: Interval (measured in dollars)
      Cardinality: High (unique values for each state)

	Cost of Living Index by State 2023 (World Population Review)​​:
      Attributes: Cost of Living Index, Grocery Costs, Housing Costs, Utilities, Transportation, Health, and Miscellaneous Costs
      Type: Quantitative (Ratio Scale)
      Scale: Index (relative to a baseline of 100)
      Cardinality: High (unique index values for each state and category)

	Median Household Income by State 2023 (World Population Review)​​:
      Attribute: Median Household Income
      Type: Quantitative (Ratio Scale)
      Scale: Interval (measured in dollars)
      Cardinality: High (unique values for each state)

	State Unemployment Rates, Seasonally Adjusted (U.S. Bureau of Labor Statistics)​​:
      Attribute: Unemployment Rate
      Type: Quantitative (Ratio Scale)
      Scale: Percentage
      Cardinality: High (unique unemployment rate for each state)

Each of these datasets provides a quantitative analysis of different aspects of economic health and living conditions across the U.S. states. The data are primarily on a ratio scale, given their numerical nature and the presence of a true zero point (e.g., $0 in income, 0% unemployment rate). The high cardinality in these datasets indicates a wide range of values across the states, useful for comparative analysis.

Links to the dataset;

  Visual 1:https://fred.stlouisfed.org/release/tables?eid=259515&rid=249
  Visual 2:https://worldpopulationreview.com/state-rankings/cost-of-living-index-by-state
  Visual 3:https://www.statista.com/statistics/233170/median-household-income-in-the-united-states-by-state/
  Visual 4:https://worldpopulationreview.com/state-rankings/median-household-income-by-state
  Visual 5:https://fred.stlouisfed.org/release/tables?eid=259515&rid=249
           https://www.bls.gov/charts/state-employment-and-unemployment/state-unemployment-rates-map.htm
  Visual 6: 

## Goals and Tasks

- Basic web interface layout with HTML and CSS.
- Create layout of index.html  
 'description/overview of story'
 'team member names and emails'
 'include designated areas for visuals'
 'include headers for each visual'
 'include information about each visual describing what it represents'
- Create visual 1
 'Interactive map showing income disparities across states'
- Create visual 2 
  'Scatter plot correlating cost of living with median incomes'
  'shows distribution of different metrics across states'
- Create visual 3 
  'Box-and-whisker plot showing the distribution of median incomes across the U.S.'
  'shows distribution of incomes (highlighting median, quartiles)'
- Create visual 4
  'Radial progress charts showing the percentage of households at different income levels.'
- Create visual 5 
  'Connected scatter plot showing the relationship between median income and unemployment rates over time.'
- Create visual 6 
  'Radial histogram chart that displays each bar as the median income per state. '
- Sourced data sets to visulaize
- Add working functionality of charts (legends, proper display, etc)
- Enhanced interactivity, including tooltips and linking between different views.


## Reflection

The core goals of our project remained generally consistent throughout the process with only a few changes and adjustments made to the graphs. In our initial we had outlined a few different graphs, but in the final product a few of the graphs were different. But some graphs, like the box and whisker plot and the dynamic 3D terrain map, stayed the same as in the original proposal. Our original proposal was very realistic and well thought out when it came to details, but as we took a closer look at the data, we made some minor adjustments. A few non-critical elements were excluded due to time constraints. There were some challenges when it came to finding the dataset for the project. There were more complex features we wanted to add for the interactions for the graphs, but ultimately did not due to the time restrictions. For next time, a more comprehensive understanding of the dataset when planning the proposal would have helped us, as well as clearer communication and time management would have enhanced the overall project performance.

## Installation and Usage

### Installation

- Clone the repository: `git clone [repository URL]`
- Open terminal 
- Navigate to the project directory: `cd [project directory]`
- Paste the following:

  $ run  python -m http.server

- Open `http://localhost:8000/` in a web browser to view the project.

### Usage

- Navigate through the visualizations using the menu options.
- Interact with the visualizations to explore different data aspects.
- [Additional usage instructions based on the implemented features.]

## Contributors

- Ta-Shen Chen(tchen128@asu.edu, ID:1218877556) - visualization 1 
- Nina Bryson (nbryson1@asu.edu, ID: 1216354815)- visualization 6 (Innovative view)
- Raima Aiyer (raiyer1@asu.edu, ID: 1219074155) - visualization 2 and 5 
- Sparsh Bansal (sbansa49@asu.edu, ID: 1229165901) - visualization 3 and 4
