import { ApiConfigs } from "../types/ApiConfigs";

export interface TableProps {
    data?: any[];
    columns: TableColumn[];
    apiConfigs?: ApiConfigs,
    requestPayload?: any;
    reload?: boolean;
}

export interface TableColumn {
    key: string;
    keyDisplayName?: string;
    limit?: number;
    header: string;
    type?: string;
    action?: string;
    callback?: Function;
}