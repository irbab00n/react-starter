import React from 'react';
/* REDUX */
import { connect } from 'react-redux';
import dispatchMappedActions from '../../../redux/dispatchMappedActions';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false
    };
    this.buildTagsList = this.buildTagsList.bind(this);
    this.toggleShowList = this.toggleShowList.bind(this);
  }

  buildTagsList() {
    const { storage } = this.props.views.blog.tags;

    return storage.map(tag => {
      return (
        <li key={`tag-${tag.slug}`}>{tag.name}</li>
      );
    });
  }

  toggleShowList() {
    this.setState({
      showList: !this.state.showList
    });
  }

  render() {
    const { showList } = this.state;

    return (

      <div className="inner-wrapper tags-wrapper">
        <h4>See Posts Tagged With</h4>
        <div className="dropdown-wrapper" tabIndex="0" onBlur={showList ? this.toggleShowList : () => {}}>
          <div className="selection-arrow-wrapper" onClick={this.toggleShowList}>
            <span className="label">Tag</span>
            <i className={`fas fa-angle-down arrow ${showList ? 'show' : ''}`}></i>
          </div>
          <ul className={showList ? 'show' : ''}>
            {
              showList ?
                this.buildTagsList() :
                null
            }
          </ul>
        </div>
      </div>

    );

  }
}

const ConnectedTags = connect(
  state => state,
  dispatchMappedActions
)(Tags);

export default ConnectedTags;