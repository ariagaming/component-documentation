# Introduction

This is my Block

```jsx
return <div>This is the result</div>;
```

```jsx example
const item = {
  name: "Carlos",
  age: 24
};
const { name, age } = item;
const { MyComponent, SimpleComponent } = MyLibrary;
return (
  <div>
    <span>{name}</span>
    <MyComponent />
    <SimpleComponent />
  </div>
);
```

And we can heve a lot of examples in our code:

```jsx example
const Content = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    {children}
  </div>
);
return (
  <div>
    <Content title="First item">This is the content</Content>
    <Content title="Second item">This is the content</Content>
  </div>
);
```

And something else

```jsx example
const woot = 12;
return null;
```
