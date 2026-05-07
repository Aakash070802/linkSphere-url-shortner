import ENV from "./config/envConfig.js";
import { app } from "./app.js";

const PORT = ENV.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
