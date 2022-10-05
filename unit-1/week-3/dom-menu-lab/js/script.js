let aLink = document.createElement("a")
let nav = document.querySelector('nav')

let menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
]


for (let link of menuLinks) {
    const newA = document.createElement("a")
    newA.setAttribute('href', menuLinks.href)
    newA.innerText = link.text
    nav.append(newA)
}
