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
        return ``
    };
}; 

class CustomCircle extends CustomShape {
    render() {
        return ``
    };
};

class CustomSquare extends CustomShape {
    render() {
        return ``
    };
};

module.exprots = {CustomTriangle, CustomCircle, CustomSquare};