
/**
 * Module dependencies.
 */

import element from 'virtual-element';
import Item from './item';

/**
 * Exports.
 */

export default { render };

/**
 * Render.
 */

function render({ props }) {
  const { items } = props;
  return (
    <ul class="Dropdown">
      {items.map((item) => <Item { ...item } />)}
    </ul>
  );
}
