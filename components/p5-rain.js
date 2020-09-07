import React, { Component } from 'react';

class Rain extends Component {
  constructor(){
  super()
  this.renderRef = React.createRef()
  this.state = {
    x: 100,
    y: 100
    }
  }

  componentDidMount(){
    const p5 = require("p5")
    this.sketch = new p5( p => {

    p.setup = ()  => {
        p.createCanvas(p.windowWidth, p.windowHeight)
        .parent(this.renderRef.current);
        p.background('white');
        p.strokeWeight(2);
        p.frameRate(30);

    }
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight )
    }

    p.draw = () => {
        let step = p.frameCount * 8;
        p.clear();
          
        // Equivalent to translate(x, y);
        p.applyMatrix(1, 0, 0, 1, 40, 90 + step);
        p.line(0, 0, 0, 50);

    }

    });
}

render(){

    return (
        <div className="App background-cherry">
            <div ref={this.renderRef}></div>
        </div>
    );
}
}


export default Rain;