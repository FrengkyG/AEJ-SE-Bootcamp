"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const MealsRouter_1 = __importDefault(require("./router/MealsRouter"));
const AuthenticationRouter_1 = __importDefault(require("./router/AuthenticationRouter"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
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
    console.log('server started...');
});
