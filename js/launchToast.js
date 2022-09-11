export function launchToast() {
  let toast = document.querySelector('#toast');
  toast.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
