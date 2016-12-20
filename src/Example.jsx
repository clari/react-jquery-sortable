import classNames from 'classnames';
import Immutable from 'immutable';
import React from 'react';
import Sortable from './Sortable';
import styles from './Example.scss';
import toMap from './toMap';
import Widget from './Widget';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    const widgets = Immutable.List([
      Immutable.Map({
        id: '0',
        height: 1,
        width: 1,
      }),
      Immutable.Map({
        id: '1',
        height: 1,
        width: 2,
      }),
      Immutable.Map({
        id: '2',
        height: 2,
        width: 2,
      }),
      Immutable.Map({
        id: '3',
        height: 1,
        width: 1,
      }),
      Immutable.Map({
        id: '4',
        height: 1,
        width: 1,
      }),
    ]);

    this.state = {
      widgetOrder: widgets.map(widget => widget.get('id')),
      widgets: toMap(widgets, widget => widget.get('id')),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(order) {
    this.setState({
      widgetOrder: Immutable.List(order),
    });
  }

  render() {
    const { widgetOrder, widgets, ...props } = this.state;

    return (
      <Sortable
        forcePlaceholderSize
        handle={`.${styles.handle}`}
        onChange={this.handleChange}
        placeholder={classNames(styles.widget, styles['widget--placeholder'])}
        {...props}
      >
        <div className={styles.widgets}>
          {widgetOrder
            .map(id => widgets.get(id))
            .map(widget => (
              <Widget
                className={styles.widget}
                handleClassName={styles.handle}
                id={widget.get('id')}
                key={widget.get('id')}
                widget={widget}
              />
            ))}
        </div>
      </Sortable>
    );
  }
}
