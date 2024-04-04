import request from '@/utils/request2.js';

/**
 * 数据可视化
 */
export const getVisualization = () => {
  return request({
    url: '/visualization',
  });
};
