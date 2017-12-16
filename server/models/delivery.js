const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const deliverySchema = new Schema({
  time: Date.now().getTime()
})


module.exports = mongoose.model("DeliveryTime", deliverySchema);
