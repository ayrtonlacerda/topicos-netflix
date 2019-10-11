import React, { Component } from 'react';
import './styles.css';
import { Card } from './styles';


class Carousel extends Component {
  componentDidMount() {
    console.log('Carousel props', this.props);
  }

  right = (w) => {
    w.addEventListener('load', function () {
      const btn_left = document.getElementById('btn-left'),
        btn_right = document.getElementById('btn-right'),
        content = document.getElementById('carousel-row');
      const content_scroll_width = content.scrollWidth;
      let content_scoll_left = content.scrollLeft;
      btn_right.addEventListener('click', () => {
        content_scoll_left += 100;
        if (content_scoll_left >= content_scroll_width) { content_scoll_left = content_scroll_width; }
        content.scrollLeft = content_scoll_left;
      });
      btn_left.addEventListener('click', () => {
        content_scoll_left -= 100;
        if (content_scoll_left <= 0) {
          content_scoll_left = 0;
        }
        content.scrollLeft = content_scoll_left;
      });
    });
  };

  render() {
    return (
      <div class="carousel">
        <button onClick={() => this.right(window)}>scroll</button>
        <div class="carousel-row">
          <div class="carousel-tile"><Card /></div>
          <div class="carousel-tile"><Card /></div>
          <div class="carousel-tile"><Card /></div>
          <div class="carousel-tile"><Card /></div>
          <div class="carousel-tile"><Card /></div>

        </div>

      </div>

    )
  }
}
export default Carousel;
