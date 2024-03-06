import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks/useIssues';

export const ListView = () => {
	const { issuesQuery } = useIssues();
	return (
		<div className="row mt-5">
			<div className="col-8">
				{issuesQuery.isLoading ? (
					<p>Loading...</p>
				) : (
					<IssueList issues={issuesQuery.data || []} />
				)}
			</div>

			<div className="col-4">
				<LabelPicker />
			</div>
		</div>
	);
};
