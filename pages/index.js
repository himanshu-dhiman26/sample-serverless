import Layout from '../components/basicLayout';
import Link from 'next/link';
import axios from 'axios';

const Index = props => (
  <Layout>
    <h1>Blogs</h1>
    <ul>
      {props.blogs.map(blog => (
        <li key={blog.blog_id}>
          <Link href="/blogs/[blog_id]" as={`/blogs/${blog.blog_id}`}>
            <a>{blog.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await axios.get('https://4vtblvzdme.execute-api.ap-south-1.amazonaws.com/dev/blogs', {headers: {"app_user_id":"test", "app_user_name": "test"}});
  return {
    blogs: res.data.Items
  };
};

export default Index;