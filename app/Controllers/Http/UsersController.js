"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UsersController {
    async getUser({ params }) {
        return User_1.default.query().where('id', params.id);
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map