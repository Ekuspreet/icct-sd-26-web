const webController = {
  home: (req, res) => {
    res.render("index", { title: "Home", page: "home", static: false });
  },
  about: (req, res) => {
    res.render("index", { title: "About", page: "about", static: false });
  },
  call_for_papers: (req, res) => {
    res.render("index", {
      title: "Call for Papers",
      page: "cfp",
      static: false,
    });
  },
  contact: (req, res) => {
    res.render("index", { title: "Contact", page: "contact", static: false });
  },
  speakers: (req, res) => {
    res.render("index", { title: "Speakers", page: "speakers", static: false });
  },
  committees: (req, res) => {
    res.render("index", {
      title: "Committees",
      page: "committees",
      static: false,
    });
  },
  gallery: (req, res) => {
    res.render("index", { title: "Gallery", page: "gallery", static: false });
  },
  registration: (req, res) => {
    res.render("index", {
      title: "Registration",
      page: "registration",
      static: false,
    });
  },
  submission: (req, res) => {
    res.render("index", {
      title: "Submission",
      page: "submission",
      static: false,
    });
  },
};

// cfp.ejs
export default webController;
