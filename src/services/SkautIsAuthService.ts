import { Client, createClientAsync } from 'soap';
import { LoginInsertInput } from '../models/LoginInsertInput';
import { LoginInsertResult } from '../models/LoginInsertResult';

export class SkautIsAuthService {
    private readonly wsdlUrl = 'https://is.skaut.cz/JunakWebservice/UserManagement.asmx?WSDL';
    private client: Client | null = null;

    private async getClient(): Promise<Client> {
        if (!this.client) {
            this.client = await createClientAsync(this.wsdlUrl);
        }
        return this.client;
    }

    async login(loginData: LoginInsertInput): Promise<LoginInsertResult> {
        try {
            const client = await this.getClient();
            
            const [result] = await client.LoginInsertAsync({
                loginInsertInput: loginData
            });

            return result.LoginInsertResult as LoginInsertResult;
        } catch (error: any) {
            throw new Error(`Přihlášení selhalo: ${error.message}`);
        }
    }
} 