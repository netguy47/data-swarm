import express from "express";
import { registerRoutes } from "./routes";
import { createServer as createViteServer } from "vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = registerRoutes(app);

app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
});

async function startServer() {
    if (process.env.NODE_ENV !== "production") {
        // Vite middleware mode
        const vite = await createViteServer({
            server: { middlewareMode: true },
            appType: 'spa', // Let Vite handle history fallback and index.html serving
        });
        app.use(vite.middlewares);
    } else {
        // Static serving for production
        app.use(express.static("dist/public"));
    }

    const PORT = 5000;
    server.listen(PORT, "0.0.0.0", () => {
        console.log(`Express API listening on port ${PORT}`);
    });
}

startServer();
