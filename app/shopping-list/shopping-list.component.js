System.register(["@angular/core", "./shopping-new-item.component", "./shopping-list-item.component", './shopping-list.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shopping_new_item_component_1, shopping_list_item_component_1, shopping_list_service_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_new_item_component_1_1) {
                shopping_new_item_component_1 = shopping_new_item_component_1_1;
            },
            function (shopping_list_item_component_1_1) {
                shopping_list_item_component_1 = shopping_list_item_component_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    this.listItems = Array();
                }
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.ngOnInit = function () {
                    this.listItems = this._shoppingListService.getItems();
                };
                ShoppingListComponent.prototype.onRemove = function () {
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3\">\n        <section>\n            <shopping-list-new-item></shopping-list-new-item>\n        </section>\n        <section>\n            <h3>My List</h3>\n            <div class=\"list\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\"\n                        *ngFor=\"let listItem of listItems\"\n                        (click)=\"onSelect(listItem)\">\n                        {{listItem.name}} ({{listItem.amount}})\n                    </li>\n                </ul>\n            </div>\n        </section>\n        <section *ngIf=\"selectedItem != null\">\n            <shopping-list-item\n              [item]=\"selectedItem\"\n              (removed)=\"onRemove()\">\n            </shopping-list-item>\n        </section>\n        </div>\n        </div>\n    ",
                        directives: [shopping_new_item_component_1.ShoppingListNewItemComponent, shopping_list_item_component_1.ShoppingListItemComponent],
                        providers: [shopping_list_service_1.ShoppingListService]
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQ0E7Z0JBSUksK0JBQW9CLG9CQUF5QztvQkFBekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFIN0QsY0FBUyxHQUFHLEtBQUssRUFBWSxDQUFDO2dCQUdrQyxDQUFDO2dCQUVqRSx3Q0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsd0NBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDeEQsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixDQUFDO2dCQWpETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsbzNCQTBCVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywwREFBNEIsRUFBRSx3REFBeUIsQ0FBQzt3QkFDckUsU0FBUyxFQUFFLENBQUMsMkNBQW1CLENBQUM7cUJBQ25DLENBQUM7O3lDQUFBO2dCQW1CRiw0QkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQseURBaUJDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0TmV3SXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vc2hvcHBpbmctbmV3LWl0ZW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gXCIuLi9saXN0LWl0ZW1cIjtcclxuaW1wb3J0IHtTaG9wcGluZ0xpc3RJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9zaG9wcGluZy1saXN0LWl0ZW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0U2VydmljZX0gZnJvbSAnLi9zaG9wcGluZy1saXN0LnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXCI+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzaG9wcGluZy1saXN0LW5ldy1pdGVtPjwvc2hvcHBpbmctbGlzdC1uZXctaXRlbT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxoMz5NeSBMaXN0PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgbGlzdEl0ZW0gb2YgbGlzdEl0ZW1zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0KGxpc3RJdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2xpc3RJdGVtLm5hbWV9fSAoe3tsaXN0SXRlbS5hbW91bnR9fSlcclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uICpuZ0lmPVwic2VsZWN0ZWRJdGVtICE9IG51bGxcIj5cclxuICAgICAgICAgICAgPHNob3BwaW5nLWxpc3QtaXRlbVxyXG4gICAgICAgICAgICAgIFtpdGVtXT1cInNlbGVjdGVkSXRlbVwiXHJcbiAgICAgICAgICAgICAgKHJlbW92ZWQpPVwib25SZW1vdmUoKVwiPlxyXG4gICAgICAgICAgICA8L3Nob3BwaW5nLWxpc3QtaXRlbT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1Nob3BwaW5nTGlzdE5ld0l0ZW1Db21wb25lbnQsIFNob3BwaW5nTGlzdEl0ZW1Db21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbU2hvcHBpbmdMaXN0U2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbGlzdEl0ZW1zID0gQXJyYXk8TGlzdEl0ZW0+KCk7XHJcbiAgICBzZWxlY3RlZEl0ZW06IExpc3RJdGVtO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2UpIHt9XHJcblxyXG4gICAgb25TZWxlY3QoaXRlbTogTGlzdEl0ZW0pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIHRoaXMubGlzdEl0ZW1zID0gdGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5nZXRJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVtb3ZlKCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
