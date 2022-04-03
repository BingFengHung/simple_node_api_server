const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
	res.json([
		{
			'id': '1',
			'title': 'Test 1'
		},
		{
			'id': '2',
			'title': 'Test 2'
		}
	])
});

app.listen(3000, () => {
	console.log('Listeing for requests on port 3000')
})