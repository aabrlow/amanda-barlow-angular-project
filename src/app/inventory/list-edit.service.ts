

import { Subject } from 'rxjs';
import { currentInventory } from 'src/app/shared/currentInventory.model';

export class InventoryListService {
  inventoryChanged = new Subject<currentInventory[]>();
  startEditing = new Subject<number>();
   private inventory: currentInventory[] = [
       new currentInventory("batman", 29292, 2),
      new currentInventory("marvel legends cap", 8989, 3)
       ];
      
      getInventorys(){
        return this.inventory.slice();
    }

    getInventory(index: number) {
      return this.inventory[index];
    }

    // addInventory(inventory: currentInventory){
    //     this.inventory.push(inventory);
    //     this.inventoryChanged.next(this.inventory.slice());
    // }

    updateInventory(index: number, newInventory: currentInventory) {
      this.inventory[index] = newInventory;
      this.inventoryChanged.next(this.inventory.slice());
    }

    onDelete(index: number) {
      this.inventory.splice(index, 1);
      this.inventoryChanged.next(this.inventory.slice());
    }
}

