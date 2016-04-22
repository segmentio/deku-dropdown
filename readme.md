
# deku-dropdown

A dropdown component for Deku.

![Demo](https://cldup.com/faCLB-IxsS.png)

## Usage

```js
import Dropdown from 'deku-dropdown';

function render() {
  const items = [
    { name: 'Home', href: '/home'  },
    { name: 'Logout', href: '/logout'  }
  ];
  return <Dropdown items={items} />;
}
```
