import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RestService } from '../rest.service';

import { InventoryListService } from './list-edit/list-edit.service';





@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit, OnDestroy {
  inventorys;
  private subscription: Subscription;

 constructor(private leService: InventoryListService, private readonly rest: RestService) { }

  ngOnInit(){

    this.rest.getInventory().then( res => {
      this.inventorys = res.data;
      console.log(this.inventorys);
    });

    // this.inventorys = this.leService.getInventorys();
    // this.subscription = this.leService.inventoryChanged.subscribe(
      // (inventory: currentInventory[]) => {
        // this.inventorys = inventory;
      // }
    // );
  }

  onEditItem(index: number){
    this.leService.startEditing.next(index);
  }

 

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

 

}

