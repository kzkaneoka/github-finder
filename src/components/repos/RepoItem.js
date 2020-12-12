import React from 'react';
import ProtoTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = { repo: ProtoTypes.object.isRequired };

export default RepoItem;
