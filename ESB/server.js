const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const axios = require('axios');

const port = 4000;

app.use(bodyParser.json());

let reg = [{
    id: 'service',
    host: 'link',
    port: 'port',
}];

const searchReg = (id) => {
    const service = reg.find(item => item.id === id);
    if (service) {
        return `http://${service.host}:${service.port}`;
    }
    return null;
}

app.post('/service', (req, res) => {
    const { topic } = req.body;
    try {
        axios.post(`${searchReg(topic)}/me`, req.body)
            .then(response => {
                if (response.status === 200) {
                    console.log(topic);
                    res.send(response.data);
                } else {
                    reg = reg.filter(item => item.id !== topic);
                    res.status(403).send('Service not found');
                }
            })
            .catch(error => {
                reg = reg.filter(item => item.id !== topic);
                res.status(403).send('Service not found');
            });
    } catch (err) {
        reg = reg.filter(item => item.id !== topic);
        res.status(403).send('Service not found');
    }
});

app.post('/register', (req, res) => {
    const { id, host, port } = req.body;
    if (reg.find(item => item.id === id)) {
        res.status(403).send('Service already registered');
        return;
    }
    reg.push({ id, host, port });
    console.log(reg);
    res.send('Registered');
});

app.listen(port, () => {
    console.log(`ESB is listening on port ${port}`);
});
