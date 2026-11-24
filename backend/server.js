const app=require('./src/app');
require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log(
    `hello guys your server is workin fine so dont take stress you are ok and run on ${process.env.PORT}`,
  );
});
