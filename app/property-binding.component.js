System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var PropertyBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PropertyBindingComponent = (function () {
                function PropertyBindingComponent() {
                    this.name = '';
                    this.age = 20;
                    this.hobbiesChanged = new core_1.EventEmitter();
                }
                PropertyBindingComponent.prototype.onHobbiesChanged = function (hobbies) {
                    this.hobbiesChanged.emit(hobbies);
                };
                PropertyBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-binding',
                        template: "\n        <h2>This is the child component</h2>\n        <p>Hey {{name}} and I am {{age}} years old!</p>\n        <h4>My hobbies are: </h4>\n        <div class=\"input-group\">\n                    <span class=\"input-group-addon\" id=\"sizing-addon2\">Hobbie</span>\n                    <input \n                        type=\"text\" \n                        class=\"form-control\" \n                        placeholder=\"Username\" \n                        aria-describedby=\"sizing-addon2\"\n                        (keyup)=\"onHobbiesChanged(hobbies.value)\"\n                        #hobbies>\n                </div>\n    ",
                        inputs: ['name:myName', 'age:myAge'],
                        outputs: ['hobbiesChanged']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyBindingComponent);
                return PropertyBindingComponent;
            }());
            exports_1("PropertyBindingComponent", PropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JBO2dCQUFBO29CQUNJLFNBQUksR0FBRyxFQUFFLENBQUM7b0JBQ1YsUUFBRyxHQUFHLEVBQUUsQ0FBQztvQkFDVCxtQkFBYyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO2dCQUtoRCxDQUFDO2dCQUhHLG1EQUFnQixHQUFoQixVQUFpQixPQUFlO29CQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkE1Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLHNuQkFjVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO3dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDOUIsQ0FBQzs7NENBQUE7Z0JBVUYsK0JBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELCtEQVFDLENBQUEiLCJmaWxlIjoicHJvcGVydHktYmluZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYmluZGluZycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoMj5UaGlzIGlzIHRoZSBjaGlsZCBjb21wb25lbnQ8L2gyPlxyXG4gICAgICAgIDxwPkhleSB7e25hbWV9fSBhbmQgSSBhbSB7e2FnZX19IHllYXJzIG9sZCE8L3A+XHJcbiAgICAgICAgPGg0Pk15IGhvYmJpZXMgYXJlOiA8L2g0PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIiBpZD1cInNpemluZy1hZGRvbjJcIj5Ib2JiaWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzaXppbmctYWRkb24yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cIm9uSG9iYmllc0NoYW5nZWQoaG9iYmllcy52YWx1ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjaG9iYmllcz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGlucHV0czogWyduYW1lOm15TmFtZScsICdhZ2U6bXlBZ2UnXSxcclxuICAgIG91dHB1dHM6IFsnaG9iYmllc0NoYW5nZWQnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb3BlcnR5QmluZGluZ0NvbXBvbmVudCB7XHJcbiAgICBuYW1lID0gJyc7XHJcbiAgICBhZ2UgPSAyMDtcclxuICAgIGhvYmJpZXNDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gICAgb25Ib2JiaWVzQ2hhbmdlZChob2JiaWVzOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmhvYmJpZXNDaGFuZ2VkLmVtaXQoaG9iYmllcyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
