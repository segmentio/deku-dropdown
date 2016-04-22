
import element from 'virtual-element';
import assert from 'assert';
import { tree, render } from 'deku';
import trigger from 'compat-trigger-event';
import Dropdown from '../src';

const fixture = document.createElement('div');

describe('<Dropdown />', function() {
  before(function() {
    document.body.appendChild(fixture);
  });

  beforeEach(function() {
    fixture.innerHTML = '';
  });

  after(function() {
    document.body.appendChild(fixture);
  });

  it('should render', function() {
    const el = mount(<Dropdown items={[]}/>);
    const dropdown = el.querySelector('.Dropdown');
    assert(dropdown);
  });
});

function mount(n) {
  const app = tree(n);
  render(app, fixture);
  return fixture;
}
