"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class AuthController {
    async register({ request, auth }) {
        const { first_name, last_name, role, email, password } = request.all();
        const user = new User_1.default();
        user.firstName = first_name;
        user.lastName = last_name;
        user.email = email;
        user.password = password;
        if (!role) {
            user.role = "user";
        }
        else {
            user.role = role;
        }
        await user.save();
        const tokenInfo = await auth.use('api').login(user);
        const userInfo = {
            user_id: user.id,
            token: tokenInfo.token,
            first_name: user.firstName,
            last_name: user.lastName,
            role: user.role,
            email: user.email
        };
        return userInfo;
    }
    async login({ request, auth }) {
        const { email, password } = request.all();
        const tokenInfo = await auth.use('api').attempt(email, password);
        const user = await User_1.default.query().where('email', email);
        const userInfo = {
            user_id: user[0].id,
            token: tokenInfo.token,
            first_name: user[0].firstName,
            last_name: user[0].lastName,
            role: user[0].role,
        };
        return userInfo;
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map