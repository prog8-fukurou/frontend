import React from 'react';

interface Props {
	preview: boolean;
}

const InputForm: React.FC = () => {
	// 入力フォームのコンポーネントの実装
	return <form>{/* 入力フォームの内容 */}</form>;
};

const OtherComponent: React.FC = () => {
	// 別のコンポーネントの実装
	return <div>{/* 別のコンポーネントの内容 */}</div>;
};

const Playing: React.FC<Props> = ({ preview }) => {
	return (
		<div>
			{preview ? (
				// 入力フォームを表示するコンポーネント
				<InputForm />
			) : (
				// 別のコンポーネントを表示するコンポーネント
				<OtherComponent />
			)}
		</div>
	);
};

export default Playing;
