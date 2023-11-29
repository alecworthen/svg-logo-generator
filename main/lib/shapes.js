class CustomShape{
    constructor(){
        this.customColor = ''
    };
    setCustomColor(color){
        this.customColor = color;
    };
};

class CustomTriangle extends CustomShape {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.customColor}">>`
    };
}; 

class CustomCircle extends CustomShape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.customColor}">`
    };
};

class CustomSquare extends CustomShape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.customColor}">`
    };
};

module.exprots = {CustomTriangle, CustomCircle, CustomSquare};