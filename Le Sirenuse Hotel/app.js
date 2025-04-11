console.clear();

var inputs = Array.from(document.querySelectorAll("input"));
inputs.forEach(input => {
	window.setInterval(function() {
		if (input.value == "") {
			input.classList.remove("hasvalue");
		} else {
			input.classList.add("hasvalue");
		}
	}, 10);
});
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="aboutus.html">About Us</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="gallery.html">Gallery</a></li>
  </ul>
</nav>
