function bookTicket(){
  alert("Booking system coming soon!");
}

function validateForm(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){
    alert("Please fill all fields");
    return false;
  }

  return true;
}

function scrollToEvents(){
  document.getElementById("events").scrollIntoView({
    behavior:"smooth"
  });
}

/* Smooth navigation scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({ behavior:"smooth" });
    }
    // Close mobile menu after clicking a link
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");
    if(menu && hamburger){
      menu.classList.remove("open");
      hamburger.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

/* Hamburger Menu Toggle */
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

if(hamburger && menu){
  hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    menu.classList.toggle("open");
    // Prevent background scroll when menu is open
    document.body.style.overflow = menu.classList.contains("open") ? "hidden" : "";
  });
}