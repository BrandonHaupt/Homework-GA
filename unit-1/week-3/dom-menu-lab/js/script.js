let aLink = document.createElement("a")
let navEle = document.getElementById('top-menu')

let menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
]

menuLinks.forEach(ele => {
    return navEle.appendChild(ele)
});