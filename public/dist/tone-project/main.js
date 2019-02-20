(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"play-panel\">\n    <app-tone-graph (settings)=\"openSettings()\" (help)=\"openHelp()\"></app-tone-graph>\n    <app-settings id=\"settings-dialog\" (close)=\"closeSettings()\"></app-settings>\n    <app-help id=\"help-dialog\" (close)=\"closeHelp()\"></app-help>\n</div>\n<!-- <experiment-panel>\n\n</experiment-panel> -->\n\n<!-- <div  -->\n\n<!-- <h1>Tone Generator</h1>\n<button id=\"playnote\">Play Note</button>\n<button id=\"stopnote\">Stop Note</button>\n<p>Frequency 1: <span id=\"hertz\"></span> Hz</p>\n<p>Frequency 2: <span id=\"hertz2\"></span> Hz</p>\n\n<input type=\"range\" min=\"0\" max=\"5000\" value=\"50\" class=\"slider\" id=\"myRange\"/>\n<input type=\"range\" min=\"0\" max=\"5000\" value=\"50\" class=\"slider\" id=\"myRange2\"/>\n\n<router-outlet></router-outlet> -->"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\n  position: fixed;\n  bottom: 0px;\n  height: 30px;\n  background-color: #555;\n  width: 100%;\n  padding-left: 20px; }\n\n#footer p {\n  padding: 5px 0px;\n  margin: 0;\n  font-family: \"Roboto\", \"Segoe UI\", sans-serif; }\n\n#settings-dialog, #help-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 400px;\n  height: 200px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: -10;\n  opacity: 0; }\n\n#help-dialog {\n  width: 70vw;\n  height: 400px;\n  max-height: 80vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXFVzZXJzXFxkb3JpYW5cXERvY3VtZW50c1xcSVRcXHBoeXNpY3Mtc291bmRtYWtlclxccHVibGljL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLFlBQVc7RUFDWCxtQkFBa0IsRUFBRzs7QUFDekI7RUFDSSxpQkFBZ0I7RUFDaEIsVUFBUztFQUNULDhDQUE2QyxFQUFHOztBQUVwRDtFQUNJLGdCQUFlO0VBQ2YsU0FBUTtFQUNSLFVBQVM7RUFDVCxhQUFZO0VBQ1osY0FBYTtFQUNiLHlDQUFnQztVQUFoQyxpQ0FBZ0M7RUFDaEMsYUFBWTtFQUNaLFdBQVUsRUFBRzs7QUFFakI7RUFDSSxZQUFXO0VBQ1gsY0FBYTtFQUNiLGlCQUFnQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDsgfVxuI2Zvb3RlciBwIHtcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBzYW5zLXNlcmlmOyB9XG5cbiNzZXR0aW5ncy1kaWFsb2csICNoZWxwLWRpYWxvZyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB6LWluZGV4OiAtMTA7XG4gICAgb3BhY2l0eTogMDsgfVxuXG4jaGVscC1kaWFsb2cge1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgbWF4LWhlaWdodDogODB2aDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tone-project'; // Angular ID (do not remove)
        this.isPlaying = false;
        console.log('%c Welcome to %c the Belgian %c console!  ', 'background: black; color: white', 'background: yellow;', 'background: red; color: white');
    }
    AppComponent.prototype.openSettings = function () {
        console.log('We are opening settings from app.component.ts');
        jquery__WEBPACK_IMPORTED_MODULE_2__('#settings-dialog').css({ 'z-index': 900, opacity: 1 });
    };
    AppComponent.prototype.openHelp = function () {
        console.log('We are opening help from app.component.ts');
        jquery__WEBPACK_IMPORTED_MODULE_2__('#help-dialog').css({ 'z-index': 900, opacity: 1 });
    };
    AppComponent.prototype.closeSettings = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#settings-dialog').css({ 'z-index': -10, opacity: 0 });
    };
    AppComponent.prototype.closeHelp = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#help-dialog').css({ 'z-index': -10, opacity: 0 });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tone_graph_tone_graph_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tone-graph/tone-graph.component */ "./src/app/tone-graph/tone-graph.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./title-screen/title-screen.component */ "./src/app/title-screen/title-screen.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _tone_graph_tone_graph_component__WEBPACK_IMPORTED_MODULE_5__["ToneGraphComponent"],
                _title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_7__["TitleScreenComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_9__["HelpComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"help-dialog\">\n  <h1>Help</h1>\n  <div class=\"close-button\" (click)=\"closeWindow()\"></div>\n  <div class=\"help-dialog-wrapper\">\n\n    <!-- Currently Hardcoded, -->\n\n    <i>This web app was built by: Deven, Dorian, and Joseph</i>\n\n    <h2>How to use:</h2>\n    <p>The purpose of this program is to be able to combine several waves together. \n      When you press a key on your keyboard that corresponds to a musical note (CDEFGAB), \n      the base frequency is automatically set to the frequency of that musical note. \n      Additional waves you add will be based on the base frequency wave. \n      For example, if you add a second wave (by pressing the \"New Wave\" button\") \n      and set the frequency to 20 Hz, the new wave will have a frequency of 20 Hz ABOVE the base frequency. \n      The amplitude works in much the same way, except that it is described as a percentage of \n      the base wave's amplitude (instead of being added). Now, when you press a key, the two waves will be combined together\n      to form a harmonic.\n    </p>\n\n    <h2>Frequencies:</h2>\n    <p></p>\n\n    <h2>How do I play sharps and flats?</h2>\n    <p>Press shift + key to make a sharp, and alt + key to make a flat. For example to play a C#, press shift + C.</p>\n\n    <h2>How was this built?</h2>\n    <p>This was built from scratch using Typescript, a programming language that is transpiled to Javascript (ECMAScript 5). In addition to Typescript, a framework called Angular 4 was utilized. This framework combines common directives and components to make this app easier to build</p>\n    <i><p>More Info:</p></i>\n    <a href=\"https://www.angular.io/\" target=\"_blank\">angular.io</a>\n    \n    <h2>Do you encrypt? (To protect my precious waves from STEM hackers)</h2>\n    <p>Djx bj it! Mjwj nx tzw uzgqnh pjd.</p>\n    <p>yiee afv, opw era cirwljnr owr iju lfy. (sipt: zk qjml eame pfo nprp tjae 20 pybss hivh r joqfrnooplkys, uhzuuaeum pg ypats fe spvr aupy tfgqvtpr)</p>\n    <p>30 82 01 0a 02 82 01 01 00 c9 cd d6 b1 f8 39 b6 2e 63 93 47 6f ec 55 e1 55 77 d1 9f 9d c6 99 12 71 61 56 ca 2e 32 37 ce 9e 4c e0 3d f4 0f 45 76 e0 b4 d1 40 e0 b4 cc 1a 0c 3f eb e8 b5 5f b6 56 98 d3 29 8a 29 ae 3e 3b 6e 0f 10 7e 4c ae a4 7d d7 dc 89 35 2d a2 fa 59 49 d3 14 07 b6 19 4a b1 6f 46 1e ec b2 78 e8 ba 66 92 bb 70 f1 ae 6a d4 7e 67 98 30 8c 6c 4f a0 c1 32 b7 5b 33 31 7f 01 51 9a 6c 1f ef fd 48 9d b3 94 2d 29 4e 6d cf d3 a4 0e 65 b9 10 13 38 90 c2 d3 96 3e 3e f6 f3 96 59 50 61 c2 71 f6 ff d5 d6 23 26 9c 54 8a c9 bc a7 d4 c0 21 99 d6 e9 48 19 e3 ce eb eb 5d 87 14 96 05 7d 2d db 08 79 d2 e0 9b 24 4e c4 94 83 b0 2e 27 3e cf c7 8e 80 00 ab 86 27 c0 a8 57 d0 35 18 70 2a d2 78 05 c2 98 7b 8b ab 50 22 00 31 4a c9 e2 5c 7c fd e3 f2 60 66 29 a3 e6 b9 f5 d1 d6 d7 53 6f 13 8e 95 d0 75 81 02 03 01 00 01</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/help/help.component.sass":
/*!******************************************!*\
  !*** ./src/app/help/help.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".help-dialog {\n  background-color: #444444;\n  border-radius: 5px;\n  padding: 1px 20px 20px;\n  font-family: \"Roboto\", \"Segoe UI\", sans-serif;\n  color: white;\n  height: 100%; }\n\n.help-dialog .close-button {\n  position: absolute;\n  top: 25px;\n  right: 30px;\n  float: right;\n  width: 30px;\n  height: 30px;\n  background-image: url(\"/assets/close.svg\");\n  background-size: cover;\n  border-radius: 50%;\n  cursor: pointer; }\n\n.help-dialog .close-button:hover {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n.help-dialog h1 {\n  font-weight: 300; }\n\n.help-dialog-wrapper {\n  height: 80%;\n  overflow-y: scroll;\n  text-align: justify;\n  padding-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9GOlxcVXNlcnNcXGRvcmlhblxcRG9jdW1lbnRzXFxJVFxccGh5c2ljcy1zb3VuZG1ha2VyXFxwdWJsaWMvc3JjXFxhcHBcXGhlbHBcXGhlbHAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0Qiw4Q0FBNkM7RUFDN0MsYUFBWTtFQUNaLGFBQVksRUFBRzs7QUFFbkI7RUFDSSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFlBQVc7RUFDWCxhQUFZO0VBQ1osWUFBVztFQUNYLGFBQVk7RUFDWiwyQ0FBMEM7RUFDMUMsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixnQkFBZSxFQUFHOztBQUV0QjtFQUNJLDJDQUEwQyxFQUFHOztBQUVqRDtFQUNJLGlCQUFnQixFQUFHOztBQUV2QjtFQUNJLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLG9CQUFtQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5oZWxwLWRpYWxvZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMXB4IDIwcHggMjBweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7IH1cblxuLmhlbHAtZGlhbG9nIC5jbG9zZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1cHg7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2Nsb3NlLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmhlbHAtZGlhbG9nIC5jbG9zZS1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTsgfVxuXG4uaGVscC1kaWFsb2cgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cblxuLmhlbHAtZGlhbG9nLXdyYXBwZXIge1xuICAgIGhlaWdodDogODAlO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent.prototype.closeWindow = function () {
        console.log('Close');
        this.close.emit({});
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HelpComponent.prototype, "close", void 0);
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.sass */ "./src/app/help/help.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"settings-dialog\">\n  <h1>Settings</h1>\n  <div class=\"close-button\" (click)=\"closeWindow()\"></div>\n  <div class=\"check-option\">\n    <input type=\"checkbox\" checked> <span>Enable Quick Wave Drawings (BETA)</span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/settings/settings.component.sass":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settings-dialog {\n  background-color: #444444;\n  border-radius: 5px;\n  padding: 1px 20px 20px;\n  font-family: \"Roboto\", \"Segoe UI\", sans-serif; }\n\n.settings-dialog .close-button {\n  position: absolute;\n  top: 25px;\n  right: 30px;\n  float: right;\n  width: 30px;\n  height: 30px;\n  background-image: url(\"/assets/close.svg\");\n  background-size: cover;\n  border-radius: 50%;\n  cursor: pointer; }\n\n.settings-dialog .close-button:hover {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n.settings-dialog h1 {\n  font-weight: 300; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRjpcXFVzZXJzXFxkb3JpYW5cXERvY3VtZW50c1xcSVRcXHBoeXNpY3Mtc291bmRtYWtlclxccHVibGljL3NyY1xcYXBwXFxzZXR0aW5nc1xcc2V0dGluZ3MuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0Qiw4Q0FBNkMsRUFBRzs7QUFFcEQ7RUFDSSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFlBQVc7RUFDWCxhQUFZO0VBQ1osWUFBVztFQUNYLGFBQVk7RUFDWiwyQ0FBMEM7RUFDMUMsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixnQkFBZSxFQUFHOztBQUV0QjtFQUNJLDJDQUEwQyxFQUFHOztBQUVqRDtFQUNJLGlCQUFnQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3MtZGlhbG9nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxcHggMjBweCAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIHNhbnMtc2VyaWY7IH1cblxuLnNldHRpbmdzLWRpYWxvZyAuY2xvc2UtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNXB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9jbG9zZS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5zZXR0aW5ncy1kaWFsb2cgLmNsb3NlLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyB9XG5cbi5zZXR0aW5ncy1kaWFsb2cgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.closeWindow = function () {
        console.log('Close');
        this.close.emit({});
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SettingsComponent.prototype, "close", void 0);
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.sass */ "./src/app/settings/settings.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/title-screen/title-screen.component.html":
/*!**********************************************************!*\
  !*** ./src/app/title-screen/title-screen.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"title-page\">\n  <h1>Tone Generator</h1>\n  <button>Get Started</button>\n</div>\n\n<div id=\"footer\">\n    <p>Created by: Deven, Dorian, and Joseph</p>\n</div>"

/***/ }),

