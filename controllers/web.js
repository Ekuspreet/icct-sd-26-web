const webController = {
  home: (req, res) => {
    res.render("index", { title: "Home", page: "home" });
  },
  about: (req, res) => {
    res.render("index", { title: "About", page: "about" });
  },
};

export default webController;
