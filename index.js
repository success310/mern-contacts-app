const app = require('./server/app');
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
