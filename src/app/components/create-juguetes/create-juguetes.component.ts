import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JuguetesService } from 'src/app/services/juguetes.service';

@Component({
  selector: 'app-create-juguetes',
  templateUrl:'./create-juguetes.component.html',
  styleUrls: ['./create-juguetes.component.css']
})
export class CreateJuguetesComponent {
  createJuguete: FormGroup;
  submitted = false;

  

  constructor(private fb: FormBuilder, private _jugueteService: JuguetesService, privateaRoute: ActivatedRoute, private router:Router,
    private toastr: ToastrService){
    this.createJuguete = this.fb.group({
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
  agregarJuguete(){
    this.submitted = true;
    if(this.createJuguete.invalid){
  return;
  } 
  const juguete:any={
    Id: this.createJuguete.value.Id,
    Name: this.createJuguete.value.Name,
    TipoDocumento: this.createJuguete.value.TipoDocumento,
    NumeroDocumento: this.createJuguete.value.NumeroDocumento,
    FechaNacimiento: this.createJuguete.value.FechaNacimiento,
    Edad: this.createJuguete.value.Edad,
    Ciudad: this.createJuguete.value.Ciudad,
    Direccion: this.createJuguete.value.Direccion,
    Telefono: this.createJuguete.value.Telefono,
    Correo: this.createJuguete.value.Correo,
    PropositoViaje: this.createJuguete.value.PropositoViaje,
    Eps: this.createJuguete.value.Eps,
  }
    this._jugueteService.agregarJuguete(juguete).then(() =>{
      this.toastr.success('Check-in fue registrado con éxito!', 'Check-in Registrado!');
      this.router.navigate(['/list-juguetes']);

    }).catch((error: any) => {
      console.log(error);
    })
  }

}
