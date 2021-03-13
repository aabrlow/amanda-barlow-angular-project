import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { InventoryListService } from './list-edit.service'
import { currentInventory } from 'src/app/shared/currentInventory.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';







@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit { 
  inventorys;
  editForm: FormGroup;
  editMode = false;
  startEditing = new Subject<number>();
  editItemIndex: number;
  editedItem: currentInventory;
   subscription: Subscription;


 constructor(private leService: InventoryListService , private fb: FormBuilder, private rest: RestService, private router: Router) { 
  this.editForm = this.fb.group({
    name: ['', [Validators.required]],
    upc: ['', [Validators.required]],
    amount:  ['', [Validators.required]]
  });
 }

  

//  editMode = false;
//  editItemIndex: number;
//  editedItem: currentInventory;
//  inventoryChanged = new Subject<currentInventory[]>();
//  startEditing = new Subject<number>();
//  private inventory: currentInventory[];

  ngOnInit(){

    this.showInventory();
    
  //    this.subscription = this.leService.startEditing.subscribe(
  //      (index: number) => {
  //       this.editItemIndex = index;
  //         this.editMode = true;
  //         this.editedItem = this.leService.getInventory(index);
  // });
}

    showInventory() {
      this.rest.getInventory().then( res => {
        this.inventorys = res.data;
        console.log(this.inventorys);
      });
    }
    
    addInventory(){
          this.rest.addInventory(this.editForm.value);
       }

       inventoryDelete(id) {
        this.showInventory();
       }
}

