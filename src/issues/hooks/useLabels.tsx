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
	const labelsQuery = useQuery(['labels'], getLabels, {
		//  refetchOnWindowFocus: false
		staleTime: 1000 * 60 * 60,
		//placeholderData
		//initialData: [],
		placeholderData: [
			{
				id: 791921801,
				node_id: 'MDU6TGFiZWw3OTE5MjE4MDE=',
				url: 'https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F',
				name: '❤️',
				color: 'ffffff',
				default: false,
			},
			{
				id: 739761016,
				node_id: 'MDU6TGFiZWw3Mzk3NjEwMTY=',
				url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Reconciler',
				name: 'Component: Reconciler',
				color: 'f9a798',
				default: false,
			},
		],
	});
	return {
		labelsQuery,
	};
};
