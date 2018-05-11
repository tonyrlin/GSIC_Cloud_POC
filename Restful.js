const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.static('awesomeapp'));

const employees = [
    {id: 1, name: 'Tony R. Lin', position: 'Senior Architect', ministry: 'Ministry of Government and Consumer Services'},
    {id: 2, name: 'Moira Forbes', position: 'Manager', ministry: 'Ministry of Government and Consumer Services'},
    {id: 3, name: 'Renee Laforet', position: 'CIO', ministry: 'Ministry of Government and Consumer Services'}
]

app.get('/',(req,res) => {
    res.send('Hello Ryder');
});

app.get('/api/employees', (req,res) => {
    res.send(employees);
});

app.get('/api/employees/:id', (req,res) => {
    const employee = employees.find(c => c.id === parseInt(req.params.id));

    if (!employee) res.status('404').send(`The Emloyee with the given ID <b>${req.params.id}</b> was not found`);
    res.setHeader('Content-Type','text/json');
    res.json(employee);
});
//app.post();
//app.put();
//app.delete();

app.listen(3000, () => {
    console.log('Listing on port 3000 ... ')
})
