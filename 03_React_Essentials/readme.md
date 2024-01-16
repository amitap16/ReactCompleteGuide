# React core concepts:

1. **Components:**
   Components are the building blocks of a React application. They are reusable and can be composed to form complex UIs. Components can be either functional or class-based. Here's an example of a functional component:

   ```jsx
   // Functional Component
   function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
   }

   // Usage of the component
   const element = <Welcome name="John" />;
   ReactDOM.render(element, document.getElementById('root'));
   ```

2. **JSX (JavaScript XML):**
   JSX is a syntax extension for JavaScript recommended by React. It looks similar to XML/HTML but gets compiled to JavaScript. JSX makes it easier to write and understand the structure of React components.
   In this example, we'll create a `Greeting` component that takes a `name` prop and renders a greeting message.

```jsx
// Functional Component: Greeting
const Greeting = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Welcome to the world of JSX.</p>
    </div>
  );
};

// Usage of the Greeting component
const App = () => {
  return <Greeting name="John" />;
};

// Rendering the App component
ReactDOM.render(<App />, document.getElementById('root'));
```

In this example:

- The `Greeting` component is a functional component that takes a `name` prop. It uses JSX to render a `<div>` containing an `<h1>` element with a greeting message and a `<p>` element with a welcome message.
- The `App` component is also a functional component that uses the `Greeting` component. It passes the `name` prop with the value "John" to the `Greeting` component.
- Finally, the `ReactDOM.render` method is used to render the `App` component into the HTML element with the ID 'root'.

The JSX syntax allows us to write HTML-like code within JavaScript, making it more readable and expressive. In this example, the JSX code in the `Greeting` component makes it clear that we are creating HTML elements, and the dynamic content (the value of `props.name`) is embedded directly within the curly braces `{}`.

4. **Props (Properties):**
   Props are used to pass data from a parent component to a child component. They are immutable and help in making components more dynamic. Here's an example:

   ```jsx
   // Parent Component
   function Parent() {
     return <Child name="John" />;
   }

   // Child Component
   function Child(props) {
     return <p>Hello, {props.name}!</p>;
   }
   ```

5. **State:**
   State is used to manage the internal data of a component. Unlike props, state is mutable and can be updated. State changes trigger re-rendering of the component. Here's an example:

In this example, create a `Counter` component that utilizes state to keep track of a count value.

```jsx
// Functional Component: Counter
const Counter = () => {
  // Using the 'useState' hook to initialize state
  const [count, setCount] = React.useState(0);

  // Event handler function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

// Usage of the Counter component
const App = () => {
  return <Counter />;
};

// Rendering the App component
ReactDOM.render(<App />, document.getElementById('root'));
```

In this example:

- The `Counter` component is a functional component that uses the `useState` hook to initialize a state variable `count` with an initial value of 0. The `setCount` function is used to update the `count` state.

- The `incrementCount` function is an event handler that is called when the "Increment" button is clicked. It uses the `setCount` function to update the `count` state by incrementing its current value.

- Inside the component's JSX, we display the current count value with the expression `{count}`, and a button is rendered with an `onClick` event that triggers the `incrementCount` function.

- The `App` component renders the `Counter` component, demonstrating the usage of the `Counter` component within a larger application.

When the "Increment" button is clicked, the `incrementCount` function is called, updating the state. React will automatically re-render the component with the updated count value, reflecting the changes in the user interface. This example illustrates how state enables components to manage and update their internal data dynamically.

These core concepts enable you to build interactive and dynamic user interfaces in React. Components, JSX, props, and state work together to create a modular and efficient development experience.
