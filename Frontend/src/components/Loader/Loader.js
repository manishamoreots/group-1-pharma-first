import React from 'react';
import { Image } from 'semantic-ui-react';
import loader from '../image/loader.gif';
const Loader = () => {
	return <Image src={loader} style={{ width: 80, height: 80 }} />;
};

export default Loader;
