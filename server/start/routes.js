'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.group( () => {
  Route.post('auth/register', 'UserController.register');
  Route.post('auth/login', 'UserController.login');

  Route.get('news', 'NewsController.index').middleware('auth');
  Route.post('news', 'NewsController.create').middleware('auth');
  Route.delete('news/:id', 'NewsController.destroy').middleware('auth');
  Route.patch('news/:id', 'NewsController.update').middleware('auth');


  Route.get('news/:id/comments', 'CommentController.index').middleware('auth');
  Route.post('news/:id/comments', 'CommentController.create').middleware('auth');

  Route.delete('comments/:id', 'CommentController.destroy').middleware('auth');
  Route.patch('comments/:id', 'CommentController.update').middleware('auth');

})
.prefix('api');

