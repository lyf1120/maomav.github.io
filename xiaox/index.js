(function createScript() {
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement('script');
  script.setAttribute('src', 'https://re2js.github.io/dore.js');
  script.setAttribute('crossorigin', 'anonymous');
  head.appendChild(script);
})();

const urls = [
  'https://xhydh2.top',
  'https://www.xhydh2.top', 
];
const delaySeconds = 3;

class App extends React.Component {
  urlSuffix = '';
  state = {
    delaySeconds: delaySeconds,
    url: urls[Math.floor(Math.random() * urls.length)],
  };

  constructor() {
    super();
    const hash =window.location.hash.replace(/^#/, '' );
    this.urlSuffix = hash + window.location.search;
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.delayRedirect();
    }, 0);
  };

  delayRedirect = () => {
    if (this.state.delaySeconds > 0) {
      setTimeout(() => {
        this.setState({
          delaySeconds: this.state.delaySeconds - 1,
        }, () => {
          this.delayRedirect();
        });
      }, 1000);
    } else {
      this.redirect();
    }
  };

  redirect = () => {
    window.location.href = this.paramedUrl(this.state.url);
  };

  paramedUrl = (url) => {
    return url + this.urlSuffix;
  };

  render () {
    return (
      <div style={{
        textAlign: 'center',
        marginTop: '50px',
      }}>
        <div style={{
          fontSize: '20px',
          marginBottom: '40px',
        }}>
          <span style={{
            backgroundColor: '#f33',
            color: '#FFFFFF',
            padding: '2px 7px',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}>小黄鸭网址导航</span>
          <span></span>
        </div>
        <div style={{
          marginBottom: '15px',
        }}>正在加载，请稍候（{this.state.delaySeconds}）...</div>
      
        <div>找不到最新地址，请发送邮件baidu8869@gmail.com</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

