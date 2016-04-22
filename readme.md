[![Circle CI](https://circleci.com/gh/segmentio/deku-dropdown.svg?style=svg&circle-token=a09dbf5fd0394b564ff5182dcfcdf9437623c094)](https://circleci.com/gh/segmentio/deku-dropdown)

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
