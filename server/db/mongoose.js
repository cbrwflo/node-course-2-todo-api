var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.plugin(schema => { schema.options.usePushEach = true });
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

module.export = {mongoose};
