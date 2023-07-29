# react-route-whiz [![NPM version](https://img.shields.io/npm/v/react-route-whiz.svg?style=flat)](https://www.npmjs.com/package/react-route-whiz) [![NPM monthly downloads](https://img.shields.io/npm/dm/react-route-whiz.svg?style=flat)](https://npmjs.org/package/react-route-whiz) [![NPM total downloads](https://img.shields.io/npm/dt/react-route-whiz.svg?style=flat)](https://npmjs.org/package/react-route-whiz)

> react routing simplified - a simple react routing library providing basic routing utilities

Please consider following this project's author, [Sina Bayandorian](https://github.com/sina-byn), and consider starring the project to show your :heart: and support.

## Install
```sh
$ npm i --save react-route-whiz
```

## Usage
```js
import { Link, Route, Router } from 'react-route-whiz';

const App = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }}>
        <Router>
          {/* Links */}
          <Link to='/'>Home</Link>
          <Link to='/blog'>Blog</Link>

          {/* Routes */}
          <Route path='/'>
            Home Page
          </Route>
          <Route path='/blog'>
            Blog Page
          </Route>
        <Router>
      </div>
    );
};

export default App;
```

## Components

* `Router`: provides the context required for routing

* `Route`: specifies a single route **-** props:
    * `path`: **String -** required
    * `children`: **React.ReactNode -** content of the route
* `Link`: link component to navigated between the specified routes **-** props:
    * `to`: **String -** required
    * `children`: **React.ReactNode -** content of the link
    * note that this component is used for navigating between the specified routes **-** in order to naviagte to a different domain use the `<a href=""></a>` element

## hooks
* `useNavigation`: gives you access to the `navigationContext` including:
    * `currentPath`: **String**
    * `navigate`: **(to: String) => Void -** a function used to navigate to different routes without triggering page refreshes