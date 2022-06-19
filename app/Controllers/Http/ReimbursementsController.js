"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Reimbursement_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Reimbursement"));
class ReimbursementsController {
    async store({ request }) {
        const { ticketId, date, amount, nature, checked } = request.all();
        const reimbursement = new Reimbursement_1.default();
        reimbursement.ticketId = ticketId;
        reimbursement.date = date;
        reimbursement.amount = amount;
        reimbursement.nature = nature;
        reimbursement.checked = checked;
        await reimbursement.save();
        return reimbursement;
    }
    async update({ request, params }) {
        const checked = request.input('checked');
        const reimbursement = await Reimbursement_1.default.find(params.id);
        if (reimbursement !== null) {
            reimbursement.checked = checked;
        }
        await reimbursement?.save();
        return reimbursement;
    }
    async index({}) {
        return Reimbursement_1.default.query();
    }
    async getReimbursements({ params }) {
        return Reimbursement_1.default.query().where('ticket_id', params.ticketid);
    }
}
exports.default = ReimbursementsController;
//# sourceMappingURL=ReimbursementsController.js.map