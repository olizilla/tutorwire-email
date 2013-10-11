var dnode = require('dnode');
var config = require('config');
var extract = require('extract');
var mandrillApi = require('mandrill-api/mandrill');
var mandrill = new mandrillApi.Mandrill(config.mandrill.key);

/*
Send the welcome email
@param context = { email: 'oli@zilla.org.uk', name="Oli Evans"}
@param cb = function(error, happy){}
*/
function welcome (context, cb) {
  console.log(context);
  
  var message = {
    from_email: 'info@tutorwire.com',
    from_name: 'TutorWire',
    subject: 'Welcome to TutorWire',
    html: '<h1>OH HAI</h1>',
    text: 'OH HAI',
    to: [extract(context, ['name', 'email'])]
  }

  mandrill.messages.send({
      message: message,
      async: false
    },
    function (result) {  // Mandrill OK, result may still be error
      cb(null, result);
    },
    function (error) {   // Mandrill asplode
      cb(error);
    }
  )
}

var server = dnode({
    welcome: welcome
});

server.listen(config.port);
console.log('tutorwire-email listening on port ' + config.port)
