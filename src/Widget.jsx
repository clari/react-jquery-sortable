import classNames from 'classnames';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React from 'react';
import styles from './Widget.scss';

export default function Widget({
  className,
  handleClassName,
  widget,
  ...props
}) {
  return (
    <div
      className={classNames(styles.widget, className)}
      style={{
        height: 100 * widget.get('height'),
        width: 100 * widget.get('width'),
      }}
      {...props}
    >
      <div className={classNames(styles.handle, handleClassName)} />
      <div className={styles.name}>
        Widget {widget.get('id')}
      </div>
    </div>
  );
}

Widget.propTypes = {
  className: React.PropTypes.string,
  handleClassName: React.PropTypes.string,
  widget: ImmutablePropTypes.map,
};
