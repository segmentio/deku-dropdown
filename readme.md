[![Circle CI](https://circleci.com/gh/segmentio/deku-dropdown.svg?style=svg&circle-token=9db0fc8292374af9d3fd1a63e3ea39bbd64b60cc)](https://circleci.com/gh/segmentio/deku-dropdown)

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
