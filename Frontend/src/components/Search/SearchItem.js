import React from "react";
import _ from "lodash";
import { Search, Grid } from "semantic-ui-react";
import { categoryItems } from "../../Data/CategoryItems";
const source = _.times(5, () => ({
	itemName: categoryItems.itemName,
	itemImage: categoryItems.itemImage,
	itemPrice: categoryItems.itemPrice,
}));

const initialState = {
	loading: false,
	results: [],
	value: "",
};
function exampleReducer(state, action) {
	switch (action.type) {
		case "CLEAN_QUERY":
			return initialState;
		case "START_SEARCH":
			return { ...state, loading: true, value: action.query };
		case "FINISH_SEARCH":
			return { ...state, loading: false, results: action.results };
		case "UPDATE_SELECTION":
			return { ...state, value: action.selection };

		default:
			throw new Error();
	}
}
export default function SearchItem() {
	const [state, dispatch] = React.useReducer(exampleReducer, initialState);
	const { loading, results, value } = state;

	const timeoutRef = React.useRef();
	const handleSearchChange = React.useCallback((e, data) => {
		clearTimeout(timeoutRef.current);
		dispatch({ type: "START_SEARCH", query: data.value });

		timeoutRef.current = setTimeout(() => {
			if (data.value.length === 0) {
				dispatch({ type: "CLEAN_QUERY" });
				return;
			}

			const re = new RegExp(_.escapeRegExp(data.value), "i");
			const isMatch = (result) => re.test(result.title);

			dispatch({
				type: "FINISH_SEARCH",
				results: _.filter(source, isMatch),
			});
		}, 300);
	}, []);
	React.useEffect(() => {
		return () => {
			clearTimeout(timeoutRef.current);
		};
	}, []);

	return (
		<Grid>
			<Grid.Column width={6}>
				<Search
					loading={loading}
					placeholder="Search..."
					onResultSelect={(e, data) => dispatch({ type: "UPDATE_SELECTION", selection: data.result.title })}
					onSearchChange={handleSearchChange}
					results={results}
					value={value}
				/>
			</Grid.Column>

			{/* <Grid.Column width={10}>
				<Segment>
					<Header>State</Header>
					<pre style={{ overflowX: "auto" }}>{JSON.stringify({ loading, results, value }, null, 2)}</pre>
					<Header>Options</Header>
					<pre style={{ overflowX: "auto" }}>{JSON.stringify(categoryItems, null, 2)}</pre>
				</Segment>
			</Grid.Column> */}
		</Grid>
	);
}
