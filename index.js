const express = require('express');
const app = express();
const bodyparser=require('body-parser');
app.use(express.json());

app.get('/', (req,res)=>{
	res.send('Hello World');
});

	app.get('/sumpvolume', (req,res)=>{
	let n1 = 4;
	let n2 = 10;
	let sum = n1+n2;
	res.send("sum is"+sum);
});

app.post('/sumpvolume', (req,res)=>{
		
	let volume=0;
	let length = req.body.length;
	let breadth = req.body.breadth; 
	let height = req.body.height;
	volume = ((length*breadth*height)*29.5);
	res.json({sumpvolume:volume});
});

app.listen(3000,(res)=>{
	console.log('server started at port 3000')
})

