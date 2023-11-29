const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./main/lib/shapes');

class svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
    
        return `<svg>${this.shapeElement}${this.textElement}</svg>`
    };
    setTextElement(text,color){
        this.textElement = `<text>${text}</text>`
        
    }
}
