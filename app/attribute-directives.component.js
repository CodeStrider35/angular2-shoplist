System.register(["@angular/core", "./highlight.directive"], function(exports_1, context_1) {
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
    var core_1, highlight_directive_1;
    var AttributeDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            AttributeDirectives = (function () {
                function AttributeDirectives() {
                }
                AttributeDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-attribute',
                        template: "\n        <div [myHighLight]=\"'red'\">\n            Highlight Me\n        </div>\n        <br>\n        <div [myHighLight]=\"'blue'\">\n            Another Highlight\n        </div>\n    ",
                        directives: [highlight_directive_1.HighlightDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttributeDirectives);
                return AttributeDirectives;
            }());
            exports_1("AttributeDirectives", AttributeDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFBQTtnQkFFQSxDQUFDO2dCQWhCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsOExBUVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsd0NBQWtCLENBQUM7cUJBQ25DLENBQUM7O3VDQUFBO2dCQUlGLDBCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCxxREFFQyxDQUFBIiwiZmlsZSI6ImF0dHJpYnV0ZS1kaXJlY3RpdmVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0hpZ2hsaWdodERpcmVjdGl2ZX0gZnJvbSBcIi4vaGlnaGxpZ2h0LmRpcmVjdGl2ZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXR0cmlidXRlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBbbXlIaWdoTGlnaHRdPVwiJ3JlZCdcIj5cclxuICAgICAgICAgICAgSGlnaGxpZ2h0IE1lXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxkaXYgW215SGlnaExpZ2h0XT1cIidibHVlJ1wiPlxyXG4gICAgICAgICAgICBBbm90aGVyIEhpZ2hsaWdodFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtIaWdobGlnaHREaXJlY3RpdmVdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlRGlyZWN0aXZlcyB7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
