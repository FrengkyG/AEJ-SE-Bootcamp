"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const database_1 = __importDefault(require("./config/database"));
const MealsRouter_1 = __importDefault(require("./router/MealsRouter"));
const AuthenticationRouter_1 = __importDefault(require("./router/AuthenticationRouter"));
const Swagger_1 = __importDefault(require("./utils/Swagger"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.router = (0, express_1.Router)();
        this.databaseSync();
        this.plugins();
        this.routes();
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send('Welcome World');
        });
        this.app.use('/api/v1/meals', MealsRouter_1.default);
        this.app.use('/api/v1/auth', AuthenticationRouter_1.default);
    }
    databaseSync() {
        var _a;
        const db = new database_1.default();
        (_a = db.sequelize) === null || _a === void 0 ? void 0 : _a.sync();
    }
    plugins() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
}
const port = 8000;
const app = new App().app;
app.listen(port, () => {
    Swagger_1.default.swaggerDocs(app, port);
    console.log('server started...');
});
