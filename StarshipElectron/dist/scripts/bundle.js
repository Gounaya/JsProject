/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  CLASS MOBILE
*/

var Mobile = function () {
  function Mobile(x, y, img) {
    var speedX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var speedY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    _classCallCheck(this, Mobile);

    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = img;
    this.speedX = speedX;
    this.speedY = speedY;
    this.MoveState = { UP: 0, DOWN: 1, LEFT: 2, RIGHT: 3, NONE: 4 };
    this.width = 50;
    this.height = 50;
  }

  _createClass(Mobile, [{
    key: "draw",
    value: function draw(context) {
      context.drawImage(this.img, this.x, this.y);
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this._moving = this.MoveState.LEFT;
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this._moving = this.MoveState.RIGHT;
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      this._moving = this.MoveState.UP;
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      this._moving = this.MoveState.DOWN;
    }
  }, {
    key: "move",
    value: function move(canvas) {
      if (this._moving === this.MoveState.LEFT) {
        this.x = Math.max(0, this.x - this.speedX);
      }
      if (this._moving === this.MoveState.RIGHT) {
        this.x = Math.min(canvas.width - this.width, this.x + this.speedX);
      }
      if (this._moving === this.MoveState.UP) {
        this.y = Math.max(0, this.y - this.speedY);
      }
      if (this._moving === this.MoveState.DOWN) {
        this.y = Math.min(canvas.height - this.height, this.y + this.speedY);
      }
    }
  }, {
    key: "stopMove",
    value: function stopMove() {
      this._moving = this.MoveState.NONE;
    }
  }]);

  return Mobile;
}();

exports.default = Mobile;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(2);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setupListener() {
  var theGame = new _Game2.default(1200, 600, document.getElementById("stars"));
  theGame.draw();
  theGame.start();
  initEvents(theGame);
} /*
    MAIN FUNCTION
  */


function initEvents(theGame) {
  window.addEventListener('keydown', theGame.keyDownActionHandler.bind(theGame));
  window.addEventListener('keyup', theGame.keyUpActionHandler.bind(theGame));
  document.getElementById("flotteSoucoupes").addEventListener("click", theGame.addSaucerInfinite.bind(theGame));
  document.getElementById("nouvelleSoucoupe").addEventListener("click", theGame.addSaucer.bind(theGame));
}

window.addEventListener("load", setupListener);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       CLASS GAME
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _Starship = __webpack_require__(3);

var _Starship2 = _interopRequireDefault(_Starship);

var _Saucer = __webpack_require__(5);

var _Saucer2 = _interopRequireDefault(_Saucer);

var _Shoot = __webpack_require__(7);

