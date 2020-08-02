import { connect } from "../../utilities/db";
import projectsModel from "../../utilities/schemas/projects";
import sanitize from "../../utilities/sanitize";

export default async (request, response) => {
  const query = request.query;
  let data;

  if (query.id !== undefined) {
    data = await projectsModel.findOne({ id: query.id });
  } else {
    data = await projectsModel.find();

    if (query.slug !== undefined) {
      data = data.filter((entry) => sanitize(entry.title) === query.slug);

      if (data.length) {
        data = data[0];
      }
    }
  }

  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");

  response.json({
    connectionStatus: connect,
    data: data,
  });
};
