





    function start() {
        function funcion1() {
            let numeroPar = 3;
            if (numeroPar % 2 == 0) {
              console.log("es par");
            } else {
              console.log("es impar");
            }
          }

          function funcion2() {
            let valor = prompt("ingrese el número");
            let contador = 0;
          
            if (valor !== 1) {
              if (primo(valor)) {
                console.log(valor + " es primo");
                siguiente_primo(valor);
              } else {
                console.log("El número no es primo");
                siguiente_primo(valor);
              }
            } else {
              console.log("El número es primo");
              siguiente_primo(valor);
            }
          
            function primo(valor) {
              if (valor == 0 || valor == 1 || valor == 4) {
                return false;
              }
          
              for (let i = 2; i < valor / 2; i++) {
                if (valor % i == 0) {
                  return false;
                }
              }
              return valor !== 1;
            }
          
            function siguiente_primo(num_siguiente) {
              contador = num_siguiente;
              contador++;
          
              while (primo(contador) == false) {
                contador++;
              }
              console.log("el siguiente número es: " + contador);
            }
          }

          function funcion3() {
            let e = 8;
            let g = 8;
          
            for (let i = 1; i <= e; i++) {
                f=""
              for (let j = 1; j <= g; j++) {
                if (j == 1 || j == g || i == 1 || i == e) {
                  f+="*"
                } else {
                 f+=" "
                }
              }
              console.log(f);
            }
          }

        let num = prompt("ingrese un numero de 1 a 3")

        if (num == 1) {
            funcion1()
         
        } 
        if (num == 2) {
            funcion2()
        }

        if (num == 3){
            funcion3()
        }
       
    
    
        
       

}




