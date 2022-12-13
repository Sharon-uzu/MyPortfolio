var menubar = document.getElementById('menubar');
var closebar = document.getElementById('closebar');
var link = document.getElementById('link');


menubar.addEventListener('click', function(){
    menubar.style.display = 'none';
    link.style.display = 'block';
    closebar.style.display = 'block';
})

closebar.addEventListener('click', function(){
    menubar.style.display = 'block';
    link.style.display = 'none';
    closebar.style.display ='none'
})



var slideimg = document.getElementById("slide");
var image = new Array(
    "./images/html5-logo-image-logo-html-7.png",
    "./images/css3-logo-8724075274-seeklogo.com.png",
    "./images/jquery-logo-vertical_large_square.png",
    "./images/430-4309307_react-js-transparent-logo-hd-png-download-removebg-preview (1).png",
    "./images/430-4309307_react-js-transparent-logo-hd-png-download-removebg-preview (1).png"
);
var len = image.length;
var i = 0;
console.log(len);
function slider(){
    if(i > len-1){
        i = 0;
    }
    slideimg.src = image[i];
    i++;
    setTimeout('slider()',2000);
}


