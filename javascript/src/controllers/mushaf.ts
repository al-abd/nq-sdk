import { AxiosResponse } from "axios";
import { Connection } from "../connection.js";
import {
    UUID,
    RequestConfig,
    DefaultResponseData,
    ErrorResponseData,
} from "../interfaces/utils.js";
import {
    MushafListParams,
    MushafViewRequestData,
    MushafViewResponseData,
} from "../interfaces/mushaf.js";

export class ControllerMushaf {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    async list(
        config: RequestConfig<MushafListParams>
    ): Promise<AxiosResponse<MushafViewResponseData>> {
        return await this.conn.axios.get(`/mushaf`, config);
    }

    async view(
        target: UUID,
        config: RequestConfig
    ): Promise<AxiosResponse<MushafViewResponseData>> {
        return await this.conn.axios.get(`/mushaf/${target}`, config);
    }

    async add(
        data: MushafViewRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/mushaf`, data, config);
    }

    async edit(
        target: UUID,
        data: MushafViewRequestData,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.post(`/mushaf/${target}`, data, config);
    }

    async delete(
        target: UUID,
        config: RequestConfig
    ): Promise<AxiosResponse<DefaultResponseData>> {
        return await this.conn.axios.delete(`/mushaf/${target}`, config);
    }
}
