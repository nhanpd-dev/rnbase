import {ListParams} from '@/types/list';

export const parseParamsToQueryString = <T extends object>(params: T) => {
  const q = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      q.append(key, value);
    }
  });
  return q;
};

export const parseListParamsToQueryString = (params: ListParams) =>
  parseParamsToQueryString<ListParams>(params);
