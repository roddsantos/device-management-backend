const { CategoryControllers } = require("../controllers");
const { mockRequest, mockResponse } = require("../utils/interceptor");

describe("Category controller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("GET /category should return category list", async () => {
    const req = mockRequest();
    const res = mockResponse();
    await CategoryControllers.getAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  test("POST /category should return 400 (no 'name' field)", async () => {
    const req = mockRequest();
    const res = mockResponse();
    await CategoryControllers.create(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({ message: "Name field is empty" });
  });

  test("PATCH /category should return 204 (no data to update sent)", async () => {
    const req = mockRequest();
    req.body = { Id: 1 };
    const res = mockResponse();
    await CategoryControllers.update(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({ message: "No data to update" });
  });

  test("PATCH /category should return 400 (no id sent)", async () => {
    const req = mockRequest();
    req.body = { Id: 1 };
    const res = mockResponse();
    await CategoryControllers.update(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({ message: "No data to update" });
  });

  test("DELETE /category should return 400 (no id sent)", async () => {
    const req = mockRequest();
    const res = mockResponse();
    await CategoryControllers.delete(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith({ message: "Id field is required" });
  });
});
