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
    var StructuralDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StructuralDirectives = (function () {
                function StructuralDirectives() {
                    this.list = ['Apple', 'Milk', 'Bread'];
                }
                StructuralDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-structure',
                        template: "\n        <section class=\"directive\">\n            <h2>*ngIf</h2>\n            <div>\n                Enter a number higher than 10\n                <br>\n                <input class=\"form-control\" type=\"text\" #number (keyup)=\"0\">\n            </div>\n            <div *ngIf=\"number.value > 10\">\n                Number is greater than 10\n            </div>\n        </section>\n        <section class=\"directive\">\n            <h2>*ngFor</h2>\n            <div>\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\"\n                        *ngFor=\"let item of list, let i = index\">{{i}} {{item}} \n                    </li>\n                </ul>\n            </div>\n        </section>\n        <section class=\"directive\">\n            <h2>[ngSwitch]</h2>\n                <div>\n                    Enter red, blue or green\n                    <br>\n                    <input type=\"text\" class=\"form-control\" #color (keyup)=\"0\">\n                </div>\n                <div [ngSwitch]=\"color.value\">\n                    <template [ngSwitchWhen]=\"'red'\"><span style=\"color: red\">Color is Red</span></template>\n                    <template [ngSwitchWhen]=\"'blue'\"><span style=\"color: blue\">Color is Red</span></template>\n                    <template [ngSwitchWhen]=\"'green'\"><span style=\"color: green\">Color is Red</span></template>\n                    <template ngSwitchDefault><span style=\"color: red\">Don't know color</span></template>\n                </div>\n        </section>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructuralDirectives);
                return StructuralDirectives;
            }());
            exports_1("StructuralDirectives", StructuralDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQ0E7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkEzQ0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLDZpREFvQ1Q7cUJBQ0osQ0FBQzs7d0NBQUE7Z0JBSUYsMkJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVEQUVDLENBQUEiLCJmaWxlIjoic3RydWN0dXJhbC1kaXJlY3RpdmVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LXN0cnVjdHVyZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XHJcbiAgICAgICAgICAgIDxoMj4qbmdJZjwvaDI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBFbnRlciBhIG51bWJlciBoaWdoZXIgdGhhbiAxMFxyXG4gICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiAjbnVtYmVyIChrZXl1cCk9XCIwXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibnVtYmVyLnZhbHVlID4gMTBcIj5cclxuICAgICAgICAgICAgICAgIE51bWJlciBpcyBncmVhdGVyIHRoYW4gMTBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XHJcbiAgICAgICAgICAgIDxoMj4qbmdGb3I8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxpc3QsIGxldCBpID0gaW5kZXhcIj57e2l9fSB7e2l0ZW19fSBcclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XHJcbiAgICAgICAgICAgIDxoMj5bbmdTd2l0Y2hdPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgRW50ZXIgcmVkLCBibHVlIG9yIGdyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgI2NvbG9yIChrZXl1cCk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgW25nU3dpdGNoXT1cImNvbG9yLnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ3JlZCdcIj48c3BhbiBzdHlsZT1cImNvbG9yOiByZWRcIj5Db2xvciBpcyBSZWQ8L3NwYW4+PC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCInYmx1ZSdcIj48c3BhbiBzdHlsZT1cImNvbG9yOiBibHVlXCI+Q29sb3IgaXMgUmVkPC9zcGFuPjwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ2dyZWVuJ1wiPjxzcGFuIHN0eWxlPVwiY29sb3I6IGdyZWVuXCI+Q29sb3IgaXMgUmVkPC9zcGFuPjwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIG5nU3dpdGNoRGVmYXVsdD48c3BhbiBzdHlsZT1cImNvbG9yOiByZWRcIj5Eb24ndCBrbm93IGNvbG9yPC9zcGFuPjwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICBgLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyYWxEaXJlY3RpdmVzIHtcclxuICAgIGxpc3QgPSBbJ0FwcGxlJywgJ01pbGsnLCAnQnJlYWQnXTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
