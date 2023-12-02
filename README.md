# CSE478-Group WIP Write UP


## Project Overview

"The Cost of Living: Struggling to Make Ends Meet" is a data visualization project aimed at highlighting the economic challenges faced by various income groups across the United States. Using interactive visualizations, this project illustrates the disparities in income, cost of living, and housing affordability.

## Current Prototype (v0.1-wip)

### Implemented Features

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
  'Description of the innovative visualization, which could be an extension or a novel type.'
- Sourced data sets to visulaize


### Pending Features
- Implement 6 visualizations using group21.js'
- Initial data loading and processing scripts
- Add working functionality of charts (legends, proper display, etc)
- Enhanced interactivity, including tooltips and linking between different views.


### Changes Since Proposal

- We have updated the types of visualizations
- Deciding the innovative view visulaization

### Screenshots

 ![Phase 1 Visualization](https://github.com/XTC333/CSE478-Group/blob/main/imgs/phase%201%20viz.png?raw=true)

![Phase 1.1 Visualization](https://github.com/XTC333/CSE478-Group/blob/main/imgs/phase%201.1%20viz.png?raw=true)


### Data Source and Preprocessing

- Original Data Source: https://www.forbes.com/advisor/mortgages/cost-of-living-by-state/
- Data Preprocessing: [Describe any preprocessing steps like cleaning, aggregation, or transformation applied to the data.]
- At this point, we are trying to select the most relevant features for analysis.
- Also, our group is trying to convert categorical data into a numerical format.
- Our group is planning to split the data into training and test sets to evaluate the performance of predictive models.


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

### Idioms

The interface built is a web-based data visualization platform featuring interactive visual representations of median household income across U.S. states.

What the implemented visualizations and what do they allow a user to do? For each visualization, describe the encoding choices and your rationale for the design decisions.

	1. Choropleth Map (Vis 1): Displays income disparities across U.S. states through color gradients, with interactivity enabling users to see specific state income levels upon hovering.
 
	2. Scatter Plot (Vis 2): Correlates cost of living with median incomes, allowing users to observe and understand the relationship between these two variables.
	
 3. Box and Whisker Plot (Vis 3): Shows the distribution of median incomes across the U.S., giving insights into the spread and outliers of income data.
	
 4. Radial Progress Chart (Vis 4): Represents the percentage of households at different income levels in a radial format, allowing users to quickly grasp the income distribution.
	
 5. Connected Scatter Plot (Vis 5): Shows the relationship between median income and unemployment rates, with the connection lines highlighting trends or changes over time.
  
 6. Radial Histogram (Innovative Vis 6): Our innovative visualization, which uses a radial layout to display median income per state. The length of each bar corresponds to the income amount, offering a novel approach to comparing incomes across states.


What are the interactions?

- Interactivity is present in the form of tooltips and hover effects, providing more information on demand.
  
How are the views linked?

- The views are linked conceptually, each offering a different perspective on median income data.
  
What algorithms are necessary to support your idioms?

- The algorithms supporting these idioms include data sorting, scale computations, and arc generation for radial layouts. 

Include screenshots detailing  the idioms in this section, to help the reader understand what you have done.
You should explicitly specify which of your charts is considered innovative, any why.


## Reflection
The core goals of our project remained generally consistent throughout the process with only a few changes and adjustments made to the graphs. In our initial we had outlined a few different graphs, but in the final product a few of the graphs were different. But some graphs, like the box and whisker plot and the dynamic 3D terrain map, stayed the same as in the original proposal. Our original proposal was very realistic and well thought out when it came to details, but as we took a closer look at the data, we made some minor adjustments. A few non-critical elements were excluded due to time constraints. There were some challenges when it came to finding the dataset for the project. There were more complex features we wanted to add for the interactions for the graphs, but ultimately did not due to the time restrictions. For next time, a more comprehensive understanding of the dataset when planning the proposal would have helped us, as well as clearer communication and time management would have enhanced the overall project performance.

## Contributors
Ta-Shen Chen(tchen128@asu.edu, ID:1218877556) - visualization 1
Nina Bryson (nbryson1@asu.edu, ID: 1216354815)- visualization 6
Raima Aiyer (raiyer1@asu.edu, ID: 1219074155) - visualization 2 and 5
Sparsh Bansal (sbansa49@asu.edu, ID: 1229165901) - visualization 3 and 4
