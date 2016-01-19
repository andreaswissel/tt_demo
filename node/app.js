/**
 * Created by awissel on 19/11/15 - CW47.
 */

var _ = require('lodash');
var restify = require('restify');
var server = restify.createServer({
  name: 'Doggyshop'
});

server.use(restify.CORS());
server.use(restify.fullResponse()).use(restify.bodyParser());

var io = require('socket.io').listen(server.server);

io.set('origins', '*:*');

var dogs = [
  {
    id: 0,
    name: 'Milo',
    img: 'dog_0',
    description: 'I am a very happy dog'
  },
  {
    id: 1,
    name: 'Casey',
    img: 'dog_1',
    description: 'I am a very fluffy dog'
  }
];

var getDog = function(dogId) {
  return _.where(dogs, { 'id': parseInt(dogId)})[0];
};

var getDogs = function() {
  return dogs.map(function(dog) {
    return { id: dog.id, name: dog.name };
  });
};

io.sockets.on('connection', function(socket) {
  console.log('connected')

  socket.on('event', function(data){});
  socket.on('disconnect', function(){});
})

server.get('/dogs', function(req, res, next) {
  res.send(200, getDogs());
});

server.get('/dog/:id', function(req, res, next) {
  res.send(200, getDog(req.params.id))
});

server.post('/dog/:id/edit/:name', function(req, res, next) {
  var dog = dogs[req.params.id];
  dog.name = req.params.name;

  io.emit('dogNameChange', dog);

  res.send(201, dog);
});

server.listen(3000);