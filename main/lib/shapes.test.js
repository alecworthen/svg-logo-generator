const {CustomTriangle, CustomCircle, CustomSquare} = require('./shapes');

describe('CustomTriangle', () => {
    test('renders correctly', () => {
        
        const customShape = new CustomTriangle();
        
        const customColor = 'yellow';
        
        customShape.setCustomColor(customColor);
        
        const expectedSvgString = `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${customColor}">`;
        
        expect(customShape.render()).toEqual(expectedSvgString);
    });
});

describe('CustomCircle', () => {
    test('renders correctly', () => {
        const customShape = new CustomCircle();
        const customColor = 'red';
        customShape.setCustomColor(customColor);
        const expectedSvgString = `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${customColor}">`;
        expect(customShape.render()).toEqual(expectedSvgString);
    });
});

describe('CustomSquare', () => {
    test('renders correctly', () => {
        const customShape = new CustomSquare();
        const customColor = 'blue';
        customShape.setCustomColor(customColor);
        const expectedSvgString = `<rect x="50" height="200" width="200" fill="${customColor}">`;
        expect(customShape.render()).toEqual(expectedSvgString);
    });
});