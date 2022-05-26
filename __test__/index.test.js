const app = require("../app.js")
const request = require("supertest")

describe("/users", () => {
	it("returns status code 201 if komentar is created", async () => {
		// kalau komentar berhasil return status 201
		const res = await request(app).post("/users").send({
			nama: "Aulia Rahman Z",
			email: "aulia@gmail.com",
			komentar: "test cmd",
			date: "2022-04-18T22:43:12.923+00:00",
		})
		expect(res.statusCode).toBe(201)
	})

	it("returns status 200 if get komentar is success", async () => {
		//kalau bisa get komentar return status 200
		const res = await request(app).get("/users")
		expect(res.statusCode).toBe(200)
	})

	it("returns status 200 if get komentar by id is success", async () => {
		// kalau bisa get komentar by id return status 200
		const res = await request(app).get("/users/5e9c8b9f9d9e7f2d5e5b8c5e")
		expect(res.statusCode).toBe(200)
	})

	it("returns status 200 if komentar bisa di delete", async () => {
		// kalau bisa delete komentar return status 200
		const res = await request(app).delete("/users/5e9c8b9f9d9e7f2d5e5b8c5e")
		expect(res.statusCode).toBe(200)
	})

	it("returns status 200 if komentar can be updated", async () => {
		// kalau bisa update komentar return status 200
		const res = await request(app)
			.patch("/users/5e9c8b9f9d9e7f2d5e5b8c5e")
			.send({
				nama: "aulia rahman z",
				email: "",
				komentar: "test",
				date: "2022-04-18T22:43:12.923+00:00",
			})
		expect(res.statusCode).toBe(200)
	})
	afterAll((done) => {
		done()
	})
})
