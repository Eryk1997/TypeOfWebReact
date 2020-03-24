import React, { Component } from "react";
import { placeInfo, reviews, detailInfo, news } from "../data";

const InfoConText = React.createContext();

class InfoProvider extends Component {
  state = {
    info: placeInfo,
    review: reviews,
    detailInfo: detailInfo,
    news: news
  };

  getItem = id => {
    const item = this.state.info.find(item => item.id === id);
    return item;
  };

  handleDetail = id => {
    const item = this.getItem(id);
    this.setState(() => {
      return { detailInfo: item };
    });
  };

  render() {
    return (
      <InfoConText.Provider
        value={{
          info: this.state.info,
          review: this.state.review,
          detailInfo: this.state.detailInfo,
          news: this.state.news,
          maps: this.state.maps,
          headerTitle: this.state.headerTitle,
          headerSubTitle: this.state.headerSubTitle,
          headerText: this.state.headerText,
          name: this.state.name,
          avatar: this.state.avatar,
          comment: this.state.comment,
          handleDetail: this.handleDetail
        }}
      >
        {this.props.children}
      </InfoConText.Provider>
    );
  }
}

const InfoConsumer = InfoConText.Consumer;

export { InfoProvider, InfoConsumer };
