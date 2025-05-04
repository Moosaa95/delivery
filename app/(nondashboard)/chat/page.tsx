import { useState, useEffect, useRef } from 'react';

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket(`ws://localhost:8000/ws/chat/public/`);
        
        ws.current.onmessage = (e) => {
            const data = JSON.parse(e.data);
            setMessages(prev => [...prev, {
                content: data.message,
                isAdmin: data.is_admin,
                timestamp: new Date()
            }]);
        };

        return () => ws.current.close();
    }, []);

    const sendMessage = () => {
        if (newMessage.trim()) {
            ws.current.send(JSON.stringify({
                message: newMessage,
                room: 'public'
            }));
            setNewMessage('');
        }
    };

    return (
        <div className="fixed bottom-4 right-4">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-500 text-white p-4 rounded-full shadow-lg"
            >
                {isOpen ? '×' : 'Chat'}
            </button>
            
            {isOpen && (
                <div className="bg-white w-80 h-96 shadow-xl rounded-t-lg mt-2 flex flex-col">
                    <div className="bg-gray-100 p-4 rounded-t-lg">
                        <h3 className="font-bold">Customer Support</h3>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-4">
                        {messages.map((msg, i) => (
                            <div key={i} className={`mb-4 ${msg.isAdmin ? 'text-right' : 'text-left'}`}>
                                <div className={`inline-block p-2 rounded-lg ${msg.isAdmin ? 
                                    'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="border-t p-4">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                                className="flex-1 border rounded p-2"
                                placeholder="Type your message..."
                            />
                            <button
                                onClick={sendMessage}
                                className="bg-blue-500 text-white px-4 rounded"
                            >
                                Send
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            Admin responses may take a few minutes
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBox;