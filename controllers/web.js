const pages = [
  { name: "home", title: "Home" },
  { name: "about", title: "About" },
  { name: "call_for_papers", title: "Call for Papers", page: "cfp" },
  { name: "contact", title: "Contact" },
  { name: "speakers", title: "Speakers" },
  { name: "committees", title: "Committees" },
  { name: "registration", title: "Registration" },
  { name: "submission", title: "Submission" },
  { name: "sponsorship", title: "Sponsorship" },
  { name: "awards", title: "Awards" },
  { name: "publications", title: "Publications" },
  { name: "poster_presentation", title: "Poster Presentation", page: "poster" },
  { name: "accomodation", title: "Accomodation" },
];

const webController = {};

for (const pageConfig of pages) {
  webController[pageConfig.name] = (req, res) => {
    res.render("index", {
      title: pageConfig.title,
      page: pageConfig.page || pageConfig.name,
      static: false,
    });
  };
}

export default webController;
