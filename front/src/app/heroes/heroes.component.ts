import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';



@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  product = null
  test = null;
  date = new Date();
  constructor(private heroService: HeroService) {
    
   }
   
   refresh(){
     console.log("refreshing...")
     this.getProducts(this.date.toISOString())
   }

   dateChange(e){
     this.date = e.target.value
     console.log("date changed ! ", this.date.toISOString());

   }

  getProducts(date): void {
    this.heroService.getProducts(date)
    .subscribe(test => { 
      this.product = test} );
  }
  ngOnInit() {
    this.getProducts(null);
  }

}