var _Shoot2 = _interopRequireDefault(_Shoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(width, height, canvas) {
    _classCallCheck(this, Game);

    this._width = width;
    this._height = height;
    this.canvas = canvas;
    this.starship = new _Starship2.default(40, height / 2);
    this.saucers = new Array();
    this.shoots = new Array();
    this.score = 0;
  }

  /* GETTERS */

  _createClass(Game, [{
    key: 'addSaucer',
    value: function addSaucer() {
      var saucer = new _Saucer2.default(this._width, Math.random() * this.canvas.height);
      this.saucers.push(saucer);
      document.getElementById("nouvelleSoucoupe").blur();
    }
  }, {
    key: 'addSaucerI',
    value: function addSaucerI() {
      if (Math.random() < 0.5) {
        var saucer = new _Saucer2.default(this._width, Math.random() * this.canvas.height);
        this.saucers.push(saucer);
      }
    }
  }, {
    key: 'addSaucerInfinite',
    value: function addSaucerInfinite() {
      window.setInterval(this.addSaucerI.bind(this), 750);
      document.getElementById("flotteSoucoupes").blur();
    }
  }, {
    key: 'addShoot',
    value: function addShoot() {
      var shoot = new _Shoot2.default(this.starship.x + 45, this.starship.y + 10);
      this.shoots.push(shoot);
    }
  }, {
    key: 'removeShoot',
    value: function removeShoot(shoot) {
      this.shoots.splice(this.shoots.indexOf(shoot), 1);
    }
  }, {
    key: 'removeSaucer',
    value: function removeSaucer(saucer) {
      this.saucers.splice(this.saucers.indexOf(saucer), 1);
    }
  }, {
    key: 'addScore',
    value: function addScore(score) {
      this.score += score;
      document.getElementById("score").innerHTML = this.score;
    }
  }, {
    key: 'draw',
    value: function draw() {
      var _this = this;

      var context = this.canvas.getContext("2d");
      this.canvas.width = this._width;
      this.canvas.height = this._height;
      this.starship.draw(context);
      this.saucers.forEach(function (s) {
        return s.draw(context);
      });
      this.shoots.forEach(function (s) {
        return s.draw(context);
      });
      this.shoots.filter(function (s) {
        return s.toearn == true;
      }).forEach(function (s) {
        return _this.addScore(1200);
      });

      this.shoots.filter(function (s) {
        return s.todelete == true;
      }).forEach(function (s) {
        return _this.removeShoot(s);
      });
      var saucersToDown = new Array();
      this.shoots.filter(function (s) {
        return saucersToDown.push(s.isInCollision(_this.saucers));
      });
      this.saucers.filter(function (s) {
        return s.todelete == true;
      }).forEach(function (s) {
        return _this.addScore(-1000);
      });
      this.saucers.filter(function (s) {
        return s.todelete == true;
      }).forEach(function (s) {
        return _this.removeSaucer(s);
      });
      this.saucers.filter(function (s) {
        return s.todeletewithoutpoint == true;
      }).forEach(function (s) {
        return _this.removeSaucer(s);
      });
    }
  }, {
    key: 'keyDownActionHandler',
    value: function keyDownActionHandler(event) {
      switch (event.key) {
        case "ArrowUp":
          this.starship.moveUp();
          break;
        case " ":
          this.addShoot();
          break;

        case "ArrowDown":
          this.starship.moveDown();
          break;
        default:
          return;
      }
      event.preventDefault();
    }
  }, {
    key: 'keyUpActionHandler',
    value: function keyUpActionHandler(event) {
      switch (event.key) {
        case "ArrowUp":
        case "ArrowDown":
          this.starship.stopMove();
          break;
        default:
          return;
      }
      event.preventDefault();
    }
  }, {
    key: 'moveAndDraw',
    value: function moveAndDraw() {
      var canvas = this.canvas;
      this.draw();
      this.starship.move(canvas);
      this.saucers.forEach(function (s) {
        return s.move(canvas);
      });
      this.shoots.forEach(function (s) {
        return s.move(canvas);
      });
      this.request = window.requestAnimationFrame(this.moveAndDraw.bind(this));
    }
  }, {
    key: 'start',
    value: function start() {
      this.request = window.requestAnimationFrame(this.moveAndDraw.bind(this));
    }
  }, {
    key: 'stop',
    value: function stop() {
      window.cancelAnimationFrame(this.request);
    }
  }, {
    key: 'width',
    get: function get() {
      return this._width;
    }
  }, {
    key: 'height',
    get: function get() {
      return this._height;
    }
  }]);

  return Game;
}();

//export default theGame = new Game(800, 400, document.getElementById("stars"));


exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Mobile2 = __webpack_require__(0);

var _Mobile3 = _interopRequireDefault(_Mobile2);

var _vaisseauBallonPetit = __webpack_require__(4);

