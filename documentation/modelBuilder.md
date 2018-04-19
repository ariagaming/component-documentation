# Model Builder

This is a model builder

```jsx example
const { createModel } = MyLibrary;
const AddressModel = createModel({
  street: String,
  city: String,
  country: String
});
const UserModel = createModel({
  name: "UserModel",
  fields: {
    name: {
      type: String,
      required: true
    },
    age: Number,
    active: Boolean,
    address: AddressModel
  }
});

return (
  <div>
    <pre>{JSON.stringify(AddressModel, null, 2)}</pre>
    <hr />
    <pre>{JSON.stringify(UserModel, null, 2)}</pre>
  </div>
);
```
