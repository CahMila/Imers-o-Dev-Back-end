import express from "express"; // Importa o framework Express.js para construir aplicações web
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância da aplicação Express
const app = express();
routes(app)

// Inicia o servidor e escuta na porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando...");
});