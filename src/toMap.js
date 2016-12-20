import Immutable from 'immutable';

export default function toMap(list, keyGetter = item => item, valueGetter = item => item) {
  return list.reduce((result, item) => (
    result.set(keyGetter(item), valueGetter(item))
  ), Immutable.Map());
}
