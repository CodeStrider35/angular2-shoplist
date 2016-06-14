System.register(['@angular/core', "./shopping-list/shopping-list.component"], function(exports_1, context_1) {
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
    var core_1, shopping_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_component_1_1) {
                shopping_list_component_1 = shopping_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <nav class=\"navbar navbar-default\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <h2 class=\"navbar-text navbar-right\">Shopping List</h2>\n                </div>\n            </div>\n        </nav>\n        <div>\n            <shopping-list></shopping-list>\n        </div>\n    ",
                        directives: [shopping_list_component_1.ShoppingListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFsQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDBXQVdUO3dCQUNELFVBQVUsRUFBRSxDQUFDLCtDQUFxQixDQUFDO3FCQUN0QyxDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RDb21wb25lbnR9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJuYXZiYXItdGV4dCBuYXZiYXItcmlnaHRcIj5TaG9wcGluZyBMaXN0PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzaG9wcGluZy1saXN0Pjwvc2hvcHBpbmctbGlzdD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbU2hvcHBpbmdMaXN0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
