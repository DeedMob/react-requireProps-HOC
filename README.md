# requireProps-HOC
A react HOC that displays a loading screen until certain props are supplied to it (and are not null/undefined), at which point the component is rendered

## Usage

```js

export default requireProps(['organization', 'event'])(AppPage)

```

## Types

requireProps: Array<string> => Component => Component
