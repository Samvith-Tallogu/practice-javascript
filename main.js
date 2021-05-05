function updateLabel() {
    document.getElementById('l1').innerHTML = 'This is updated label';
}
function load_updateLabel() {
    lblupdate = document.getElementById("up_lbl").innerHTML;
    document.getElementById("output").innerHTML = lblupdate;
}

function sum_number(){
    let l1 = document.getElementById("lbl");
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    l1.innerText = parseInt(n1) + parseInt(n2);
}
function sub_number(){
    let l1 = document.getElementById("lbl");
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    l1.innerText = n1 - n2;
 }
 function mul_number(){
    let l1 = document.getElementById("lbl");
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    l1.innerText = n1 * n2;
 }
 function div_number(){
    let l1 = document.getElementById("lbl");
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    l1.innerText = n1 / n2;
 }
 

function nextimage(){
    var images=[
     "images/image1.jpeg",
     "images/image2.jpeg",
     "images/image3.jpeg"];
     var rand = Math.random() * 100;
     console.log("random number is: " + rand);
     var rounded_rand = Math.round(rand);
     console.log("rounded random number is: " + rounded_rand);
     var i = rounded_rand % 3;
     console.log("rounded random number (mod) 3: " + i);
    document.getElementById("album").src=images[i];
i++;
}