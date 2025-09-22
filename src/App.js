import React from 'react';
import './App.css';


class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      children: [
        {
          id: 1,
          header: "Which HBCU institution has the best CAFETERIA?",
          picture: ['Morehouse.png', 'Spelman.png', 'CAU.png'],
          index: 0

        },
        {
          id: 2,
          header: "Which sooccer team has the best record?",
          picture: ['Barca.png','NMadrid.png','PSG.png'],
          index: 0
        },

        {
          id: 3,
          header: "Which country would like to visit first?",
          picture:[ 'CMR.png','Cote.png', 'Chad.png'],
          index: 0
        },
      ],
    };
  this.handleCounterUpdate= this.handleCounterUpdate.bind(this);
}
  handleCounterUpdate(childId) {
    this.setState(prevState => {
      const updatedChildren = prevState.children.map(child => {
        if (child.id === childId) {
          // increment index, loop back to 0 when exceeding array length
          const newIndex = (child.index + 1) % child.picture.length;
          return { ...child, index: newIndex };
        }
        return child;
      });
      return { children: updatedChildren };
    });
  }

  render() {
    return (
      <div>
       
        {this.state.children.map(child=>(
        <Child
          key={child.id}
          id={child.id}
          header={child.header}
          picture= {child.picture[child.index]}
          onButtonclick={this.handleCounterUpdate}
        />
        ))}
      </div>
     
    )
  }
}


class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    console.log('In this function we want to emit an event to the parent component!!')
     console.log("Child clicked:", this.props.id);
     this.props.onButtonclick(this.props.id);
  }
  

  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
  <img className="styled-image" src={this.props.picture} alt={this.props.header} />
        <button type='button' onClick={this.handleButtonClick}>Action</button>
      </div>
    );

  }


}


export default Parent;
