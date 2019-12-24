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
  afterDate = new Date();
  beforeDate = null;
  constructor(private heroService: HeroService) {
    
   }
   
   refresh(){
     console.log("refreshing...")
     
     this.getProducts(this.afterDate === null ? null : this.afterDate.toISOString(),
                    this.beforeDate === null ? null : this.beforeDate.toISOString())
   }

   dateChange(dateName, e){
     if(dateName === 'afterDate')
      this.afterDate = e.target.value
    if(dateName === 'beforeDate')
      this.beforeDate = e.target.value

     console.log(dateName, "changed ! ", e.target.value);

   }

  getProducts(afterDate, beforeDate): void {
    this.heroService.getProducts(afterDate,beforeDate)
    .subscribe(test => { 
      this.product = test} );
  }
  ngOnInit() {
    this.getProducts(null,null);
  }

}
