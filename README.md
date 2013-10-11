Tutorwire Email
===============

Sending the emails

## Getting started

```shell
 npm install
 npm start
```

## API

It's a [dnode](https://github.com/substack/dnode#example) server. 
Whisper to it via a dnode client.

```js
// Send a welcome email.
var context = { email: 'oli@example.org', name: 'Oli Evans' } 
email.welcome(context, cb)
```

