const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const transferRoutes = require('./routes/transfer');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/transfer', transferRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});