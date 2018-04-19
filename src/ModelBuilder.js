function Model(options, fields) {
  this.name = options.name;
  this.fields = fields;
}

function createField(configuration) {}

function createModel(configuration) {
  // A model configuration can be either
  // 1) Directly sum the fields
  // 2) have a configuration with a name and a liefds node

  function parseFields(fields) {
    return Object.entries(fields)
      .map(([key, entry]) => {
        if (typeof entry === "function") {
          return {
            name: key,
            type: entry,
            isRequired: false
          };
        } else {
          return {
            ...entry,
            type: entry.type || String,
            name: entry.name || key
          };
        }
      })
      .reduce((acc, field) => ({ ...acc, [field.key]: field }), {});
  }

  if (configuration.fields && configuration.name) {
    return new Model(
      { name: configuration.name },
      parseFields(configuration.fields)
    );
  } else {
    return new Model({ name: "no-name" }, parseFields(configuration));
  }
}

export default createModel;
