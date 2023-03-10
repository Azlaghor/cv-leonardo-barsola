document.getElementById('bnt-cursos-recibidos').addEventListener('click', function(){
    scrButton('list-cursos-recibidos');
});



function scrButton(vListID){
    if(document.getElementById(vListID).style.display == 'none'){
        document.getElementById(vListID).style.display = "block";
        console.log("Funciona a");
    } else{
        document.getElementById(vListID).style.display = "none";
        console.log("Funciona b");
    }

    console.log(vListID);
    console.log(document.getElementById(vListID).style.display);
}