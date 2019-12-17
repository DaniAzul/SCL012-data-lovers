
 import potter from './data/potter/potter.js'
  //pagina dos
  import {houseG} from './data.js';
  const seleccionadoG = houseG(potter)
  console.log(seleccionadoG)
  import {houseR} from './data.js';
  const seleccionadoR = houseR(potter)
  import {houseS} from './data.js';
  const seleccionadoS = houseS(potter)
  import {houseH} from './data.js';
  const seleccionadoH = houseH(potter)
  // pagina tres
  import {sucia} from './data.js';
  const seleccionadoSucia = sucia(potter)
  import {pura} from './data.js';
  const seleccionadoPura = pura(potter)
  import {squib} from './data.js';
  const seleccionadoSquib = squib(potter)
  import {mestizo} from './data.js';
  const seleccionadoMestizo = mestizo(potter)



  document.getElementById("gryffindor").addEventListener("click", ()=>{
      let houseGryffindor = seleccionadoG;
      for (let i=0; i <houseGryffindor.length; i++){
          personajes.innerHTML +=
          `<div class = "info">
           <img class="imagen" src= ${houseGryffindor[i].image}>
           <li class= "nombre" >Nombre: ${houseGryffindor[i].name}
           <li class= "descripcion" >Especie: ${houseGryffindor[i].species}
           <li class= "descripcion"> Casa: ${houseGryffindor[i].house}
           <li class= "descripcion"> Linaje: ${houseGryffindor[i].ancestry}
           <li class= "descripcion"> Varita: ${houseGryffindor[i].wand.wood} ${houseGryffindor[i].wand.core} ${houseGryffindor[i].wand.length}
           <li class= "descripcion"> Cumpleaños: ${houseGryffindor[i].dateOfBirth}
           </div>`
          console.log(houseGryffindor)
      }
  })
  
  document.getElementById("ravenclaw").addEventListener("click", ()=>{
    let houseRavenclaw = seleccionadoR;
    for (let i=0; i <houseRavenclaw.length; i++){
      personajes.innerHTML += `<div class = "info">
       <img class="imagen" src= ${houseRavenclaw[i].image}>
       <li class= "nombre" >Nombre: ${houseRavenclaw[i].name}
       <li class= "descripcion" >Especie: ${houseRavenclaw[i].species}
       <li class= "descripcion"> Casa: ${houseRavenclaw[i].house}
       <li class= "descripcion"> Linaje: ${houseRavenclaw[i].ancestry}
       <li class= "descripcion"> Varita: ${houseRavenclaw[i].wand.wood} ${houseRavenclaw[i].wand.core} ${houseRavenclaw[i].wand.length}
       <li class= "descripcion"> Cumpleaños: ${houseRavenclaw[i].dateOfBirth}
          </div>`
        console.log(houseRavenclaw)
    }
  })

  document.getElementById("slytherin").addEventListener("click", ()=>{
    let houseSlytherin = seleccionadoS;
    for (let i=0; i <houseSlytherin.length; i++){
      personajes.innerHTML += `<div class = "info">
      <img class="imagen" src= ${houseSlytherin[i].image}>
      <li class= "nombre" >Nombre: ${houseSlytherin[i].name}
      <li class= "descripcion" >Especie: ${houseSlytherin[i].species}
      <li class= "descripcion"> Casa: ${houseSlytherin[i].house}
      <li class= "descripcion"> Linaje: ${houseSlytherin[i].ancestry}
      <li class= "descripcion"> Varita: ${houseSlytherin[i].wand.wood} ${houseSlytherin[i].wand.core} ${houseSlytherin[i].wand.length}
      <li class= "descripcion"> Cumpleaños: ${houseSlytherin[i].dateOfBirth}
          </div>`
        console.log(houseSlytherin)
    }
  })

  document.getElementById("hufflepuff").addEventListener("click", ()=>{
    let houseHufflepuff = seleccionadoH;
    for (let i=0; i <houseHufflepuff.length; i++){
      personajes.innerHTML += `<div class = "info">
      <img class="imagen" src= ${houseHufflepuff[i].image}>
      <li class= "nombre" >Nombre: ${houseHufflepuff[i].name}
      <li class= "descripcion" >Especie: ${houseHufflepuff[i].species}
      <li class= "descripcion"> Casa: ${houseHufflepuff[i].house}
      <li class= "descripcion"> Linaje: ${houseHufflepuff[i].ancestry}
      <li class= "descripcion"> Varita: ${houseHufflepuff[i].wand.wood} ${houseHufflepuff[i].wand.core} ${houseHufflepuff[i].wand.length}
      <li class= "descripcion"> Cumpleaños: ${houseHufflepuff[i].dateOfBirth}
          </div>`
        console.log(houseHufflepuff)
    }
  })

  // por ascendencia

