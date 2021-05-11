import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {
  heroes: string[]= ["Spiderman", "Ironman", "Hunk", "Thor", "Capitan America"];
  heroesBorrados:string="";


  borrarHeroe(i:number){
let heroBorrado:any="";
 
      //this.heroes.splice(i,1);
    this.heroesBorrados=this.heroes.shift()||"";
  
   

  }
  

 
}
