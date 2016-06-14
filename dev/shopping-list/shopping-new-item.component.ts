import {Component, OnInit} from "@angular/core";
import {ListItem} from "../list-item";
import {ShoppingListService} from './shopping-list.service';
import {ControlGroup, FormBuilder, Validators, Control} from "@angular/common";

@Component({
    selector: 'shopping-list-new-item',
    template: `
    <h3>New Item</h3>
    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon1"><label for="item-name">Name</label></span>
              <input
                type="text"
                class="form-control"
                placeholder="Item Name"
                aria-describedby="basic-addon1"
                id="item-name"
                [(ngModel)]="item.name"
                [ngFormControl]="myForm.controls['itemName']">
          <span class="input-group-addon" id="basic-addon1"><label for="item-name">Amount</label></span>
              <input
                type="text"
                class="form-control"
                placeholder="Amount"
                aria-describedby="basic-addon1"
                id="item-amt"
                [(ngModel)]="item.amount"
                [ngFormControl]="myForm.controls['itemAmount']">
            <span class="input-group-btn">
                <button
                class="btn btn-default"
                type="submit"
                [disabled]="!myForm.valid">Add Item
                </button>
            </span>
        </div>
    </form>    
    `,
})

export class ShoppingListNewItemComponent implements OnInit{
    item = {name: '', amount: 0};
    myForm: ControlGroup

    constructor(private _shoppingListService: ShoppingListService, private _formBuilder: FormBuilder) {}

    onSubmit() {
        this._shoppingListService.insertItem({name: this.item.name, amount: this.item.amount});
    }

    ngOnInit() {
        this.myForm = this._formBuilder.group({
            'itemName': ['', Validators.required],
            'itemAmount': ['', Validators.compose([
                Validators.required,
                greaterZero
            ])]
        });
    }
}

function greaterZero(control: Control): {[s: string]: boolean} {
    if (control.value <= 0) {
        return {notEnough: true}
    }
}
