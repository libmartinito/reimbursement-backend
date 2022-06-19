"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UploadsController {
    async uploadImage({ request }) {
        const file = request.file('file');
        if (file) {
            await file.moveToDisk('/', {
                name: file.clientName
            });
        }
    }
}
exports.default = UploadsController;
//# sourceMappingURL=UploadsController.js.map