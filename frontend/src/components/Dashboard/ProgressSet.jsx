import { Progress } from "antd";

const ProgressSet = ({ percent, all, save, title }) => {
	const twoColors = {
		"0%": "#001F54",
		"100%": "#001F54",
	};
	return (
		<div className="flex flex-col my-4">
			<div className="flex justify-between">
				<h1>{title}</h1>
				<h2 className="text-[#001F54]">
					{save} / {all} GB
				</h2>
			</div>
			<Progress percent={percent} strokeColor={twoColors} />
		</div>
	);
};

export default ProgressSet;
