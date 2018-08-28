var myIndex = 0;
slide();
//create a function to store each images in an array name x
function slide() {
    var i;
    var x = 1;
    for (i = 0; i < x; i++) {
       x[i].style.display = "none"; //style.diplay ="none" means hide the contain
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block"; // style.display = "block" means display the contain
    setTimeout(slide, 2000); // Change image every 2 seconds
}
