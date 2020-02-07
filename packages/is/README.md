# is

Utility to check type

## Install

Via npm:

```bash
npm install --save @metocherry/is
```

Via yarn:

```bash
yarn add @metocherry/is
```


## Usage

```
const is = require('is');
```

### Functions

#### General

```typescript
is.string('text');
// -> true
```

```typescript
is.number(0);
// -> true
```

```typescript
is.iteralble(new Set([1, 2, 3]));
// -> true
```
