import {Component, EventEmitter} from "@angular/core";
import {ListItem} from '../list-item';
import {ShoppingListService} from './shopping-list.service';

@Component({
    selector: 'shopping-list-item',
    template: `
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon1"><label for="item-name">Name</label></span>
          <input
            type="text"
            class="form-control"
            placeholder="Item Name"
            aria-describedby="basic-addon1"
            id="item-name"
            [(ngModel)]="item.name">
          <span class="input-group-addon" id="basic-addon1">Amount</span>
          <input
            type="text"
            class="form-control"
            placeholder="Amount"
            aria-describedby="basic-addon1"
            id="item-atm"
            [(ngModel)]="item.amount">
            <span class="input-group-btn">
                <button
                class="btn btn-danger"
                type="button"
                (click)="onDelete()">Delete!
                </button>
            </span>
        </div>
    `,
    inputs: ['item'],
    outputs: ['removed']
})

export class ShoppingListItemComponent {
    item = {name: '', amount: 0};
    removed = new EventEmitter<ListItem>();

    constructor(private _shoppingListService: ShoppingListService) {}

    onDelete() {
        this._shoppingListService.deleteItem(this.item);
        this.removed.emit(null);
    }
}
