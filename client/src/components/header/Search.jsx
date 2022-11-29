import React from "react";
import {InputBase, List, ListItem} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

import {useSelector , useDispatch} from 'react-redux';
import {getProducts} from '../../redux/actions/productActions'
import { useEffect } from "react";
import {Link} from 'react-router-dom'

const Search = () => {

  const [text , setText] = useState('')

  const {products} = useSelector(state => state.getProducts)

  const dispatch = useDispatch()

  useEffect(() => (
    dispatch(getProducts)
  ),[dispatch])

  const gettext = (text) => {
    setText(text)
  }
  console.log(text);

  return (
    <div id="search_div">
      <InputBase  id="search"  placeholder="Search for products, brands and more" onChange={(e)=>gettext(e.target.value)}  value={text}/>
      <div id="searchicon">
        <SearchIcon />
      </div>

          {

              text &&

              <List id='search-list'>
                {
                   products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link to={`/product/${product.id}`} onClick={() => setText('')} style={{textDecoration:'none' , color:'inherit'}}>
                      {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }
              </List>

          }
      
    </div>
  );
};

export default Search;
