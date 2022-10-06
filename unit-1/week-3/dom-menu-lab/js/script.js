let aLink = document.createElement("a")
let nav = document.querySelector('nav')
let subNav = document.querySelector('#sub-menu')


let menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ]

//   let topMenuLinks

let showingSubMenu = false

for (let link of menuLinks) {
    const newA = document.createElement("a")
    newA.setAttribute('href', link.href)
    newA.innerText = link.text
    nav.append(newA)
}
