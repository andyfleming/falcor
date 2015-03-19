var pathsets = require("pathsets");
var options  = require("support/options");
var sequence = require("walk/sequence");
var setNode  = require("set/node");
var setLink  = require("get/hard-link")(setNode);
var addReq   = require("get/add-requested-key");
var setEdge  = require("set/edge");
var getEdge  = require("json-values/edge");
var onError  = require("support/on-error");
var onEmpty  = require("pathsets/on-empty");

var onNode   = sequence(setLink, setNode, addReq);
var onEdge   = sequence(setEdge, getEdge, onError, onEmpty);

module.exports = pathsets(options, onNode, onEdge);