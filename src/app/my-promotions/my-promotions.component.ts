import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../shared/promotion.service';
import { ClientPromotions } from '../_models/client-promotions.model';

@Component({
  selector: 'app-my-promotions',
  templateUrl: './my-promotions.component.html',
  styles: []
})

export class MyPromotionsComponent implements OnInit {

  filter;
  p: number = 1;
  result;
  promotions;

  constructor(private service: PromotionService) {
    service.GetMyPromotions().subscribe(  
      data => {  
        this.promotions = data as ClientPromotions;  
        console.log(this.promotions)
      }  
    );
   }

  ngOnInit(): void {
  }
 

}
