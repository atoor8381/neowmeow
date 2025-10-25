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

let shortcuts = []

function addshortcut(){

}

shortcutform.addEventListener('submit',(e)=>{
  e.preventDefault()
  let enteredlink = document.getElementById('link').value
  let enteredname = document.getElementById('name-shortcut').value
  // addshortcut()
})

let addnew = document.querySelector('.plusbutton')
let card = document.querySelector('.card')

addnew.addEventListener('click',()=>{
  card.classList.toggle('active')
  console.log("meow")
})


//user can create buttons of their own choice 
//pop up complete 