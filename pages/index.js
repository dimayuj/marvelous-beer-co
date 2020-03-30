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

const GET_NUMBER_PRODUCTS = gql`
 {
  query	{
		collections(first:1) {
		  edges {
		    node {
		      productsCount
		    }
		  }
		} 
	}
 }
`;

const GET_CALL_RATE = gql`
 {
  query	{
    shop{
      id
    }   
  }
 }
`;

const GET_BULK_STATUS = gql`
 {
  query{
    currentBulkOperation{
      status
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
          <Card.Section title="The newest product's title" sectioned>
              <p>[Insert newest product's title here]</p>
          </Card.Section>
            {/* <Query query={GET_NEWEST}>
              {({ data, loading, error }) => {
                if (loading) return <div>Loading…</div>;
                if (error) return <div>{error.message}</div>;
                console.log(data);
                return (
                  <Card.Section title="The newest product's title" sectioned>
                    <p>data.title</p>
                  </Card.Section>
                );
              }}
            </Query> */}
          <Card.Section title="The total number of products" sectioned>
            <p>[Insert the total number of products here]</p>
          </Card.Section>
            {/* <Query query={GET_NUMBER_PRODUCTS}>
              {({ data, loading, error }) => {
                if (loading) return <div>Loading…</div>;
                if (error) return <div>{error.message}</div>;
                console.log(data);
                return (
                  <Card.Section title="The total number of products" sectioned>
                    <p>data.productsCount</p>
                  </Card.Section>
                );
              }}
            </Query> */}
            <Card.Section title="The current call rate limit status" sectioned>
              <p>[Insert the current call rate limit status here]</p>
            </Card.Section>
            {/* <Query query={GET_CALL_RATE}>
              {({ data, loading, error }) => {
                if (loading) return <div>Loading…</div>;
                if (error) return <div>{error.message}</div>;
                console.log(data);
                return (
                  <Card.Section title="The current call rate limit status" sectioned>
                    <p>data.cost.maximumAvailable</p>
                  </Card.Section>
                );
              }}
            </Query> */}
            <Card.Section title="The status of the latest bulkOperation" sectioned>
              <p>[Insert the status of the latest bulkOperation]</p>
            </Card.Section>
            {/* <Query query={GET_BULK_STATUS}>
              {({ data, loading, error }) => {
                if (loading) return <div>Loading…</div>;
                if (error) return <div>{error.message}</div>;
                console.log(data);
                return (
                  <Card.Section title="The status of the latest bulkOperation" sectioned>
                    <p>data.status</p>
                  </Card.Section>
                );
              }}
            </Query> */}
        </Card>
      </Layout>
    </Page>
    );
  }
}
  
export default Index;