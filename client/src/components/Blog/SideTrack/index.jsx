import React from 'react';

import Categories from './Categories';
import MostRecent from './MostRecent';
import Tags from './Tags';

const BlogSideTrack = (props) => (
  <div id="blog-side-track">
    <MostRecent />
    <Categories />
    <Tags />
  </div>
);

export default BlogSideTrack;