/***/ "./src/app/title-screen/title-screen.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/title-screen/title-screen.component.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpdGxlLXNjcmVlbi90aXRsZS1zY3JlZW4uY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/title-screen/title-screen.component.ts":
/*!********************************************************!*\
  !*** ./src/app/title-screen/title-screen.component.ts ***!
  \********************************************************/
/*! exports provided: TitleScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleScreenComponent", function() { return TitleScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TitleScreenComponent = /** @class */ (function () {
    function TitleScreenComponent() {
    }
    TitleScreenComponent.prototype.ngOnInit = function () {
    };
    TitleScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-title-screen',
            template: __webpack_require__(/*! ./title-screen.component.html */ "./src/app/title-screen/title-screen.component.html"),
            styles: [__webpack_require__(/*! ./title-screen.component.sass */ "./src/app/title-screen/title-screen.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TitleScreenComponent);
    return TitleScreenComponent;
}());



/***/ }),

/***/ "./src/app/tone-graph/tone-graph.component.html":
/*!******************************************************!*\
  !*** ./src/app/tone-graph/tone-graph.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"settings-panel\">\n    <div id=\"settings-header\">\n        <h2>Wave Editor</h2>\n        <div id=\"help\" class=\"top-icon\" (click)=\"openHelp()\"></div>\n        <div id=\"settings\" class=\"top-icon\" (click)=\"openSettings()\"></div>\n    </div>\n    <div id=\"wave-wrapper\">\n        <div class=\"wave-container\" *ngFor=\"let wave of waves; let i=index;\">\n            <h3 *ngIf=\"!wave.editing\" (click)=\"wave.editing=true; focusInput()\" wave.name [ngClass]=\"{'italics': !wave.name.length}\">{{wave.name || \"Untitled Wave\"}}</h3>\n            <input class=\"notouch\" *ngIf=\"wave.editing\" [(ngModel)]=\"wave.name\" type=\"text\" placeholder=\"Wave Name\" (blur)=\"wave.editing=false\" autofocus>\n            \n            <div class=\"sliders\" *ngIf=\"!wave.base\">\n                <p>Wavelength: </p>\n                <input type=\"range\" min=\"25\" max=\"750\" [(ngModel)]=\"wave.wavelength\" (ngModelChange)=\"changeWav(i)\"/>\n                <p>Amplitude: </p>\n                <input type=\"range\" min=\"1\" max=\"150\" [(ngModel)]=\"wave.amplitude\"/>\n                <p>Frequency: </p>\n                <input type=\"range\" min=\"1\" max=\"150\" [(ngModel)]=\"wave.frequency\" (ngModelChange)=\"changeFreq(i)\"/>\n            </div>\n\n            <span class=\"italics\" *ngIf=\"wave.base\">This wave is automatically set to the current note, all waves below are based on this wave.</span>\n\n            <!--\n                    <p *ngIf=\"wave.base\">This is the base frequency. Frequency is automatically set depening on the note.</p> -->\n            <!-- <p *ngIf=\"!wave.base\">Set the frequency relative to the base frequency.</p> -->\n        </div>\n        <button (click)=\"newWave()\">New Wave</button>\n        <div id=\"chevron\" (click)=\"toggleMenu()\"></div>\n    </div>\n</div>\n<div id=\"canvas-container\">\n    <div id=\"noteInfo-container\">\n        <p>Note Name: </p>\n        <h2>{{currentNoteName}}</h2>\n        <p>Base Frequency:</p>\n        <h2>{{currentNoteFreq || 0}} Hz</h2>\n    </div>\n    <canvas id=\"rendering-canvas\" #canvWrapper></canvas>\n</div>\n"

/***/ }),

