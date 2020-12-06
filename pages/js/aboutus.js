const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5");

const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const bootstrap = document.getElementById("bootstrap");
const jquery = document.getElementById("jquery");



// event handler
html.onclick=function(){
    c1.style.left="40px";
    c2.style.left="-600px";
    c3.style.left="-600px";
    c4.style.left="-600px";
    c5.style.left="-600px";
}
css.onclick = function () {
    c1.style.left = "-600px";
    c2.style.left = "40px";
    c3.style.left="-600px";
    c4.style.left="-600px";
    c5.style.left="-600px";

};
js.onclick = function () {
    c1.style.left = "-600px";
    c2.style.left = "-600px";
    c3.style.left="40px";
    c4.style.left="-600px";
    c5.style.left="-600px";

};
bootstrap.onclick = function () {
    c1.style.left = "-600px";
    c2.style.left = "-600px";
    c3.style.left="-600px";
    c4.style.left="40px";
    c5.style.left="-600px";

};
jquery.onclick = function () {
    c1.style.left = "-600px";
    c2.style.left = "-600px";
    c3.style.left="-600px";
    c4.style.left="-600px";
    c5.style.left="40px";

};

