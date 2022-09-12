export function launchToast(text) {
  let toast = document.querySelector('#toast');
  toast.textContent = text;
  toast.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
