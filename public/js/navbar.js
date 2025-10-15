const nav_id_map = {
  "": "home",
  about: "about-us",
  cfp: "call-for-papers",
  submission: "submission",
  speakers: "invited-speakers",
  committees: "committee",
  registration: "registration",
  gallery: "gallery",
  contact: "contact-us",
};
var current_path = window.location.pathname.split("/")[1] || "";
current_path = current_path.replace(".html", "");
const nav_element = document.getElementById(nav_id_map[current_path]);
console.log(current_path, nav_element);
if (nav_element) {
  console.log(nav_id_map[current_path]);
  nav_element.classList.add("border-white", "hover:border-white");
}
