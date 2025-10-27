function updateCountdown() {
  const today = new Date();
  const endOfYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59); // Dec 31, 23:59:59
  const diff = endOfYear - today; // difference in milliseconds

  const record = document.getElementById('record');

  if (diff <= 0) {
    record.textContent = "🎉 Happy New Year!";
    return;
  }

  // Convert milliseconds to days, hours, minutes, seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)));
  const minutes = Math.floor((diff / (1000 * 60)));
  const seconds = Math.floor((diff / 1000) );

  // Display the countdown in D:H:M:S format
  record.textContent = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}

// Run once on page load and update every second
updateCountdown();
setInterval(updateCountdown, 1000);

// --- Google Search Redirect ---
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
      }
    }
    if(!alreadyexists){
    addshortcut(enteredlink, enteredname);
    submitbutton.disabled=true
    console.log("here is the bug");
    }
    else{
      console.log("already exists")
    }
  });

  addnew.addEventListener('click', () => {
    card.classList.toggle('active');
    console.log("meow");
  });
});




//user can create buttons of their own choice 
//pop up complete 
//use chrome storage for the extensions instead of local storage becuase it can be synced accross devices and some other features too