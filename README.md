# use-capitalized

> Capitalizes and returns a text argument during the render process.

[![NPM](https://img.shields.io/npm/v/@taystack/use-capitalized.svg)](https://www.npmjs.com/package/@taystack/use-capitalized) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add @taystack/use-capitalized
```

## Usage

```jsx
import React, { Component } from "react";

import useCapitalized from "@taystack/use-capitalized";

const Example = ({ name }) => {
  const example = useCapitalized(name);
  return (
    <div>{example}</div>
  );
}
```

## License

MIT © [taystack](https://github.com/taystack)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
