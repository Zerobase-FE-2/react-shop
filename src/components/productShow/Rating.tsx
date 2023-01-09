import React from 'react';

type Rating = {
  rate?: number;
  count?: number;
} & typeof defaultProps;

const defaultProps = {
  rate: 0,
  count: 0,
};

export default function Rating({ rate, count }: Rating) {
  const stars = Array.from(Array(10));
  return (
    <div className="mt-3 flex items-center">
      <div className="rating rating-half">
        {stars.map(($elm, index) => {
          return (
            <input
              type="radio"
              name="rating-10"
              key={`rating${index}`}
              className={`mask mask-star-2 cursor-default bg-yellow-400 ${
                index % 2 == 0 ? 'mask-half-1' : 'mask-half-2'
              }`}
              disabled
              checked={index + 0.5 <= rate * 2}
            />
          );
        })}
         
      </div>
      <div className="ml-2">
        {rate}/{count} 참여
      </div>
    </div>
  );
}
