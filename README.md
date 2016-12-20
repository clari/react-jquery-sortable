react-jquery-sortable
===
Usage
---

1. Include jQuery and jQuery UI globally (this is required because of a jQuery UI limitation)
2. Configure webpack to support `import '$' from 'jquery'` (see `externals` in `webpack.config.common.js`)
3. Create the `Sortable` (see `Example.jsx`).

Code Example
---
```javascript
import Sortable from 'react-jquery-sortable';
import Widget from './Widget';

function Example({ onChange, widgets, ...props }) {
  // - Sortable options are passed as props
  // - When an item is dropped, onChange is called with a list of ids that represents the new order
  // - Each child must have an id. The id is used to identify the order of the children.

  return (
    <Sortable
      forcePlaceholderSize
      handle=".handle"
      onChange={order => onChange(order)}
      placeholder="placeholder"
      {...props}
    >
      {widgets.map(widget => (
        <Widget
          handleClassName=".handle"
          id={widget.get('id')}
          key={widget.get('id')}
          widget={widget}
        />
      ))}
    </Sortable>
  );
}
```

Setup
---
```
yarn
yarn start
# Visit http://localhost:8080
```
