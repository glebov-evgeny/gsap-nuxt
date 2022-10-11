import { API_USERS_URL } from '@/api/config';

export default async function getUsers() {
  // eslint-disable-next-line no-undef
  const response = await $nuxt.context.$axios.$get(`${API_USERS_URL}`);
  return response;
}
