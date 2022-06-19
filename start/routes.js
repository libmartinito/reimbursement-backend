"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.group(() => {
        Route_1.default.post('register', 'AuthController.register');
        Route_1.default.post('login', 'AuthController.login');
    }).prefix('auth');
    Route_1.default.group(() => {
        Route_1.default.get('user/:id', 'UsersController.getUser');
        Route_1.default.post('ticket', 'TicketsController.store');
        Route_1.default.patch('ticket/:id', 'TicketsController.updateStatus');
        Route_1.default.patch('ticket/:id/hr', 'TicketsController.updateHrLink');
        Route_1.default.get('ticket', 'TicketsController.index');
        Route_1.default.get('ticket/user/:userid', 'TicketsController.getUserTickets');
        Route_1.default.get('ticket/:id', 'TicketsController.getTicket');
        Route_1.default.get('ticket/role/:role', 'TicketsController.getTicketsFilteredByRole');
        Route_1.default.get('ticketcrf', 'TicketsController.getCrf');
        Route_1.default.delete('ticket/:id', 'TicketsController.destroy');
        Route_1.default.post('reimbursement', 'ReimbursementsController.store');
        Route_1.default.patch('reimbursement/:id', 'ReimbursementsController.update');
        Route_1.default.get('reimbursement', 'ReimbursementsController.index');
        Route_1.default.get('reimbursement/:ticketid', 'ReimbursementsController.getReimbursements');
        Route_1.default.post('remarks', 'RemarksController.store');
        Route_1.default.get('remarks/public/ticket/:ticketid', 'RemarksController.getPublicRemarks');
        Route_1.default.get('remarks/private/ticket/:ticketid', 'RemarksController.getPrivateRemarks');
        Route_1.default.post('upload', 'UploadsController.uploadImage');
    }).middleware("auth:api");
}).prefix('api');
//# sourceMappingURL=routes.js.map