var _vaisseauBallonPetit2 = _interopRequireDefault(_vaisseauBallonPetit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 CLASS STARSHIP < MOBILE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Starship = function (_Mobile) {
  _inherits(Starship, _Mobile);

  function Starship(x, y) {
    _classCallCheck(this, Starship);

    var _this = _possibleConstructorReturn(this, (Starship.__proto__ || Object.getPrototypeOf(Starship)).call(this, x, y, _vaisseauBallonPetit2.default, 0, 8));

    _this._moving = _this.MoveState.NONE;
    return _this;
  }

  _createClass(Starship, [{
    key: "move",
    value: function move(canvas) {
      if (this.x >= 0 && this.x <= canvas.width && this.y >= 0 && this.y <= canvas.height) {
        _get(Starship.prototype.__proto__ || Object.getPrototypeOf(Starship.prototype), "move", this).call(this, canvas);
      }
    }
  }, {
    key: "up",
    get: function get() {
      return this._moving == this.MoveState.UP;
    }
  }, {
    key: "down",
    get: function get() {
      return this._moving == this.MoveState.DOWN;
    }
  }]);

  return Starship;
}(_Mobile3.default);

exports.default = Starship;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/imge1bf45cee89f1ffc97d7cab6c41bd7c8.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Mobile2 = __webpack_require__(0);

var _Mobile3 = _interopRequireDefault(_Mobile2);

var _flyingSaucerPetit = __webpack_require__(6);

var _flyingSaucerPetit2 = _interopRequireDefault(_flyingSaucerPetit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 CLASS SAUCER < MOBILE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Saucer = function (_Mobile) {
  _inherits(Saucer, _Mobile);

  function Saucer(x, y) {
    _classCallCheck(this, Saucer);

    var _this = _possibleConstructorReturn(this, (Saucer.__proto__ || Object.getPrototypeOf(Saucer)).call(this, x, y, _flyingSaucerPetit2.default, 3, 0));

    _this.moveLeft();
    return _this;
  }

  _createClass(Saucer, [{
    key: "move",
    value: function move(canvas) {
      _get(Saucer.prototype.__proto__ || Object.getPrototypeOf(Saucer.prototype), "move", this).call(this, canvas);
      if (this.x <= 0) {
        this.todelete = true;
      }
      if (this.y >= canvas.height - 50) {
        this.todeletewithoutpoint = true;
      }
    }
  }, {
    key: "dead",
    value: function dead() {
      this.moveDown();
      this.speedX = 0;
      this.speedY = 3;
      this.stop = true;
    }
  }]);

  return Saucer;
}(_Mobile3.default);

exports.default = Saucer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/imgb3ed500bab96ecd82052a2aedf9b2e04.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Mobile2 = __webpack_require__(0);

var _Mobile3 = _interopRequireDefault(_Mobile2);

var _shoot = __webpack_require__(8);

var _shoot2 = _interopRequireDefault(_shoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 CLASS SHOOT < MOBILE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Shoot = function (_Mobile) {
  _inherits(Shoot, _Mobile);

  function Shoot(x, y) {
    _classCallCheck(this, Shoot);

    return _possibleConstructorReturn(this, (Shoot.__proto__ || Object.getPrototypeOf(Shoot)).call(this, x, y, _shoot2.default, 8, 0));
  }

  _createClass(Shoot, [{
    key: "move",
    value: function move(canvas) {
      this.moveRight();
      _get(Shoot.prototype.__proto__ || Object.getPrototypeOf(Shoot.prototype), "move", this).call(this, canvas);
      if (this.x >= canvas.width - 50) {
        this.todelete = true;
      }
    }
  }, {
    key: "isInCollisionWith",
    value: function isInCollisionWith(saucer) {
      if (!saucer.stop && this.x + 32 >= saucer.x && this.x + 32 <= saucer.x + 48 && this.y >= saucer.y && this.y <= saucer.y + 36) {
        return true;
      }
      return false;
    }
  }, {
    key: "isInCollision",
    value: function isInCollision(saucers) {
      var _this2 = this;

      var rsaucers = saucers.filter(function (s) {
        return _this2.isInCollisionWith(s);
      });
      rsaucers.forEach(function (s) {
        return s.dead();
      });
      if (rsaucers.length > 0) {
        this.toearn = true;
        this.todelete = true;
      }
      return rsaucers;
    }
  }]);

  return Shoot;
}(_Mobile3.default);

exports.default = Shoot;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/imgc8f996cf083f4ebf7a6e363f50eab606.png";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDE4Nzg2MjJiMGIwZTMzNGE1ZGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY2xhc3MvTW9iaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY2xhc3MvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jbGFzcy9TdGFyc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3ZhaXNzZWF1LWJhbGxvbi1wZXRpdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY2xhc3MvU2F1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZmx5aW5nU2F1Y2VyLXBldGl0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jbGFzcy9TaG9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Nob290LnBuZyJdLCJuYW1lcyI6WyJNb2JpbGUiLCJ4IiwieSIsImltZyIsInNwZWVkWCIsInNwZWVkWSIsIkltYWdlIiwic3JjIiwiTW92ZVN0YXRlIiwiVVAiLCJET1dOIiwiTEVGVCIsIlJJR0hUIiwiTk9ORSIsIndpZHRoIiwiaGVpZ2h0IiwiY29udGV4dCIsImRyYXdJbWFnZSIsIl9tb3ZpbmciLCJjYW52YXMiLCJNYXRoIiwibWF4IiwibWluIiwic2V0dXBMaXN0ZW5lciIsInRoZUdhbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZHJhdyIsInN0YXJ0IiwiaW5pdEV2ZW50cyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlEb3duQWN0aW9uSGFuZGxlciIsImJpbmQiLCJrZXlVcEFjdGlvbkhhbmRsZXIiLCJhZGRTYXVjZXJJbmZpbml0ZSIsImFkZFNhdWNlciIsIkdhbWUiLCJfd2lkdGgiLCJfaGVpZ2h0Iiwic3RhcnNoaXAiLCJzYXVjZXJzIiwiQXJyYXkiLCJzaG9vdHMiLCJzY29yZSIsInNhdWNlciIsInJhbmRvbSIsInB1c2giLCJibHVyIiwic2V0SW50ZXJ2YWwiLCJhZGRTYXVjZXJJIiwic2hvb3QiLCJzcGxpY2UiLCJpbmRleE9mIiwiaW5uZXJIVE1MIiwiZ2V0Q29udGV4dCIsImZvckVhY2giLCJzIiwiZmlsdGVyIiwidG9lYXJuIiwiYWRkU2NvcmUiLCJ0b2RlbGV0ZSIsInJlbW92ZVNob290Iiwic2F1Y2Vyc1RvRG93biIsImlzSW5Db2xsaXNpb24iLCJyZW1vdmVTYXVjZXIiLCJ0b2RlbGV0ZXdpdGhvdXRwb2ludCIsImV2ZW50Iiwia2V5IiwibW92ZVVwIiwiYWRkU2hvb3QiLCJtb3ZlRG93biIsInByZXZlbnREZWZhdWx0Iiwic3RvcE1vdmUiLCJtb3ZlIiwicmVxdWVzdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vdmVBbmREcmF3IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJTdGFyc2hpcCIsIlNhdWNlciIsIm1vdmVMZWZ0Iiwic3RvcCIsIlNob290IiwibW92ZVJpZ2h0IiwicnNhdWNlcnMiLCJpc0luQ29sbGlzaW9uV2l0aCIsImRlYWQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7O0lBSXFCQSxNO0FBQ25CLGtCQUFZQyxDQUFaLEVB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SUFBZTRDLE9BQU81QyxDQUF0QyxJQUEyQyxLQUFLQSxDQUFMLEdBQVMsRUFBVCxJQUFlNEMsT0FBTzVDLENBQVAsR0FBVyxFQUFyRSxJQUEyRSxLQUFLQyxDQUFMLElBQVUyQyxPQUFPM0MsQ0FBNUYsSUFBaUcsS0FBS0EsQ0FBTCxJQUFVMkMsT0FBTzNDLENBQVAsR0FBVyxFQUF6SCxFQUE0SDtBQUMxSCxlQUFPLElBQVA7QUFDRDtBQUNELGFBQU8sS0FBUDtBQUNEOzs7a0NBRWF1QyxPLEVBQVE7QUFBQTs7QUFDcEIsVUFBSTRDLFdBQVk1QyxRQUFRaUIsTUFBUixDQUFlO0FBQUEsZUFBSyxPQUFLNEIsaUJBQUwsQ0FBdUI3QixDQUF2QixDQUFMO0FBQUEsT0FBZixDQUFoQjtBQUNBNEIsZUFBUzdCLE9BQVQsQ0FBaUI7QUFBQSxlQUFLQyxFQUFFOEIsSUFBRixFQUFMO0FBQUEsT0FBakI7QUFDQSxVQUFHRixTQUFTRyxNQUFULEdBQWtCLENBQXJCLEVBQXVCO0FBQ3JCLGFBQUs3QixNQUFMLEdBQWMsSUFBZDtBQUNBLGFBQUtFLFFBQUwsR0FBZ0IsSUFBaEI7QUFDRDtBQUNELGFBQU93QixRQUFQO0FBQ0Q7Ozs7OztrQkE1QmtCRixLOzs7Ozs7QUNQckIsMEYiLCJmaWxlIjoic2NyaXB0cy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0MTg3ODYyMmIwYjBlMzM0YTVkYSIsIi8qXG4gIENMQVNTIE1PQklMRVxuKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaW1nLCBzcGVlZFggPSAwLCBzcGVlZFkgPSAwKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWcuc3JjID0gaW1nO1xuICAgIHRoaXMuc3BlZWRYID0gc3BlZWRYO1xuICAgIHRoaXMuc3BlZWRZID0gc3BlZWRZO1xuICAgIHRoaXMuTW92ZVN0YXRlID0geyBVUCA6IDAsIERPV04gOiAxLCBMRUZUIDogMiwgUklHSFQgOiAzLCBOT05FIDogNH07XG4gICAgdGhpcy53aWR0aCA9IDUwO1xuICAgIHRoaXMuaGVpZ2h0ID0gNTA7XG4gIH1cblxuICBkcmF3KGNvbnRleHQpe1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICBtb3ZlTGVmdCgpe1xuICAgIHRoaXMuX21vdmluZyA9IHRoaXMuTW92ZVN0YXRlLkxFRlQ7XG4gIH1cblxuICBtb3ZlUmlnaHQoKXtcbiAgICB0aGlzLl9tb3ZpbmcgPSB0aGlzLk1vdmVTdGF0ZS5SSUdIVDtcbiAgfVxuXG4gIG1vdmVVcCgpe1xuICAgIHRoaXMuX21vdmluZyA9IHRoaXMuTW92ZVN0YXRlLlVQO1xuICB9XG5cbiAgbW92ZURvd24oKXtcbiAgICB0aGlzLl9tb3ZpbmcgPSB0aGlzLk1vdmVTdGF0ZS5ET1dOO1xuICB9XG5cbiAgbW92ZShjYW52YXMpe1xuICAgIGlmICh0aGlzLl9tb3ZpbmcgPT09IHRoaXMuTW92ZVN0YXRlLkxFRlQpIHtcbiAgICAgIHRoaXMueCA9IE1hdGgubWF4KDAsIHRoaXMueCAtIHRoaXMuc3BlZWRYKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21vdmluZyA9PT0gdGhpcy5Nb3ZlU3RhdGUuUklHSFQpIHtcbiAgICAgIHRoaXMueCA9IE1hdGgubWluKGNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGgsIHRoaXMueCArIHRoaXMuc3BlZWRYKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21vdmluZyA9PT0gdGhpcy5Nb3ZlU3RhdGUuVVApIHtcbiAgICAgIHRoaXMueSA9IE1hdGgubWF4KDAsIHRoaXMueSAtIHRoaXMuc3BlZWRZKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21vdmluZyA9PT0gdGhpcy5Nb3ZlU3RhdGUuRE9XTikge1xuICAgICAgdGhpcy55ID0gTWF0aC5taW4oY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0LCB0aGlzLnkgKyB0aGlzLnNwZWVkWSk7XG4gICAgfVxuICB9XG5cbiAgc3RvcE1vdmUoKXtcbiAgICB0aGlzLl9tb3ZpbmcgPSB0aGlzLk1vdmVTdGF0ZS5OT05FO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9jbGFzcy9Nb2JpbGUuanMiLCIvKlxuICBNQUlOIEZVTkNUSU9OXG4qL1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9jbGFzcy9HYW1lLmpzJztcblxuZnVuY3Rpb24gc2V0dXBMaXN0ZW5lcigpe1xuICBsZXQgdGhlR2FtZSA9IG5ldyBHYW1lKDEyMDAsNjAwLGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnNcIikpO1xuICB0aGVHYW1lLmRyYXcoKTtcbiAgdGhlR2FtZS5zdGFydCgpO1xuICBpbml0RXZlbnRzKHRoZUdhbWUpO1xufVxuXG5mdW5jdGlvbiBpbml0RXZlbnRzKHRoZUdhbWUpe1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoZUdhbWUua2V5RG93bkFjdGlvbkhhbmRsZXIuYmluZCh0aGVHYW1lKSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoZUdhbWUua2V5VXBBY3Rpb25IYW5kbGVyLmJpbmQodGhlR2FtZSkpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZsb3R0ZVNvdWNvdXBlc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGVHYW1lLmFkZFNhdWNlckluZmluaXRlLmJpbmQodGhlR2FtZSkpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdXZlbGxlU291Y291cGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhlR2FtZS5hZGRTYXVjZXIuYmluZCh0aGVHYW1lKSk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLHNldHVwTGlzdGVuZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIi8qXG4gIENMQVNTIEdBTUVcbiovXG5pbXBvcnQgU3RhcnNoaXAgZnJvbSAnLi9TdGFyc2hpcC5qcyc7XG5pbXBvcnQgU2F1Y2VyIGZyb20gJy4vU2F1Y2VyLmpzJztcbmltcG9ydCBTaG9vdCBmcm9tICcuL1Nob290LmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgY2FudmFzKSB7XG4gICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICB0aGlzLnN0YXJzaGlwID0gbmV3IFN0YXJzaGlwKDQwLCBoZWlnaHQvMik7XG4gICAgICB0aGlzLnNhdWNlcnMgPSBuZXcgQXJyYXkoKTtcbiAgICAgIHRoaXMuc2hvb3RzID0gbmV3IEFycmF5KCk7XG4gICAgICB0aGlzLnNjb3JlID0gMDtcbiAgfVxuXG4gIC8qIEdFVFRFUlMgKi9cblxuICBnZXQgd2lkdGgoKXtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuXG4gIGFkZFNhdWNlcigpe1xuICAgIGxldCBzYXVjZXIgPSBuZXcgU2F1Y2VyKHRoaXMuX3dpZHRoLCBNYXRoLnJhbmRvbSgpKnRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgdGhpcy5zYXVjZXJzLnB1c2goc2F1Y2VyKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdXZlbGxlU291Y291cGVcIikuYmx1cigpO1xuICB9XG5cbiAgYWRkU2F1Y2VySSgpe1xuICAgIGlmKE1hdGgucmFuZG9tKCk8MC41KXtcbiAgICAgIGxldCBzYXVjZXIgPSBuZXcgU2F1Y2VyKHRoaXMuX3dpZHRoLCBNYXRoLnJhbmRvbSgpKnRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB0aGlzLnNhdWNlcnMucHVzaChzYXVjZXIpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFNhdWNlckluZmluaXRlKCl7XG4gICAgd2luZG93LnNldEludGVydmFsKHRoaXMuYWRkU2F1Y2VySS5iaW5kKHRoaXMpLDc1MCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbG90dGVTb3Vjb3VwZXNcIikuYmx1cigpO1xuICB9XG5cbiAgYWRkU2hvb3QoKXtcbiAgICBsZXQgc2hvb3QgPSBuZXcgU2hvb3QodGhpcy5zdGFyc2hpcC54KzQ1LHRoaXMuc3RhcnNoaXAueSsxMCk7XG4gICAgdGhpcy5zaG9vdHMucHVzaChzaG9vdCk7XG4gIH1cblxuICByZW1vdmVTaG9vdChzaG9vdCl7XG4gICAgdGhpcy5zaG9vdHMuc3BsaWNlKHRoaXMuc2hvb3RzLmluZGV4T2Yoc2hvb3QpLDEpO1xuICB9XG5cbiAgcmVtb3ZlU2F1Y2VyKHNhdWNlcil7XG4gICAgdGhpcy5zYXVjZXJzLnNwbGljZSh0aGlzLnNhdWNlcnMuaW5kZXhPZihzYXVjZXIpLDEpO1xuICB9XG5cbiAgYWRkU2NvcmUoc2NvcmUpe1xuICAgIHRoaXMuc2NvcmUgKz0gc2NvcmU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVwiKS5pbm5lckhUTUwgPSB0aGlzLnNjb3JlO1xuICB9XG5cbiAgZHJhdygpe1xuICAgIGxldCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5fd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5faGVpZ2h0O1xuICAgIHRoaXMuc3RhcnNoaXAuZHJhdyhjb250ZXh0KTtcbiAgICB0aGlzLnNhdWNlcnMuZm9yRWFjaCggcyA9PiBzLmRyYXcoY29udGV4dCkgKTtcbiAgICB0aGlzLnNob290cy5mb3JFYWNoKCBzID0+IHMuZHJhdyhjb250ZXh0KSApO1xuICAgIHRoaXMuc2hvb3RzLmZpbHRlciggcyA9PiBzLnRvZWFybiA9PSB0cnVlKS5mb3JFYWNoKCBzID0+IHRoaXMuYWRkU2NvcmUoMTIwMCkgKTtcblxuICAgIHRoaXMuc2hvb3RzLmZpbHRlciggcyA9PiBzLnRvZGVsZXRlID09IHRydWUpLmZvckVhY2goIHMgPT4gdGhpcy5yZW1vdmVTaG9vdChzKSApO1xuICAgIGxldCBzYXVjZXJzVG9Eb3duID0gbmV3IEFycmF5KCk7XG4gICAgdGhpcy5zaG9vdHMuZmlsdGVyKCBzID0+IHNhdWNlcnNUb0Rvd24ucHVzaChzLmlzSW5Db2xsaXNpb24odGhpcy5zYXVjZXJzKSkgKTtcbiAgICB0aGlzLnNhdWNlcnMuZmlsdGVyKCBzID0+IHMudG9kZWxldGUgPT0gdHJ1ZSkuZm9yRWFjaCggcyA9PiB0aGlzLmFkZFNjb3JlKC0xMDAwKSApO1xuICAgIHRoaXMuc2F1Y2Vycy5maWx0ZXIoIHMgPT4gcy50b2RlbGV0ZSA9PSB0cnVlKS5mb3JFYWNoKCBzID0+IHRoaXMucmVtb3ZlU2F1Y2VyKHMpICk7XG4gICAgdGhpcy5zYXVjZXJzLmZpbHRlciggcyA9PiBzLnRvZGVsZXRld2l0aG91dHBvaW50ID09IHRydWUpLmZvckVhY2goIHMgPT4gdGhpcy5yZW1vdmVTYXVjZXIocykgKTtcbiAgfVxuXG4gIGtleURvd25BY3Rpb25IYW5kbGVyKGV2ZW50KXtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgICB0aGlzLnN0YXJzaGlwLm1vdmVVcCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICAgIHRoaXMuYWRkU2hvb3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgdGhpcy5zdGFyc2hpcC5tb3ZlRG93bigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBrZXlVcEFjdGlvbkhhbmRsZXIoZXZlbnQpe1xuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgICAgIHRoaXMuc3RhcnNoaXAuc3RvcE1vdmUoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdmVBbmREcmF3KCl7XG4gICAgbGV0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuICAgIHRoaXMuZHJhdygpO1xuICAgIHRoaXMuc3RhcnNoaXAubW92ZShjYW52YXMpO1xuICAgIHRoaXMuc2F1Y2Vycy5mb3JFYWNoKHM9PnMubW92ZShjYW52YXMpKTtcbiAgICB0aGlzLnNob290cy5mb3JFYWNoKHM9PnMubW92ZShjYW52YXMpKTtcbiAgICB0aGlzLnJlcXVlc3QgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubW92ZUFuZERyYXcuYmluZCh0aGlzKSk7XG4gIH1cblxuICBzdGFydCgpe1xuICAgIHRoaXMucmVxdWVzdCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5tb3ZlQW5kRHJhdy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHN0b3AoKXtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0KTtcbiAgfVxuXG59XG5cbiAvL2V4cG9ydCBkZWZhdWx0IHRoZUdhbWUgPSBuZXcgR2FtZSg4MDAsIDQwMCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyc1wiKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9jbGFzcy9HYW1lLmpzIiwiLypcbiAgQ0xBU1MgU1RBUlNISVAgPCBNT0JJTEVcbiovXG5pbXBvcnQgTW9iaWxlIGZyb20gJy4vTW9iaWxlLmpzJztcbmltcG9ydCBzdGFyU3JjIGZyb20gXCIuLi8uLi9pbWFnZXMvdmFpc3NlYXUtYmFsbG9uLXBldGl0LnBuZ1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJzaGlwIGV4dGVuZHMgTW9iaWxlICB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICBzdXBlcih4LCB5LCBzdGFyU3JjLCAwLCA4KTtcbiAgICB0aGlzLl9tb3ZpbmcgPSB0aGlzLk1vdmVTdGF0ZS5OT05FO1xuICB9XG5cblxuXG4gIGdldCB1cCgpe1xuICAgICByZXR1cm4gdGhpcy5fbW92aW5nID09IHRoaXMuTW92ZVN0YXRlLlVQO1xuICB9XG5cbiAgZ2V0IGRvd24oKXtcbiAgICByZXR1cm4gdGhpcy5fbW92aW5nID09IHRoaXMuTW92ZVN0YXRlLkRPV047XG4gIH1cblxuICBtb3ZlKGNhbnZhcyl7XG4gICAgaWYodGhpcy54ID49IDAgJiYgdGhpcy54IDw9IGNhbnZhcy53aWR0aCAmJiB0aGlzLnkgPj0gMCAmJiB0aGlzLnkgPD0gY2FudmFzLmhlaWdodCl7XG4gICAgICBzdXBlci5tb3ZlKGNhbnZhcyk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9jbGFzcy9TdGFyc2hpcC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9pbWdlMWJmNDVjZWU4OWYxZmZjOTdkN2NhYjZjNDFiZDdjOC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWFnZXMvdmFpc3NlYXUtYmFsbG9uLXBldGl0LnBuZ1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICBDTEFTUyBTQVVDRVIgPCBNT0JJTEVcbiovXG5pbXBvcnQgTW9iaWxlIGZyb20gJy4vTW9iaWxlLmpzJztcbmltcG9ydCBzYXVjZXJTcmMgZnJvbSBcIi4uLy4uL2ltYWdlcy9mbHlpbmdTYXVjZXItcGV0aXQucG5nXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F1Y2VyIGV4dGVuZHMgTW9iaWxlIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHN1cGVyKHgsIHksIHNhdWNlclNyYywgMywgMCk7XG4gICAgdGhpcy5tb3ZlTGVmdCgpO1xuICB9XG5cbiAgbW92ZShjYW52YXMpe1xuICAgIHN1cGVyLm1vdmUoY2FudmFzKTtcbiAgICBpZih0aGlzLnggPD0gMCl7XG4gICAgICB0aGlzLnRvZGVsZXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYodGhpcy55ID49IGNhbnZhcy5oZWlnaHQtNTApe1xuICAgICAgdGhpcy50b2RlbGV0ZXdpdGhvdXRwb2ludCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZGVhZCgpe1xuICAgIHRoaXMubW92ZURvd24oKTtcbiAgICB0aGlzLnNwZWVkWCA9IDA7XG4gICAgdGhpcy5zcGVlZFkgPSAzO1xuICAgIHRoaXMuc3RvcCA9IHRydWU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2NsYXNzL1NhdWNlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9pbWdiM2VkNTAwYmFiOTZlY2Q4MjA1MmEyYWVkZjliMmUwNC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWFnZXMvZmx5aW5nU2F1Y2VyLXBldGl0LnBuZ1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICBDTEFTUyBTSE9PVCA8IE1PQklMRVxuKi9cbmltcG9ydCBNb2JpbGUgZnJvbSAnLi9Nb2JpbGUuanMnO1xuaW1wb3J0IHNob290U3JjIGZyb20gXCIuLi8uLi9pbWFnZXMvc2hvb3QucG5nXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvb3QgZXh0ZW5kcyBNb2JpbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICBzdXBlcih4LCB5LCBzaG9vdFNyYywgOCwgMCk7XG4gIH1cblxuICBtb3ZlKGNhbnZhcyl7XG4gICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICBzdXBlci5tb3ZlKGNhbnZhcyk7XG4gICAgaWYodGhpcy54ID49IGNhbnZhcy53aWR0aC01MCl7XG4gICAgICB0aGlzLnRvZGVsZXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpc0luQ29sbGlzaW9uV2l0aChzYXVjZXIpe1xuICAgIGlmKCFzYXVjZXIuc3RvcCAmJiB0aGlzLnggKyAzMiA+PSBzYXVjZXIueCAmJiB0aGlzLnggKyAzMiA8PSBzYXVjZXIueCArIDQ4ICYmIHRoaXMueSA+PSBzYXVjZXIueSAmJiB0aGlzLnkgPD0gc2F1Y2VyLnkgKyAzNil7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNJbkNvbGxpc2lvbihzYXVjZXJzKXtcbiAgICBsZXQgcnNhdWNlcnMgPSAgc2F1Y2Vycy5maWx0ZXIocyA9PiB0aGlzLmlzSW5Db2xsaXNpb25XaXRoKHMpKTtcbiAgICByc2F1Y2Vycy5mb3JFYWNoKHMgPT4gcy5kZWFkKCkpO1xuICAgIGlmKHJzYXVjZXJzLmxlbmd0aCA+IDApe1xuICAgICAgdGhpcy50b2Vhcm4gPSB0cnVlO1xuICAgICAgdGhpcy50b2RlbGV0ZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiByc2F1Y2VycztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvY2xhc3MvU2hvb3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvaW1nYzhmOTk2Y2YwODNmNGViZjdhNmUzNjNmNTBlYWI2MDYucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1hZ2VzL3Nob290LnBuZ1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9