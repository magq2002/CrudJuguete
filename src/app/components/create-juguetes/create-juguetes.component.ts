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
      Tipo:['', Validators.required],
      Precio:['', Validators.required],
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
    Tipo: this.createJuguete.value.Tipo,
    Precio: this.createJuguete.value.Precio,
  }
    this._jugueteService.agregarJuguete(juguete).then(() =>{
      this.toastr.success('El juguete fue registrado con éxito!', 'Juguete Registrado!');
      this.router.navigate(['/list-juguetes']);

    }).catch((error: any) => {
      console.log(error);
    })
  }

}