/***/ "./src/app/tone-graph/tone-graph.component.sass":
/*!******************************************************!*\
  !*** ./src/app/tone-graph/tone-graph.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n  border: 4px solid #fc5b13;\n  border-radius: 7px;\n  display: block;\n  margin: 0px auto;\n  width: 100%;\n  display: table-row; }\n\ncanvas + canvas {\n  height: 100%; }\n\n.italics {\n  font-style: italic; }\n\n#settings-panel {\n  width: 190px;\n  padding-left: 10px;\n  background-color: #555;\n  height: 100%;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  font-family: \"Roboto\", \"Segoe UI\", sans-serif;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n  text-align: center; }\n\n#settings-panel #wave-wrapper {\n  height: calc(100vh - 40px);\n  overflow-x: hidden;\n  direction: rtl;\n  padding: 0px 20px 0px 10px;\n  scrollbar-color: #0A4C95 #fc5b13; }\n\n#settings-panel #wave-wrapper * {\n  direction: ltr; }\n\n#settings-panel p {\n  color: rgba(255, 255, 255, 0.8);\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n  margin: 5px 0px;\n  text-align: center; }\n\n#settings-panel input[type=text] {\n  margin: 18.72px 0px 10px;\n  font-family: \"Roboto\", sans-serif;\n  background-color: transparent;\n  border: none;\n  border-bottom: 2px solid #fc5b13;\n  outline: none;\n  color: white;\n  font-weight: 700;\n  font-size: 1.15em;\n  position: relative;\n  left: 0px;\n  width: 100%;\n  text-align: center; }\n\n#settings-panel h2 {\n  font-family: \"Roboto\", sans-serif;\n  position: absolute;\n  top: 10px;\n  font-size: 1em;\n  width: 100%;\n  text-align: center;\n  margin-top: 3px;\n  z-index: 100; }\n\n#settings-panel button {\n  padding: 7px 20px;\n  text-align: center;\n  background-color: transparent;\n  border: 2px solid #fc5b13;\n  border-radius: 5px;\n  color: rgba(255, 255, 255, 0.8);\n  margin: 5px 0px;\n  font-family: \"Roboto\", sans-serif;\n  transition: background-color 0.2s, color 0.2s;\n  cursor: pointer;\n  font-size: 1.1em;\n  outline: none;\n  margin-bottom: 20px; }\n\n#settings-panel button:hover {\n  background-color: #fc5b13;\n  color: white; }\n\n#settings-panel #settings-header {\n  display: block;\n  padding: 10px 0px 30px;\n  position: relative;\n  width: 200px;\n  height: 2px;\n  left: -10px;\n  background-color: #fc5b13; }\n\n#settings-panel .top-icon {\n  position: relative;\n  background-size: cover;\n  width: 25px;\n  height: 25px;\n  z-index: 400;\n  transition: -webkit-transform 0.4s;\n  transition: transform 0.4s;\n  transition: transform 0.4s, -webkit-transform 0.4s;\n  cursor: pointer; }\n\n#settings-panel .top-icon:hover {\n  -webkit-transform: rotate(360deg) scale(1.2);\n          transform: rotate(360deg) scale(1.2); }\n\n#settings-panel #help {\n  background-image: url(\"/assets/help-circle.svg\");\n  float: left;\n  margin-left: 9px; }\n\n#settings-panel #settings {\n  background-image: url(\"/assets/settings.svg\");\n  float: right;\n  margin-right: 9px; }\n\n.settings-collapsed {\n  -webkit-transform: translateX(-175px);\n          transform: translateX(-175px); }\n\n#chevron {\n  position: absolute;\n  top: 50%;\n  right: -20px;\n  content: \"\";\n  background-image: url(\"/assets/chevron-left.svg\");\n  background-position: -1px center;\n  background-size: cover;\n  width: 40px;\n  height: 40px;\n  background-color: #fc5b13;\n  border-radius: 50%;\n  z-index: 400;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s; }\n\n#chevron:hover {\n  -webkit-filter: brightness(130%);\n          filter: brightness(130%); }\n\n.chevron-collapsed {\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg); }\n\n#canvas-container {\n  position: relative;\n  left: 200px;\n  width: calc(100vw - 240px);\n  height: calc(100vh - 40px);\n  transition: width 0.4s, -webkit-transform 0.4s;\n  transition: width 0.4s, transform 0.4s;\n  transition: width 0.4s, transform 0.4s, -webkit-transform 0.4s;\n  padding: 20px;\n  display: table; }\n\n.canvas-container-collapsed {\n  width: calc(100vw - 90px) !important;\n  -webkit-transform: translateX(-150px) !important;\n          transform: translateX(-150px) !important; }\n\n.wave-container::after {\n  content: '';\n  border-top: 3px solid rgba(255, 255, 255, 0.5);\n  width: 100%;\n  display: inline-block;\n  border-radius: 3px; }\n\n#noteInfo-container {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif; }\n\n#noteInfo-container::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.4);\n  margin-bottom: 30px; }\n\n#noteInfo-container h1 {\n  font-size: 3em; }\n\n#noteInfo-container p {\n  margin: 10px 0px 0px;\n  color: rgba(255, 255, 255, 0.7); }\n\n#noteInfo-container h2 {\n  margin: 10px 0px; }\n\n@supports not (-ms-ime-align: auto) {\n  input[type=range] {\n    -webkit-appearance: none;\n    margin: 10px 0px; }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: 30px;\n    width: 8px;\n    border-radius: 4px;\n    background: #fc5b13;\n    cursor: pointer;\n    margin-top: -14px;\n    outline: none; }\n  .disabled::-webkit-slider-thumb {\n    background: #aaaaaa; }\n  input[type=range]::-webkit-slider-thumb:hover {\n    background: #ff7931; }\n  input[type=range]::-moz-range-thumb {\n    -webkit-appearance: none;\n    height: 30px;\n    width: 8px;\n    border-radius: 4px;\n    background: #fc5b13;\n    cursor: pointer;\n    margin-top: -14px;\n    outline: none;\n    border: none; }\n  input[type=range]::-moz-range-thumb:hover {\n    background: #ff7931; }\n  input[type=range]:focus {\n    outline: none; }\n  .ng-untouched:not(.notouch), .ng-touched:not(.notouch) {\n    height: 0px; }\n  input[type=range]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 5px;\n    background-color: rgba(255, 255, 255, 0.9);\n    border-radius: 4px; }\n  input[type=range]::-moz-range-track {\n    width: 100%;\n    height: 5px;\n    background-color: rgba(255, 255, 255, 0.9);\n    border-radius: 4px; } }\n\n@supports (-ms-ime-align: auto) {\n  input[type=range]::-ms-track {\n    background-color: #fc5b13; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9uZS1ncmFwaC9GOlxcVXNlcnNcXGRvcmlhblxcRG9jdW1lbnRzXFxJVFxccGh5c2ljcy1zb3VuZG1ha2VyXFxwdWJsaWMvc3JjXFxhcHBcXHRvbmUtZ3JhcGhcXHRvbmUtZ3JhcGguY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLG1CQUFrQixFQUFHOztBQUV6QjtFQUNJLGFBQVksRUFBRzs7QUFFbkI7RUFDSSxtQkFBa0IsRUFBRzs7QUFFekI7RUFDSSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxTQUFRO0VBQ1IsOENBQTZDO0VBQzdDLG1DQUEwQjtFQUExQiwyQkFBMEI7RUFBMUIsbURBQTBCO0VBQzFCLG1CQUFrQixFQUFHOztBQUV6QjtFQUNJLDJCQUEwQjtFQUMxQixtQkFBa0I7RUFDbEIsZUFBYztFQUNkLDJCQUEwQjtFQUMxQixpQ0FBZ0MsRUFBRzs7QUFFdkM7RUFDSSxlQUFjLEVBQUc7O0FBRXJCO0VBQ0ksZ0NBQStCO0VBQy9CLGtDQUFpQztFQUNqQyxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixtQkFBa0IsRUFBRzs7QUFFekI7RUFDSSx5QkFBd0I7RUFDeEIsa0NBQWlDO0VBQ2pDLDhCQUE2QjtFQUM3QixhQUFZO0VBQ1osaUNBQWdDO0VBQ2hDLGNBQWE7RUFDYixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsVUFBUztFQUNULFlBQVc7RUFDWCxtQkFBa0IsRUFBRzs7QUFFekI7RUFDSSxrQ0FBaUM7RUFDakMsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxlQUFjO0VBQ2QsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGFBQVksRUFBRzs7QUFFbkI7RUFDSSxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLDhCQUE2QjtFQUM3QiwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLGdDQUErQjtFQUMvQixnQkFBZTtFQUNmLGtDQUFpQztFQUNqQyw4Q0FBNkM7RUFDN0MsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLG9CQUFtQixFQUFHOztBQUUxQjtFQUNJLDBCQUF5QjtFQUN6QixhQUFZLEVBQUc7O0FBRW5CO0VBQ0ksZUFBYztFQUNkLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLFlBQVc7RUFDWCxZQUFXO0VBQ1gsMEJBQXlCLEVBQUc7O0FBRWhDO0VBQ0ksbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixZQUFXO0VBQ1gsYUFBWTtFQUNaLGFBQVk7RUFDWixtQ0FBMEI7RUFBMUIsMkJBQTBCO0VBQTFCLG1EQUEwQjtFQUMxQixnQkFBZSxFQUFHOztBQUV0QjtFQUNJLDZDQUFvQztVQUFwQyxxQ0FBb0MsRUFBRzs7QUFFM0M7RUFDSSxpREFBZ0Q7RUFDaEQsWUFBVztFQUNYLGlCQUFnQixFQUFHOztBQUd2QjtFQUNJLDhDQUE2QztFQUM3QyxhQUFZO0VBQ1osa0JBQWlCLEVBQUc7O0FBR3hCO0VBQ0ksc0NBQTZCO1VBQTdCLDhCQUE2QixFQUFHOztBQUVwQztFQUNJLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsYUFBWTtFQUNaLFlBQVc7RUFDWCxrREFBaUQ7RUFDakQsaUNBQWdDO0VBQ2hDLHVCQUFzQjtFQUN0QixZQUFXO0VBQ1gsYUFBWTtFQUNaLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLG1DQUEwQjtFQUExQiwyQkFBMEI7RUFBMUIsbURBQTBCLEVBQUc7O0FBRWpDO0VBQ0ksaUNBQXdCO1VBQXhCLHlCQUF3QixFQUFHOztBQUUvQjtFQUNJLG1DQUEwQjtVQUExQiwyQkFBMEIsRUFBRzs7QUFFakM7RUFDSSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLDJCQUEwQjtFQUMxQiwyQkFBMEI7RUFDMUIsK0NBQXNDO0VBQXRDLHVDQUFzQztFQUF0QywrREFBc0M7RUFDdEMsY0FBYTtFQUNiLGVBQWMsRUFBRzs7QUFFckI7RUFDSSxxQ0FBbUM7RUFDbkMsaURBQXVDO1VBQXZDLHlDQUF1QyxFQUFHOztBQUU5QztFQUNJLFlBQVc7RUFDWCwrQ0FBOEM7RUFDOUMsWUFBVztFQUNYLHNCQUFxQjtFQUNyQixtQkFBa0IsRUFBRzs7QUFFekI7RUFDSSxtQkFBa0I7RUFDbEIsa0NBQWlDLEVBQUc7O0FBRXhDO0VBQ0ksWUFBVztFQUNYLGVBQWM7RUFDZCxZQUFXO0VBQ1gsa0RBQWlEO0VBQ2pELG9CQUFtQixFQUFHOztBQUUxQjtFQUNJLGVBQWMsRUFBRzs7QUFFckI7RUFDSSxxQkFBb0I7RUFDcEIsZ0NBQStCLEVBQUc7O0FBRXRDO0VBQ0ksaUJBQWdCLEVBQUc7O0FBRVc7RUFDOUI7SUFDSSx5QkFBd0I7SUFDeEIsaUJBQWdCLEVBQUc7RUFFdkI7SUFDSSx5QkFBd0I7SUFDeEIsYUFBWTtJQUNaLFdBQVU7SUFDVixtQkFBa0I7SUFDbEIsb0JBQW1CO0lBQ25CLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLGNBQWEsRUFBRztFQUVwQjtJQUNJLG9CQUFtQixFQUFHO0VBRTFCO0lBQ0ksb0JBQTJCLEVBQUc7RUFFbEM7SUFDSSx5QkFBd0I7SUFDeEIsYUFBWTtJQUNaLFdBQVU7SUFDVixtQkFBa0I7SUFDbEIsb0JBQW1CO0lBQ25CLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLGNBQWE7SUFDYixhQUFZLEVBQUc7RUFFbkI7SUFDSSxvQkFBMkIsRUFBRztFQUVsQztJQUNJLGNBQWEsRUFBRztFQUVwQjtJQUNJLFlBQVcsRUFBRztFQUVsQjtJQUNJLFlBQVc7SUFDWCxZQUFXO0lBQ1gsMkNBQTBDO0lBQzFDLG1CQUFrQixFQUFHO0VBRXpCO0lBQ0ksWUFBVztJQUNYLFlBQVc7SUFDWCwyQ0FBMEM7SUFDMUMsbUJBQWtCLEVBQUcsRUFBQTs7QUFFQztFQUMxQjtJQUNJLDBCQUF5QixFQUFHLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90b25lLWdyYXBoL3RvbmUtZ3JhcGguY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmYzViMTM7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogdGFibGUtcm93OyB9XG5cbmNhbnZhcysgY2FudmFzIHtcbiAgICBoZWlnaHQ6IDEwMCU7IH1cblxuLml0YWxpY3Mge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxuXG4jc2V0dGluZ3MtcGFuZWwge1xuICAgIHdpZHRoOiAxOTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBzYW5zLXNlcmlmO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4jc2V0dGluZ3MtcGFuZWwgI3dhdmUtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGRpcmVjdGlvbjogcnRsO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAxMHB4O1xuICAgIHNjcm9sbGJhci1jb2xvcjogIzBBNEM5NSAjZmM1YjEzOyB9XG5cbiNzZXR0aW5ncy1wYW5lbCAjd2F2ZS13cmFwcGVyICoge1xuICAgIGRpcmVjdGlvbjogbHRyOyB9XG5cbiNzZXR0aW5ncy1wYW5lbCBwIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4jc2V0dGluZ3MtcGFuZWwgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgbWFyZ2luOiAxOC43MnB4IDBweCAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZjNWIxMztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbiNzZXR0aW5ncy1wYW5lbCBoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIHotaW5kZXg6IDEwMDsgfVxuXG4jc2V0dGluZ3MtcGFuZWwgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZjNWIxMztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBjb2xvciAwLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG4jc2V0dGluZ3MtcGFuZWwgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmM1YjEzO1xuICAgIGNvbG9yOiB3aGl0ZTsgfVxuXG4jc2V0dGluZ3MtcGFuZWwgI3NldHRpbmdzLWhlYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTBweCAwcHggMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGxlZnQ6IC0xMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYzViMTM7IH1cblxuI3NldHRpbmdzLXBhbmVsIC50b3AtaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHotaW5kZXg6IDQwMDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuI3NldHRpbmdzLXBhbmVsIC50b3AtaWNvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpOyB9XG5cbiNzZXR0aW5ncy1wYW5lbCAjaGVscCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9oZWxwLWNpcmNsZS5zdmdcIik7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDlweDsgfVxuXG5cbiNzZXR0aW5ncy1wYW5lbCAjc2V0dGluZ3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvc2V0dGluZ3Muc3ZnXCIpO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDsgfVxuXG5cbi5zZXR0aW5ncy1jb2xsYXBzZWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTc1cHgpOyB9XG5cbiNjaGV2cm9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2NoZXZyb24tbGVmdC5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMXB4IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmM1YjEzO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB6LWluZGV4OiA0MDA7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7IH1cblxuI2NoZXZyb246aG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMzAlKTsgfVxuXG4uY2hldnJvbi1jb2xsYXBzZWQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpOyB9XG5cbiNjYW52YXMtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMjAwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyNDBweCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC40cywgdHJhbnNmb3JtIDAuNHM7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiB0YWJsZTsgfVxuXG4uY2FudmFzLWNvbnRhaW5lci1jb2xsYXBzZWQge1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gOTBweCkhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwcHgpIWltcG9ydGFudDsgfVxuXG4ud2F2ZS1jb250YWluZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7IH1cblxuI25vdGVJbmZvLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmOyB9XG5cbiNub3RlSW5mby1jb250YWluZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuXG4jbm90ZUluZm8tY29udGFpbmVyIGgxIHtcbiAgICBmb250LXNpemU6IDNlbTsgfVxuXG4jbm90ZUluZm8tY29udGFpbmVyIHAge1xuICAgIG1hcmdpbjogMTBweCAwcHggMHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7IH1cblxuI25vdGVJbmZvLWNvbnRhaW5lciBoMiB7XG4gICAgbWFyZ2luOiAxMHB4IDBweDsgfVxuXG5Ac3VwcG9ydHMgbm90ICgtbXMtaW1lLWFsaWduOmF1dG8pIHtcbiAgICBpbnB1dFt0eXBlPXJhbmdlXSB7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDsgfVxuXG4gICAgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZjNWIxMztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTRweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuXG4gICAgLmRpc2FibGVkOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNhYWFhYWE7IH1cblxuICAgIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMTIxLDQ5KTsgfVxuXG4gICAgaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmM1YjEzO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xNHB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7IH1cblxuICAgIGlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRodW1iOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwxMjEsNDkpOyB9XG5cbiAgICBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cblxuICAgIC5uZy11bnRvdWNoZWQ6bm90KC5ub3RvdWNoKSwgLm5nLXRvdWNoZWQ6bm90KC5ub3RvdWNoKSB7XG4gICAgICAgIGhlaWdodDogMHB4OyB9XG5cbiAgICBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4OyB9XG5cbiAgICBpbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10cmFjayB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7IH0gfVxuXG5Ac3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0bykge1xuICAgIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdHJhY2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmM1YjEzOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tone-graph/tone-graph.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tone-graph/tone-graph.component.ts ***!
  \****************************************************/
