import { Router } from "express";
import * as controller from "../controllers/book.controller";
import upload from "../middleware/upload.middleware";

const router = Router();

router.get("/", controller.getBooks);
router.get("/:id", controller.getBookById);
router.post("/", controller.createBook);
router.put("/:id", controller.updateBook);
router.delete("/:id", controller.deleteBook);
router.post("/import", upload.single("file"), controller.importBooks);

export default router;
