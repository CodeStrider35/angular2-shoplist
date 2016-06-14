System.register(["@angular/core", './shopping-list.service', "@angular/common"], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1, common_1;
    var ShoppingListNewItemComponent;
    function greaterZero(control) {
        if (control.value <= 0) {
            return { notEnough: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ShoppingListNewItemComponent = (function () {
                function ShoppingListNewItemComponent(_shoppingListService, _formBuilder) {
                    this._shoppingListService = _shoppingListService;
                    this._formBuilder = _formBuilder;
                    this.item = { name: '', amount: 0 };
                }
                ShoppingListNewItemComponent.prototype.onSubmit = function () {
                    this._shoppingListService.insertItem({ name: this.item.name, amount: this.item.amount });
                };
                ShoppingListNewItemComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'itemName': ['', common_1.Validators.required],
                        'itemAmount': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                greaterZero
                            ])]
                    });
                };
                ShoppingListNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n    <h3>New Item</h3>\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\" id=\"basic-addon1\"><label for=\"item-name\">Name</label></span>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Item Name\"\n                aria-describedby=\"basic-addon1\"\n                id=\"item-name\"\n                [(ngModel)]=\"item.name\"\n                [ngFormControl]=\"myForm.controls['itemName']\">\n          <span class=\"input-group-addon\" id=\"basic-addon1\"><label for=\"item-name\">Amount</label></span>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Amount\"\n                aria-describedby=\"basic-addon1\"\n                id=\"item-amt\"\n                [(ngModel)]=\"item.amount\"\n                [ngFormControl]=\"myForm.controls['itemAmount']\">\n            <span class=\"input-group-btn\">\n                <button\n                class=\"btn btn-default\"\n                type=\"submit\"\n                [disabled]=\"!myForm.valid\">Add Item\n                </button>\n            </span>\n        </div>\n    </form>    \n    ",
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService, common_1.FormBuilder])
                ], ShoppingListNewItemComponent);
                return ShoppingListNewItemComponent;
            }());
            exports_1("ShoppingListNewItemComponent", ShoppingListNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbmV3LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBOERBLHFCQUFxQixPQUFnQjtRQUNqQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFBO1FBQzVCLENBQUM7SUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7O1lBekJEO2dCQUlJLHNDQUFvQixvQkFBeUMsRUFBVSxZQUF5QjtvQkFBNUUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFIaEcsU0FBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7Z0JBR3NFLENBQUM7Z0JBRXBHLCtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO2dCQUMzRixDQUFDO2dCQUVELCtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzt3QkFDbEMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNyQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUM7Z0NBQ2xDLG1CQUFVLENBQUMsUUFBUTtnQ0FDbkIsV0FBVzs2QkFDZCxDQUFDLENBQUM7cUJBQ04sQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBdERMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHdCQUF3Qjt3QkFDbEMsUUFBUSxFQUFFLGd4Q0ErQlQ7cUJBQ0osQ0FBQzs7Z0RBQUE7Z0JBcUJGLG1DQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCx1RUFtQkMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLW5ldy1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gXCIuLi9saXN0LWl0ZW1cIjtcclxuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tICcuL3Nob3BwaW5nLWxpc3Quc2VydmljZSc7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxoMz5OZXcgSXRlbTwvaDM+XHJcbiAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIiBpZD1cImJhc2ljLWFkZG9uMVwiPjxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkl0ZW0gTmFtZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiaXRlbS1uYW1lXCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaXRlbS5uYW1lXCJcclxuICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snaXRlbU5hbWUnXVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiIGlkPVwiYmFzaWMtYWRkb24xXCI+PGxhYmVsIGZvcj1cIml0ZW0tbmFtZVwiPkFtb3VudDwvbGFiZWw+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIml0ZW0tYW10XCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydpdGVtQW1vdW50J11cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFteUZvcm0udmFsaWRcIj5BZGQgSXRlbVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT4gICAgXHJcbiAgICBgLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdE5ld0l0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBpdGVtID0ge25hbWU6ICcnLCBhbW91bnQ6IDB9O1xyXG4gICAgbXlGb3JtOiBDb250cm9sR3JvdXBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlLCBwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5pbnNlcnRJdGVtKHtuYW1lOiB0aGlzLml0ZW0ubmFtZSwgYW1vdW50OiB0aGlzLml0ZW0uYW1vdW50fSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICdpdGVtTmFtZSc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICdpdGVtQW1vdW50JzogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgIGdyZWF0ZXJaZXJvXHJcbiAgICAgICAgICAgIF0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBncmVhdGVyWmVybyhjb250cm9sOiBDb250cm9sKToge1tzOiBzdHJpbmddOiBib29sZWFufSB7XHJcbiAgICBpZiAoY29udHJvbC52YWx1ZSA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHtub3RFbm91Z2g6IHRydWV9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