/*! exports provided: ToneGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToneGraphComponent", function() { return ToneGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/data */ "./src/data/data.ts");
/* harmony import */ var _src_classes_note_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/classes/note-utils */ "./src/classes/note-utils.ts");





var ToneGraphComponent = /** @class */ (function () {
    function ToneGraphComponent() {
        var _this = this;
        this.settings = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.help = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.canvasWidth = 0;
        this.canvasHeight = 0;
        this.waves = [];
        this.harmonic = [];
        this.pressedKeys = [];
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        this.noteIDCounter = 0;
        this.menuOpen = true;
        this.currentNoteName = 'Silence';
        this.currentNoteFreq = '0';
        this.tones = [];
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).keydown(function (event) {
            var code = (event.keyCode ? event.keyCode : event.which);
            var char = String.fromCharCode(code).toLowerCase();
            if (_this.pressedKeys.indexOf(code) > -1) {
                return 0;
            }
            else {
                _this.pressedKeys.push(code);
            }
            if (_data_data__WEBPACK_IMPORTED_MODULE_3__["noteFreqMap"].hasOwnProperty(char)) {
                _this.currentNoteName = char.toUpperCase();
                _this.currentNoteFreq = _data_data__WEBPACK_IMPORTED_MODULE_3__["noteFreqMap"][char][5];
                var baseFrequency = _data_data__WEBPACK_IMPORTED_MODULE_3__["noteFreqMap"][char][5];
                _this.constructHarmonic(baseFrequency, 1);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).keyup(function (event) {
            var code = (event.keyCode ? event.keyCode : event.which);
            var char = String.fromCharCode(code).toLowerCase();
            if (_this.pressedKeys.indexOf(code) < 0) { // not in the list
                return 0;
            }
            else {
                _this.pressedKeys.splice(_this.pressedKeys.indexOf(code), 1);
            }
            if (_data_data__WEBPACK_IMPORTED_MODULE_3__["noteFreqMap"].hasOwnProperty(char)) {
                var baseFrequency = _data_data__WEBPACK_IMPORTED_MODULE_3__["noteFreqMap"][char][5];
                _this.destroyHarmonic(baseFrequency);
                try {
                    var nodeIdx = String.fromCharCode(_this.pressedKeys[_this.pressedKeys.length - 1]).toLowerCase();
                    _this.currentNoteFreq = _data_data__WEBPACK_IMPORTED_MODULE_3__["noteFreqMap"][nodeIdx][5];
                    _this.currentNoteName = nodeIdx.toUpperCase();
                }
                catch (_a) {
                    _this.currentNoteFreq = '0';
                    _this.currentNoteName = 'Silence';
                }
            }
        });
    }
    ToneGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.canvasWrapper);
        this.gameCanvas = document.getElementById('rendering-canvas');
        console.log(this.gameCanvas);
        this.renderingContext = this.gameCanvas.getContext('2d');
        this.time = 0;
        // Some examples:
        // this.renderingContext.fillRect(x, y, w, h)
        // https://www.w3schools.com/html/html5_canvas.asp
        this.waves.push({ wavelength: 350, amplitude: 100, color: 'green', base: true,
            name: 'Base Frequency', editing: false, priorNum: 0, frequency: 200 * (1 / 350) });
        var samples = 1000;
        var moveRate = -(1 / samples) * this.canvasWidth;
        console.log(moveRate);
        var renderLoop = function () {
            _this.canvasWidth = _this.canvasWrapper.nativeElement.clientWidth;
            _this.canvasHeight = _this.canvasWrapper.nativeElement.clientHeight;
            _this.gameCanvas.width = _this.canvasWidth;
            _this.gameCanvas.height = _this.canvasHeight;
            // this.renderingContext.globalCompositeOperation = 'copy';
            // this.renderingContext.imageSmoothingEnabled = false;
            // console.log(-(1 / samples) * this.canvasWidth);
            // this.renderingContext.drawImage(this.renderingContext.canvas, moveRate, 0);
            // this.renderingContext.globalCompositeOperation = 'source-over';
            _this.renderingContext.clearRect(0, 0, _this.canvasWidth, _this.canvasHeight);
            _this.renderingContext.lineWidth = 1;
            _this.renderingContext.strokeStyle = 'gray';
            _this.renderGraphLines(_this.canvasWidth, _this.canvasHeight, _this.renderingContext, 50);
            _this.renderingContext.lineWidth = 2;
            for (var _i = 0, _a = _this.waves; _i < _a.length; _i++) {
                var wave = _a[_i];
                _this.renderingContext.strokeStyle = wave.color;
                _this.renderWave(_this.canvasWidth, _this.canvasHeight, _this.renderingContext, wave.amplitude, wave.wavelength, _this.time, samples);
            }
            _this.renderingContext.strokeStyle = '#AB47BC';
            _this.renderCombinedWave(_this.canvasWidth, _this.canvasHeight, _this.renderingContext, _this.waves, _this.time, 1000);
            _this.time += Math.PI * 0.5;
            requestAnimationFrame(renderLoop);
        };
        renderLoop();
    };
    ToneGraphComponent.prototype.renderWave = function (canvasWidth, canvasHeight, renderContext, amplitude, wavelength, time, samples) {
        var priorNum = amplitude * Math.sin(2 * Math.PI * time / wavelength);
        for (var i = 1; i < samples; i++) {
            var newNum = amplitude * Math.sin(2 * Math.PI * ((i / samples) * canvasWidth + time) / wavelength);
            renderContext.beginPath();
            renderContext.moveTo(((i - 1) / samples) * canvasWidth, priorNum + (canvasHeight / 2));
            renderContext.lineTo((i / samples) * canvasWidth + 2, newNum + (canvasHeight / 2));
            renderContext.stroke();
            priorNum = newNum;
        }
    };
    ToneGraphComponent.prototype.renderGraphLines = function (canvasWidth, canvasHeight, renderContext, distBetweenLines) {
        for (var i = 1; i < canvasWidth / distBetweenLines; i++) {
            renderContext.beginPath();
            renderContext.moveTo(i * distBetweenLines, 0);
            renderContext.lineTo(i * distBetweenLines, canvasHeight);
            renderContext.stroke();
        }
        for (var i = 1; i < canvasHeight / distBetweenLines; i++) {
            renderContext.beginPath();
            renderContext.moveTo(0, i * distBetweenLines);
            renderContext.lineTo(canvasWidth, i * distBetweenLines);
            renderContext.stroke();
        }
    };
    ToneGraphComponent.prototype.renderQuickWave = function (canvasWidth, canvasHeight, renderContext, amplitude, wavelength, time, samples, priorNum) {
        // const priorNum = amplitude * Math.sin(2 * Math.PI * ((samples - 2) / samples * canvasWidth + time) / wavelength);
        var newNum = amplitude * Math.sin(2 * Math.PI * ((samples - 1) / samples * canvasWidth + time) / wavelength);
        renderContext.beginPath();
        renderContext.moveTo(((samples - 2) / samples) * canvasWidth, priorNum + (canvasHeight / 2));
        renderContext.lineTo(((samples - 1) / samples) * canvasWidth, newNum + (canvasHeight / 2));
        renderContext.stroke();
        return newNum;
    };
    ToneGraphComponent.prototype.renderCombinedWave = function (canvasWidth, canvasHeight, renderContext, waves, time, samples) {
        var priorNum = 0;
        for (var _i = 0, waves_1 = waves; _i < waves_1.length; _i++) {
            var wave = waves_1[_i];
            priorNum += wave.amplitude * Math.sin(2 * Math.PI * time / wave.wavelength);
        }
        for (var i = 1; i < samples; i++) {
            var newNum = 0;
            for (var _a = 0, waves_2 = waves; _a < waves_2.length; _a++) {
                var wave = waves_2[_a];
                newNum += wave.amplitude * Math.sin(2 * Math.PI * ((i / samples) * canvasWidth + time) / wave.wavelength);
            }
            renderContext.beginPath();
            renderContext.moveTo(((i - 1) / samples) * canvasWidth, priorNum + (canvasHeight / 2));
            renderContext.lineTo((i / samples) * canvasWidth, newNum + (canvasHeight / 2));
            renderContext.stroke();
            priorNum = newNum;
        }
    };
    ToneGraphComponent.prototype.newWave = function () {
        this.waves.push({ wavelength: 50, name: '', base: false, color: 'blue',
            amplitude: 50, editing: false, priorNum: 0, frequency: 200 * (1 / 50) });
    };
    ToneGraphComponent.prototype.toggleMenu = function () {
        console.log('Toggling Menu');
        if (this.menuOpen) {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#settings-panel').addClass('settings-collapsed');
            jquery__WEBPACK_IMPORTED_MODULE_2__('#chevron').addClass('chevron-collapsed');
            jquery__WEBPACK_IMPORTED_MODULE_2__('#canvas-container').addClass('canvas-container-collapsed');
            this.menuOpen = false;
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#settings-panel').removeClass('settings-collapsed');
            jquery__WEBPACK_IMPORTED_MODULE_2__('#chevron').removeClass('chevron-collapsed');
            jquery__WEBPACK_IMPORTED_MODULE_2__('#canvas-container').removeClass('canvas-container-collapsed');
            this.menuOpen = true;
        }
    };
    ToneGraphComponent.prototype.focusInput = function () {
        console.log('focusing...');
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.notouch').focus();
        }, 50);
    };
    ToneGraphComponent.prototype.openSettings = function () {
        console.log('OpenSettings');
        this.settings.emit();
    };
    ToneGraphComponent.prototype.openHelp = function () {
        console.log('OpenHelp');
        this.help.emit();
    };
    ToneGraphComponent.prototype.constructHarmonic = function (baseFrequency, baseAmplitude) {
        var _this = this;
        var currentTimber = new _src_classes_note_utils__WEBPACK_IMPORTED_MODULE_4__["Timber"]();
        currentTimber.setId(baseFrequency); // Each note has a unique bass frequency, this can be used as an ID.
        this.waves.forEach(function (wave) {
            var frequency;
            if (wave.base) {
                frequency = baseFrequency;
            }
            else {
                frequency = wave.frequency + baseFrequency; // Frequency is based on the frequency of the base.
            }
            var amplitude = (wave.amplitude + baseAmplitude) / 5000;
            console.log(amplitude);
            var tone = new _src_classes_note_utils__WEBPACK_IMPORTED_MODULE_4__["Tone"](_this.audioCtx);
            tone.setFrequency(frequency);
            tone.setAmplitude(amplitude);
            tone.setPan(0);
            currentTimber.addTone(_this.audioCtx, tone);
        });
        currentTimber.play();
        this.harmonic.push(currentTimber);
    };
    ToneGraphComponent.prototype.destroyHarmonic = function (baseFrequency) {
        var _this = this;
        this.harmonic.forEach(function (timber, idx) {
            if (timber.getId() === baseFrequency) { // Check if it is the one we want to turn off
                timber.stop();
                _this.harmonic.splice(idx, 1);
            }
        });
    };
    ToneGraphComponent.prototype.playNote = function (frequency, id) {
        if (frequency === void 0) { frequency = 50; }
        var tone = new _src_classes_note_utils__WEBPACK_IMPORTED_MODULE_4__["Tone"](this.audioCtx);
        tone.setFrequency(frequency, 1, this.audioCtx.currentTime + 0.2);
        tone.setAmplitude(0.03, 1, 5);
        tone.setPan(0);
        return tone;
    };
    ToneGraphComponent.prototype.changeFreq = function (idx) {
        this.waves[idx].wavelength = 343 / this.waves[idx].frequency;
    };
    ToneGraphComponent.prototype.changeWav = function (idx) {
        this.waves[idx].frequency = 343 / this.waves[idx].wavelength;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToneGraphComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToneGraphComponent.prototype, "help", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvWrapper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToneGraphComponent.prototype, "canvasWrapper", void 0);
    ToneGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tone-graph',
            template: __webpack_require__(/*! ./tone-graph.component.html */ "./src/app/tone-graph/tone-graph.component.html"),
            styles: [__webpack_require__(/*! ./tone-graph.component.sass */ "./src/app/tone-graph/tone-graph.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToneGraphComponent);
    return ToneGraphComponent;
}());



