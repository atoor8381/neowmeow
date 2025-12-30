function updateCountdown() {
  const today = new Date();
  const endOfYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59); 
  const diff = endOfYear - today; 

  const record = document.getElementById('record');

  if (diff <= 0) {
    record.textContent = "🎉 Happy New Year!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)));
  const minutes = Math.floor((diff / (1000 * 60)));
  const seconds = Math.floor((diff / 1000) );

  record.textContent = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

const searchform = document.getElementById('search-form');
searchform.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = document.getElementById('search-input').value.trim();
  if (query) {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
});


let shortcutform = document.querySelector('.card-form')
let fromlocalstorage = localStorage.getItem('shortcutsarray')
let addnew = document.querySelector('.plusbutton')
let card = document.querySelector('.card')
let shortcuts;
let submitbutton = document.getElementById('submit-button-form-addshortcut')
let addedshortcuts = document.getElementById('savedshortcuts')


chrome.storage.local.get(['shortcutsarray'], function(result) {
  shortcuts = result.shortcutsarray || [];

  function addshortcut(link, name) {
    let shortcutdetailsobj = {
      link: link,
      name: name,
    };

    shortcuts.push(shortcutdetailsobj);

    chrome.storage.local.set({ shortcutsarray: shortcuts }, function() {
      console.log('Shortcut saved:', shortcutdetailsobj);
    submitbutton.disabled=false
    });
  }

  shortcutform.addEventListener('submit', (e) => {
    e.preventDefault();
    let enteredlink = document.getElementById('link').value;
    let enteredname = document.getElementById('name-shortcut').value;
    let alreadyexists=false;
    for (const element of shortcuts) {
      if (element.name === enteredname) {
        alreadyexists = true;
    submitbutton.disabled=true
      }
    }
    if(!alreadyexists){
    addshortcut(enteredlink, enteredname);
    console.log("here is the bug");
    submitbutton.disabled=true
    }
    else{
      console.log("already exists")
    }
  })

  console.log(shortcuts)

  let keytobedisplayed;

  for (let i = 0; i < shortcuts.length; i++) {
    const shortcut = shortcuts[i];
    let atagforshortcut = document.createElement('a')
    console.log(shortcut)
    atagforshortcut.setAttribute('href',shortcut.link)
    atagforshortcut.innerText=shortcut.name
    addedshortcuts.appendChild(atagforshortcut)
    keytobedisplayed = shortcut.name[0];
    console.log(keytobedisplayed)
  }

  addnew.addEventListener('click', () => {
    card.classList.toggle('active');
    console.log("meow");
  });
});


console.log(shortcuts)

