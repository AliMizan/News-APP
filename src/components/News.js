import React, { Component } from 'react'
import Item from './Item'

import Spinner from './Spinner'
import PropTypes from 'prop-types'

export default class News extends Component {

  static defaultProps ={
    country: 'in',
    pageSize: 8,
    category: 'general',
  }

  static propTypes={
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category: PropTypes.string,
  }
  caps = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  constructor(props){
    super(props);
    this.state = {
      articles:[],
      loading:false,
      page:1
    }
    document.title = `${this.caps(this.props.category)} - News`;
  }

  async componentDidMount(){  
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d4fcf61717f7442c982811c330b8b73c&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url);
    let p = await data.json();
    this.setState({articles: p.articles,
      totalResults: p.totalResults,
      loading:false

    })
  }
  handleNextClick = async()=>{
    console.log("next")
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/(this.props.pageSize)))){
      this.setState({loading: true})

    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d4fcf61717f7442c982811c330b8b73c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let p = await data.json();
    this.setState({
      page:this.state.page+1,
      articles: p.articles,
      loading:false

    })
    }  

  }
  handlePrevClick=async()=>{
    console.log("prev")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d4fcf61717f7442c982811c330b8b73c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let p = await data.json();
    this.setState({
      page:this.state.page - 1,
      articles: p.articles,
      loading:false


    })


  }   
   
  render() {
    return (
        <>
      <div className="container my-4">
        <h1 className='text-center' style={{margin: '35px 0px'}}>NEW-Neews mizan  : {this.caps(this.props.category)}</h1>
        <div className="text-center">
          {this.state.loading && <Spinner/>}
        </div>
        <div className="row">
        {!this.state.loading  && this.state.articles.map((element)=>{
          return  <div className="col-md-4" key={element.url}>
          <Item title={element.title?element.title.slice(0,45):""} author={element.author} publishedAt={element.publishedAt} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>
        })}
        <div className="container d-flex justify-content-between my-4">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/(this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          

        </div>
           
            
      
      </div>
      </div>
      </>
      
    )
  }
}
