import { Component, OnInit } from '@angular/core';
import { Emploi } from '../model/Emploi';


@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
  listeEmploi!: Emploi[];
  nbr = 0;
  searchText!: string;


  constructor() { }

  ngOnInit(): void {
    this.listeEmploi = [
      {reference: '1',titre: 'web-dev', entreprise:'microsoft',etat:true},
      {reference: '2',titre: 'mobile-dev', entreprise:'facebook',etat:false},
      {reference: '3',titre: 'graphic-designer', entreprise:'canva',etat:true}
    ];
  }


  Bilan(){
    for (const element of this.listeEmploi){
      if(element.etat == true) {
        this.nbr++; 
      }
    }
  }

  Search(){
    this.listeEmploi=this.listeEmploi.filter((x)=>x.entreprise.match(this.searchText))
  }



  /*Bilan(){
    for (let i = 0;i<this.listeEmploi.length;i++){
      if(this.listeEmploi[i].etat == true) {
        this.nbr++; 
      }
    }
  }*/

}
