import { Component, Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDocFromCache, getDocs, getFirestore, query, setDoc, where } from '@angular/fire/firestore';
import { updateDoc } from '@firebase/firestore';
import { Observable, observable } from 'rxjs';
import { Juguete } from '../modelo/juguete';


@Injectable({
  providedIn: 'root'
})
export class JuguetesService {
  firestore: Firestore = inject(Firestore)
  items: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'items')
    this.items = collectionData(aCollection);
    const db = getFirestore();
  }

  listaItem(){
    return this.items;
  }
  async agregarJuguete(juguete: any){
    const db = getFirestore();
    const docRef = await addDoc(collection(db, "items"),juguete);
  }
  async eliminarjuguete(a:any, db:any){
    await deleteDoc(doc(db, "items",a))
  }
  async actualizarjuguete(a:any, db:any, juguete:any){
    await updateDoc(doc(db, "items",a),juguete);
  }
  async eliminar(Id: number){
    const db = getFirestore();
    const q= query(collection(db, "items"), where("Id", "==", Id))
    console.log(Id);
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach(doc => {
      const a=doc.id;
      console.log(a, "=>", doc.data());
      this.eliminarjuguete(a, db);
    });
  }

  async update(juguete: any, Id:number){
    const db = getFirestore();
    const q= query(collection(db, "items"), where("Id", "==", Id))
    console.log(Id);
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach(doc => {
      console.log("por aca pase 2");
      const a=doc.id;
      console.log(a, "=>", doc.data());
      this.actualizarjuguete(a, db, juguete);
    });
    console.log("pase3")
  }
  getBusqueda(filter = '') {
    const playersRef = collection(this.firestore, 'items');
    let q = query(playersRef);
    if (filter) {
      q = query(playersRef, where('Name', '==', filter));
    }
    return collectionData(q) as unknown as Observable<Juguete[]>;
  }
  async updatePlayer(player: Juguete) {
    const playersRef = collection(this.firestore, 'items');
    let q = query(playersRef, where('id', '==', player.Id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      const docRef = doc(this.firestore, 'juguetes', document.id);
      await updateDoc(docRef, { ...player });
    });
  }
}