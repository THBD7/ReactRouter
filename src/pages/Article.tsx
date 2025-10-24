import { useParams } from "react-router";

function Article() {
  const { id } = useParams();

  return <><h1>Hello from Article {id}</h1>
  <>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aliquid facere omnis, molestias officiis dolores?
    Voluptatem error, exercitationem commodi vel, hic odio quibusdam tempora explicabo quae harum qui inventore facere!</p>
    <>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum expedita porro cupiditate? Iusto, consectetur iste soluta e
    a distinctio atque mollitia rerum voluptas impedit quibusdam eius commodi temporibus tempore, cupiditate delectus?
    Ducimus aut recusandae voluptate dolores commodi tenetur quod doloribus quo fuga. Odio, laborum magni! Aspernatur deleniti 
    quod corporis libero dolore porro vel eligendi consectetur repellat totam nesciunt, aliquid earum voluptas?
    Omnis magnam quaerat architecto quasi voluptas, unde, inventore amet quae repellendus deleniti ab modi minima dolorem doloremque, 
    mollitia nostrum commodi nam consectetur accusantium ut perspiciatis. Minima similique eius pariatur quibusdam!</p>
    </>
    </>
    </>;
}

export default Article;