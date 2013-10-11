var config = require('config');
var dnode = require('dnode');

var d = dnode.connect(config.port);

d.on('remote', function (remote) {
  remote.welcome({ email: 'oli@example.org', name: 'Oli Evans' }, function (error, status) {
    console.log('GOT', status)
    d.end();
  });
});