/***/ }),

/***/ "./src/classes/note-utils.ts":
/*!***********************************!*\
  !*** ./src/classes/note-utils.ts ***!
  \***********************************/
/*! exports provided: Tone, Timber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tone", function() { return Tone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timber", function() { return Timber; });
var Tone = /** @class */ (function () {
    function Tone(audioCtx) {
        this.timeline = {};
        this.timelineId = 1; // increment ID for different tone timeline events
        this.audioCtx = audioCtx;
        this.oscillator = this.audioCtx.createOscillator();
        this.panner = this.audioCtx.createStereoPanner();
        this.gain = this.audioCtx.createGain();
        this.oscillator.connect(this.gain);
        this.gain.connect(this.panner);
        this.panner.connect(this.audioCtx.destination);
    }
    Tone.prototype.stop = function (time) {
        this.oscillator.stop(time);
        this.oscillator.frequency.cancelScheduledValues(0); // immediately cancel all scheduled values
        this.gain.gain.cancelScheduledValues(0);
        this.panner.pan.cancelScheduledValues(0);
    };
    Tone.prototype.prepTimeline = function () {
        var _this = this;
        Object.keys(this.timeline).forEach(function (timelineKey) {
            if (!_this.timeline.hasOwnProperty(timelineKey)) {
                return;
            }
            var timelineEvent = _this.timeline[timelineKey];
            if (timelineEvent.type === 'frequency') {
                _this.setFrequency(timelineEvent.value, _this.audioCtx.currentTime + timelineEvent.time, timelineEvent.rampTime);
            }
            else if (timelineEvent.type === 'amplitude') {
                _this.setAmplitude(timelineEvent.value, _this.audioCtx.currentTime + timelineEvent.time, timelineEvent.rampTime);
            }
            else if (timelineEvent.type === 'pan') {
                _this.setPan(timelineEvent.value, _this.audioCtx.currentTime + timelineEvent.time, timelineEvent.rampTime);
            }
        });
    };
    Tone.prototype.start = function (time) {
        if (time === void 0) { time = 0; }
        this.oscillator.start(time);
        console.log('starting oscillators');
    };
    Tone.prototype.clear = function () {
        delete (this.oscillator);
        delete (this.panner);
        delete (this.gain);
    };
    Tone.prototype.addTimelineEvent = function (type, value, time, rampTime) {
        if (time === void 0) { time = 0; }
        if (rampTime === void 0) { rampTime = 0; }
        this.timeline[++this.timelineId] = { type: type, value: value, time: time, rampTime: rampTime };
        return this.timelineId;
    };
    Tone.prototype.deleteTimeLineEvent = function (id) {
        delete this.timeline[id];
    };
    Tone.prototype.setFrequency = function (frequency, time, rampTime) {
        var _this = this;
        if (time === void 0) { time = 0; }
        if (rampTime === void 0) { rampTime = 0; }
        if (rampTime > 0) {
            setTimeout(function () {
                _this.oscillator.frequency.linearRampToValueAtTime(frequency, rampTime);
            }, time);
        }
        else {
            this.oscillator.frequency.setValueAtTime(frequency, time);
        }
    };
    Tone.prototype.setAmplitude = function (amplitude, time, rampTime) {
        var _this = this;
        if (time === void 0) { time = 0; }
        if (rampTime === void 0) { rampTime = 0; }
        if (rampTime > 0) {
            setTimeout(function () {
                _this.gain.gain.linearRampToValueAtTime(amplitude, rampTime);
            }, time);
        }
        else {
            this.gain.gain.setValueAtTime(amplitude, time);
        }
    };
    Tone.prototype.setPan = function (pan, time, rampTime) {
        var _this = this;
        if (time === void 0) { time = 0; }
        if (rampTime === void 0) { rampTime = 0; }
        if (rampTime > 0) {
            setTimeout(function () {
                _this.panner.pan.linearRampToValueAtTime(pan, rampTime);
            }, time);
        }
        else {
            this.panner.pan.setValueAtTime(pan, time);
        }
    };
    return Tone;
}());

