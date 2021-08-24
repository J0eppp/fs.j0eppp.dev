import { Header } from "semantic-ui-react";
import styled from "styled-components";

const Home = () => {
	return (
		<HomeWrapper>
			<Header as="h1" content="Hi" />
		</HomeWrapper>
	)
}

const HomeWrapper = styled.div`

`;

export default Home;