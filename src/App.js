import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getStorageTheme = () => {
  return localStorage.getItem('theme') ?? 'light-theme';
}

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toogleTheme = () => {
    setTheme(prevTheme => {
      return prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    })
  }

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>overreacted</h1>
          <button className='btn' onClick={toogleTheme}>
            toogle
          </button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((article) => {
          return <Article key={article.id} {...article} />;
        })}
      </section>
    </main>
  );
}

export default App
