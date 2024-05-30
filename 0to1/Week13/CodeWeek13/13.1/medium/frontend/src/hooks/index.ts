import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

interface Blogs {
  "id": string,
  "title": string,
  "content": string,
  "author": {
      "name": string,
  }
}

interface Blog {
  "title": string,
  "content": string,
  "author": {
    name: string
  }
}


export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blogs[]>([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
      headers: {
        "Authorization": localStorage.getItem("Authorization")
      }
    })
      .then(res => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return { loading, blogs };
}

export const useBlog = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/id/${id}`, {
      headers: {
        "Authorization": localStorage.getItem("Authorization")
      }
    })
      .then(res => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return { loading, blog };
}