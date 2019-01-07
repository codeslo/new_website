var keystone = require('keystone');
var _ = require('underscore');

exports.initLocals = function(req, res, next) {
    
    var locals = res.locals;
    
    locals.user = req.user; 
    
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