var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class ControllerPermission {
    constructor(connection) {
        this.conn = connection;
    }
    list(config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.conn.axios.get(`/permission`, config);
        });
    }
    view(target, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.conn.axios.get(`/permission/${target}`, config);
        });
    }
    add(data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.conn.axios.post(`/permission`, data, config);
        });
    }
    edit(target, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.conn.axios.post(`/permission/${target}`, data, config);
        });
    }
    delete(target, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.conn.axios.delete(`/permission/${target}`, config);
        });
    }
}
//# sourceMappingURL=permission.js.map