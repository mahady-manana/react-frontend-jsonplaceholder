import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListPhoto } from './API';
import { PhotoType } from '../interface';

interface usePhotoProps {
  albumId?: number | string;
}
export const usePhoto = ({ albumId }: usePhotoProps) => {
  const [photo, setPhoto] = useState<PhotoType[]>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    const cancelToken = axios.CancelToken.source();
    const getPhoto = async () => {
      const photos = await ListPhoto(cancelToken.token, albumId);
      console.log(photos);
      setPhoto(photos);
      setLoading(false);
    };
    getPhoto();
    return () => cancelToken.cancel();
  }, [albumId]);
  return {
    photos: photo,
    loading: loading,
  };
};
