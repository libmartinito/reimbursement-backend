"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Remark_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Remark"));
class RemarksController {
    async store({ request }) {
        const { ticketId, type, role, content } = request.all();
        const remark = new Remark_1.default();
        remark.ticketId = ticketId;
        remark.type = type;
        remark.role = role;
        remark.content = content;
        await remark.save();
        return remark;
    }
    async getPublicRemarks({ params }) {
        return Remark_1.default.query().where('ticket_id', params.ticketid).where('type', 'public');
    }
    async getPrivateRemarks({ params }) {
        return Remark_1.default.query().where('ticket_id', params.ticketid).where('type', 'private');
    }
}
exports.default = RemarksController;
//# sourceMappingURL=RemarksController.js.map