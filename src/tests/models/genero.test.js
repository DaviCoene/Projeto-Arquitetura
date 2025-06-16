import { describe, expect, it, jest, afterEach } from "@jest/globals"
import GeneroController from "../../controllers/generoController.js";
import * as GeneroModule from "../../models/Genero.js"

jest.mock("../../models/Genero.js")

describe("Testando o Genero Controller", () => {

    const mockRequest = (data = {}, params = {}) => ({ body: data, params });
    const mockResponse = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        res.send = jest.fn().mockReturnValue(res);
        return res;
    }
    afterEach(() => {
        jest.clearAllMocks();
    })

    it("Deve listar todos os nomes", async () => {
        const generoMock = [
           {nome: "Pirotecnico", updatedAt: "2024-01-01T00:00:00Z",createdAt: "2024-01-01T00:00:00Z" },
            {nome: "Matemático", updatedAt: "2024-01-01T00:00:00Z",createdAt: "2024-01-01T00:00:00Z" },
        ]

        GeneroModule.Genero.find = jest.fn().mockResolvedValue(generoMock);

        const res = mockResponse();
        const req = mockRequest();

        const generoController = new GeneroController();
        await generoController.getAllGenero(req, res);

        expect(GeneroModule.Genero.find).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(generoMock);

    });
});