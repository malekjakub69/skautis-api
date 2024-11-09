import axios, { AxiosInstance } from 'axios';
import * as soap from 'soap';

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
      ? 'https://test-is.skaut.cz/JunakWebservice/WebService.asmx'
      : 'https://is.skaut.cz/JunakWebservice/WebService.asmx';
    
    this.client = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/soap+xml',
      },
    });
  }

  // Základní metody pro práci s API
  async login(username: string, password: string): Promise<any> {
    // TODO: Implementace přihlášení
    throw new Error('Not implemented');
  }

  async getUserDetail(userId: number): Promise<any> {
    // TODO: Implementace získání detailu uživatele
    throw new Error('Not implemented');
  }

  async getOrganizationUnits(): Promise<any> {
    // TODO: Implementace získání organizačních jednotek
    throw new Error('Not implemented');
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
