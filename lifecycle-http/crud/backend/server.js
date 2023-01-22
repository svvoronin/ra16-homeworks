const http = require("http");
const Koa = require("koa");
const Router = require("koa-router");
const cors = require("koa2-cors");
const koaBody = require("koa-body");

const app = new Koa();

app.use(cors());
app.use(koaBody({ json: true }));

//const notes = ["Hello,dude"];

let notes = [
  {
    id: 0,
    note: "Just Example Note",
  },
];

let nextId = 1;

const router = new Router({
  prefix: "/api",
});

router.get("/notes", async (ctx, next) => {
  ctx.response.body = notes;
});

router.post("/notes/:id", async (ctx, next) => {
  notes.push({ ...ctx.request.body, id: nextId++ });
  ctx.response.status = 204;
});

router.delete("/delete/:id", async (ctx, next) => {
  const noteId = Number(ctx.params.id);
  notes = notes.filter((o) => o.id !== noteId);
  const index = notes.findIndex((o) => o.id === noteId);
  if (index !== -1) {
    notes.splice(index, 1);
  }
  ctx.response.status = 204;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7777;
const server = http.createServer(app.callback());
server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

// node server.js
// npx kill-port 7777
// netstat -ano | findstr :7777
