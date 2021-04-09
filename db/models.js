module.exports = function(mongoose) {
  let userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    birthdate: Date,
    name: {
      first: {type: String, default: ''},
      last: {type: String, default: ''}
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