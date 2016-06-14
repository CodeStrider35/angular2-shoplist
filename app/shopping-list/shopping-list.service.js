System.register(['@angular/core', './mock-shopping-list'], function(exports_1, context_1) {
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
    var core_1, mock_shopping_list_1;
    var ShoppingListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_shopping_list_1_1) {
                mock_shopping_list_1 = mock_shopping_list_1_1;
            }],
        execute: function() {
            ShoppingListService = (function () {
                function ShoppingListService() {
                }
                ShoppingListService.prototype.getItems = function () {
                    return mock_shopping_list_1.shopping_list;
                };
                ShoppingListService.prototype.insertItem = function (item) {
                    mock_shopping_list_1.shopping_list.push(item);
                };
                ShoppingListService.prototype.deleteItem = function (item) {
                    mock_shopping_list_1.shopping_list.splice(mock_shopping_list_1.shopping_list.indexOf(item), 1);
                };
                ShoppingListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListService);
                return ShoppingListService;
            }());
            exports_1("ShoppingListService", ShoppingListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7Z0JBVUEsQ0FBQztnQkFUQyxzQ0FBUSxHQUFSO29CQUNFLE1BQU0sQ0FBQyxrQ0FBYSxDQUFDO2dCQUN2QixDQUFDO2dCQUNELHdDQUFVLEdBQVYsVUFBVyxJQUFjO29CQUN2QixrQ0FBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFDRCx3Q0FBVSxHQUFWLFVBQVcsSUFBYztvQkFDdkIsa0NBQWEsQ0FBQyxNQUFNLENBQUMsa0NBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELENBQUM7Z0JBWEg7b0JBQUMsaUJBQVUsRUFBRTs7dUNBQUE7Z0JBWWIsMEJBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELHFEQVVDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tICcuLi9saXN0LWl0ZW0nO1xyXG5pbXBvcnQge3Nob3BwaW5nX2xpc3R9IGZyb20gJy4vbW9jay1zaG9wcGluZy1saXN0JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RTZXJ2aWNlIHtcclxuICBnZXRJdGVtcygpIHtcclxuICAgIHJldHVybiBzaG9wcGluZ19saXN0O1xyXG4gIH1cclxuICBpbnNlcnRJdGVtKGl0ZW06IExpc3RJdGVtKSB7XHJcbiAgICBzaG9wcGluZ19saXN0LnB1c2goaXRlbSk7XHJcbiAgfVxyXG4gIGRlbGV0ZUl0ZW0oaXRlbTogTGlzdEl0ZW0pIHtcclxuICAgIHNob3BwaW5nX2xpc3Quc3BsaWNlKHNob3BwaW5nX2xpc3QuaW5kZXhPZihpdGVtKSwgMSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
