import request from "supertest";
import { app } from "../../app";

it("responds with details about the current user", async () => {
  const cookies = await global.signin();

  const response = await request(app)
    .get("/api/users/me")
    .set("Cookie", cookies)
    .send()
    .expect(200);

  expect(response.body.currentUser.userEmail).toEqual("test@test.com");
});

it("responds with null if not authenticated", async () => {
  const response = await request(app).get("/api/users/me").send().expect(200);

  expect(response.body.currentUser).toBeNull();
});
