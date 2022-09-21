/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/item/itemReducer';

function NewItemPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  function onSubmit({
    name, description, range, photo,
  }) {
    return dispatch(
      addItem({
        name,
        description,
        range,
        photo,
      }),
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">
          Name:
          <input
            className="formitem"
            type="text"
            {...register('name')}
            id="name"
            name="name"
            required
            minLength="2"
            maxLength="30"
          />
        </label>
      </div>

      <div>
        <label htmlFor="description">
          Description:
          <input
            className="formitem"
            type="text"
            {...register('description')}
            id="description"
            name="description"
            required
            minLength="2"
            maxLength="200"
          />
        </label>
      </div>

      <div>
        <label htmlFor="range">
          Range:
          <input
            className="formitem"
            type="text"
            {...register('range')}
            id="range"
            name="range"
            required
            minLength="2"
            maxLength="200"
          />
        </label>
      </div>

      <div>
        <label htmlFor="photo">
          Photo:
          <input
            className="formitem"
            type="text"
            {...register('photo')}
            id="photo"
            name="photo"
            required
            minLength="2"
            maxLength="200"
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default NewItemPage;
