import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Poke } from '../poke';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css'],
})
export class PokeListComponent implements OnInit {
  searchInput: string = ' ';
  pokemons: Poke[] = [];
  totalPokemons: number;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.dataService.getPokemons().subscribe((response: any) => {
      this.totalPokemons = response.count;
      // console.log('count', this.totalPokemons);
      response.results.forEach((result: any) => {
        this.dataService.getPokeDetails(result.name).subscribe((data: Poke) => {
          this.pokemons.push(data);
        });
      });
      //console.log('data', this.pokemons);
    });
  }
  search(){
       this.pokemons = this.pokemons.filter(
        (data) => {
          return data.name == this.searchInput
        }
       )
      }

  }


