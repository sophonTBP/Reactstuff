const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Change code below this line
  ReactDOM.render(JSX,document.getElementById("challenge-node"))
 

  // <div className="myDiv">
  //<h1>Add a class to this div</h1>
  //</div>




  /*Components are the core of React. Everything in React is a component and here you will learn how to create one.

There are two ways to create a React component. The first way is to use a JavaScript function. Defining a component in this way creates a stateless functional component. The concept of state in an application will be covered in later challenges. For now, think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data. (We'll cover the second way to create a React component in the next challenge.)

To create a component with a function, you simply write a JavaScript function that returns either JSX or null. One important thing to note is that React requires your function name to begin with a capital letter.*/
  const MyComponent = function() {
    // Change code below this line
  
  return( 
  <div>JSX</div>)
    // Change code above this line
  }




  //Basic react stuff be like : 
  const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* Change code below this line */ }
  <TypesOfFruit/>
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
  <Fruits/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };







//render React.api call





class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* Change code below this line */}
  <Fruits  />
  <Vegetables />
          {/* Change code above this line */}
        </div>
      );
    }
  };
  
  // Change code below this line
  ReactDOM.render(<TypesOfFood />,document.getElementById("challenge-node"))






  //shit's gettin real now!


  
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
    <h1>My First React Component!</h1>
        </div>
      );
    }
  };

  ReactDOM.render(<MyComponent />,document.getElementById("challenge-node"))












