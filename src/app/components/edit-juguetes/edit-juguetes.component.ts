import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JuguetesService } from 'src/app/services/juguetes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-juguetes',
  templateUrl: './edit-juguetes.component.html',
  styleUrls: ['./edit-juguetes.component.css']
})
export class EditJuguetesComponent {
  
  updateJuguete: FormGroup;
  submitted = false;
  fb: any;
  items:any;
  jugueteDatos: any;
    constructor(private fa: FormBuilder, private _jugueteService: JuguetesService, private aRoute: ActivatedRoute,
      private router:Router,private toastr: ToastrService){
      this._jugueteService.listaItem().subscribe(item=>{
        this.items = item;
      })
      this.updateJuguete = this.fa.group({
        Id:['', Validators.required],
        Name:['', Validators.required],
        TipoDocumento:['', Validators.required],
        NumeroDocumento:['', Validators.required],
        FechaNacimiento:['', Validators.required],
        Edad:['', Validators.required],
        Ciudad:['', Validators.required],
        Direccion:['', Validators.required],
        Telefono:['', Validators.required],
        Correo:['', Validators.required],
        PropositoViaje:['', Validators.required],
        Eps:['', Validators.required],
      })
    }
    ngOnInit(): void {
      
      var id:any = this.aRoute.snapshot.paramMap.get('id');
      const idP: number = parseInt(id);
      this._jugueteService.mostrar(idP).then((a) =>{
        this.jugueteDatos = a[0];
        this.updateJuguete.patchValue(this.jugueteDatos);
      });
      
      
      
    }
    
  esEditar(){
    
      this.submitted = true;
      if(this.updateJuguete.invalid){
    return;
    } 
    var id:any = this.aRoute.snapshot.paramMap.get('id');
    const idP: number = parseInt(id);
    
    const juguete:any={
      Id: this.updateJuguete.value.Id,
      Name: this.updateJuguete.value.Name,
      TipoDocumento: this.updateJuguete.value.TipoDocumento,
      NumeroDocumento: this.updateJuguete.value.NumeroDocumento,
      FechaNacimiento: this.updateJuguete.value.FechaNacimiento,
      Edad: this.updateJuguete.value.Edad,
      Ciudad: this.updateJuguete.value.Ciudad,
      Direccion: this.updateJuguete.value.Direccion,
      Telefono: this.updateJuguete.value.Telefono,
      Correo: this.updateJuguete.value.Correo,
      PropositoViaje: this.updateJuguete.value.PropositoViaje,
      Eps: this.updateJuguete.value.Eps,
    }
    
    this._jugueteService.update(juguete, idP).then(() =>{
      this.toastr.info('Check-in fue actualizado con éxito!', 'Check-in Actualizado!');
      this.router.navigate(['/list-juguetes']);
    }).catch((error: any) => {
      console.log(error);
    })
  }
    
      
  }
  
