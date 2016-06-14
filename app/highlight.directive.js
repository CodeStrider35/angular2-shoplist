System.register(['@angular/core'], function(exports_1, context_1) {
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
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HighlightDirective = (function () {
                function HighlightDirective(_elRef, _renderer) {
                    this._elRef = _elRef;
                    this._renderer = _renderer;
                    this._defaultColor = 'green';
                }
                //ngOnInit() {
                //this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', this.highlightColor || this._defaultColor);
                //}
                HighlightDirective.prototype.highlight = function (color) {
                    this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', color);
                };
                HighlightDirective.prototype.onMouseEnter = function () {
                    this.highlight(this.highlightColor || this._defaultColor);
                };
                HighlightDirective.prototype.onMouseLeave = function () {
                    this.highlight(null);
                };
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighLight]',
                        inputs: ['highlightColor:myHighLight'],
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFJSSw0QkFBb0IsTUFBa0IsRUFBVSxTQUFtQjtvQkFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBWTtvQkFBVSxjQUFTLEdBQVQsU0FBUyxDQUFVO29CQUgzRCxrQkFBYSxHQUFHLE9BQU8sQ0FBQztnQkFHc0MsQ0FBQztnQkFFdkUsY0FBYztnQkFDViwySEFBMkg7Z0JBQy9ILEdBQUc7Z0JBRUssc0NBQVMsR0FBakIsVUFBa0IsS0FBYTtvQkFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3pGLENBQUM7Z0JBRUQseUNBQVksR0FBWjtvQkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQUVELHlDQUFZLEdBQVo7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkE1Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsTUFBTSxFQUFFLENBQUMsNEJBQTRCLENBQUM7d0JBQ3RDLElBQUksRUFBRTs0QkFDRixjQUFjLEVBQUUsZ0JBQWdCOzRCQUNoQyxjQUFjLEVBQUUsZ0JBQWdCO3lCQUNuQztxQkFDSixDQUFDOztzQ0FBQTtnQkFzQkYseUJBQUM7WUFBRCxDQXJCQSxBQXFCQyxJQUFBO1lBckJELG1EQXFCQyxDQUFBIiwiZmlsZSI6ImhpZ2hsaWdodC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW215SGlnaExpZ2h0XScsXHJcbiAgICBpbnB1dHM6IFsnaGlnaGxpZ2h0Q29sb3I6bXlIaWdoTGlnaHQnXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnKG1vdXNlZW50ZXIpJzogJ29uTW91c2VFbnRlcigpJyxcclxuICAgICAgICAnKG1vdXNlbGVhdmUpJzogJ29uTW91c2VMZWF2ZSgpJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0RGlyZWN0aXZlIHtcclxuICAgIHByaXZhdGUgX2RlZmF1bHRDb2xvciA9ICdncmVlbic7XHJcbiAgICBoaWdobGlnaHRDb2xvcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIpIHt9XHJcblxyXG4gICAgLy9uZ09uSW5pdCgpIHtcclxuICAgICAgICAvL3RoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZC1jb2xvcicsIHRoaXMuaGlnaGxpZ2h0Q29sb3IgfHwgdGhpcy5fZGVmYXVsdENvbG9yKTtcclxuICAgIC8vfVxyXG5cclxuICAgIHByaXZhdGUgaGlnaGxpZ2h0KGNvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtY29sb3InLCBjb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZUVudGVyKCkge1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0KHRoaXMuaGlnaGxpZ2h0Q29sb3IgfHwgdGhpcy5fZGVmYXVsdENvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlTGVhdmUoKSB7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQobnVsbCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
