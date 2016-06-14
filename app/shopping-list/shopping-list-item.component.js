System.register(["@angular/core", './shopping-list.service'], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1;
    var ShoppingListItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListItemComponent = (function () {
                function ShoppingListItemComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    this.item = { name: '', amount: 0 };
                    this.removed = new core_1.EventEmitter();
                }
                ShoppingListItemComponent.prototype.onDelete = function () {
                    this._shoppingListService.deleteItem(this.item);
                    this.removed.emit(null);
                };
                ShoppingListItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-item',
                        template: "\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\" id=\"basic-addon1\"><label for=\"item-name\">Name</label></span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Item Name\"\n            aria-describedby=\"basic-addon1\"\n            id=\"item-name\"\n            [(ngModel)]=\"item.name\">\n          <span class=\"input-group-addon\" id=\"basic-addon1\">Amount</span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Amount\"\n            aria-describedby=\"basic-addon1\"\n            id=\"item-atm\"\n            [(ngModel)]=\"item.amount\">\n            <span class=\"input-group-btn\">\n                <button\n                class=\"btn btn-danger\"\n                type=\"button\"\n                (click)=\"onDelete()\">Delete!\n                </button>\n            </span>\n        </div>\n    ",
                        inputs: ['item'],
                        outputs: ['removed']
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListItemComponent);
                return ShoppingListItemComponent;
            }());
            exports_1("ShoppingListItemComponent", ShoppingListItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFDQTtnQkFJSSxtQ0FBb0Isb0JBQXlDO29CQUF6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO29CQUg3RCxTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztvQkFDN0IsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBWSxDQUFDO2dCQUV5QixDQUFDO2dCQUVqRSw0Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkExQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUsbzhCQTBCVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDdkIsQ0FBQzs7NkNBQUE7Z0JBWUYsZ0NBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELGlFQVVDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSAnLi4vbGlzdC1pdGVtJztcclxuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tICcuL3Nob3BwaW5nLWxpc3Quc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdC1pdGVtJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCIgaWQ9XCJiYXNpYy1hZGRvbjFcIj48bGFiZWwgZm9yPVwiaXRlbS1uYW1lXCI+TmFtZTwvbGFiZWw+PC9zcGFuPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkl0ZW0gTmFtZVwiXHJcbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIlxyXG4gICAgICAgICAgICBpZD1cIml0ZW0tbmFtZVwiXHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaXRlbS5uYW1lXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCIgaWQ9XCJiYXNpYy1hZGRvbjFcIj5BbW91bnQ8L3NwYW4+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW1vdW50XCJcclxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiXHJcbiAgICAgICAgICAgIGlkPVwiaXRlbS1hdG1cIlxyXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cIml0ZW0uYW1vdW50XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj5EZWxldGUhXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGlucHV0czogWydpdGVtJ10sXHJcbiAgICBvdXRwdXRzOiBbJ3JlbW92ZWQnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdEl0ZW1Db21wb25lbnQge1xyXG4gICAgaXRlbSA9IHtuYW1lOiAnJywgYW1vdW50OiAwfTtcclxuICAgIHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2UpIHt9XHJcblxyXG4gICAgb25EZWxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5kZWxldGVJdGVtKHRoaXMuaXRlbSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVkLmVtaXQobnVsbCk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
