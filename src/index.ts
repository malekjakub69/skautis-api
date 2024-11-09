import axios, { AxiosInstance } from "axios";
import * as soap from "soap";
import { SkautIsAuthService } from "./services/SkautIsAuthService";
import { LoginInsertInput } from "./models/LoginInsertInput";
import { LoginInsertResult } from "./models/LoginInsertResult";

interface SkautisConfig {
    apiKey: string;
    testMode?: boolean;
}

export class SkautisAPI {
    private readonly client: AxiosInstance;
    private readonly config: SkautisConfig;
    private readonly baseUrl: string;

    constructor(config: SkautisConfig) {
        this.config = config;
        this.baseUrl = config.testMode
            ? "https://test-is.skaut.cz/JunakWebservice/WebService.asmx"
            : "https://is.skaut.cz/JunakWebservice/WebService.asmx";

        this.client = axios.create({
            baseURL: this.baseUrl,
            headers: {
                "Content-Type": "application/soap+xml",
            },
        });
    }

    // Základní metody pro práci s API
    async login(username: string, password: string): Promise<LoginInsertResult> {
        const authService = new SkautIsAuthService();
        const loginData: LoginInsertInput = {
            UserName: username,
            Password: password,
            ID_Application: this.config.apiKey,
            IsPersistent: false,
            ID_UserRole: 1,
            IP: "127.0.0.1",
            ID_PersistentLogin: "",
            Token: "",
            UserAgent: "",
            Place: "",
            IsMobile: false,
        };

        return await authService.login(loginData);
    }

    async getUserDetail(userId: number): Promise<any> {
        // TODO: Implementace získání detailu uživatele
        throw new Error("Not implemented");
    }

    async getOrganizationUnits(): Promise<any> {
        // TODO: Implementace získání organizačních jednotek
        throw new Error("Not implemented");
    }

    private async createSoapClient(): Promise<any> {
        return new Promise((resolve, reject) => {
            soap.createClient(this.baseUrl, (err, client) => {
                if (err) reject(err);
                resolve(client);
            });
        });
    }
}
