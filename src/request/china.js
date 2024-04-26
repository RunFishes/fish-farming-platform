import { post } from '@/config/http.config';

export function getChinaData() {
  return post('GET_CHINA');
}
