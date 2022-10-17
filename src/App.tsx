
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostProps } from './components/Post';

import styles from './App.module.css';

import './global.css';

interface Post extends PostProps {
   id: number;
}

const posts:Post[] = [
   {
      id: 1,
      author: {
         avatarUrl: 'https://github.com/Rafeso.png',
         name: "Rafael Feitosa",
         role: "Web Developer",
      },
      content: [
         { type: 'paragraph', content: 'Fala galeraa 👋'},
         { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu github. É um projeto que fiz no Ignite Lab,evento da Rocketseat. O nome do projeto é Code Lab 🚀'},
         { type: 'link', content: '👉 https://code-lab.vercel.app/'},        
      ],
      publishedAt: new Date('2022-10-20 20:00:00')
   },

   {
      id: 2,
      author: {
         avatarUrl: 'https://github.com/Maykbrito.png',
         name: 'Mayk Brito',
         role: 'Educator',
      },
      content: [
         { type: 'paragraph', content: 'Fala galeraa 👋'},
         { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return,evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
         { type: 'link', content: '👉 Mayk/doctorcare'},        
      ],
      publishedAt: new Date('2022-10-5 10:00:00'),
   },
];


export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
         <Sidebar />
         <main>
            {posts.map(post => {
               return (
               <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
               />
               )
            })}
         </main>
         
      </div>
    </div>
  )
}