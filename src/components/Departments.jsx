import React from 'react'
import classes from '../assets/scss/Departments.module.scss'
import Card from '@material-ui/core/Card';
import { NavLink } from 'react-router-dom';
import { Grid } from '@material-ui/core';

export default function Departments(props) {

  const { category_id = 0, category_name, products_categories = [] } = props;

  return (
    <Card className={classes.dCard} variant="outlined">
      <div className={classes.categoryImage} style={{ backgroundImage: `url(${"https://thehoop.in/admin/category_image/Green-Vegetables.jpg"})` }} ></div>
      <Grid container>
        <Grid item>
          <h3>{category_name}</h3>
        </Grid>
        <Grid item className={classes.quickLinks}>
          {
            products_categories.map((o, index) =>
              <NavLink className={classes.link} to={`/store/thehoop/departments/${category_id}/${o.id}`} key={index}>{o.name}</NavLink>
            )
          }
          {products_categories.length >= 3 && <NavLink className={`${classes.link} ${classes.viewMore}`} to={`/store/thehoop/departments/${category_id}`}>View more</NavLink>}
        </Grid>
      </Grid>
    </Card >
  )
}
