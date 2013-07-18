# Angular + Socket.io + karma

This is a demo app to show a problem with running e2e tests in karma with an angular app using socket.io.

When running the angular scenario tests via the runner.html in the browser, the tests work.
When running the angular scenario tests via grunt and karma, the tests don't work.

### Install

```bash
git clone git@github.com:4kochi/angular_websocket_karma.git
cd angular_websocket_karma
npm install
```

### Start app
```bash
node app.js
```

### Run the e2e test in the browser

[http://localhost:3000/test](http://localhost:3000/test)

### Run the e2e test fom grunt

```bash
grunt
```

* `{Object}` __query__ - The query.
* `{Object}` __update__ - The data to update.
* `{function(err, res)}` __callback__ - The callback function.

* __query__ `{Object}` The query.
* __update__ `{Object}` The data to update.
* __callback__ `{function(err, res)}` The callback function.
