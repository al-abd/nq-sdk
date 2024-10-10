import { AxiosResponse } from "axios";
import { Connection } from "../connection";
import { RequestConfig } from "../utils";
import { ErrorProps } from "../interfaces/error";
import {
    SurahListItemProps,
    SurahListParam,
    SurahPlain,
    SurahViewParam,
    SurahViewProps,
} from "../interfaces/surah";

export class ControllerSurah {
    readonly conn: Connection;

    constructor(connection: Connection) {
        this.conn = connection;
    }

    list(
        config: RequestConfig<SurahListParam>
    ): Promise<AxiosResponse<SurahListItemProps[]>> {
        return this.conn.axios.get(`/surah`, config);
    }

    view(
        target: string,
        config: RequestConfig<SurahViewParam>
    ): Promise<AxiosResponse<SurahViewProps>> {
        return this.conn.axios.get(`/surah/${target}`, config);
    }

    add(
        data: SurahPlain,
        config: RequestConfig
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.post(`/surah`, data, config);
    }

    edit(
        target: string,
        data: SurahPlain,
        config: RequestConfig
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.post(`/surah/${target}`, data, config);
    }

    delete(
        target: string,
        config: RequestConfig
    ): Promise<AxiosResponse<string>> {
        return this.conn.axios.delete(`/surah/${target}`, config);
    }
}