import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {name: 'Zouheir', age: 29},
            {name: 'Tarik', age: 30},
            {name: 'Nakdi', age: 35}
        ],
        otherState: 'some other value'
    }

    switchNameHandler = () => {
      //  console.log('was clicked!');
        this.setState({
            persons: [
                {name: 'Maximilian', age: 29},
                {name: 'Tarik', age: 30},
                {name: 'Nakdi', age: 35}
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <h1> I'm a React App ! </h1>
                <p>This is really working</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>

                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> Children: mia san mia</Person>

            </div>
        );

        //   return React.createElement('div',null, React.createElement('h1', {className: 'App'},'does it work now?'));

    }
}

export default App;
