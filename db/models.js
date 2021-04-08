module.exports = function(mongoose) {
  let userSchema = new Schema({
    id: ObjectId,
    username: {type: String, index: true},
    name: {
      first: String,
      last: String
    },
    signup: { type: Date, default: Date.now },
  });

  userSchema.virtual('fullname').get(() => {
    return this.name.first + ' ' + this.name.last;
  });

  let models = {
    User: mongoose.model('User', userSchema),
  };

  return models;
};