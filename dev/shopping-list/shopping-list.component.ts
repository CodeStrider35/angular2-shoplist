import {Component, OnInit} from "@angular/core";
import {ShoppingListNewItemComponent} from "./shopping-new-item.component";
import {ListItem} from "../list-item";
import {ShoppingListItemComponent} from "./shopping-list-item.component";
import {ShoppingListService} from './shopping-list.service';
@Component({
    selector: 'shopping-list',
    template: `
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <section>
            <shopping-list-new-item></shopping-list-new-item>
        </section>
        <section>
            <h3>My List</h3>
            <div class="list">
                <ul class="list-group">
                    <li class="list-group-item"
                        *ngFor="let listItem of listItems"
                        (click)="onSelect(listItem)">
                        {{listItem.name}} ({{listItem.amount}})
                    </li>
                </ul>
            </div>
        </section>
        <section *ngIf="selectedItem != null">
            <shopping-list-item
              [item]="selectedItem"
              (removed)="onRemove()">
            </shopping-list-item>
        </section>
        </div>
        </div>
    `,
    directives: [ShoppingListNewItemComponent, ShoppingListItemComponent],
    providers: [ShoppingListService]
})

export class ShoppingListComponent implements OnInit {
    listItems = Array<ListItem>();
    selectedItem: ListItem;

    constructor(private _shoppingListService: ShoppingListService) {}

    onSelect(item: ListItem) {
        this.selectedItem = item;
    }

    ngOnInit() {
      this.listItems = this._shoppingListService.getItems();
    }

    onRemove() {
      this.selectedItem = null;
    }
}
