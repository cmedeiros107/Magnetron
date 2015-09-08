angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: "entenmann's",
    lastText: "on the back of all entemann's boxes",
    face: "https://upload.wikimedia.org/wikipedia/commons/1/14/Entenmann's.jpg"
  }, {
    id: 1,
    name: 'Pet Scan QR',
    lastText: 'Look for PetScanQR charms on any lost pets. You might rescue a valued friend',
    face: 'https://pbs.twimg.com/profile_images/615936677916217344/WsfvHxwQ.png'
  }, 

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
