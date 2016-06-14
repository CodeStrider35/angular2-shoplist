import {Component} from '@angular/core';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <h2 class="navbar-text navbar-right">Shopping List</h2>
                </div>
            </div>
        </nav>
        <div>
            <shopping-list></shopping-list>
        </div>
    `,
    directives: [ShoppingListComponent]
})
export class AppComponent {
   
}