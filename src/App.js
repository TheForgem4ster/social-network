import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
        <header className='header'>
          <img src='https://avatanplus.com/files/resources/mid/592133aed4a1815c29b1e317.png'/>
        </header>
        <nav className='nav'>
          <div>
            <a>Profile</a>
          </div>
          <div>
            <a>Message</a>
          </div>
          <div>
            <a>New</a>
          </div>
          <div>
            <a>Music</a>
          </div>
          <div>
            <a>Setting</a>
          </div>
        </nav>
        <main className='content'>
          <div>
            <img src='http://pics.livejournal.com/anchiktigra/pic/001dgz1h'/>
          </div>
          <div>
            <img src='https://st2.depositphotos.com/1040719/8331/i/600/depositphotos_83315530-stock-photo-polar-bear-shaking-his-head.jpg'/>
          </div>
          <div>
            avatar + description
          </div>
          <div>
            post
            <div>
              new post
            </div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </main>
    </div>
  );
}

export default App;
