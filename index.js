
document.querySelectorAll('.chat').forEach(chat => {
  chat.addEventListener('click', function() {
    document.querySelector('.container').classList.add('show-chat');
    document.querySelector('.container').classList.remove('show-profile');
    document.querySelector('.chat-list').classList.add('hide-chat-list');
  });

  
  const avatar = chat.querySelector('.avatar');
  avatar.addEventListener('click', function(event) {
    event.stopPropagation();

    document.querySelector('.container').classList.add('show-profile');
    document.querySelector('.container').classList.remove('show-chat');
    
    document.querySelector('.chat-list').classList.add('hide-chat-list');
  });
});
