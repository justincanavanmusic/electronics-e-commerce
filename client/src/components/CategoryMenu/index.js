import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import './categoryMenu.css'
import '../../index.css'

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();
  console.log(state)

  const { categories } = state;


  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  console.log(categoryData);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div className='container'>
      <div className='row'>
        <h2 className="mt-3 gamer-font" id='c-cat'>Categories</h2>


        <button id="add-btn" type="button" className="cat-btn btn mt-2"
          onClick={() => {
            handleClick(window.location.reload());
          }}
        >
          <strong>View All</strong>
        </button>
        {categories.map((oneCategory) => (
          <div className='d-flex justify-content-evenly col-6 col-sm-4 col-md-4 col-lg-2'>


            <button id="add-btn" type="button" className="cat-btn btn mt-2"
              key={oneCategory._id}
              onClick={() => {
                handleClick(oneCategory._id);
              }}
            >
              {oneCategory.name}
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
