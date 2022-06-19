"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ticket_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Ticket"));
class TicketsController {
    async store({ request }) {
        const { userId, crf, purpose, office, imageLink, hrLink, actionBy, status } = request.all();
        const ticket = new Ticket_1.default();
        ticket.userId = userId;
        ticket.crf = crf;
        ticket.purpose = purpose;
        ticket.office = office;
        ticket.imageLink = imageLink;
        ticket.hrLink = hrLink;
        ticket.actionBy = actionBy;
        ticket.status = status;
        await ticket.save();
        return ticket;
    }
    async updateStatus({ request, params }) {
        const { actionBy, status } = request.all();
        const ticket = await Ticket_1.default.find(params.id);
        if (ticket !== null) {
            ticket.actionBy = actionBy;
            ticket.status = status;
        }
        await ticket?.save();
        return ticket;
    }
    async updateHrLink({ request, params }) {
        const { hrLink } = request.all();
        const ticket = await Ticket_1.default.find(params.id);
        if (ticket !== null) {
            ticket.hrLink = hrLink;
        }
        await ticket?.save();
        return ticket;
    }
    async index({}) {
        return Ticket_1.default.query();
    }
    async getUserTickets({ params }) {
        return Ticket_1.default.query().where('user_id', params.userid);
    }
    async getTicketsFilteredByRole({ params }) {
        return Ticket_1.default.query().where('action_by', params.role);
    }
    async getTicket({ params }) {
        return Ticket_1.default.query().where('id', params.id);
    }
    async destroy({ params }) {
        await Ticket_1.default.query().where('id', params.id).delete();
    }
    async getCrf({}) {
        return Ticket_1.default.query().orderBy('created_at', 'desc').select('crf').first();
    }
}
exports.default = TicketsController;
//# sourceMappingURL=TicketsController.js.map