document.getElementById("sangreSucia").addEventListener("click", ()=>{
  let sangreSucia = seleccionadoSucia;
  for (let i=0; i<sangreSucia.length; i++){
    personajes.innerHTML += `<div class = "info">
    <img class="imagen" src= ${sangreSucia[i].image}>
    <li class= "nombre" >Nombre: ${sangreSucia[i].name}
    <li class= "descripcion" >Especie: ${sangreSucia[i].species}
    <li class= "descripcion"> Casa: ${sangreSucia[i].house}
    <li class= "descripcion"> Linaje: ${sangreSucia[i].ancestry}
    <li class= "descripcion"> Varita: ${sangreSucia[i].wand.wood} ${sangreSucia[i].wand.core} ${sangreSucia[i].wand.length}
    <li class= "descripcion"> Cumpleaños: ${sangreSucia[i].dateOfBirth}
          </div>`
    console.log(sangreSucia)
  }
})

document.getElementById("sangrePura").addEventListener("click", ()=>{
  let sangrePura = seleccionadoPura;
  for (let i=0; i<sangrePura.length; i++){
    personajes.innerHTML += `<div class = "info">
    <img class="imagen" src= ${sangrePura[i].image}>
    <li class= "nombre" >Nombre: ${sangrePura[i].name}
    <li class= "descripcion" >Especie: ${sangrePura[i].species}
    <li class= "descripcion"> Casa: ${sangrePura[i].house}
    <li class= "descripcion"> Linaje: ${sangrePura[i].ancestry}
    <li class= "descripcion"> Varita: ${sangrePura[i].wand.wood} ${sangrePura[i].wand.core} ${sangrePura[i].wand.length}
    <li class= "descripcion"> Cumpleaños: ${sangrePura[i].dateOfBirth}
          </div>`
    console.log(sangrePura)
  }
}
)

document.getElementById("squib").addEventListener("click",()=>{
let squibP= seleccionadoSquib;
for (let i=0; i<squibP.length; i++){
  personajes.innerHTML += `<div class = "info">
  
  <img class="imagen" src= ${squibP[i].image}>
  <li class= "nombre" >Nombre: ${squibP[i].name}
  <li class= "descripcion" >Especie: ${squibP[i].species}
  <li class= "descripcion"> Casa: ${squibP[i].house}
  <li class= "descripcion"> Linaje: ${squibP[i].ancestry}
  <li class= "descripcion"> Varita: ${squibP[i].wand.wood} ${squibP[i].wand.core} ${squibP[i].wand.length}
  <li class= "descripcion"> Cumpleaños: ${squibP[i].dateOfBirth}

          </div>`
  console.log(squibP)
}

})

document.getElementById("mestizo").addEventListener("click", ()=>{
  let mestizoP = seleccionadoMestizo;
  for (let i=0; i<mestizoP.length; i++){
    personajes.innerHTML += `<div class = "info">
    <img class="imagen" src= ${mestizoP[i].image}>
    <li class= "nombre" >Nombre: ${mestizoP[i].name}
    <li class= "descripcion" >Especie: ${mestizoP[i].species}
    <li class= "descripcion"> Casa: ${mestizoP[i].house}
    <li class= "descripcion"> Linaje: ${mestizoP[i].ancestry}
    <li class= "descripcion"> Varita: ${mestizoP[i].wand.wood} ${mestizoP[i].wand.core} ${mestizoP[i].wand.length}
    <li class= "descripcion"> Cumpleaños: ${mestizoP[i].dateOfBirth}
          </div>`
    console.log(mestizoP)
  }
})

