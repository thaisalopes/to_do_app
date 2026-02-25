const app = require("./app");
const PORT = 4000;

// Starts server on specified port and displays message when succesfull
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
