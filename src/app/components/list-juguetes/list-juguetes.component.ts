import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable} from 'rxjs';
import { Juguete } from 'src/app/modelo/juguete';
import { JuguetesService } from 'src/app/services/juguetes.service';
@Component({
  selector: 'app-list-juguetes',
  templateUrl: './list-juguetes.component.html',
  styleUrls: ['./list-juguetes.component.css']
})
export class ListJuguetesComponent implements OnInit {
  items!: any[];
  items$!: Observable<Juguete[]>;
  searcher = new FormControl('');
  filterItem ="";

  constructor(private conexion: JuguetesService, private router:Router,private toastr: ToastrService){
    
    this.conexion.listaItem().subscribe(item=>{
      this.items = item;
    })
  }
  
  ngOnInit(): void {
    this.items$ = this.conexion.getBusqueda();
    this.searcher.valueChanges.subscribe((search) =>{
      if(search){
        this.items$ = this.conexion.getBusqueda(search);
      } else {
        this.items$ = this.conexion.getBusqueda();
      }
    });
  }
  eliminarJuguete(id: number){
    this.conexion.eliminar(id).then(() =>{
      this.toastr.error('El juguete fue eliminada con éxito!', 'Juguete Eliminado!');
      
    }).catch(error =>{
      console.log('error');
    })
  }
  
  
}
