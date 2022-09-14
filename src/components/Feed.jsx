import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import Loader from './common/Loader';
import PulseLoader from './common/PulseLoader';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [pins, setPins] = useState();
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      setLoading(true);

      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);
  const ideaName = categoryId || 'new';
  if (loading) {
    return (
      // <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
      <PulseLoader />
    );
  }
 
  return (
    <div>
      {pins?.length ? (
        <MasonryLayout pins={pins} />
      ): <div className='h-full w-full flex items-center justify-center mt-20'><p className='text-center text-3xl py-8 text-gray-400'>{`No ${ideaName} ideas found!`}</p></div>}
    </div>
  );
};

export default Feed;
