var server = require('../server').server;
var io = require('../server').io;

var sockets = [];
var people = {};
var rooms = [];
var pairs = {};

io.on('connection', function(socket) {
	console.log('Client has connected to server!');
	sockets.push(socket);

	socket.on('join', function(user){
		if(user.id) {
			var userID = user.id;
			people[userID] = { socket: socket.id };
			people[socket.id] = user.id;
			io.emit('online',{ onlineID: userID });
		}

	});




		console.log(people);



	socket.on('getOnlineUsers', function(){
		io.emit('broadcastOnline',{ users: people });
	});

	socket.on('match',function(data) {
		var matchReceiver = people[data.toID];
		io.emit('invite',{toID: data.toID, fromID: data.fromID, message: 'hi'});
	});

	socket.on('inviteResponse', function(data) {
		var responder = people[data.toID];
		if(responder){
			io.emit('matchMade', { toID: data.toID, fromID: data.fromID });
		}
	})

	socket.on('acceptInvite', function(data) {
		pairs[data.fromID] = data.toID;
		// if the opposite relation exists in the pairs table,
		if(pairs[data.toID] === data.fromID) {
			// then emit to both sockets that they both accepted
			// which should trigger an action on client side to push them to codesharing page
			io.emit('bothAccept',{ "idA": data.toID, "idB": data.fromID });
			var newRoom = ""+data.toID+":"+data.fromID+""
			rooms.push(newRoom);
			socket.join(newRoom);
			io.in(newRoom).emit('user joined', data);
		}
	})

	socket.on('codeChange', function(data) {
		io.in(data.room).emit('updateCode',data);
	});

	socket.on('joinSession', function(data) {
		socket.join(data.room);
	});

	socket.on('changeLanguage', function(data) {
		io.to(data.room).emit('updateLanguage',data);
	});

	socket.on('rejectInvite', function(data) {
		io.emit('declineInvite',{ "idA": data.toID, "idB": data.fromID });
	})

	// These socket routes handle pairing with users the current user has already matched with:
	socket.on('partnerWithMatch', function(partnerObject){

		console.log('partnerObject is : ',partnerObject);
<<<<<<< HEAD
<<<<<<< 5e6792c1dca15ecc51329c1d68ca70f9e2aa5e1f
=======
=======
>>>>>>> 8d5341e751002d914f11ab0b23f0c4cfe4f8748e

		var inviterID = partnerObject.inviter.id;
		var inviteeID = partnerObject.invitee.id;
		var newRoom = '' + inviteeID + ':' + inviterID + '';
		console.log('new room created, id is : ',newRoom);
		rooms.push(newRoom);
		io.emit('partnerInvite', {inviterID: inviterID, inviteeID: inviteeID});
		// io.sockets.connected[people[fromID].socket].join(newRoom);
		// io.sockets.connected[people[toID].socket].join(newRoom);
		// io.to(newRoom).emit('joinRoom',{ roomID: newRoom, toID: toID, fromID: fromID });
		// console.log(sockets[0]);
	});
>>>>>>> [fix] bracket error


<<<<<<< 5e6792c1dca15ecc51329c1d68ca70f9e2aa5e1f
=======

>>>>>>> [fix] bracket error
		var roomName = '' + partnerObject.fromUser.id + ':' + partnerObject.toUser.id + '';
		console.log('new room created, id is : ',roomName);
		rooms.push(roomName);
		var fromID = partnerObject.fromUser.id;
		var toID = partnerObject.toUser.id;
		io.sockets.connected[people[fromID].socket].join(roomName);
		io.sockets.connected[people[toID].socket].join(roomName);
		io.to(roomName).emit('joinRoom',{ roomID: roomName, toID: toID, fromID: fromID });
		console.log(sockets[0]);
	})
	// chat
	 socket.on('new message', function(msg) {
      socket.emit('new bc message', msg);

    });
  socket.on('stop typing', function (data) {
    socket.broadcast.to(data.channel).emit('stop typing bc', data.user);
  });
  socket.on('chat mounted', function(user) {
      // TODO: Does the server need to know the user?
      socket.emit('receive socket', socket.id)
  })


		var roomName = '' + partnerObject.fromUser.id + ':' + partnerObject.toUser.id + '';
		console.log('new room created, id is : ',roomName);
		rooms.push(roomName);
		var fromID = partnerObject.fromUser.id;
		var toID = partnerObject.toUser.id;
		io.sockets.connected[people[fromID].socket].join(roomName);
		io.sockets.connected[people[toID].socket].join(roomName);
		io.to(roomName).emit('joinRoom',{ roomID: roomName, toID: toID, fromID: fromID });
		console.log(sockets[0]);
	})
	// chat
	 socket.on('new message', function(msg) {
      socket.emit('new bc message', msg);

    });
  socket.on('stop typing', function (data) {
    socket.broadcast.to(data.channel).emit('stop typing bc', data.user);
  });
  socket.on('chat mounted', function(user) {
      // TODO: Does the server need to know the user?
      socket.emit('receive socket', socket.id)
  })

	//disconnect from the server
	socket.on('leave', function(){
		var userID = people[socket.id];
		socket.emit('offline', { offlineID: people[userID] });
	  delete people[socket.id];
<<<<<<< HEAD
<<<<<<< 5e6792c1dca15ecc51329c1d68ca70f9e2aa5e1f
	  for(var key in people){
	  	if(people[key] === userID){
	  		delete people[key];
	  	}
	  }
	});

	socket.on('disconnect', function(){
		delete people[socket.id];
		sockets.splice(sockets.indexOf(socket), 1);
	});
});
=======
=======
>>>>>>> 8d5341e751002d914f11ab0b23f0c4cfe4f8748e
	  sockets.splice(sockets.indexOf(socket), 1);
	})

})

module.exports = {
	emitMatch: function(fromUser, toUser) {
		console.log('emitMatch called in socketController!');
	}
}
<<<<<<< HEAD
>>>>>>> [fix] bracket error
=======
>>>>>>> 8d5341e751002d914f11ab0b23f0c4cfe4f8748e
