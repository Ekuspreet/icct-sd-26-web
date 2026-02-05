const nav_id_map = {
  "": "home",
  about: "about-us",
  cfp: "call-for-papers",
  submission: "submission",
  awards: "awards",
  sponsorship: "sponsorship",
  speakers: "invited-speakers",
  committees: "committee",
  registration: "registration",
  contact: "contact-us",
  publications: "publications",
  poster: "poster-presentation",
  accomodation: "accomodation",
};
var current_path = window.location.pathname.split("/").pop();
current_path = current_path.replace(".html", "");
const nav_element = document.getElementById(nav_id_map[current_path]);
if (nav_element) {
  nav_element.classList.add(
    "border-white",
    "border-2",
    "font-black",
    "hover:border-white",
  );
}
