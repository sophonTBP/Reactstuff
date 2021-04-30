////////////////////React Redux----------
class DisplayMessages extends React.Component {
    // Change code below this line
  constructor(props) {
      super(props);
      this.state = {
        input:'',
        messages:[]
      }}
    // Change code above this line
    render() {
      return <div />
    }
  };













  /////////// Manage State Locally First----------
  /////Missed the indexing of the data-------------
  class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    // Add handleChange() and submitMessage() methods here
    handleChange(e) {
      this.setState({
        input: e.target.value
      });
      }
  
    submitMessage(){    
       this.setState({
       messages: [...this.state.messages,this.state.input]
       ,
       input:''
      });
  
    }
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }<input type="text" value={this.state.input} onChange = {this.handleChange = this.handleChange.bind(this)} />
  
  <button type='submit' onClick={this.submitMessage = this.submitMessage.bind(this)}>Submit</button>
  
  <ul>{
    this.state.messages.map(item=><li>{item}</li>)
  }</ul> 
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };



/////////////Extract State Logic to Redux///////////////////////////////////









  const ADD =  "ADD"
let addMessage =(message)=> {return {
  type : ADD,
  message
}}     

const messageReducer = (state = [], action) => {
  // Change code below this line
 switch(action.type) {
      case 'ADD':
        // Don't mutate state here or the tests will fail
        return [...state,action.message];
      default:
        return state;
    
  };
  // Change code above this line
};

const store = Redux.createStore(messageReducer)
