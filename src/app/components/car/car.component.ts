// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];
  test: any;

  constructor() {}

  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'black',
      salon: 'white',
      wheels: 'silver',
    };
    this.options = ['ABS', 'autopilot', 'parking'];
    this.test = 1;
  }

  addOpt(option: string) {
    this.options.unshift(option);
    return false;
  }

  //events handler
  carSelect(name: string) {
    if (name == 'bmw') {
      this.name = 'BMW';
      this.model = 'x5';
    } else if (name == 'audi') {
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'RS8';
      this.colors = {
        car: 'black',
        salon: 'white',
        wheels: 'silver',
      };
      this.options = ['ABS', 'autopilot', 'parking'];
    } else {
      this.name = 'Mercedes';
      this.model = 'e280';
    }
  }
  deleteOpt(option:string) {
    for (let i:number = 0; i < this.options.length; i++) {
      // console.log(i);
      if (this.options[i] == option) {
        // console.log(i);
        this.options.splice(i, 1);
        break;
      }
    }
    // console.log(option)
  }
}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
