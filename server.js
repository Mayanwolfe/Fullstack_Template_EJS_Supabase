require('dotenv').config();
const express = require('express');
const supabase = require('./config/supabaseConfig');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

const port = process.env.PORT || 3000;

// Test connection to Supabase
supabase.from('items').select('id').range(0, 0)
    .then(response => {
        if (response.data) {
            console.log('Connected to Supabase successfully!');
        } else if (response.error) {
            console.error('Error connecting to Supabase:', response.error.message);
        }
    });

// Enable CORS
app.use(cors());

// Serve static files
app.use(express.static('public'));

// Parse requests for strings/arrays, use extended: true for nested requests
app.use(express.urlencoded({ extended: false }));

//Parse JSON requests
app.use(express.json())

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Route requests
app.use('/', itemRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports.supabase = supabase;
