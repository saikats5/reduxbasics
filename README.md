# reduxbasics

https://github.com/buckyroberts/React-Redux-Boilerplate

npm install
webpack
npm start
http://localhost:3000/

polyfill is to make code backward compatible

Store --> all your applications states/data
Reducers --> take in actions and update part of application state
Provider --> Makes store available to all containers/component
Containers --> Comes between Provider and Component(it can be on same file with component or can be made different)
Actions --> Any change made to the application state

<Route path='Page2/:article' name="Page2" component={Page2}></Route>
this.props.params -- artile: "sometext"
Page2/sometext?date=today&filter=all //this.props.location.query  --  date/filter
<Route path='Page2(/:article)' name="Page2" component={Page2}></Route> //optional

Flux -- Components -> Actions -> Dispatcher -> Stores -> Components
