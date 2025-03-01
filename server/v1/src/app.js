const express = require('express');
const loaders = require('./loaders');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const config = require('../src/config');

const formRoutes = require('./api-routes/form');
const { sequelize } = require('./loaders/database');

loaders();

const app = express();
app.use('/uploads', express.static(path.join(__dirname, './', 'uploads')));

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use(formRoutes);

//TODO: temporary must be deleted later
sequelize.sync()
    .then(() => {
        console.log('✅ Database tables recreated!');
        app.listen(config.server.port, () => {
            console.log(`🚀 Server is running on port ${config.server.port}`);
        });
    })
    .catch(err => console.error('❌ Sequelize sync error:', err));
