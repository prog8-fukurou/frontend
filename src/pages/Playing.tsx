'use client';

import PromptForm from '@/components/PromptForm';
export function Playing() {
	return (
		<>
			<div className="h-full w-full">
				<div className="m-6">
					<div className="flex items-center justify-center">
						<div className="w-1/2"></div>
						<div className="w-1/2 flex items-center justify-center">
							{/* プロンプトフォームコンポーネント */}
							<PromptForm />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Playing;
