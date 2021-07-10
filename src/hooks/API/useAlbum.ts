import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListAlbums } from './API';
import { AlbumType } from '../interface';

interface useAlbumProps {
  userId?: number | string;
}
export const useAlbum = ({ userId }: useAlbumProps) => {
  const [album, setAlbum] = useState<AlbumType[]>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    const cancelToken = axios.CancelToken.source();
    const getAlbum = async () => {
      const albums = await ListAlbums(cancelToken.token, userId);
      console.log(albums);
      setAlbum(albums);
      setLoading(false);
    };
    getAlbum();
    return () => cancelToken.cancel();
  }, [userId]);
  return {
    albums: album,
    loading: loading,
  };
};
