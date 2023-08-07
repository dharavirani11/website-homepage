 var j=0;
function slider(){
    var slider = document.getElementsByClassName('s2h3');

    for(var i = 0;i<slider.length;i++){
        slider[i].style.display='none'
    }
    slider[j].style.display='block';
    j++;

   const b = setTimeout (slider,2000);

}
window.onload = function(){
    slider()
}