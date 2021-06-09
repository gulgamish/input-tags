# React input tags

input tags component

# Installation

install with npm:

```
npm install --save input-tags
```

# Usage

Import the component

```
import InputTags from "InputTags"
```

now you can use the component

```
<InputTags className="input-tags" />
```

# API

| Name         |                               Description                               |
| ------------ | :---------------------------------------------------------------------: |
| onChange     |                   event occurs when new tag is added                    |
| style        |                     style object to apply on input                      |
| className    |     add a class to apply your custom css on input default value ""      |
| max          |                      max number of tags default 30                      |
| error        | boolean value, when set to true no value will be accepted default false |
| errorMessage | error message to display once error property is set to true default ""  |
