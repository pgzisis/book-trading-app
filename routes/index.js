'use strict';

module.exports = (app, io) => {

  app.get('/', (req, res) => {
    console.log(req.user);
    /*io.on('connection', socket => {
      socket.emit('message', 'message from server');

      socket.on('reply', msg => {
        console.log(msg);
      });

    });*/

    res.render('index');
  });
};