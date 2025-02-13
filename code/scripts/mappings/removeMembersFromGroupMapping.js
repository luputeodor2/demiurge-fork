import {removeMemberFromGroup} from "./utils.js";

function checkIfRemoveMemberFromGroupMessage(message) {
  return message.messageType === "RemoveMembersFromGroup";
}

async function removeMembersFromGroup(message) {
  const openDSU = require("opendsu");
  const system = openDSU.loadAPI("system");
  const config = openDSU.loadAPI("config");
  const crypto = openDSU.loadAPI("crypto");
  const http = openDSU.loadAPI("http");

  await removeMemberFromGroup.call(this, message);
  const appName = await $$.promisify(config.getEnv)("appName");
  const did = crypto.encodeBase58(message.memberDID);
  let url = `${system.getBaseURL()}/removeSSOSecret/${appName}/${did}`;
  await http.fetch(url, {method: "DELETE"});
}

require("opendsu").loadAPI("m2dsu").defineMapping(checkIfRemoveMemberFromGroupMessage, removeMembersFromGroup);
export {removeMembersFromGroup}
