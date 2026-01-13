import request from "supertest";
import app from "../src/app";

describe("GET /books", () => {
  it("should return books list", async () => {
    const res = await request(app).get("/books");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("total");
    expect(res.body).toHaveProperty("data");
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});
