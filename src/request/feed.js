import { post, get } from '@/config/http.config';

export const getFeedManagement = (params) => {
  return post('GET_FEED_MANAGEMENT', params);
};

export const addFeedManagement = (params) => {
  return post('ADD_FEED_MANAGEMENT', params);
};

export const deleteFeedManagement = (params) => {
  return post('DELETE_FEED_MANAGEMENT', params);
};

export const updateFeedManagement = (params) => {
  return post('UPDATED_FEED_MANAGEMENT', params);
};

export const getFeedRecord = (params) => {
  return post('GET_FEED_RECORD', params);
};

export const addFeedRecord = (params) => {
  return post('ADD_FEED_RECORD', params);
};

export const deleteFeedRecord = (params) => {
  return post('DELETE_FEED_RECORD', params);
};

export const updateFeedRecord = (params) => {
  return post('UPDATE_FEED_RECORD', params);
};
