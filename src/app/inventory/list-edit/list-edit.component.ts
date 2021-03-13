// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { RestService } from '../../rest.service';
// import { InventoryListService } from './list-edit.service';
// import { currentInventory } from 'src/app/shared/currentInventory.model';
// import { Subscription } from 'rxjs';
// import { Router } from '@angular/router';
// import { Subject } from 'rxjs';



// @Component({
//   selector: 'app-list-edit',
//   templateUrl: './list-edit.component.html',
//   styleUrls: ['./list-edit.component.css']
// })

// export class ListEditComponent implements OnInit {
//   // @ViewChild('f', {static: false}) leForm: NgForm;
//   editForm: FormGroup; 
//   constructor(private leService: InventoryListService, private fb: FormBuilder, private rest: RestService, private router: Router){
//     this.editForm = this.fb.group({
//       name: ['', [Validators.required]],
//       upc: ['', [Validators.required]],
//       amount:  ['', [Validators.required]]
//     });
//   }

  

 
//   subscription: Subscription;
//   editMode = false;
//   editItemIndex: number;
//   editedItem: currentInventory;
//   inventoryChanged = new Subject<currentInventory[]>();
//   startEditing = new Subject<number>();
//   private inventory: currentInventory[];

  

//   ngOnInit(): void {
//    this.subscription = this.leService.startEditing.subscribe(
//      (index: number) => {
//        this.editItemIndex = index;
//         this.editMode = true;
//         this.editedItem = this.leService.getInventory(index);
        
//      }
//    );
//   }

//   //addInventory(form: NgForm) {
//     // const value = form.value;
//     // const newInventory = new currentInventory(value.name, value.upc, value.amount);
//     // if (this.editMode) {
//     //   this.leService.updateInventory(this.editItemIndex, newInventory);
//     // } else {
//     //   this.leService.addInventory(newInventory);
      
//     // }
//     //  this.editMode = false;
//     //  form.reset(); 
    
//   //}

//   addInventory(){
//     this.rest.addInventory(this.editForm.value);
// }

//   //  onDelete() {
//   //   this.leService.deleteInventory(this.editItemIndex);
//   // }
  

//   // ngOnDestroy() {
//   //   this.subscription.unsubscribe();
//   // }

// }
