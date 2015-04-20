    // $("#TabA").tab();
    // $("#TabB").tab({trigger:"mouseenter"});


define(function(require, exports, module) {
    var $ = require("jquery");
    var tab = require("../jquery.tab.js");

    $("#TabA").tab();
    $("#TabB").tab({trigger:"mouseenter"});
});
