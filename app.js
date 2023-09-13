const mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("#top-menu");

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (topMenuEl == "clicked") {
    return true;
  } else {
    return false;
  }
});

const SubMenuEl = document.querySelector("#sub-menu");
SubMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
SubMenuEl.style.height = "100%";
SubMenuEl.classList.add("flex-around");
SubMenuEl.style.position = "absolute";

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" }
    ]
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" }
    ]
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" }
    ]
  }
];

// Iterate over the menuLinks array and create <a> elements
menuLinks.forEach((link) => {
  const menuLinkEl = document.createElement("a");
  menuLinkEl.href = link.href;
  menuLinkEl.textContent = link.text;
  topMenuEl.appendChild(menuLinkEl);
  console.log("menulinkEl");
  showingSubMenu = false;
});
