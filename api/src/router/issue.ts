import express, { Request, Response, Router } from "express";
import { Issue } from "../entity/Isues";
import { AppDataSource } from "../db";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { title, description } = req.body;

  const issue = new Issue();
  issue.title = title;
  issue.description = description;

  const issueRepo = AppDataSource.getRepository(Issue);
  await issueRepo.save(issue);

  return res.send(issue);
});
router.get("/all", async (req: Request, res: Response) => {
  const issueRepo = AppDataSource.getRepository(Issue);
  const allIssues = await issueRepo.find();
  if (allIssues.length) {
    return res.status(200).json(allIssues);
  } else {
    return res.json("No Issues");
  }
});

export default router;
