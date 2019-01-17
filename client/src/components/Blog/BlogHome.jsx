import React from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';

const butter = Butter('99e3c38507f191c5f64f0fc1dd27369ef8bda69e');

export default class BlogHome extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      posts: [],
      meta: {
        next_page: null,
        previous_page: null,
      }
    };
  }

  fetchPosts(page) {
    console.log('fetching posts with page: ', page);
    butter.post.list({page: page, page_size: 10})
      .then(response => {
        console.log('response: ', response);
        this.setState({
          loaded: true,
          posts: response.data.data,
          meta: response.data.meta
        });
    });
  }

  componentWillMount() {
    let page = this.props.match.params.page || 1;

    this.fetchPosts(page)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loaded: false});

    let page = nextProps.match.params.page || 1;

    this.fetchPosts(page)
  }

  render() {
    const { match } = this.props;
    if (this.state.loaded) {
      const { next_page, previous_page } = this.state.meta;

      return (
        <div>
          {this.state.posts.map((post) => {
            return (
              <div key={post.slug}>
                {/* {post.slug} */}
                <Link to={`${match.url}/post/${post.slug}`}>{post.title}</Link>
              </div>
            )
          })}

          {/* <br /> */}

          <div>
            {previous_page ? <Link to={`${match.url}/p/${previous_page}`}>Prev</Link> : null}

            {next_page ? <Link to={`${match.url}/p/${next_page}`}>Next</Link> : null}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}
