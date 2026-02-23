const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = {
    origin: ["http://localhost:4000"]
}
PORT = 3000

app.use(cors(corsOptions))

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
