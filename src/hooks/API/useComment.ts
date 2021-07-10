import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListComments } from './API';
import { CommentType } from '../interface';

interface useCommetProps {
  postId: number | string;
}
export const useComment = ({ postId }: useCommetProps) => {
  const [comment, setCommet] = useState<CommentType[]>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    const cancelToken = axios.CancelToken.source();
    const getComment = async () => {
      const comments = await ListComments(cancelToken.token, postId);
      console.log(comments);
      setCommet(comments);
      setLoading(false);
    };
    getComment();
    return () => cancelToken.cancel();
  }, [postId]);
  return {
    comments: comment,
    loading: loading,
  };
};
