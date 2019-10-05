// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Regions$AwsSdkReClientAmplifyNode = require("./Regions.bs.js");
var AmplifyClient = require("@aws-sdk/client-amplify-node/AmplifyClient");
var CreateAppCommand = require("@aws-sdk/client-amplify-node/commands/CreateAppCommand");

var region = Regions$AwsSdkReClientAmplifyNode.region(/* EuWest2 */11);

var amplifyClient = new AmplifyClient.AmplifyClient(region);

function createAppCommand(params) {
  return new CreateAppCommand.CreateAppCommand(amplifyClient, params);
}

function send(createAppCommand) {
  amplifyClient.send(createAppCommand).then((function (resp) {
          console.log("createAppCommand_RESPONSE: ", resp);
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

var params = { };

params["name"] = "amplify-node-client";

var createCommand = new CreateAppCommand.CreateAppCommand(amplifyClient, params);

send(createCommand);

exports.region = region;
exports.amplifyClient = amplifyClient;
exports.createAppCommand = createAppCommand;
exports.send = send;
exports.params = params;
exports.createCommand = createCommand;
/* region Not a pure module */