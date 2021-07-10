import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListPosts } from './API';
import { PostType } from '../interface';

interface usePostProps {
  userId?: number | string;
}
export const usePost = ({ userId }: usePostProps) => {
  const [state, setState] = useState<PostType[]>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    const cancelToken = axios.CancelToken.source();
    const getPost = async () => {
      const posts = await ListPosts(cancelToken.token, userId);
      console.log(posts);
      setState(posts);
      setLoading(false);
    };
    getPost();
    return () => cancelToken.cancel();
  }, [userId]);
  return {
    posts: state,
    loading: loading,
  };
};
