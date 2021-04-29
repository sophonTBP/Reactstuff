//Get State from the Redux Store



const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
  let currentState = store.getState()


////////// Define a Redux Action  

// Define an action here:
let action = {
    type: 'LOGIN'
  }


  /////Define an Action Creator
  const action = {
    type: 'LOGIN'
  }
  // Define an action creator here:
  function actionCreator() {return  action} ;



  ////Dispatch an Action Event
  const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action here:
  store.dispatch(loginAction())





  /////////Handle an Action in the Store
////////****note that it also work with an anonymous object in the return statement (state is implicit?!? in the reducer) */

  const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // Change code below this line
    
   if(action.type=='LOGIN') { 
    return state={login:true}
  
     } else
      {
       return state
       }
    // Change code above this line
  };
  
  const store = Redux.createStore(reducer);
  console.log(store.state)
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };







  //////register a store listner



  const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
store.subscribe(() => {if(store.dispatch){count++}})
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);















  ////////Use a Switch Statement to Handle Multiple Actions
  


  const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // Change code below this line
  switch (action.type) {
    case 'LOGIN': return{authenticated: true} 
    case'LOGOUT': return{authenticated: false}
    
    default: return state
      
  }
  
    // Change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };






  ///////////Use const for Action Types




  const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};




///////////////////combine reducers with an Object whose keys are reducer fuctions





const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  auth: authReducer,
  count: counterReducer
});

const store = Redux.createStore(rootReducer);









/////////////////// Send Action data tothe Store

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
case ADD_NOTE :
     return action.text
    // Change code above this lin
    default: 
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
 return {
  type : ADD_NOTE,
  text : note
};
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());



///// potential squeleton for a loading icon
/////////////Use Middleware to Handle Asynchronous ActionsPassed



const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
dispatch(requestingData())
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
dispatch(receivedData(data))
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);










//////////////REdux counter--------------
const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state +1;
      
    case DECREMENT:
      return state-1;
    default:
      return state;
  }
};// Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction =() =>{return{type:INCREMENT}}; // Define an action creator for incrementing

const decAction =() =>{return{type:DECREMENT}}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers






////////Never Mutate State-- naive version dat works-----------------


const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
    let newArr=[]
    todos.map(item=>newArr.push(item))
    newArr.push(action.todo)
      // Don't mutate state here or the tests will fail
      return newArr
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);


//////////////or even better 

const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
    
   
      // Don't mutate state here or the tests will fail
      return [...todos,action.todo]  
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}




/////////////////////////Use the Spread Operator on Arrays



const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch(action.type) {
      case 'ADD_TO_DO':
        // Don't mutate state here or the tests will fail
        return[...state,action.todo]
      default:
        return state;
    }
  };
  
  const addToDo = (todo) => {
    return {
      type: 'ADD_TO_DO',
      todo
    }
  }
  
  const store = Redux.createStore(immutableReducer);






  //////////////////////Remove an Item from an Array



  const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':
    
    let newArr= [...state]
        newArr.splice(action.index, 1)
        // Don't mutate state here or the tests will fail
        return newArr
      default:
        return state;
    }
  };
  
  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
  }
  
  const store = Redux.createStore(immutableReducer);
















//// or also 
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
    
   
      // Don't mutate state here or the tests will fail
      return  todos.concat(action.todo)
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}




















