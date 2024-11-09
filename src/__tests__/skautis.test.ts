import { SkautisAPI } from "../index";

jest.mock("../services/SkautIsAuthService");

describe("SkautisAPI", () => {
    let api: SkautisAPI;

    beforeEach(() => {
        api = new SkautisAPI({
            apiKey: process.env.SKAUTIS_API_KEY || "",
            testMode: process.env.SKAUTIS_TEST_MODE === "true" || false,
        });
    });

    describe("constructor", () => {
        it("should create instance with test mode", () => {
            const testApi = new SkautisAPI({
                apiKey: "test-key",
                testMode: true,
            });
            expect(testApi).toBeInstanceOf(SkautisAPI);
        });

        it("should create instance with production mode", () => {
            const prodApi = new SkautisAPI({
                apiKey: "prod-key",
                testMode: false,
            });
            expect(prodApi).toBeInstanceOf(SkautisAPI);
        });
    });

    describe("login", () => {
        it("should call SkautIsAuthService with correct parameters", async () => {
            const mockLoginResult = {
                ID: "123",
                ID_User: 456,
                Token: "test-token",
                // ... další properties podle potřeby
            };

            // Mock SkautIsAuthService
            jest.mock("../services/SkautIsAuthService", () => {
                return {
                    SkautIsAuthService: jest.fn().mockImplementation(() => {
                        return {
                            login: jest.fn().mockResolvedValue(mockLoginResult),
                        };
                    }),
                };
            });

            const result = await api.login("testuser", "testpass");

            expect(result).toEqual(mockLoginResult);
            const authService = require("../services/SkautIsAuthService").SkautIsAuthService;
            const mockInstance = authService.mock.instances[0];

            expect(mockInstance.login).toHaveBeenCalledWith({
                Username: "testuser",
                Password: "testpass",
                ApplicationId: process.env.SKAUTIS_API_KEY || "",
                Persist: false,
            });
        });

        it("should throw error when login fails", async () => {
            // Mock SkautIsAuthService with error
            jest.mock("../services/SkautIsAuthService", () => {
                return {
                    SkautIsAuthService: jest.fn().mockImplementation(() => {
                        return {
                            login: jest.fn().mockRejectedValue(new Error("Login failed")),
                        };
                    }),
                };
            });

            await expect(api.login("baduser", "badpass")).rejects.toThrow("Login failed");
        });
    });

    describe("getUserDetail", () => {
        it("should throw not implemented error", async () => {
            await expect(api.getUserDetail(123)).rejects.toThrow("Not implemented");
        });
    });

    describe("getOrganizationUnits", () => {
        it("should throw not implemented error", async () => {
            await expect(api.getOrganizationUnits()).rejects.toThrow("Not implemented");
        });
    });
});
