import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Block from "./block";
import "./index.css";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Analyse = () => {
	const [data, setData] = useState<number[]>([]);
	const [keyword, setKeyword] = useState<string>("");
	const [selected, setSelected] = useState<string>("");
	const initData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const filterData = () => {
		setData(
			initData.filter(
				(item) =>
					item.toString().includes(keyword) &&
					item.toString().includes(selected)
			)
		);
	};
	const onSelectChange = (value: string) => {
		console.log(`selected ${value}`);
		setSelected(value);
	};

	const onSelectSearch = (value: string) => {
		console.log("search:", value);
	};
	useEffect(() => {
		setData(initData);
	}, []);

	useEffect(() => {
		filterData();
	}, [keyword, selected]);
	return (
		<div className="bg-white font-averta h-full ">
			<div className="container   overflow-x-hidden px-5 scroll-smooth md:mx-auto">
				<Header />
				<div className="content">
					<div className="searchWrapper">
						<Input
							addonBefore={<SearchOutlined />}
							value={keyword}
							onChange={(e) => setKeyword(e.target.value)}
						/>
					</div>
					<div className="selectWrapper">
						<Select
							showSearch
							placeholder="Select a person"
							optionFilterProp="label"
							onChange={onSelectChange}
							onSearch={onSelectSearch}
							options={[
								{
									value: "1",
									label: "1",
								},
								{
									value: "2",
									label: "2",
								},
								{
									value: "3",
									label: "3",
								},
							]}
						/>
					</div>
					<div className="blockWrapper">
						{data.map((item, index) => (
							<Block key={index} data={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Analyse;
