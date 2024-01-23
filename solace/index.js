import solace from "solclientjs";

function readSolaceTopic(topic) {
  // Connect to Solace message broker
  solace.SolclientFactory.init({ logLevel: solace.LogLevel.ERROR });
  const session = solace.SolclientFactory.createSession({
    url: "https://int-gke-euwe4-int-ingka.messaging.solace.cloud:943",
    // vpnName: "<vpn_name>",
    userName: "fmsr-ro-gke-nonprod",
    password: "q3hgxbmbzrsa030ivrscdv6h",
  });
  session.connect();

  // Subscribe to the topic
  session.subscribe(
    solace.SolclientFactory.createTopicDestination(topic),
    true,
    function (session, message) {
      console.log(message.getBinaryAttachment());
    },
    function (session, subscription) {
      console.log(`Subscribed to topic "${topic}"`);
    }
  );
}

readSolaceTopic("FMSR-Articles/fms-inbound-planning/local");
