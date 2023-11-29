const fs = require('fs');
const inquirer = require('inquirer');
const { CustomCircle, CustomTriangle, CustomSquare } = require('../main/lib/shapes');


class svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
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

function writeToFile (filename, data){
    console.log('Applying [' + data + ' ] to file [' + fileName + ']');
    fs.writeFile(fileName, data, function (err){
        if (err) {
            return console.log(err)
        }
        console.log('Yay! You have created a custom-logo.svg!')
    });
}
async function init() {
    console.log('Starting Initialization')
    let customSvgString = '';
    
    const customSvgFile = 'custom-logo.svg';

    const userAnswers = await inquirer.createPromptModule(userQuestions);

    const userText = userAnswers.userText;
    const userFontColor = userAnswers.userTextColor;
    const userShapeColor = userAnswers.userShapeColor;
    const userShapeType = userAnswers.userShapeType;

    let userShape;
    
    if (userShapeType === 'Custom Circle') {
        userShape = new CustomCircle();
        console.log('Selected Custom Circle shape');
    } else if (userShapeType === 'Custom Square') {
        userShape = new CustomSquare();
        console.log ('Selected Custom Square shape')
    } else if (userShapeType === 'Custom Triagle') {
        userShape - new CustomTriangle();
    } else{
        console.log('No shape selected');
        return;
    } 

    userShape.setColor(userShapeColor);

    const customSvgInstance = new customSvgFile();

    customSvgInstance.setTextElement(userText, userFontColor);

    customSvgInstance.setShapeElement(userShape);

    customSvgString = customSvgInstance.render();

    console.log('Displaying shape:' + customSvgString)

    console.log('Custom shape generatoin complete!');

    console.log('Writing custom shape to file...');

    writeToCustomFile(customSvgFile, customSvgString);
}

initialize();