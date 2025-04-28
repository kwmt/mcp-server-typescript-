import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

const server = new McpServer({
  name: "wweather",
  version: "1.0.0",
  capabilities: {
    resource: {},
    tools: {},
  },
});
