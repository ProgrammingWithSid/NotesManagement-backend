const express = require('express');
const cookieParser = require('cookie-parser'); 
const errorHandler = require('../app/utils/errorHandler')

module.exports = () => {
    let app = express();

    app.use(express.json());
    app.use(cookieParser());
    app.use('/user', require('../app/routes/userRoutes'));
    app.use('/notes', require('../app/routes/notesRoutes'));

    app.use((err, req, res, next) => {
        if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
          return res.status(400).json({
            success: false,
            message: 'Invalid JSON format in request body',
          });
        }
    
        next(err);
      });

    // app.use((err, req, res, next) => {
    //     console.error(err.stack);
    //     res.status(500).send('Something went wrong!');
    // });
    app.use(errorHandler);


    return app;
};
