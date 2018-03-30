let hash = "";

const context = {
  page: {
    isHome: false,
    isAbout: false,
    isContact: false
  },
  header: {
    title: "Handlebars Sandbox",
    links: [
      { name: "Home", url: "#" },
      { name: "About", url: "#about" },
      { name: "Contact", url: "#contact" }
    ]
  },
  main: {
    body: "Hello world"
  },
  footer: {
    text: "This is the footer"
  }
};

function setPage(hash) {
  hash = hash;

  context.page.isHome = hash === "" || hash === "#";
  context.page.isAbout = hash === "#about";
  context.page.isContact = hash === "#contact";
}

Handlebars.registerHelper("is", (arg1, arg2, options) => {
  return arg1 === arg2;
});