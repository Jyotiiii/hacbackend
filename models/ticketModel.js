const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
var mongooseAggregatePaginate = require("mongoose-aggregate-paginate");
const bcrypt = require("bcryptjs");
const schema = mongoose.Schema;
var ticketModel = new schema(
  {

    ticketId: {
      type: Number
    },
    ticketname: {
      type: String
    },
    description: {
      type: String
    },
    noOfTickets: {
      type: Number
    },
    URL: {
      type: String
    }
  },
  { timestamps: true }
);

ticketModel.plugin(mongoosePaginate);
ticketModel.plugin(mongooseAggregatePaginate);
module.exports = mongoose.model("tickets", ticketModel);


