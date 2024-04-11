let medicamentos =[{medicamento:"Paracetamol",
    existencia:56,fechaCaducidad: 2024}, {
    medicamento: "Iboprufeno",existencia: 50,fechaCaducidad: 2022
}, {medicamento: "Ambroxol",existencia: 39,fechaCaducidad: 2025},{
    medicamento: "Naproxeno",existencia:10,fechaCaducidad: 2024
}];



let valorBuscado;
bubbleSort();
function buscar(){
    valorBuscado=parseInt(document.getElementById("anio").value);

    let resultado=busquedaBinaria();

    if(resultado>-1)
        console.log("Encontrado");
    else
        console.log("No encontrado");
}
function bubbleSort() {
    const { length } = medicamentos; // obtiene el tamaño de la lista
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (medicamentos[j].fechaCaducidad > medicamentos[j + 1].fechaCaducidad) {
                //Intercambio
                const temp = medicamentos[j];
                medicamentos[j] = medicamentos[j+1];
                medicamentos[j+1] = temp;
            }
        }
    }
    console.log("Ordenado:\n",medicamentos);
}
function busquedaBinaria() {
    let indiceCentral, valorCentral;
    let inicioA=0, finA=medicamentos.length - 1;
    while (inicioA <= finA) {
        indiceCentral = (inicioA + finA)/2;
        valorCentral = medicamentos[indiceCentral].fechaCaducidad;
        if (valorBuscado == valorCentral)
            return indiceCentral;//encontrado
        else if (valorBuscado < valorCentral)
            finA = indiceCentral -1; // buscará por izquierda
        else
            inicioA = indiceCentral + 1; // buscará por la derecha
    }
    return -1;//no encontrado
}