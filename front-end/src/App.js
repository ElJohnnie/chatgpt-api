import './styles/app.css';
import './styles/reset.css';
import { useState } from 'react';

import { chatRequest } from './gateways/api'
import SideMenu from './components/SideMenu/Sidemenu'
import ChatMessage from './components/ChatMessage/ChatMessage'
import Recognition from './components/Buttons/Recognition/Recognition';

function App() {

  const [input, setInput] = useState("")
  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message:"Como posso te ajudar hoje?"
  }])


  async function handleSubmit(e) {
    e.preventDefault();

    let response = await chatRequest({prompt: input})

    response = response.data.split('\n')
    .map(line => <p>{line}</p>);

    setChatLog([...chatLog, {
      user: 'me', 
      message: `${input}`
    },{
      user: 'gpt', 
      message: response
    }])
    setInput("")
  }

  return (
    <div className='App'>

      <SideMenu></SideMenu>

      <section className='chatbox'>

          <div className='chat-log'>
            {chatLog.map((message, index)=>(
              <ChatMessage key={index} message={message} />
            ))}
          </div>

          <div className='chat-input-holder'>
            <form class="chat-form-area" onSubmit={handleSubmit}>
              <input
                rows='1'
                className='chat-input-textarea'
                value={input}
                onChange={e =>setInput(e.target.value)}
              >
              </input>
            </form>
            <Recognition />
          </div>
      </section>

    </div>
  );
}

export default App;
