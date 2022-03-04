import ima from '../src/images/plus.png'
import minus from '../src/images/Minus.png'
import up from '../src/images/up.png'
import down from '../src/images/down.png'

var img = document.createElement("img"); 
img.src = ima;
var src = document.getElementsByClassName("plus"); 
src.appendChild(img);

var img2 = document.createElement("img"); 
img2.src = minus;
var src2 = document.getElementsByClassName("minus");
src2.appendChild(img2);

var img3 = document.createElement("img"); 
img3.src = up;
var src3 = document.getElementsByClassName("random");
src3.appendChild(img3);

var img4 = document.createElement("img"); 
img4.src = down;
src3.appendChild(img4);