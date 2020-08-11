import { connect } from '../../utilities/db';
import projectsModel from '../../utilities/schemas/projects';
import sanitize from '../../utilities/sanitize';
import { ProjectPreviewEntry } from '../../_types';

const cleanUpData = (data: ProjectPreviewEntry[]) => {
  //fix to dont trigger serializing data types bug
  return JSON.parse(JSON.stringify(data)).map((entry) => {
    delete entry._id;

    return entry;
  });
};

const getData = async (id = undefined, slug = undefined) => {
  let data;

  if (id !== undefined) {
    data = await projectsModel.findOne({ id: id });
    data = cleanUpData(data);
  } else {
    data = await projectsModel.find();
    data = cleanUpData(data);

    if (slug !== undefined) {
      data = data.filter((entry) => sanitize(entry.title) === slug);

      if (data.length) {
        data = data[0];
      }
    }
  }

  return data;
};

export { getData };

export default async (request, response) => {
  const query = request.query;
  const data = await getData(query.id, query.slug);

  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');

  response.json({
    connectionStatus: connect,
    data: data,
  });
};
