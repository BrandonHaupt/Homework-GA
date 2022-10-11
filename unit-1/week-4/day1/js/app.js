var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  // TASK 1.0
  const mainEl = document.querySelector("main")
  console.log(mainEl)
  // TASK 1.1
  mainEl.style.backgroundColor = "#4A4E4D"
  // 1.2
  const h1 = document.createElement("h1")
  h1.innerText = "SEI Rocks!"
  mainEl.append(h1)
  // 1.3
  mainEl.classList.add("flex-ctr")
  // 2.0
  const topMenuEl = document.querySelector("#top-menu")
  // 2.1
  topMenuEl.style.height = "100%"
  // 2.2
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
  // 2.3
  topMenuEl.classList.add("flex-around")
  // 3.1
  const links = document.createElement("ul")
  console.log(links)
  for (let link of menuLinks){
        const loopLink = document.createElement("li")
        loopLink.innerText = menuLinks
        link.append(loopLink)
  }