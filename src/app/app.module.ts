import { NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JuguetesService } from 'src/app/services/juguetes.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { ListJuguetesComponent } from './components/list-juguetes/list-juguetes.component';
import { CreateJuguetesComponent } from './components/create-juguetes/create-juguetes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { EditJuguetesComponent } from './components/edit-juguetes/edit-juguetes.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListJuguetesComponent,
    CreateJuguetesComponent,
    NavbarComponent,
    EditJuguetesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    
    ReactiveFormsModule
    
  ],
  providers: [JuguetesService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {

  } 
}
