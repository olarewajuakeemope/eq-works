// module declarations

declare module 'containers/Root'
declare module 'redux/configureStore'
declare module 'redux-freeze'
declare module 'react-js-pagination'
declare module 'react-google-maps'

// globals

interface Module extends NodeModule {
  hot: {
    accept: (reducer: string, fn: () => void) => void,
  }
}