var Timber = /** @class */ (function () {
    function Timber() {
        var notes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            notes[_i] = arguments[_i];
        }
        this.tones = notes;
    }
    Timber.prototype.addTone = function (audioCtx, tone) {
        this.audioCtx = audioCtx;
        this.tones.push(tone);
    };
    Timber.prototype.play = function () {
        this.tones.forEach(function (tone) {
            tone.prepTimeline();
            tone.start();
        });
    };
    Timber.prototype.stop = function () {
        this.tones.forEach(function (tone) {
            tone.stop(0);
            tone.clear();
        });
    };
    Timber.prototype.setId = function (id) {
        this.id = id;
    };
    Timber.prototype.getId = function () {
        return this.id;
    };
    return Timber;
}());



/***/ }),

/***/ "./src/data/data.ts":
/*!**************************!*\
  !*** ./src/data/data.ts ***!
  \**************************/
/*! exports provided: noteFreqMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noteFreqMap", function() { return noteFreqMap; });
var noteFreqMap = {
    'c': [16.35, 32.70, 65.41, 130.81, 261.63, 523.25, 1046.50],
    'c#': [17.32, 34.65, 69.30, 138.59, 277.18, 554.37, 1108.73],
    'db': [17.32, 34.65, 69.30, 138.59, 277.18, 554.37, 1108.73],
    'd': [18.35, 36.71, 73.42, 146.83, 293.66, 587.33, 1174.66],
    'd#': [19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51],
    'eb': [19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51],
    'e': [20.60, 41.20, 82.41, 164.81, 329.63, 659.25, 1318.51],
    'f': [21.83, 43.65, 87.31, 174.61, 349.23, 698.46, 1396.91],
    'f#': [23.12, 46.25, 92.50, 185, 369.99, 739.99, 1479.98],
    'gb': [23.12, 46.25, 92.50, 185, 369.99, 739.99, 1479.98],
    'g': [24.50, 49, 98, 196, 392, 783.99, 1567.98],
    'g#': [25.96, 51.91, 103.83, 207.65, 415.30, 830.61, 1661.22],
    'ab': [25.96, 51.91, 103.83, 207.65, 415.30, 830.61, 1661.22],
    'a': [27.50, 55, 110, 220, 440, 880, 1760],
    'a#': [29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66],
    'bb': [29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66],
    'b': [30.87, 61.74, 123.47, 246.94, 493.88, 987.77, 1975.53]
};
// export let noteFreqMap = {
//   'a': [16.35, 32.70, 65.41, 130.81, 261.63, 523.25, 1046.50],
//   'c#': [17.32, 34.65, 69.30, 138.59, 277.18, 554.37, 1108.73],
//   'db': [17.32, 34.65, 69.30, 138.59, 277.18, 554.37, 1108.73],
//   's': [18.35, 36.71, 73.42, 146.83, 293.66, 587.33, 1174.66],
//   'd#': [19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51],
//   'eb': [19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51],
//   'd': [20.60, 41.20, 82.41, 164.81, 329.63, 659.25, 1318.51],
//   'f': [21.83, 43.65, 87.31, 174.61, 349.23, 698.46, 1396.91],
//   'f#': [23.12, 46.25, 92.50, 185, 369.99, 739.99, 1479.98],
//   'gb': [23.12, 46.25, 92.50, 185, 369.99, 739.99, 1479.98],
//   'g': [24.50, 49, 98, 196, 392, 783.99, 1567.98],
//   'g#': [25.96, 51.91, 103.83, 207.65, 415.30, 830.61, 1661.22],
//   'ab': [25.96, 51.91, 103.83, 207.65, 415.30, 830.61, 1661.22],
//   'h': [27.50, 55, 110, 220, 440, 880, 1760],
//   'a#': [29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66],
//   'bb': [29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66],
//   'j': [30.87, 61.74, 123.47, 246.94, 493.88, 987.77, 1975.53]
// };


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Users\dorian\Documents\IT\physics-soundmaker\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map