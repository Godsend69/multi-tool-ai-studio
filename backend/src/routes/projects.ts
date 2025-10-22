import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

// List
router.get("/", async (_req, res) => {
  const projects = await prisma.project.findMany({ include: { owner: true } });
  res.json(projects);
});

// Create (demo — in prod, protect this route)
router.post("/", async (req, res) => {
  const { title, content, ownerId } = req.body;
  const p = await prisma.project.create({ data: { title, content, ownerId } });
  res.json(p);
});

export default router;
