## How to Create a react app with react cli

```sh
npx create-react-app my-app
cd my-app
npm start
```

## React Elements

````$xslt
/*    return (
      <div className="App">
        <h1> I'm a React App ! </h1>
      </div>
    );*/

    return React.createElement('div',null, React.createElement('h1', {className: 'App'},'does it work now?'));

````

## test