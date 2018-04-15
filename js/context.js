const context = {
  page: "",
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
  context.page = hash;
}