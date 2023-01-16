function openUrl(url, toSite) {
  window.open(url, toSite)
}

function openPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}