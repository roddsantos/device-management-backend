const { DeviceControllers } = require("../controllers");
const { mockRequest, mockResponse } = require("../utils/interceptor");

describe("Device controller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("GET /device should return devices list", async () => {
    const req = mockRequest();
    const res = mockResponse();
    await DeviceControllers.getAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  test("POST /device should return 400 (no 'category' field)", async () => {
    const req = mockRequest();
    req.body = {
      category: "",
      color: "branco",
      partNumber: 2033,
    };
    const res = mockResponse();
    await DeviceControllers.create(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({
      message: "Some fields are missing",
    });
  });

  test("POST /device should return 400 (no 'color' field)", async () => {
    const req = mockRequest();
    req.body = {
      category: 1,
      color: "",
      partNumber: 2033,
    };
    const res = mockResponse();
    await DeviceControllers.create(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({
      message: "Some fields are missing",
    });
  });

  test("POST /device should return 500 (field 'color' have more than 16 characteres)", async () => {
    const req = mockRequest();
    req.body = {
      category: 1,
      color: "azuç-escuro com detalhes verde-claro",
      partNumber: 2033,
    };
    const res = mockResponse();
    await DeviceControllers.create(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  test("POST /device should return 400 (no 'partNumber' field)", async () => {
    const req = mockRequest();
    req.body = {
      category: 1,
      color: "",
      partNumber: 2033,
    };
    const res = mockResponse();
    await DeviceControllers.create(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({
      message: "Some fields are missing",
    });
  });

  test("POST /device should return 400 (field 'partNumber' has value grater than 999999)", async () => {
    const req = mockRequest();
    req.body = {
      category: 1,
      color: "vermelho",
      partNumber: 1000000,
    };
    const res = mockResponse();
    await DeviceControllers.create(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  test("PATCH /device should return 400 (no id sent)", async () => {
    const req = mockRequest();
    req.body = { Id: 1 };
    const res = mockResponse();
    await DeviceControllers.update(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({ message: "id field is required" });
  });

  test("PATCH /device should return 400 (field 'color' exceeds 16 characteres)", async () => {
    const req = mockRequest();
    req.body = { id: 1, color: "azuç-escuro com detalhes verde-claro" };
    const res = mockResponse();
    const x = await DeviceControllers.update(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  test("DELETE /device should return 400 (no id sent)", async () => {
    const req = mockRequest();
    const res = mockResponse();
    await DeviceControllers.delete(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({ message: "Id field is required" });
  });
});
