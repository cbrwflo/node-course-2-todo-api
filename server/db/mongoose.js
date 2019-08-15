var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.plugin(schema => { schema.options.usePushEach = true });
mongoose.connect(process.env.MONGODB_URI);

module.export = {mongoose};
