const server = require('./server');
require('dotenv');
require('./database');

server.listen(server.get('port'), () => {
    console.log(`Server on port ${server.get('port')}`);
});