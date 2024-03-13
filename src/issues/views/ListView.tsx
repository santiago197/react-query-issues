import { useState } from 'react';
import { LoadingIcon } from '../../shared/components/LoadingIcon';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks/useIssues';

export const ListView = () => {
	const { issuesQuery } = useIssues();
	const [selectedLabels, setselectedLabels] = useState<string[]>([]);

	const onLabelChange = (labelName: string) => {
		selectedLabels.includes(labelName)
			? setselectedLabels(selectedLabels.filter((label) => label !== labelName))
			: setselectedLabels([...selectedLabels, labelName]);
	};

	return (
		<div className="row mt-5">
			<div className="col-8">
				{issuesQuery.isLoading ? (
					<LoadingIcon />
				) : (
					<IssueList issues={issuesQuery.data || []} />
				)}
			</div>

			<div className="col-4">
				<LabelPicker
					selectedLabel={selectedLabels}
					onChange={(labelName) => onLabelChange(labelName)}
				/>
			</div>
		</div>
	);
};
