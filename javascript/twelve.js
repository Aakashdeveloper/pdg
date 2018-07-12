document.getElementTagName('h2')
VM635:1 Uncaught TypeError: document.getElementTagName is not a function
    at <anonymous>:1:10
(anonymous) @ VM635:1
document.getElementsByTagName('h2')
HTMLCollection(4) [h2, h2, h2, h2]
document.getElementsByTagName('h2')[0]
<h2>​AAKASH​</h2>​
document.getElementsByTagName('h2')[0].innerHTML
"AAKASH"
document.getElementsByTagName('h2')[0].innerHTML="John"
"John"
document.getElementsByTagName('h2')[0].style.color="red"
"red"
document.getElementsByClassName('scroll')
HTMLCollection(11) [a.active.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]
document.getElementsByClassName('scroll')[0]
<a class=​"active scroll" href=​"#home" data-hover=​"Home">​…​</a>​
document.getElementsByClassName('scroll')[0].innerHTML="about"
"about"




var first = document.getElementsByTagName('h2')
first.getElementById('one')