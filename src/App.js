import './App.css';
import pic1 from './images/pic1.png';
import pic2 from './images/pic2.png';
import pic3 from './images/pic3.png';
import pic4 from './images/pic4.png';
import pic5 from './images/pic5.png';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>HOW TO CREATE AND USE CHATGPT KEYS?</h1>
      <hr/>
      <br/>
      <div style={{ width: '80%', padding: '10px', margin: 'auto' , backgroundColor: 'white', borderRadius: '20px', marginBottom : '20px'}}>
        <p>The first step to getting ChatGPT up and running on your website is to obtain API keys from OpenAI. These keys serve as the bridge between your site and the ChatGPT service, enabling communication and data exchange, which is why they're necessary.</p>
        <p>To get your keys, here's what you'll need to do.</p>

        <h3>1. Create account on OpenAI.</h3>
        <p>Create an account on the <a href="https://openai.com/">Open AI website.</a></p>
        <img style={{ width: '95%' }} src={pic1} alt="Home page of OpenAI" />

        <h3>2. Navigate to OpenAI API Dashboard.</h3>
        <p>After logging in, navigate to the OpenAI API dashboard. You can find this under the "API" section in your account.</p>
        <img style={{ width: '95%' }} src={pic2} alt="API Dashboard of OpenAI" />

        <h3>3. Generate a new API key.</h3>
        <p>On the API dashboard, go to API keys &gt; &gt; Create new secret key. Provide a name to your app then click on "Create Secret key".</p>
        <img style={{ width: '95%' }} src={pic3} alt="Make key" />

        <h3>4. Store your API Key safely!</h3>
        <p>Securely store your API key. You're going to need it for the ChatGPT integration process.</p>
        <img style={{ width: '95%' }} src={pic4} alt="Store key" />

        <h3>5. Key is now visible on Dashboard.</h3>
        <p>Your key is successfully made and can be viewed on your OpenAI API Dashboard.</p>
        <img style={{ width: '95%' }} src={pic5} alt="View key" />
      </div>
    </div>
  );
}

export default App;

