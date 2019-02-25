import React, {useState} from 'react';
import './App.css';

import Person from './Person/Person';

const app = props => {

    const [personsState, setPersonState] = useState({
        persons: [
            {name: 'Zouheir', age: 29},
            {name: 'Tarik', age: 30},
            {name: 'Nakdi', age: 35}
        ],
        otherState: 'some other value'
    });

    const switchNameHandler = () => {
        //  console.log('was clicked!');
        setPersonState({
            persons: [
                {name: 'Maximilian', age: 29},
                {name: 'Tarik', age: 30},
                {name: 'Nakdi', age: 35}
            ]
        });
    }


   // useState();

    return (
        <div className="App">
            <h1> I'm a React App ! </h1>
            <p>This is really working</p>
            <button onClick={switchNameHandler}>Switch Name</button>

            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
            />
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
            />
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
            >
                Children: mia san mia
            </Person>

        </div>
    );

}

export default app;