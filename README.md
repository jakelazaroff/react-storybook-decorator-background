# react-storybook-decorator-background
Background colors for your React Storybook.

[![npm](https://img.shields.io/npm/dm//react-storybook-decorator-background.svg?maxAge=2592000)](https://www.npmjs.com/package/react-storybook-decorator-background)

![Preview your React components on different background colors.](preview.gif?raw=true)

## Installation

```bash
npm install --save-dev react-storybook-decorator-background
```

## Usage

react-storybook-decorator-background is a [React Storybook decorator](https://github.com/kadirahq/react-storybook/blob/master/docs/extensions.md#decorators):

```javascript
import { configure, addDecorator } from '@kadira/storybook';
import backgroundColor from 'react-storybook-decorator-background';

addDecorator(backgroundColor(['#ffffff', '#000000']));

configure(() => {
  // ...
}, module);
```

When you call `backgroundColor` with a list of hex codes, it'll create the swatches in that order on the bottom right of the story preview. The first color in the list will be the default background color.

If you'd rather the React component than the decorator function:

```javascript
import { configure, addDecorator } from '@kadira/storybook';
import { BackgroundColor } from 'react-storybook-decorator-background';

addDecorator(story => <BackgroundColor colors={['#ffffff', '#000000']} story={story} />);

configure(() => {
  // ...
}, module);
```
