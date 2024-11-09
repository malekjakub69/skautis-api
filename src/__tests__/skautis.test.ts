import { SkautisAPI } from '../index';

describe('SkautisAPI', () => {
  let api: SkautisAPI;

  beforeEach(() => {
    api = new SkautisAPI({
      apiKey: 'test-api-key',
      testMode: true
    });
  });

  describe('constructor', () => {
    it('should create instance with test mode', () => {
      const testApi = new SkautisAPI({
        apiKey: 'test-key',
        testMode: true
      });
      expect(testApi).toBeInstanceOf(SkautisAPI);
    });

    it('should create instance with production mode', () => {
      const prodApi = new SkautisAPI({
        apiKey: 'prod-key',
        testMode: false
      });
      expect(prodApi).toBeInstanceOf(SkautisAPI);
    });
  });

  describe('login', () => {
    it('should throw not implemented error', async () => {
      await expect(api.login('user', 'pass'))
        .rejects
        .toThrow('Not implemented');
    });
  });

  describe('getUserDetail', () => {
    it('should throw not implemented error', async () => {
      await expect(api.getUserDetail(123))
        .rejects
        .toThrow('Not implemented');
    });
  });

  describe('getOrganizationUnits', () => {
    it('should throw not implemented error', async () => {
      await expect(api.getOrganizationUnits())
        .rejects
        .toThrow('Not implemented');
    });
  });
}); 