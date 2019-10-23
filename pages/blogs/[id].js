import Layout from '../../components/basicLayout';
import axios from 'axios';
import Router from 'next/router';

const Blog = props => (
  <Layout>
    <h1>{props.blog.title}</h1>
    <p>{props.blog.content}</p>

    <button onClick={deletePost(props.blog.blog_id)}>Delete</button>
  </Layout>
);

Blog.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await axios.get('https://4vtblvzdme.execute-api.ap-south-1.amazonaws.com/dev/blogs/'+ id , {headers: {"app_user_id":"test", "app_user_name": "test"}});
  const blog = await res.data.Item;

  return { blog };
};

const deletePost = function(id) {
	return function () {
		  axios.delete(
		  	'https://4vtblvzdme.execute-api.ap-south-1.amazonaws.com/dev/blogs/'+ id,
		  	{headers: {"app_user_id":"test", "app_user_name": "test"}}
		  ).then(response => {
			  Router.push('/');
		  });
	  }
}

export default Blog;