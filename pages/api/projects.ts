import { connected } from "../../utilities/db";
import projectsModel from "../../utilities/schemas/projects";

export default async (request, response) => {
  const data = await projectsModel.find();
  response.statusCode = 200;
  response.json({ connectionStatus: connected, data: data });
};
