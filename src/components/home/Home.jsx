import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase";
import "./Home.css";

function Home() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchPosts();
  }, [setPostData]);

  const deleteHandle = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postData.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <div className="nameAndDeleteButton">
              <h3>@ {post.author.username}</h3>
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={() => deleteHandle(post.id)}>削除</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
