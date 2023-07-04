const mapping: Record<string, string> = {
  accounts: 'account',
  chatbots: 'chatbot',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
