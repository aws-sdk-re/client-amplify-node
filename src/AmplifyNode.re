  open Regions;
  type t;
  [@bs.module "@aws-sdk/client-amplify-node/AmplifyClient"] [@bs.new]
  external amplifyClient: 'a => t = "AmplifyClient";
  let region = region(EuWest2);
  let amplifyClient = amplifyClient(region);
  type createAppCommand;
  [@bs.module "@aws-sdk/client-amplify-node/commands/CreateAppCommand"] [@bs.new]
  external createAppCommand: (t, Js.Dict.t(string)) => createAppCommand =
    "CreateAppCommand";
  let createAppCommand = params => createAppCommand(amplifyClient, params);
  [@bs.send]
  external send: (t, createAppCommand) => Js.Promise.t(Js.Json.t) = "send";

  let send = createAppCommand =>
    send(amplifyClient, createAppCommand)
    |> Js.Promise.then_(resp => {
         Js.log2("createAppCommand_RESPONSE: ", resp);

         Js.Promise.resolve();
       })
    |> ignore;

  let params = Js.Dict.empty();
  Js.Dict.set(params, "name", "amplify-node-client");
  let createCommand = createAppCommand(params);
  let _ = send(createCommand);