import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Sortable extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    forcePlaceholderSize: React.PropTypes.bool,
    handle: React.PropTypes.string,
    onChange: React.PropTypes.func,
    placeholder: React.PropTypes.string,
  };

  componentDidMount() {
    const { forcePlaceholderSize, handle, placeholder } = this.props;

    const node = ReactDOM.findDOMNode(this);
    $(node).sortable({
      stop: () => {
        const order = $(node).sortable('toArray');
        $(node).sortable('cancel');
        this.props.onChange(order);
      },
      forcePlaceholderSize,
      handle,
      placeholder,
    });
  }

  componentWillUnmount() {
    const node = ReactDOM.findDOMNode(this);
    $(node).sortable('destroy');
  }

  render() {
    const { children } = this.props;

    return children;
  }
}
