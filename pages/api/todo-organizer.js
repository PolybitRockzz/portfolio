import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const pipeline = promisify(stream.pipeline);
const url = './todo-organizer.xlsx';

const handler = async (req, res) => {
  const response = await fetch(url); // replace this with your API call & options
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader('Content-Type', 'application/xlsx');
  res.setHeader('Content-Disposition', 'attachment; filename=todo-organizer.xlsx');
  await pipeline(response.body, res);
};

export default handler;