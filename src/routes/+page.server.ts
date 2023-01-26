import { google } from 'googleapis';
import type { PageServerLoad } from './$types';

import { SHEET_ID } from '$env/static/private';

export const load = (async () => {
	const auth = await google.auth.getClient({
		keyFilename: './secrets.json',
		scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
	});

	const sheets = google.sheets({ version: 'v4', auth });

	const response = await sheets.spreadsheets.values.get({
		spreadsheetId: SHEET_ID,
		range: '2021!A2:A5'
	});

	const data = response.data.values?.flat();

	console.log('BREAKPOINT response', data);

	const sheetsArray = await sheets.spreadsheets.get({ spreadsheetId: SHEET_ID });

	const years = sheetsArray.data.sheets?.map((data) => {
		return data.properties?.title;
	});

	console.log('BREAKPOINT test', years);
}) satisfies PageServerLoad;