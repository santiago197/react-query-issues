import { githubApi } from '../../api/githubApi';
import { sleep } from '../../helpers/sleep';
import { Label } from '../interfaces/label';
import { useQuery } from '@tanstack/react-query';

export const getLabels = async (): Promise<Label[]> => {
	await sleep();
	const { data } = await githubApi.get<Label[]>('/labels');

	return data;
};

export const useLabels = () => {
	const labelsQuery = useQuery(
		['labels'],
		getLabels
		/* {
          refetchOnWindowFocus: false
        }*/
	);
	return {
		labelsQuery,
	};
};
