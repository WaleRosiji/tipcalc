# Tip Calculator

![Tip Calculator Screenshot](./screenshots/tip-calculator.png)

A responsive tip calculator that helps users determine tip amounts and split bills between multiple people.

## Features
- Calculate tip based on bill amount and tip percentage
- Custom tip percentage input
- Split bill calculation
- Responsive design
- Error handling for invalid inputs
- Reset functionality

## Technologies Used
- HTML5
- CSS3
- JavaScript

## Challenges Faced
1. **Input Validation**: 
   - Initially struggled with handling zero/negative values
   - Solved by adding error messages and disabling calculation for invalid inputs

2. **Dynamic Updates**:
   - Needed results to update in real-time without a submit button
   - Implemented event listeners for all input changes

3. **Responsive Layout**:
   - Tip percentage buttons needed to rearrange on small screens
   - Used CSS Grid with media queries

## How to Use
1. Enter the bill amount
2. Select a tip percentage or enter a custom value
3. Enter number of people
4. View calculated tip amount and total per person
5. Click "Reset" to clear all fields

## Installation
Simply clone the repository and open `index.html` in your browser.
