import { useQuery } from '@tanstack/react-query';
import { Issue } from '../interfaces';
import { githubApi } from '../../api/githubApi';
import { sleep } from '../../helpers/sleep';
const getIssueInfo = async (issueNumber: number): Promise<Issue> => {
	await sleep(2);
	const { data } = await githubApi.get(`/issues/${issueNumber}`);
	return data;
};
const getIssueComments = async (issueNumber: number): Promise<Issue> => {
	await sleep(2);
	const { data } = await githubApi.get(`/issues/${issueNumber}/comments`);
	return data;
};
export const useIssue = (issueNumber: number) => {
	const issueQuery = useQuery(['issue', issueNumber], () =>
		getIssueInfo(issueNumber)
	);

	return { issueQuery };
};
