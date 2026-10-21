function getBackgroundComponent(){
    return Math.floor(Math.random() * 255);
}

function getBackgroundColor(){
    return "#" + getBackgroundComponent().toString(16).padStart(2, '0') + 
                 getBackgroundComponent().toString(16).padStart(2, '0') + 
                 getBackgroundComponent().toString(16).padStart(2, '0');
}

function getXPos(){
    return Math.floor(Math.random() * 800) + "px";
}

function getYPos(){
    return Math.floor(Math.random() * 200) + "px";
}

function createElements(){
    var contenedor = document.getElementById('contenedor');
    if (contenedor !== null){
        document.body.removeChild(contenedor);
    }

    const CONTENEDOR = document.createElement('div');
    CONTENEDOR.className = 'contenedor';
    CONTENEDOR.id = 'contenedor';

    for (var i=0; i<12; i++){
        var date = new Date();
        date.setMonth(i);
        var mes = date.toLocaleString('default', {month:'long'});
        var div = document.createElement('div');
        div.id = mes;
        div.style.backgroundColor = getBackgroundColor();
        div.style.position = "absolute";
        div.style.left = getXPos();
        div.style.top = getYPos();
        div.style.width = "100px";
        div.style.height = "30px";
        div.innerHTML = mes;
        CONTENEDOR.appendChild(div);
    }
    document.body.appendChild(CONTENEDOR);
}

createElements();
setInterval(createElements, 10000);