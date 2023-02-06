import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  //get pokemons

  getPokemons( ){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=50`);
  }

  //get more details about pokemon

  getPokeDetails(name : string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);//Ecmascript placeholder ${}
  }

}
