import { filter, findIndex } from 'lodash';

const users = [
  {
      id: 1,
      name: 'Telles',
      email: 'telles@linte.com',
      photo: 'www.photo.com/telles',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      id: 2,
      name: 'Martins',
      email: 'martins@linte.com',
      photo: 'www.photo.com/martins',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    id: 3,
    name: 'Gui',
    email: 'gui@linte.com',
    photo: 'www.photo.com/gui',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    name: 'Antonio',
    email: 'antonio@linte.com',
    photo: 'www.photo.com/antonio',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

const posts = [
  {
    id: 1,
    title: 'Aprendendo Graphql',
    content: 'Apresentação do graphql para nosso time!',
    photo: 'photo do graphlq',
    createdAt: new Date(),
    updated: new Date(),
    author_id: 2
  },
  {
    id: 2,
    title: 'Aprendendo Jest',
    content: 'Apresentação de Jest para nosso time!',
    photo: 'photo do jest',
    createdAt: new Date(),
    updated: new Date(),
    author_id: 2
  }
]

const comments = [
  {
    id: 1,
    comment: 'graphql é melhor que rest',
    createdAt: new Date(),
    updatedAt: new Date(),
    user_id: 2,
    post_id: 1 
  },
  {
    id: 2,
    comment: 'com testes tudo fica melhor',
    createdAt: new Date(),
    updatedAt: new Date(),
    user_id: 2,
    post_id: 2 
  }
]

/* USER */
export const getAllUsers = () => {
  console.log('getAllUsers');
  return users;
}

export const getAllUsersByIds = (ids) => {
  console.log('getAllUsersByIds');
  return users.filter(user => ids.find(id => id == user.id));
}

export const getUser = (id) => {
  console.log('getUser');
  return users.find(user => user.id == id);
}

export const createUser = (user) => {
  users.push(user);
}

export const updateUser = (id, user) => {
  const index = findIndex(users, function(o) { return o.id == id; });
  users[index] = Object.assign({id}, user);;
  return users[index];
}

export const deleteUser = (id) => {
  const index = findIndex(users, function(o) { return o.id == id; });
  delete users[index];
}


/* POST */
export const getAllPosts = () => {
  console.log('getAllPosts');
  return posts;
}

export const getAllPostsByIds = (ids) => {
  console.log('getAllPostsByIds');
  return posts.filter(post => ids.find(id => id == post.id));
}

export const getPost = (id) => {
  console.log('getPost');
  return posts.find(post => post.id == id);
}

export const getPostsByUserId = (id: number) => {
  return filter(posts, (item) => item.author_id === id);
}

export const createPost = (post) => {
  posts.push(post);
}

export const updatePost = (id, post) => {
  const index = findIndex(posts, function(o) { return o.id == id; });
  posts[index] = Object.assign({id}, post);;
  return posts[index];
}

export const deletePost = (id) => {
  const index = findIndex(posts, function(o) { return o.id == id; });
  delete posts[index];
}

/* COMMENTS */
export const getAllComments = () => posts;


export const getCommentsByPost = (id: number) => {
  return filter(comments, (item) => item.post_id == id);
}

export const createComment = (comment) => {
  comments.push(comment);
}

export const updateComment = (id, comment) => {
  const index = findIndex(comments, function(o) { return o.id == id; });
  comments[index] = Object.assign({id}, comment);;
  return comments[index];
}

export const deleteComment = (id) => {
  const index = findIndex(comments, function(o) { return o.id == id; });
  delete comments[index];
}