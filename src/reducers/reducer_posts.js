import _ from 'lodash';
import { FETCH_POSTS } from '../actions';
import { FETCH_POST } from '../actions';

export default function(state = {}, action){
	switch (action.type){
		case FETCH_POSTS:
		// console.log('posts reducer payload', action.payload);
		// console.log('posts reducer data', action.payload.data);
			return _.mapKeys(action.payload.data, 'id');
		case FETCH_POST:

			return {...state, [action.payload.data.id]: action.payload.data};
		default:
			return state;
	}


}