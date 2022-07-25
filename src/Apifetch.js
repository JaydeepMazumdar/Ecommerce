import Boxes from './components/Product_Box';

export default function Apifetch() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '3fd7b53ad9msh238bc195ba8fe94p19badbjsnd2ddd606e6c0',
			'X-RapidAPI-Host': 'ali-express1.p.rapidapi.com'
		}
		};
    fetch('https://ali-express1.p.rapidapi.com/productsByCategoryV2/205848303?sort_type=default&page=1&page_size=20&sort_order=default', options)
	.then(response => response.json())
	.then(response => 
		// response.data.searchResult.mods.itemList.content.map((item, i) => (
		// 	<Boxes key={i} item={item}/>
		//   ))
		  console.log(response)
		)
	.catch(err => console.error(err));

};

Apifetch();