const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./main/lib/shapes');


class svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return ``
    }
    setTextElement(text,color){
        this.textElement = ``
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    
};

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter your (3) Character text:',
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please enter color name or number for the text:',
    },
    {
        type: 'input',
        name: 'shape',
        message: 'Please enter color name or number for the shape:',
    },
    {
        type: 'list',
        name: 'image-shape',
        message: 'What image shape would you like?',
        choices: ['Square', 'Circle', 'Triangle'],
    },
];