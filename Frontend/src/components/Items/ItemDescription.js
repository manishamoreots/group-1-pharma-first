import React from 'react';
import { Button, Container, Dropdown, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react';
const data = {
	id: 1,
	categoryId: 1,
	itemName: 'Virgo Healthcare Protivir Diet- Nutritional Supplement for Diabetic',
	itemPrice: '₹2333',
	highlights: [
		'Protein supplement for specific nutritional needs of diabetic patients, people having high cholesterol level and problems with the weight management',
		'It has low fat content and no added sugar',
		'Provides the right nutrition to stay healthy and active',
		'Enriched with antioxidants and essential vitamins and minerals to meet the increased requirements of diabetics',
	],
	desc: {
		keybenefit: [
			'It ensures beneficial effects in general debility, malnutrition, neuropathies, stress, and strains',
			'Protein supplement for specific nutritional needs of diabetic patients, people having high cholesterol level and problems with the weight management',
			'It is also effective in weight management and pregnancy',
			'It helps release anabolic hormones that stimulate muscle growth',
		],
		directions: ['Take Virgo Healthcare Protivir Diet Protein Powder (Sugar-Free)as directed by the physician.'],
		Safetyinfo: ['Read the label carefully before use', 'Do not exceed the recommended dose', 'Keep out of the reach of children'],
	},
	itemImage:
		'https://onemg.gumlet.io/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/cropped/zl35i9inmpsoj2tmga2a.jpg',
};
const options = [
	{ key: 1, text: '1 box', value: 1 },
	{ key: 2, text: '2 Box', value: 2 },
	{ key: 3, text: '3 Box', value: 3 },
];
const ItemDescription = () => {
	return (
		<Container>
			<Grid>
				<Grid.Column width={5}>
					<Image src={data.itemImage} />
					<Button style={{ margin: 0 }}>Add to Cart</Button>
				</Grid.Column>
				<Grid.Column width={6}>
					<Header>{data.itemName}</Header>
					<ul>
						{data.desc.keybenefit.map((item) => (
							<li>{item}</li>
						))}
					</ul>
				</Grid.Column>

				<Grid.Column width={4}>
					<Segment size="large">
						{data.itemPrice}
						<br />
						<br />
						<Menu compact>
							<Dropdown text="select" options={options} simple item />
						</Menu>
						of 50 Test Strips
						<Button>Add To cart</Button>
					</Segment>
				</Grid.Column>
			</Grid>
		</Container>
	);
};

export default ItemDescription;
