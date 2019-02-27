import { filter } from 'lodash';

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
    createdAt: new Date().toDateString,
    updated: new Date().toDateString,
    author_id: 2
  }
]

export const getAllUsers = () => users;

export const getAllPosts = () => posts;

export const getPostsByUserId = (id: number) => {
  return filter(posts, (item) => item.author_id === id);
}

export const createUser = (user) => {

}