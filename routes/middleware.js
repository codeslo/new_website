var keystone = require('keystone');
var _ = require('underscore');

exports.initLocals = function(req, res, next) {
    
    var locals = res.locals;
    
    locals.user = req.user;    
    locals.view = req.view;
    
    next();
    
};

exports.initErrorHandlers = function(req, res, next) {
    
    res.err = function(err, title, message) {
        res.status(500);
        console.log(err, title, message);
        req.flash('error', 'Something went wrong, sorry about that. You can try again later.');
        res.redirect('/');        
    };
    
    res.notfound = function(title, message) {
        req.flash('error', 'We can\'t find that page right now. Sorry about that!');
        res.redirect('/');  
    };
    
    next();
    
};

exports.flashMessages = function(req, res, next) {
    var flashMessages = {
        info: req.flash('info'),
        success: req.flash('success'),
        warning: req.flash('warning'),
        error: req.flash('error')
    };

    res.locals.messages = _.any(flashMessages, function(msgs) {        
        return msgs.length;
    }) ? flashMessages: false;

    next();
};