// Ejercicio 12 Estudiar el comportamiento del alcance o contexto funcional

function funcion1(){
    var a = 2; //Variable a son -> funciones del contexto local

    function funcion3(){ //Funciones anidadas
        var b = 5;

        function funcion5(){ //funcion 5 tiene alcance funcional para las var a y b
            console.log(a, b);
        }
    }

}

function funcion2(){
    var a = 7; //Variable a son funciones del contexto local

    function funcion4(){
        console.log(a);
    }
}

funcion1();

funcion2();

// console.log(a); ReferenceError