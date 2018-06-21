import { version } from '../../package.json';
import { Router } from 'express';
import todos from './todos';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/todos', todos({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}