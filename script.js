
// Scroll to top
var mybutton = document.getElementById("scrollToTopButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}


//Footer
function updateButtonsFooter() {
    const footerContent = document.getElementById('footerContent');
    const toggleText = document.getElementById('toggleText');
    const toggleIcon = document.getElementById('toggleIcon');

    if (footerContent.style.display === 'none') {
        toggleText.textContent = 'Show all';
        toggleIcon.src = 'img/arrow-down.svg';
    } else {
        toggleText.textContent = 'Collapse all';
        toggleIcon.src = 'img/arrow-up.svg';
    }
}

document.getElementById('toggleFooter').addEventListener('click', function() {
    var content = document.getElementById('footerContent');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        updateButtonsFooter();
    } else {
        content.style.display = 'none';
        updateButtonsFooter();
    }
}); 