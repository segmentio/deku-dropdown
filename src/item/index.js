
/**
 * Module dependencies.
 */

import element from 'virtual-element';

/**
 * Exports.
 */

export default { render };

/**
 * Render.
 */

function render({ props }) {
  const { onClick, href, name } = props;
  return (
    <li class="DropdownItem" onClick={onClick}>
      <div class="DropdownItem-inner">
        <a class="DropdownItem-link" href={href}>
          {name}
        </a>
      </div>
    </li>
  );
}
