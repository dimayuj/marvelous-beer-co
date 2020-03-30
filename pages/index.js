import { Card, Layout, Page } from '@shopify/polaris';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';

const GET_NEWEST = gql`
 {
  query	{
		products(reverse: true first:1) {
		  edges {
		    node {
		      title
		    }
		  }
		} 
	}
  }
`;

class Index extends React.Component {
  state = { open: false };
  render() {
    return (
    <Page>
      <Layout>
        <Card>
          {/* <Card.Section title="The newest product's title" sectioned>
              <p>[Insert newest product's title here]</p>
          </Card.Section> */}
          <Query query={GET_NEWEST}>
            {({ data, loading, error }) => {
              if (loading) return <div>Loading…</div>;
              console.log(data);
              if (error) return <div>{error.message}</div>;
              //console.log(data);
              // return (
              // <Card.Section title="The newest product's title" sectioned>
              //   <p>[Insert newest product's title here]</p>
              // </Card.Section>
              // );
            }}
          </Query>
            <Card.Section title="The total number of products" sectioned>
              <p>[Insert the total number of products here]</p>
            </Card.Section>
            <Card.Section title="The current call rate limit status" sectioned>
              <p>[Insert the current call rate limit status here]</p>
            </Card.Section>
            <Card.Section title="The status of the latest bulkOperation" sectioned>
              <p>[Insert the status of the latest bulkOperation]</p>
            </Card.Section>
        </Card>
      </Layout>
    </Page>
    );
  }
}
  
export default Index;